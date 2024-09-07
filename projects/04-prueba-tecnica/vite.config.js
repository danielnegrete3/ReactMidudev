import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://catfact.ninja',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/imageurl': {
        target: 'https://api.thecatapi.com/v1/images/search?limit=1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/imageurl/, ''),
      }
    },
  },
})
