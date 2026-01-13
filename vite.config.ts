
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Netlify 루트 배포를 위해 절대 경로인 '/' 권장
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  // SDK 가이드라인의 process.env.API_KEY를 브라우저에서 사용할 수 있도록 shim 설정
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  }
});
