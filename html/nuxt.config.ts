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
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true   
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
