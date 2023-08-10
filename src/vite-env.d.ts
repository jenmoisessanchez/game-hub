/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RAWG_API: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
