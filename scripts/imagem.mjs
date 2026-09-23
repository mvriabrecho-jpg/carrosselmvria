// Imagens para o MVRIA news.
//
//   npm run imagem -- buscar "Milan Fashion Week 2026 runway"
//       Lista fotos de licença livre no Wikimedia Commons (licença, autor, link).
//   npm run imagem -- baixar <url-da-imagem> <destino.jpg>   (qualquer site: notícia, Pinterest, Commons)
//       Baixa a foto (usa curl, que já passa pelo proxy do ambiente).
//   npm run imagem -- banco
//       Lista as fotos próprias em assets/banco-de-imagens (plano B).
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const UA = 'MVRIA-news/1.0 (carrossel semanal; contato via GitHub mvriabrecho-jpg/carrosselmvria)';
const [cmd, ...args] = process.argv.slice(2);

const curl = (url, extra = []) => execFileSync('curl', ['-sSfL', '--max-time', '60', '-A', UA, ...extra, url], { maxBuffer: 64 << 20 });
const semHtml = s => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

if (cmd === 'buscar') {
  const q = args.join(' ');
  if (!q) { console.error('Informe o termo de busca.'); process.exit(1); }
  const api = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({
    action: 'query', format: 'json', generator: 'search', gsrnamespace: '6', gsrlimit: '12',
    gsrsearch: `${q} filetype:bitmap`, prop: 'imageinfo', iiprop: 'url|size|extmetadata', iiurlwidth: '1600',
  }).forEach(([k, v]) => api.searchParams.set(k, v));
  let data;
  try {
    data = JSON.parse(curl(api.href).toString());
  } catch (e) {
    console.error('Não consegui acessar o Wikimedia Commons (rede bloqueada?). Use o banco de imagens: npm run imagem -- banco');
    process.exit(3);
  }
  const pages = Object.values(data.query?.pages || {}).sort((a, b) => a.index - b.index);
  const out = pages.map(p => {
    const ii = p.imageinfo?.[0] || {};
    const m = ii.extmetadata || {};
    return {
      titulo: p.title,
      largura: ii.width, altura: ii.height,
      licenca: m.LicenseShortName?.value,
      autor: semHtml(m.Artist?.value),
      data: semHtml(m.DateTimeOriginal?.value),
      descricao: semHtml(m.ImageDescription?.value).slice(0, 200),
      pagina: ii.descriptionurl,
      baixar: ii.thumburl || ii.url,
    };
  }).filter(i => i.baixar && /^(CC|Public domain|PD)/i.test(i.licenca || ''));
  console.log(JSON.stringify(out, null, 2));
} else if (cmd === 'baixar') {
  const [url, dest] = args;
  if (!url || !dest) { console.error('Uso: npm run imagem -- baixar <url> <destino>'); process.exit(1); }
  fs.mkdirSync(path.dirname(path.resolve(dest)), { recursive: true });
  curl(url, ['-o', path.resolve(dest), '-e', new URL(url).origin + '/']);
  console.log('ok', dest, fs.statSync(dest).size, 'bytes');
} else if (cmd === 'banco') {
  const dir = path.join(root, 'assets/banco-de-imagens');
  const fotos = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
  console.log(fotos.length ? fotos.map(f => path.join('assets/banco-de-imagens', f)).join('\n') : '(banco vazio)');
} else {
  console.error('Comandos: buscar <termo> | baixar <url> <destino> | banco');
  process.exit(1);
}
