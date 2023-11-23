/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly GIGYA_API_KEY: string
    readonly GIGYA_DOMAIN: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
