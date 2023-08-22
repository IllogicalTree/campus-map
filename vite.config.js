import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import dsv from '@rollup/plugin-dsv' 
import { VitePWA } from 'vite-plugin-pwa'
import legacy from '@vitejs/plugin-legacy'

const getCache = ({ name, pattern }) => ({
  urlPattern: pattern,
  handler: "CacheFirst",
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2 
    },
    cacheableResponse: {
      statuses: [200]
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgo: false
    }),
    dsv(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          getCache({
            pattern: /^https?:\/\/[a-zA-Z0-9.-]+(:[0-9]+)?(\/data\/[a-zA-Z0-9_/.-]+)?$/,
            name: "data" 
          }),
        ],
      },
      devOptions: {
        enabled: false
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg','../assets/floors/*.svg'],
      manifest: {
        name: 'RGU Campus Map',
        short_name: 'RGU Map',
        description: 'An interactive map of the Robert Gordon University campus',
        theme_color: '#ffffff',
        orientation: "landscape",
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  transpileDependencies: true,
})
