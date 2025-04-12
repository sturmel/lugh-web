import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [    
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    'nuxt-particles'
  ],
  css: ['~/assets/style/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  csp: {
    hashAlgorithm: 'sha256', 
    policies: {
      'default-src': ["'self'", 'https://lugh-web.fr'],
      'script-src': ["'self'", "'unsafe-inline'", 'https://lugh-web.fr', 'https://client.axept.io', 'https://client.crisp.chat'  ],
      'style-src': ["'self'", "'unsafe-inline'"],
      'img-src': ["'self'", 'data:'],
    },
    addMeta: true, 
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true   
    }
  },
  build: {
    extractCSS: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        }
      }
    }
  },
  particles: {
    mode: 'slim',
    lazy: true
  },
  icon: {
    serverBundle: {
      collections: ['ph', 'mdi'],
    }
  },
  image: {
    format: ['avif', 'webp', 'jpg', 'png'],
  },
  runtimeConfig: {  
    webhookUrl: process.env.WEBHOOK_URL
  }
})
