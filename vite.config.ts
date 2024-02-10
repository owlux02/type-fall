import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import wyw from '@wyw-in-js/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), wyw(), VitePWA({
    // add this to cache all the imports
    workbox: {
      globPatterns: ["**/*"],
      maximumFileSizeToCacheInBytes: 3000000
    },
    // add this to cache all the
    // static assets in the public folder
    includeAssets: [
      "**/*",
    ],
    manifest: {
      "theme_color": "#181E1A",
      "background_color": "#181E1A",
      "display": "standalone",
      "scope": "/",
      "start_url": "/",
      "short_name": "Type Fall",
      "description": "A Peculiar Typing Game",
      "name": "Type Fall",
      "icons": [
        {
          "src": "/favicon192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/favicon256x256.png",
          "sizes": "256x256",
          "type": "image/png"
        },
        {
          "src": "/favicon384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "/favicon.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
    },
  })],
})
