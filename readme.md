# MVRIA Brechó — Design System

## Contexto
MVRIA Brechó é um brechó de curadoria, com loja física, venda online (catálogo via link na bio), consignação e um Grupo VIP de novidades. A marca quer transmitir **cheiro bom e limpeza** (principalmente pelos stories do Instagram), gerar **confiança** com a cliente e ser **minimalista**, usando preto, branco e tons pastel para alegrar a página. As roupas têm qualidade e acompanham tendências; a marca se posiciona como **consultora de moda**, não só como loja.

**Fontes recebidas:** descrição da empresa; logo (preto e branco, `assets/logo-original-*`); 3 prints do feed do Instagram (`assets/reference/`); nomes das fontes usadas no Canva (Agrandir, Playfair Display, Amoresa, New Icon Script). Não há site, Figma ou código. A loja online foi criada do zero; stories e carrosséis seguem o estilo visto no feed.

**Superfícies:** 1) Instagram — carrosséis (`templates/carrossel`), stories (`ui_kits/stories`), reels; 2) Loja online (vitrine) — `ui_kits/loja`.

## Content fundamentals
- **Idioma:** português do Brasil. Tom próximo, calmo e confiável — como uma amiga que entende de moda.
- **Pessoa:** a marca fala em "nós"/"a nossa comunidade" e trata o público por "você". O público é misto (moda feminina e masculina).
- **Exemplos reais do feed:** "Suas peças ainda podem viver novas histórias", "Moda também impacta o planeta. E é por isso que o secondhand importa.", "Como comprar no MVRIA Brechó", "O que é a consignação no MVRIA? Uma forma simples de dar um novo destino para peças que estão paradas no seu armário", "Sabia que o MVRIA tem Grupo VIP? … Link na bio!", "Feriado MVRIA — Peças selecionadas com até 70% OFF — Somente na loja física", "Looks para viver o Dia dos Namorados — Peças únicas • curadoria especial". Reels: "EMBALANDO SEU PEDIDO PT1 ASMR".
- **Temas recorrentes:** sustentabilidade/segunda mão, como comprar, consignação, bastidores (embalagem), datas comemorativas, peças em foto still.
- **Caixa:** frases em sentence case ("Adicionar à sacola"). Overlines, botões e rótulos em CAIXA ALTA com espaçamento largo (via CSS, não no texto).
- **Títulos** curtos, com uma parte em itálico serifado para dar leveza: "Alfaiataria leve *para dias amenos*".
- **Transparência:** sempre dizer estado da peça, medidas e como foi limpa. Ex.: "Lavada e higienizada antes do envio.", "Medidas tiradas com a peça esticada."
- **Consultoria:** textos de tendência explicam o porquê e como usar. Ex.: "Amarelo claro aparece em tricôs e camisas nas coleções de outono. Combine com bege e branco."
- **Escassez sem pressão:** "Peça única. Quando vende, não volta."
- **Emoji:** não usar na interface. Nos stories, no máximo um, e nunca como ícone.
- Preços: "R$ 129,90" (vírgula decimal).

