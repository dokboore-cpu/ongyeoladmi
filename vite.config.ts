
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 배포 환경에서 자산을 찾지 못하는 문제를 해결하기 위해 상대 경로 설정 추가
  base: './',
  build: {
    outDir: 'dist',
    // 빌드 시 폴더를 깨끗하게 비우고 생성
    emptyOutDir: true,
  }
});
