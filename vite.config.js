import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shoppingreact",
    plugins: [react()],
    mode: 'development', // Optional, dev mode is default
    build: {
        minify: false,
    }
})
