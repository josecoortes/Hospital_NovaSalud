// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',          // para que el build funcione dentro de /dist en GitHub Pages
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        triaje: resolve(__dirname, 'triaje.html'),
        // etc.
      },
    },
  },
})

