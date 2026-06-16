import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://showroom.eis24.me',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/c300/api'),
      },
    },
  },
});
