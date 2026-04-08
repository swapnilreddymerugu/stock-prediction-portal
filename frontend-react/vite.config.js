import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],       // ← this was missing!
  server: {
    watch: {
      usePolling: true,
    }
  }
})
