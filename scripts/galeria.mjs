// Gera a página de entrega de uma edição (publicada como Artifact).
// Uso: npm run galeria -- templates/mvria-news/edicoes/AAAA-MM-DD
// Lê edicao.json e slide-*.png da pasta e escreve index.html ao lado deles.
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve(process.argv[2] || '');
if (!process.argv[2] || !fs.existsSync(path.join(dir, 'edicao.json'))) {
  console.error('Uso: npm run galeria -- <pasta da edição com edicao.json>');
  process.exit(1);
}
const ed = JSON.parse(fs.readFileSync(path.join(dir, 'edicao.json'), 'utf8'));
const slides = fs.readdirSync(dir).filter(f => /^slide-\d+\.png$/.test(f)).sort();
if (!slides.length) { console.error('Nenhum slide-*.png na pasta. Rode npm run render antes.'); process.exit(1); }

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nn = String(ed.numero).padStart(2, '0');
const link = f => /^https?:\/\//.test(f.url || '') ? `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.nome)}</a>` : esc(f.nome);

const html = `<title>MVRIA news nº ${nn}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Epilogue:wght@400;500&family=Pinyon+Script&display=swap">
<style>
:root{
  --ink:#141414;--ink-2:#3A3836;--ink-3:#6E6A66;--paper:#FFFFFF;--cream:#F6F1EA;--nude:#F3DDD0;
  --caramel:#9A6636;--line:#E6E1DA;--line-strong:#CFC8BE;--warn-bg:#F7EDCB;--warn:#86702A;
  --font-display:'Playfair Display','Didot','Times New Roman',serif;
  --font-body:'Epilogue','Helvetica Neue',Arial,sans-serif;
  --font-script:'Pinyon Script',cursive;
}
*{box-sizing:border-box}
body{background:var(--cream);color:var(--ink);font-family:var(--font-body);font-size:16px;line-height:1.6;margin:0}
.wrap{max-width:1180px;margin:0 auto;padding-inline:24px;padding-block:40px 72px;display:flex;flex-direction:column;gap:48px}
header{display:flex;flex-direction:column;gap:12px;border-top:4px solid var(--ink);padding-top:20px}
.mast{font-family:var(--font-display);font-weight:600;font-size:clamp(44px,8vw,72px);line-height:1;margin:0}
.mast span{font-family:var(--font-script);font-weight:400;color:var(--caramel);margin-left:.12em}
.meta{display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px 24px;border-block:1px solid var(--ink);padding-block:10px;font-size:12px;letter-spacing:.2em;text-transform:uppercase}
.overline{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--caramel);margin:0 0 14px}
.avisos{background:var(--warn-bg);color:var(--ink);padding:16px 20px;border-left:3px solid var(--warn)}
.avisos ul{margin:0;padding-left:18px}
.strip{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px}
.strip figure{margin:0;display:flex;flex-direction:column;gap:8px}
.strip img{width:100%;aspect-ratio:4/5;display:block;background:var(--paper);border:1px solid var(--line)}
.strip figcaption{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3);font-variant-numeric:tabular-nums}
.hint{font-size:14px;color:var(--ink-3);margin:12px 0 0}
.cols{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,2fr);gap:48px}
.legenda{font-family:var(--font-body);background:var(--paper);border:1px solid var(--line);padding:20px 22px;white-space:pre-wrap;font-size:15px;max-width:65ch;margin:0}
button{font:inherit;font-size:12px;letter-spacing:.14em;text-transform:uppercase;background:var(--ink);color:var(--paper);border:0;padding:12px 20px;cursor:pointer;margin-top:14px}
button:hover{background:#2B2A28}
button:focus-visible,a:focus-visible{outline:2px solid var(--caramel);outline-offset:2px}
ol,ul.lista{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:15px}
a{color:var(--ink);text-underline-offset:3px}
a:hover{color:var(--caramel)}
@media (max-width:720px){
  .cols{grid-template-columns:1fr;gap:40px}
  .strip{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:12px;margin-inline:-24px;padding-inline:24px;padding-bottom:8px}
  .strip figure{flex:0 0 82%;scroll-snap-align:center}
}
</style>
<div class="wrap">
  <header>
    <h1 class="mast">MVRIA<span>news</span></h1>
    <div class="meta"><span>Edição nº ${nn}</span><span>${esc(ed.periodo)}</span></div>
  </header>
  ${(ed.avisos || []).length ? `<section class="avisos" aria-label="Avisos"><p class="overline" style="color:var(--warn)">Confira antes de postar</p><ul>${ed.avisos.map(a => `<li>${esc(a)}</li>`).join('')}</ul></section>` : ''}
  <section aria-label="Slides">
    <p class="overline">${slides.length} slides · 1080 × 1350</p>
    <div class="strip">
      ${slides.map((s, i) => `<figure><img src="${s}" alt="Slide ${i + 1} do MVRIA news nº ${nn}" loading="${i < 3 ? 'eager' : 'lazy'}"><figcaption>${i + 1} / ${slides.length}</figcaption></figure>`).join('\n      ')}
    </div>
    <p class="hint">Para salvar no celular, toque e segure cada imagem. Os arquivos originais também ficam no GitHub, na pasta templates/mvria-news/edicoes/${esc(ed.domingo)}.</p>
  </section>
  <div class="cols">
    <section aria-label="Legenda">
      <p class="overline">Legenda para o post</p>
      <pre class="legenda" id="legenda">${esc(ed.legenda)}</pre>
      <button type="button" id="copiar">Copiar legenda</button>
    </section>
    <section aria-label="Fontes" style="display:flex;flex-direction:column;gap:36px">
      <div><p class="overline">Fontes</p><ol>${(ed.fontes || []).map(f => `<li>${link(f)}</li>`).join('')}</ol></div>
      ${(ed.creditosImagens || []).length ? `<div><p class="overline">Imagens</p><ul class="lista">${ed.creditosImagens.map(c => `<li>${link(c)}</li>`).join('')}</ul></div>` : ''}
    </section>
  </div>
</div>
<script>
document.getElementById('copiar').addEventListener('click', e => {
  const b = e.currentTarget, t = document.getElementById('legenda');
  const ok = () => { b.textContent = 'Legenda copiada'; setTimeout(() => b.textContent = 'Copiar legenda', 2000); };
  navigator.clipboard.writeText(t.textContent).then(ok, () => {
    const r = document.createRange(); r.selectNodeContents(t);
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    b.textContent = 'Selecionada: copie com Ctrl+C';
  });
});
</script>
`;
fs.writeFileSync(path.join(dir, 'index.html'), html);
console.log('ok', path.relative(process.cwd(), path.join(dir, 'index.html')));
console.log('files para o Artifact:', JSON.stringify(Object.fromEntries(slides.map(s => [s, path.relative(process.cwd(), path.join(dir, s))]))));
