// Renderiza uma edição do MVRIA news em PNGs 1080×1350 (um por slide).
// Uso: npm run render -- templates/mvria-news/edicoes/AAAA-MM-DD.dc.html
// Saída: templates/mvria-news/edicoes/AAAA-MM-DD/slide-01.png … slide-07.png
//
// React, Babel e as fontes vêm de node_modules (a rede do ambiente bloqueia
// unpkg.com e o Chromium não confia no proxy para fonts.googleapis.com).
import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = process.argv[2];
if (!input) {
  console.error('Uso: npm run render -- <edicao.dc.html>');
  process.exit(1);
}
const page = path.resolve(input);
const outDir = page.replace(/\.dc\.html$|\.html$/, '');
fs.mkdirSync(outDir, { recursive: true });

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2' };

const CDN = {
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js': 'node_modules/react/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js': 'node_modules/react-dom/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js': 'node_modules/@babel/standalone/babel.min.js',
};

function fontCss(base) {
  const parts = [
    ['@fontsource-variable/playfair-display', ['wght.css', 'wght-italic.css'], ["'Playfair Display Variable'", "'Playfair Display'"]],
    ['@fontsource/epilogue', ['300.css', '400.css', '500.css', '600.css']],
    ['@fontsource/pinyon-script', ['400.css']],
  ];
  let css = '';
  for (const [pkg, files, rename] of parts) {
    for (const f of files) {
      let c = fs.readFileSync(path.join(root, 'node_modules', pkg, f), 'utf8');
      c = c.replaceAll('url(./files/', `url(${base}/node_modules/${pkg}/files/`);
      if (rename) c = c.replaceAll(rename[0], rename[1]);
      css += c + '\n';
    }
  }
  return css;
}

const server = http.createServer((req, res) => {
  const file = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  if (!file.startsWith(root)) { res.statusCode = 403; return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.statusCode = 404; return res.end(); }
    res.setHeader('content-type', MIME[path.extname(file).toLowerCase()] || 'application/octet-stream');
    res.end(data);
  });
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 1500 }, deviceScaleFactor: 1 });
await ctx.route('**/*', route => {
  const url = route.request().url();
  if (url.startsWith(base)) return route.continue();
  if (CDN[url]) return route.fulfill({ path: path.join(root, CDN[url]), contentType: 'text/javascript' });
  if (url.startsWith('https://fonts.googleapis.com/')) return route.fulfill({ body: fontCss(base), contentType: 'text/css' });
  return route.abort();
});

const tab = await ctx.newPage();
const errors = [];
tab.on('pageerror', e => errors.push(e.message));
tab.on('console', m => { if (m.type() === 'error' && !/404|ERR_FAILED/.test(m.text())) errors.push(m.text()); });

await tab.goto(`${base}/${path.relative(root, page).split(path.sep).join('/')}`, { waitUntil: 'networkidle' });
await tab.addStyleTag({ content: 'div[style*="zoom"]{zoom:1!important;padding:0!important;gap:0!important;max-width:none!important}' });
await tab.waitForSelector('section[data-screen-label]', { state: 'visible', timeout: 20000 });
await tab.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map(i => i.complete ? null : new Promise(r => { i.onload = i.onerror = r; })));
});
await tab.waitForTimeout(800);

const report = await tab.evaluate(() => {
  const missingFonts = ['Playfair Display', 'Epilogue', 'Pinyon Script'].filter(f => !document.fonts.check(`40px "${f}"`));
  const slots = [...document.querySelectorAll('image-slot')];
  const emptySlots = slots.filter(s => !s.getAttribute('src')).map(s => s.id);
  const brokenImgs = [...document.querySelectorAll('img')].filter(i => !i.naturalWidth).map(i => i.getAttribute('src'));
  const overflow = [...document.querySelectorAll('section[data-screen-label]')]
    .filter(s => [...s.querySelectorAll('*')].some(el => { const r = el.getBoundingClientRect(), b = s.getBoundingClientRect(); return r.height > 0 && r.bottom > b.bottom + 1; }))
    .map(s => s.dataset.screenLabel);
  return { missingFonts, emptySlots, brokenImgs, overflow };
});

const sections = await tab.$$('section[data-screen-label]');
for (const [i, s] of sections.entries()) {
  const file = path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
  await s.screenshot({ path: file });
  console.log('ok', path.relative(root, file));
}
await browser.close();
server.close();

const problems = [];
if (report.missingFonts.length) problems.push(`fontes não carregadas: ${report.missingFonts.join(', ')}`);
if (report.emptySlots.length) problems.push(`image-slot sem src: ${report.emptySlots.join(', ')}`);
if (report.brokenImgs.length) problems.push(`imagens quebradas: ${report.brokenImgs.join(', ')}`);
if (report.overflow.length) problems.push(`texto passando do slide: ${report.overflow.join(', ')}`);
if (errors.length) problems.push(`erros na página: ${errors.join(' | ')}`);
if (problems.length) {
  console.error('\nATENÇÃO:\n- ' + problems.join('\n- '));
  process.exit(2);
}
console.log(`\n${sections.length} slides em ${path.relative(root, outDir)}`);
