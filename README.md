# Cardápio Digital — Deck Boi na Brasa Grill

Catálogo digital (somente leitura) do Deck Boi na Brasa Grill. O cliente acessa o
cardápio escaneando um QR Code na mesa — não há pedidos, carrinho, checkout ou
qualquer integração de contato dentro do app.

## Sumário

- [Stack](#stack)
- [Como instalar](#como-instalar)
- [Ambiente local](#ambiente-local)
- [Build de produção](#build-de-produção)
- [Deploy](#deploy)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Como editar o cardápio (`products.json`)](#como-editar-o-cardápio-productsjson)
- [Como editar os dados do restaurante (`restaurant.config.ts`)](#como-editar-os-dados-do-restaurante-restaurantconfigts)
- [Como trocar a logomarca](#como-trocar-a-logomarca)
- [Como adicionar fotos reais dos produtos](#como-adicionar-fotos-reais-dos-produtos)
- [Como gerar o QR Code](#como-gerar-o-qr-code)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Scripts disponíveis](#scripts-disponíveis)
- [Sugestões de melhorias futuras](#sugestões-de-melhorias-futuras)

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização (CSS-first, tema em `src/styles/theme.css`)
- [React Router](https://reactrouter.com/) — rotas e navegação, com lazy loading por página
- [Framer Motion](https://motion.dev/) — animações
- [Lucide React](https://lucide.dev/) — ícones
- [React Helmet Async](https://github.com/staylor/react-helmet-async) — SEO/meta tags dinâmicas por página
- [clsx](https://github.com/lukeed/clsx) — composição condicional de classes
- [Sharp](https://sharp.pixelplumbing.com/) (dev) — otimização de imagens via script
- [qrcode](https://github.com/soldair/node-qrcode) (dev) — geração do QR Code via script

Não há banco de dados, backend ou painel administrativo: todo o conteúdo vem de
arquivos estáticos versionados no próprio repositório (`products.json` e
`restaurant.config.ts`).

## Como instalar

Pré-requisitos: [Node.js](https://nodejs.org/) 20+ e npm.

```bash
git clone <url-do-repositorio>
cd Cardapio-Deck-Boi-na-Brasa
npm install
```

## Ambiente local

```bash
npm run dev
```

Abre em `http://localhost:5173`. As variáveis de ambiente já vêm com valores
padrão no arquivo `.env` versionado (veja [Variáveis de ambiente](#variáveis-de-ambiente)).

## Build de produção

```bash
npm run build
```

Gera os arquivos otimizados em `dist/` (HTML, CSS, JS com code-splitting por
rota, fontes e imagens). Para conferir o resultado localmente antes de publicar:

```bash
npm run preview
```

## Deploy

O projeto é uma SPA 100% estática (sem servidor/backend), então qualquer
hospedagem de arquivos estáticos funciona: [Vercel](https://vercel.com),
[Netlify](https://netlify.com), [Cloudflare Pages](https://pages.cloudflare.com),
GitHub Pages, um bucket S3 + CDN, etc.

Passos gerais:

1. Defina `VITE_APP_URL` no `.env` (ou nas variáveis de ambiente do provedor de
   hospedagem) com a URL final de publicação — **sem barra no final**.
2. Rode `npm run build`.
3. Publique o conteúdo da pasta `dist/`.
4. Configure o servidor/hospedagem para SPA fallback: qualquer rota
   (`/cardapio`, `/sobre`, `/cardapio/:id`) deve servir `dist/index.html`
   (rewrite/fallback de 404 para `index.html`) — sem isso, acessar uma rota
   diretamente (ex.: pelo QR Code, que aponta direto para `/cardapio`) resulta
   em 404 da própria hospedagem, mesmo com o app funcionando normalmente pela
   navegação interna. Na Vercel, o `vercel.json` na raiz do projeto já
   resolve isso (rewrite de qualquer caminho para `/index.html`). No Netlify,
   crie um `public/_redirects` com `/* /index.html 200`. Em outros
   provedores, configure a regra equivalente manualmente.
5. Depois de publicar, gere o QR Code apontando para a URL real (veja
   [Como gerar o QR Code](#como-gerar-o-qr-code)).

## Variáveis de ambiente

Definidas em `.env` (já versionado com valores padrão de desenvolvimento) e
centralizadas em `src/config/env.ts` — **não leia `import.meta.env` diretamente
em outros arquivos**, sempre pelo módulo `env`.

| Variável                      | Descrição                                                       | Usada em                                                 |
| ----------------------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| `VITE_APP_URL`                | URL pública onde o cardápio está publicado (sem barra no final) | SEO/Open Graph/canonical (`Seo.tsx`), geração do QR Code |
| `VITE_RESTAURANT_NAME`        | Nome do restaurante                                             | `restaurant.config.ts` → usado em todo o app             |
| `VITE_RESTAURANT_DESCRIPTION` | Descrição curta do restaurante                                  | Home e meta description padrão                           |

Para publicar em produção, edite o `.env` (ou defina as mesmas variáveis no
painel do seu provedor de hospedagem) antes de rodar `npm run build`. Use
`.env.example` como referência, ou crie um `.env.local` (git-ignorado) para
sobrescrever valores localmente sem alterar o `.env` versionado.

Para adicionar novas variáveis no futuro: declare em `.env`/`.env.example`,
adicione o tipo em `src/vite-env.d.ts` e exponha via `src/config/env.ts`.

## Como editar o cardápio (`products.json`)

Arquivo: `src/constants/products.json`. Não há banco de dados — todo o
cardápio é este arquivo.

```json
{
  "categories": [{ "id": "cervejas", "name": "Cervejas", "icon": "Beer" }],
  "products": [
    {
      "id": "cervejas-01",
      "categoryId": "cervejas",
      "group": "Albanos 600ml",
      "name": "American Ipa",
      "description": "Descrição ou ingredientes (opcional)",
      "price": 26.8,
      "image": "/caminho/opcional/para/foto.jpg"
    }
  ]
}
```

- **`categories[].icon`**: precisa ser um nome de ícone já mapeado em
  `src/constants/categoryIcons.ts` (`Beer`, `Martini`, `Wine`, `CupSoda`,
  `Sandwich`, `UtensilsCrossed`). Para usar outro ícone, importe-o de
  [`lucide-react`](https://lucide.dev/icons) nesse arquivo e adicione ao mapa.
- **`products[].id`**: precisa ser único em todo o arquivo (usado na URL
  `/cardapio/:id`).
- **`products[].categoryId`**: precisa corresponder a um `id` existente em
  `categories`.
- **`products[].group`**: subtítulo usado para agrupar itens dentro da
  categoria (ex.: "Albanos 600ml"). Itens com o mesmo `group` e `categoryId`
  aparecem juntos, na ordem em que estão no arquivo.
- **`products[].description`**: opcional; também é usada na busca (nome,
  descrição/ingredientes).
- **`products[].image`**: opcional. Veja a seção seguinte.

Depois de editar, rode `npm run lint` e `npm run build` para garantir que o
JSON está bem formado antes de publicar (o build falha se o schema estiver
incorreto, já que `products.json` é validado por tipos TypeScript).

## Como editar os dados do restaurante (`restaurant.config.ts`)

Arquivo: `src/constants/restaurant.config.ts`. Nome e descrição vêm das
variáveis de ambiente (veja acima); os demais campos são editados diretamente
no arquivo:

```ts
export const restaurantConfig: RestaurantConfig = {
  name: env.restaurantName, // via VITE_RESTAURANT_NAME
  shortName: 'Boi na Brasa', // nome curto (Header/Footer)
  tagline: 'Bar & Restaurante',
  description: env.restaurantDescription, // via VITE_RESTAURANT_DESCRIPTION
  logo,
  address: { street: '...', city: '...', state: '...' },
  phone: '...',
  whatsapp: '...',
  openingHours: [{ days: 'Terça a Sexta', hours: '17h às 23h45' }],
  social: [{ label: '@...', url: '...', icon: 'instagram' }],
}
```

Esses dados alimentam o Header, o Footer, a Home e a página Sobre — não há
texto institucional hardcoded em nenhum componente.

## Como trocar a logomarca

1. Substitua `src/assets/images/logo.jpeg` pela nova imagem (mantenha o nome
   do arquivo, ou atualize o caminho em `scripts/optimize-logo.mjs`).
2. Gere as versões otimizadas (WebP + JPEG comprimidos, usadas em todo o app):
   ```bash
   npm run optimize:logo
   ```
   Isso atualiza `src/assets/images/logo-optimized.webp` e `.jpg`.
3. (Opcional) Regenere a imagem de Open Graph com a nova logo:
   ```bash
   npm run generate:og-image
   ```
4. Rode `npm run dev` para conferir o resultado no Header, Footer, Home e
   Sobre — todos usam o componente `src/components/ui/Logo.tsx`, que lê de
   `restaurant.config.ts`.

## Como adicionar fotos reais dos produtos

Hoje os produtos exibem um **placeholder premium padronizado** (textura de
madeira + ícone da categoria), gerado pelo componente
`src/components/menu/ProductImage.tsx`. Para usar uma foto real:

1. Coloque o arquivo de imagem em `src/assets/images/` (ou em `public/` se
   preferir referenciar por URL absoluta).
2. No `products.json`, preencha o campo `image` do produto com o caminho da
   imagem (import estático recomendado — veja o padrão usado em
   `restaurant.config.ts` para a logo — ou uma URL relativa a `public/`).
3. O `ProductImage` detecta automaticamente a presença de `image` e passa a
   exibir a foto real no lugar do placeholder, tanto no card quanto na página
   de detalhe do produto.

Recomenda-se otimizar as fotos (formato WebP, ~800px de largura, < 150KB) antes
de adicionar — o script `scripts/optimize-logo.mjs` pode ser adaptado como
referência para lotes de imagens de produtos.

## Como gerar o QR Code

O projeto **não mantém nenhum arquivo de imagem de QR Code versionado** — ele é
gerado sob demanda por um script, sempre a partir da variável `VITE_APP_URL`,
apontando para `/cardapio`:

```bash
npm run qrcode
```

Isso cria `qrcode/qrcode-cardapio.png` (1024×1024, cores da marca) — pasta
git-ignorada, gerada localmente para impressão em mesas ou materiais do
restaurante. Ele **nunca aparece na interface do cliente**.

Para gerar apontando para uma URL específica sem alterar o `.env`:

```bash
npm run qrcode -- https://seudominio.com.br
```

Sempre que o domínio de publicação mudar, atualize `VITE_APP_URL` no `.env` e
rode `npm run qrcode` novamente para gerar um QR Code atualizado.

## Estrutura de pastas

```
├── .env                      # variáveis de ambiente (valores padrão, versionado)
├── .env.example               # referência/documentação das variáveis
├── public/
│   ├── favicon.svg
│   └── og-image.jpg           # imagem de compartilhamento (Open Graph)
├── scripts/
│   ├── generate-qrcode.mjs    # gera o QR Code a partir de VITE_APP_URL
│   ├── generate-og-image.mjs  # gera public/og-image.jpg a partir da logo
│   └── optimize-logo.mjs      # gera versões WebP/JPEG otimizadas da logo
└── src/
    ├── assets/                # imagens, ícones e fontes
    ├── components/
    │   ├── ui/                 # componentes de interface genéricos e reutilizáveis
    │   ├── layout/              # Header, Footer, navegação, transição de página
    │   ├── menu/                # componentes específicos do cardápio (cards, busca, tabs)
    │   └── common/               # Seo, ErrorBoundary, AnimatedSection, PageLoader
    ├── config/
    │   └── env.ts               # leitura centralizada das variáveis de ambiente
    ├── constants/                # dados estáticos: products.json, restaurant.config.ts,
    │                              tema de animações, estilos de botão, ícones de categoria
    ├── hooks/                    # hooks customizados (ex.: useProductSearch)
    ├── pages/                    # Home, Cardapio, ProdutoDetalhe, Sobre
    ├── routes/                   # configuração de rotas + lazy loading das páginas
    ├── types/                    # tipos TypeScript (Product, RestaurantConfig, ...)
    └── utils/                    # funções utilitárias puras (formatCurrency, menuData, ...)
```

`src/context/` e `src/services/` existem como estrutura preparada para uma
eventual evolução (ex.: contexto de tema, integração com API), mas não são
usados hoje — o projeto não tem estado global nem chamadas de rede.

## Scripts disponíveis

```bash
npm run dev            # ambiente de desenvolvimento (http://localhost:5173)
npm run build          # build de produção (dist/)
npm run preview        # serve o build de produção localmente
npm run lint           # checa o código com ESLint
npm run format          # formata o código com Prettier
npm run qrcode           # gera qrcode/qrcode-cardapio.png a partir de VITE_APP_URL
npm run optimize:logo    # gera as versões WebP/JPEG otimizadas da logo
npm run generate:og-image # gera public/og-image.jpg a partir da logo
```

## Sugestões de melhorias futuras

- **Fotos reais dos produtos**: substituir os placeholders conforme o
  restaurante for fotografando o cardápio (estrutura já pronta, veja acima).
- **PWA**: adicionar manifest + service worker para permitir "adicionar à
  tela inicial" e uso offline básico do cardápio.
- **Analytics leve**: um contador de visitas/página mais vista (ex.: Plausible
  ou Umami, sem cookies), para o restaurante entender quais categorias são
  mais consultadas.
- **Internacionalização**: caso o restaurante receba muitos turistas,
  estrutura simples de i18n para o cardápio em inglês/espanhol.
- **Testes automatizados**: cobertura básica (Vitest + Testing Library) para
  a lógica de busca/agrupamento de produtos, que é a parte mais suscetível a
  regressão ao editar `products.json`.
- **CI**: workflow simples (lint + build) no GitHub Actions a cada push,
  evitando publicar uma versão quebrada.