## Visual foundations
- **Cores:** base preto (`--ink`) e branco. O feed atual usa tons quentes: `--cream` #F6F1EA, `--nude` #F3DDD0, `--bronze` #B8826A e **caramelo** `--caramel` #9A6636 como cor de destaque para títulos e script. Fotos de arara recebem um véu branco (`--photo-wash`, 72%) para o texto ficar legível. Os pastéis (rosé, sálvia, lavanda, manteiga, céu) são tons de apoio para fundos e badges — nunca em gradiente.
- **Tipografia (Canva):** **Playfair Display** (títulos, nomes de peça, "FERIADO MVRIA"), **Agrandir** (sans de texto e títulos leves — "Comprar", "Suas peças ainda podem…"), **Amoresa / New Icon Script** (script caligráfico em caramelo, só 1–2 palavras: "Moda", "Como", "O que", "no"). Combinação típica: script + Agrandir na mesma frase. Overlines 11px, tracking 0.22em.
- **Espaçamento:** base 4px; muito respiro. 24px de gutter, 96px entre seções, container 1240px.
- **Fundos:** planos. Sem texturas, padrões, ilustrações ou gradientes. Imagens de produto sobre fundo pastel ou linho, full-bleed nos blocos.
- **Imagens:** três tipos no feed — (1) still da peça sobre fundo branco, recortada; (2) close de etiqueta/textura (marcas como Dior, Burberry); (3) peça no cabide/arara em luz natural. Nada de filtros pesados. Reels com pessoas reais da equipe.
- **Cantos:** quadrados (0) em botões, inputs, cards e fotos. Pill só em chips (Tag) e botões de ícone.
- **Bordas:** hairline 1px `--line`; `--ink` para foco e itens selecionados.
- **Sombras:** muito suaves e raras — só em toasts, drawers e modais. Cards são planos.
- **Cards:** foto 4:5 sem borda nem sombra, texto abaixo (marca/tamanho em overline, título serifado, preço).
- **Hover:** botão primário clareia levemente; secundário inverte para preenchido; links sublinham; foto do produto dá zoom de 3% (480ms).
- **Press:** sem encolher; o estado muda de cor. Foco = borda ink.
- **Animação:** fades e deslizes suaves, `--ease-soft` (cubic-bezier(.22,.61,.36,1)), 140/240/480ms. Sem bounce.
- **Transparência/blur:** só no header fixo (branco 92% + blur 8px) e no overlay de modal.
- **Layout:** barra de aviso preta + header fixo com wordmark centralizado; grid de 4 colunas na vitrine.

## Iconography
- **Lucide** (linha, traço 2px, cantos arredondados), carregado por CDN (`lucide-static@0.460.0`) através do componente `Icon`, que aplica o ícone como máscara CSS e herda `currentColor`. **Substituição:** a marca não forneceu ícones; Lucide foi escolhido pelo traço fino e neutro.
- Tamanhos: 16px inline, 20px padrão, 24px no header.
- Sem emoji e sem caracteres unicode como ícone. Sem ilustrações.
- **Logo:** "MVRIA" serifado + "BRECHÓ" sans espaçado. `assets/logo-black.png` e `assets/logo-white.png` (PNG transparentes, recortados dos originais). Preto sobre claro/nude, branco sobre preto. Não recriar o logo com fonte.

## Fontes (travadas — não alterar)
Aprovadas pela marca em 23/09/2026: **Playfair Display** (títulos), **Epilogue** (texto/UI), **Pinyon Script** (script caramelo). Todas do Google Fonts. No Canva a marca usa Agrandir e Amoresa, mas a estética digital oficial é esta — não substituir.

## Index
- `styles.css` — ponto de entrada (só @imports)
- `tokens/` — colors, typography, spacing, effects, fonts, base
- `guidelines/` — cards de fundamentos (cores, tipo, espaçamento, marca)
- `components/` — primitivos React
- `ui_kits/loja/` — vitrine clicável (home, produto, sacola)
- `ui_kits/stories/` — modelos de stories 1080×1920
- `templates/carrossel-consultoria/`, `templates/carrossel-guia/`, `templates/carrossel-chegou/` — um template por modelo de carrossel 1080×1350
- `templates/mvria-news/` — **MVRIA news**, carrossel editorial semanal (desfiles, semanas de moda, impacto, mercado, consumo consciente). Rotina de atualização em `CLAUDE.md`.
- `assets/` — logos; `assets/reference/` — prints do feed
- `thumbnail.html`, `SKILL.md`

## Components
- core: **Icon**, **Button**, **IconButton**, **Badge**, **Tag**
- forms: **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- commerce: **ProductCard**
- navigation: **Tabs**
- feedback: **Dialog**, **Toast**, **Tooltip**

Conjunto padrão criado do zero (não havia fonte de componentes). Intentional additions: **Icon** (wrapper do Lucide) e **ProductCard** (unidade central de uma loja).
