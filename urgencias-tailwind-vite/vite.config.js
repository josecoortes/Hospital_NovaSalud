import { defineConfig } from 'vite'
// CAMBIO IMPORTANTE: Ahora importamos desde '@tailwindcss/postcss'
import tailwindcss from '@tailwindcss/postcss' 
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: './', 
  
  css: {
    postcss: {
      plugins: [
        tailwindcss, // Aquí llamamos al plugin nuevo
        autoprefixer,
      ],
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        triaje: 'triaje.html',
        sala: 'sala-espera.html',
      }
    }
  }
})