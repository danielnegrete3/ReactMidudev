import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/MiImagen": {
        target : "https://media.licdn.com/dms/image/v2/D5603AQGPoLrpuPcbDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724097418913?e=1732752000&v=beta&t=Gb59ZutprHTgHKeq7qTKKcqwzFFhivbForm1q5Tnu5A",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/MiImagen/, ''),
      }
    }
  },
  test: {
    environment:"happy-dom"
  }
})
