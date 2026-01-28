import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  },
  define: {
    // 빌드 타임에 Vercel의 API_KEY를 소스코드에 주입
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  }
});