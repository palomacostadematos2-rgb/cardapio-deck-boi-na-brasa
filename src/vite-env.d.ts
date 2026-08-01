/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_URL: string
  readonly VITE_RESTAURANT_NAME: string
  readonly VITE_RESTAURANT_DESCRIPTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
