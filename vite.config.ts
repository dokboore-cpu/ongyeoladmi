import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vercel 배포 시 루트 경로 설정을 위해 '/' 사용 (기본값)
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  },
  // 브라우저 환경에서 process.env.API_KEY를 인식할 수 있도록 shim 설정
  // Vercel 대시보드에서 등록한 API_KEY가 이곳에 주입됩니다.
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  }
});