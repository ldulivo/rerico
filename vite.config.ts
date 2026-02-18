import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Usamos path.resolve para que la ruta sea absoluta y Sass no se pierda
      '@core': path.resolve(__dirname, './src/core'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Opción A: Si quieres evitar escribir el @use en cada archivo,
        // puedes inyectarlo globalmente aquí:
        // additionalData: `@use "@assets/styles/variables" as *;`
      },
    },
  },
})
