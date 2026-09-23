// Cria a próxima edição do MVRIA news a partir do template.
// Uso: npm run nova-edicao [-- AAAA-MM-DD]   (domingo da edição; padrão: o domingo desta semana)
// Cria templates/mvria-news/edicoes/AAAA-MM-DD.dc.html, a pasta AAAA-MM-DD/imagens e AAAA-MM-DD/edicao.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tplDir = path.join(root, 'templates/mvria-news');
const config = JSON.parse(fs.readFileSync(path.join(root, 'mvria-news.config.json'), 'utf8'));

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const MES_CURTO = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const iso = d => d.toISOString().slice(0, 10);

// Data de hoje em Brasília (UTC-3), para a Rotina das 20:00 cair no domingo certo.
function hojeBrasilia() {
  const d = new Date(Date.now() - 3 * 3600e3);
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

let domingo;
if (process.argv[2]) {
  domingo = new Date(process.argv[2] + 'T00:00:00Z');
  if (isNaN(domingo) || domingo.getUTCDay() !== 0) {
    console.error('Informe um domingo no formato AAAA-MM-DD.');
    process.exit(1);
  }
} else {
  const hoje = hojeBrasilia();
  domingo = new Date(hoje.getTime() + ((7 - hoje.getUTCDay()) % 7) * 864e5);
}
const segunda = new Date(domingo.getTime() - 6 * 864e5);

const base = new Date(config.edicaoBase.domingo + 'T00:00:00Z');
const numero = config.edicaoBase.numero + Math.round((domingo - base) / (7 * 864e5));
const nn = String(numero).padStart(2, '0');

const periodo = segunda.getUTCMonth() === domingo.getUTCMonth()
  ? `${segunda.getUTCDate()} a ${domingo.getUTCDate()} de ${MESES[domingo.getUTCMonth()]} de ${domingo.getUTCFullYear()}`
  : `${segunda.getUTCDate()} de ${MESES[segunda.getUTCMonth()]} a ${domingo.getUTCDate()} de ${MESES[domingo.getUTCMonth()]} de ${domingo.getUTCFullYear()}`;
const cabecalho = `Nº ${nn} · ${MES_CURTO[domingo.getUTCMonth()]} ${domingo.getUTCFullYear()}`;

const dir = path.join(tplDir, 'edicoes');
const out = path.join(dir, `${iso(domingo)}.dc.html`);
const pasta = path.join(dir, iso(domingo));
if (fs.existsSync(out)) {
  console.error(`Já existe: ${path.relative(root, out)}`);
  process.exit(1);
}
fs.mkdirSync(path.join(pasta, 'imagens'), { recursive: true });

let html = fs.readFileSync(path.join(tplDir, 'MvriaNews.dc.html'), 'utf8');
html = html
  .replace(/^<!-- @template .*-->\n/m, '')
  .replaceAll('src="./support.js"', 'src="../support.js"')
  .replaceAll('src="./ds-base.js"', 'src="../ds-base.js"')
  .replaceAll('src="./image-slot.js"', 'src="../image-slot.js"')
  .replaceAll('../../assets/', '../../../assets/')
  // Número e datas; o conteúdo dos slides é reescrito a cada edição.
  .replaceAll('Edição nº 01', `Edição nº ${nn}`)
  .replaceAll('21 a 27 de setembro de 2026', periodo)
  .replaceAll('Nº 01 · Set 2026', cabecalho)
  .replaceAll('id="n1-', `id="n${numero}-`);
fs.writeFileSync(out, html);

fs.writeFileSync(path.join(pasta, 'edicao.json'), JSON.stringify({
  numero,
  domingo: iso(domingo),
  periodo,
  legenda: '',
  fontes: [],
  creditosImagens: [],
  avisos: [],
}, null, 2) + '\n');

console.log(JSON.stringify({ numero, periodo, cabecalho, arquivo: path.relative(root, out), pasta: path.relative(root, pasta) }, null, 2));
