import { defineConfig } from 'astro/config'
import astrobook from 'astrobook'

export default defineConfig({
  integrations: [
    astrobook({
      directory: 'src/components',
      css: ['./src/styles/astrobook.css', './src/styles/index.css'],
      title: 'Accessible Astro',
    }),
  ],
})
