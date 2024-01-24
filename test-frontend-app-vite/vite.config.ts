import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    base : '/webapp',
    plugins: [react()],
    server : {
      port : 4000,
      host : '0.0.0.0'
    }
  }
})
