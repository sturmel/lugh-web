import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [    
    //'@nuxt/eslint',
    '@nuxt/icon',
    //'@nuxt/image',
    //'@nuxt/test-utils/module',
    'nuxt-particles'
  ],
  css: ['~/assets/style/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: true, // Enable sourcemap generation
    },
  },
  particles: {
    mode: 'slim',
    lazy: true
  },
  devServer: {
    port: 3000, // Set the development port here
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
