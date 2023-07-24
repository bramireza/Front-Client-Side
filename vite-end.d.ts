/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_URL: string;
  readonly GOOGLE_CLIENT_ID: string;
  readonly FRONT_ACCOUNT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
