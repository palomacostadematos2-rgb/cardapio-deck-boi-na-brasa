# Fotos de fundo das categorias

Coloque aqui as imagens de fundo dos cards de categoria da tela principal do
cardápio. A vinculação é **automática**, mesmo padrão de
`src/assets/images/products/`.

## Como funciona

1. Salve a imagem com o nome exato do `id` da categoria (veja
   `src/constants/products.json` → `categories[].id`). Ex.: categoria
   `"id": "cervejas"` → arquivo `cervejas.jpg` (também aceita `.jpeg`, `.png`
   ou `.webp`).
2. Rode `npm run dev` ou `npm run build` — `src/utils/categoryImages.ts`
   localiza a imagem automaticamente e o card passa a exibi-la no lugar do
   fundo padrão (textura de madeira + ícone grande da categoria).

## Recomendações

- Fotografia realista, iluminação quente, ambiente de churrascaria — mesma
  identidade visual do restante do site.
- Proporção paisagem (o card usa recorte 16:9 a partir de sm), mínimo
  ~1200px de largura.
- O overlay escuro do card garante legibilidade do texto sobre qualquer foto.
