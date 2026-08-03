# Fotos de fundo das categorias

Coloque aqui as imagens de fundo dos cards de categoria da tela principal do
cardápio. **Essa é a única tela do site que exibe fotografia** — os produtos,
dentro de cada categoria, mostram apenas nome, descrição e preço.

A vinculação é **automática**: basta o nome do arquivo bater com o `id` da
categoria.

## Ids atuais (veja `categories[].id` em `src/constants/products.json`)

| id                     | Categoria              | Arquivo esperado                     |
| ---------------------- | ---------------------- | ------------------------------------ |
| `cervejas`             | Cervejas               | `cervejas.webp` (ou .jpg/.jpeg/.png) |
| `caipirinhas-drinks`   | Caipirinhas & Drinks   | `caipirinhas-drinks.webp`            |
| `destilados-licores`   | Destilados & Licores   | `destilados-licores.webp`            |
| `sucos-nao-alcoolicos` | Sucos & Não Alcoólicos | `sucos-nao-alcoolicos.webp`          |
| `petiscos`             | Petiscos               | `petiscos.webp`                      |
| `porcoes`              | Porções                | `porcoes.webp`                       |

O nome do arquivo **não pode ter espaços, acentos ou maiúsculas** — precisa
ser exatamente o `id`, sem extras (ex.: `porções.jpg` não é reconhecido,
tem que ser `porcoes.jpg`).

## Como funciona

1. Salve a imagem com o nome exato do `id` (tabela acima).
2. Rode `npm run dev` ou `npm run build` — `src/utils/categoryImages.ts`
   localiza a imagem automaticamente (via `import.meta.glob`) e o card passa
   a exibi-la no lugar do fundo padrão (textura de madeira + ícone grande da
   categoria). Nenhuma edição de código ou do `products.json` é necessária.
3. Categoria sem arquivo correspondente continua mostrando o placeholder —
   nada quebra.

## Otimização

Rode `npm run optimize:categories` para comprimir automaticamente todo
`.jpg`/`.jpeg`/`.png` desta pasta para `.webp` (redimensiona para no máximo
1200px de largura, qualidade 80). Ele também remove o arquivo original após
gerar o `.webp`.

## Recomendações

- Fotografia realista, iluminação quente, ambiente de churrascaria — mesma
  identidade visual do restante do site.
- Proporção paisagem (o card usa recorte 4:3 no mobile e 16:9 a partir de
  `sm`), mínimo ~1200px de largura antes de otimizar.
- O overlay escuro do card garante legibilidade do texto sobre qualquer foto.
