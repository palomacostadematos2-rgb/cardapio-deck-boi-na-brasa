/**
 * Configuração centralizada de variáveis de ambiente (prefixo VITE_).
 * Adicione novas variáveis aqui (e em src/vite-env.d.ts + .env.example)
 * conforme o projeto evoluir, em vez de ler import.meta.env diretamente
 * em outros arquivos.
 */
export const env = {
  appUrl: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
  restaurantName:
    import.meta.env.VITE_RESTAURANT_NAME || 'Deck Boi na Brasa Grill',
  restaurantDescription:
    import.meta.env.VITE_RESTAURANT_DESCRIPTION ||
    'Churrasco no ponto, ambiente descontraído e muito sabor na brasa.',
} as const
