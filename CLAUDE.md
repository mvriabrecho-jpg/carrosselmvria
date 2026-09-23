# MVRIA news — rotina semanal

Quando o usuário pedir "MVRIA news da semana" (ou nova edição):
1. Pesquisar na web notícias dos últimos 7 dias: desfiles/semanas de moda, mercado de moda, moda sustentável, consumo consciente, mercado de segunda mão/brechós. Priorizar fontes confiáveis (BoF, WWD, Vogue, FFW, ELLE, órgãos oficiais, relatórios).
2. Criar a edição com `npm run nova-edicao` (copia `templates/mvria-news/MvriaNews.dc.html` para `templates/mvria-news/edicoes/AAAA-MM-DD.dc.html`, remove a linha `@template`, ajusta os caminhos e preenche número e datas).
3. Manter a estrutura de 7 slides: capa (sumário de 4 itens) → 01 Desfiles → 02 Semanas de moda/agenda → 03 Impacto → 04 Mercado (números) → 05 Moda circular/sustentável (notícia com dado e fonte; formato noticiário, sem falar do MVRIA) → encerramento com fontes.
4. Incrementar o nº da edição e as datas. Só usar fatos com fonte; listar as fontes no último slide.
5. Textos em PT-BR, tom calmo e informativo, sem emoji. É um noticiário: não promover o MVRIA nos slides de conteúdo (a marca aparece só no cabeçalho, capa e encerramento).

# Estética travada
Fontes (Playfair Display, Epilogue, Pinyon Script), cores e layout do MVRIA news foram aprovados pela marca. Nunca alterar sem pedido explícito.

# Checagem de fontes (toda edição)
- Notícias: publicadas nos últimos 7 dias; relatórios: a edição mais recente (citar o ano).
- Preferir fonte primária (site oficial, relatório original, veículo de moda reconhecido). Blogs de marcas ou sites regionais só como pista — confirmar na fonte primária antes de usar.
- Conferir números e datas em pelo menos duas fontes quando possível.

# Validação obrigatória (MVRIA news)
Nenhuma informação vai para o carrossel sem validação: cada fato precisa de fonte primária (site oficial, texto de lei, relatório original) ou de dois veículos reconhecidos concordando. Dado com fonte única ou conflitante: remover ou reescrever com o que foi confirmado. Registrar no último slide a fonte primária.

# Projetos de carrossel
Cada modelo é um template separado: templates/mvria-news, templates/carrossel-consultoria, templates/carrossel-guia, templates/carrossel-chegou.

# Automação semanal (Rotina de domingo, 20:00 de Brasília)
A Rotina roda numa sessão nova, sem ninguém olhando. Seguir na ordem e não pular a validação.
1. `npm ci`
2. `npm run nova-edicao` — informa número, período, o arquivo `.dc.html` e a pasta da edição (`edicao.json` + `imagens/`). O número vem de `mvria-news.config.json` (edição base + semanas).
3. Ler a edição anterior mais recente em `templates/mvria-news/edicoes/` para não repetir notícias.
4. Pesquisar e validar as notícias seguindo "MVRIA news — rotina semanal", "Checagem de fontes" e "Validação obrigatória" acima.
5. Reescrever só os textos dos 7 slides no `.dc.html`, mantendo estrutura, estilos inline e tamanhos de fonte. Se um texto não couber, encurtar o texto; nunca diminuir a fonte. O slide 02 (agenda) pode ter de 3 a 6 linhas.
6. Imagens (2 slots: capa e o slide de desfiles):
   - `npm run imagem -- buscar "<termo em inglês>"` lista fotos de licença livre do Wikimedia Commons. Escolher foto de passarela/desfile ou arara, sem logo em destaque.
   - `npm run imagem -- baixar <url> <pasta-da-edição>/imagens/capa.jpg` (e `desfile.jpg`).
   - No slot: `src="AAAA-MM-DD/imagens/capa.jpg"` (caminho relativo ao `.dc.html`) e `credit="Autor · Licença"`.
   - Se a busca falhar ou não houver foto boa: usar uma foto de `npm run imagem -- banco` (fotos próprias, sem `credit`).
   - Nunca usar foto de veículo de notícia, de marca ou de agência (direitos autorais). Sem foto válida: deixar o slot vazio e registrar em `avisos`.
7. Preencher `edicao.json`: `legenda` (texto do post em PT-BR, tom da marca, sem emoji, 3 a 5 hashtags no fim), `fontes` (`{"nome","url"}` de cada fonte usada), `creditosImagens` (`{"nome","url"}`) e `avisos` (tudo que a dona precisa conferir antes de postar).
8. `npm run render -- <arquivo .dc.html>` gera `slide-01.png` … `slide-07.png` na pasta da edição. Corrigir tudo que ele apontar (texto passando do slide, imagem quebrada) e abrir cada PNG para conferir visualmente antes de seguir.
9. `npm run galeria -- <pasta da edição>` gera `index.html` (página de entrega).
10. Commit da edição (`.dc.html` + pasta) e push.
11. Publicar a página de entrega como Artifact: `file_path` = `<pasta>/index.html`, `files` = os `slide-XX.png` (o comando da galeria imprime o mapa), `icon` = "news". Título: "MVRIA news nº NN".
12. Enviar e-mail pelo Gmail para o endereço indicado na Rotina: assunto "MVRIA news nº NN está pronto", corpo com o link do Artifact, o link da pasta no GitHub e a lista de avisos. Não anexar as imagens.
13. Se algum passo falhar, entregar mesmo assim o que foi possível e explicar no e-mail o que faltou.
