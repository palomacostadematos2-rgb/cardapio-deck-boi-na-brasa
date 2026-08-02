# Fotos dos produtos

Coloque aqui as fotos reais dos produtos do cardápio. A vinculação ao
`products.json` é **automática** — não é preciso editar nada além de salvar o
arquivo com o nome certo.

## Como funciona

1. Salve a foto nesta pasta com o nome exato do `id` do produto (veja
   `src/constants/products.json`), em `.jpg`, `.jpeg`, `.png` ou `.webp`.
   Exemplo: o produto `"id": "cervejas-01"` → arquivo `cervejas-01.jpg`.
2. Rode `npm run dev` ou `npm run build` normalmente — `src/utils/productImages.ts`
   encontra a imagem pelo nome e o componente `ProductImage` passa a exibi-la
   automaticamente no card e na página de detalhe, no lugar do placeholder.
3. Nenhum produto sem foto correspondente aqui quebra: ele continua mostrando
   o placeholder elegante (textura de madeira + ícone da categoria).

## Recomendações de qualidade

- Fotografia realista, iluminação quente, fundo de madeira/ambiente de
  churrascaria — consistente com a identidade visual do restante do site.
- Proporção 4:3 (mesma proporção usada nos cards), mínimo ~800px de largura.
- Formato `.webp` com boa compressão é o mais leve; `.jpg` também é aceito.
- Para bebidas industrializadas, use apenas imagens de embalagem
  licenciadas/oficiais (não baixe fotos de marca sem verificar os direitos de
  uso).

Veja a lista completa de produtos ainda sem foto em
`docs/produtos-sem-imagem.md`.
