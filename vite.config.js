import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    base: '/hikarie-site2/', // ← GitHub Pages で ルート配下に置くとき必須
});
