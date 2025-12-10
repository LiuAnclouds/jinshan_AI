import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000,       // 修改为你想要的端口号
    strictPort: true, // true 表示端口被占用就报错，false 会自动换号
    proxy: {
      // 简单代理：所有 /api 请求转发到 http://localhost:8001
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true
      }
    },
  },
  // base: './', // 让资源路径变成相对路径
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // @ 指向 src
    }
  }
})
