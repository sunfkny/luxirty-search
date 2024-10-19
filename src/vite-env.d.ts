/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CSE_CX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
