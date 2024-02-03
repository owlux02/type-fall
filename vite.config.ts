import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import wyw from '@wyw-in-js/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), wyw()],
})
