import { resolve } from 'path'

export default {
  base: '/ashburn-resource-hub/',
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        about:      resolve(__dirname, 'about.html'),
        references: resolve(__dirname, 'references.html'),
      }
    }
  }
}