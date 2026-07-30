# Cardápio Deck Boi na Brasa

Cardápio digital do restaurante Boi na Brasa.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)

## Scripts

```bash
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção
npm run preview   # preview do build
npm run lint      # checa o código com ESLint
npm run format    # formata o código com Prettier
```

## Estrutura de pastas

```
src/
├── assets/       # imagens, ícones e fontes
├── components/
│   ├── ui/       # componentes de interface reutilizáveis
│   ├── layout/   # componentes estruturais (header, footer, etc.)
│   └── common/   # componentes compartilhados diversos
├── pages/        # páginas/telas da aplicação
├── routes/       # configuração de rotas
├── hooks/        # hooks customizados
├── context/      # contextos React
├── services/     # integrações externas e chamadas de API
├── types/        # tipos e interfaces TypeScript
├── utils/        # funções utilitárias
├── constants/     # constantes da aplicação
└── styles/       # estilos globais adicionais
```
