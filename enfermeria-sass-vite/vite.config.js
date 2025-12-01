import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),             // página principal del módulo
        login: resolve(__dirname, 'login.html'),
        citas: resolve(__dirname, 'citas.html'),            // ejemplo
        detalle: resolve(__dirname, 'detalle_de_cita.html'),   // ejemplo
        historia: resolve(__dirname, 'historica_clinica.html'),
        buscador: resolve(__dirname, 'busqueda_de_pacientes.html'),
      },
    },
  },
})