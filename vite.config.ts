import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: "[local]-[hash:base64:5]"
    }
  }
})
