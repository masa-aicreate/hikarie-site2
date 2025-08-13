/// <reference types="vite/client" />

// CSS Modules
declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
  
  // アセット（必要に応じて増やしてください）
  declare module '*.jpg' { const src: string; export default src }
  declare module '*.jpeg' { const src: string; export default src }
  declare module '*.png' { const src: string; export default src }
  declare module '*.webp' { const src: string; export default src }
  declare module '*.svg' { const src: string; export default src }
  
  declare module '*.mp4' { const src: string; export default src }
  declare module '*.webm' { const src: string; export default src }