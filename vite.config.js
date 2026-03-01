import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  publicDir: path.resolve(__dirname, 'src/public'),
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: path.join(__dirname, 'src/css/quasar-variables.sass')
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  }
})
