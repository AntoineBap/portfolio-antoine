import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-antoine/',
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
      interval: 100, 
    },
  },
})