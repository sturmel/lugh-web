import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [    
    '@nuxt/icon',
    'nuxt-particles',
    '@nuxtjs/sitemap'
  ],
  css: ['~/assets/style/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: true, 
    },
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
      collections: ['mdi'],
    }
  },
  runtimeConfig: {  
    webhookUrl: process.env.WEBHOOK_URL
  }
})
