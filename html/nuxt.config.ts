import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [    
   // '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils/module',
   // '@nuxtjs/tailwindcss',
    'nuxt-particles'
  ],
  css: ['~/assets/style/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
 /* tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  css: [
    '~/assets/style/main.css'
  ],*/
  eslint: {

  },
  particles: {
    mode: 'slim',
    lazy: true
  },
  icon: {
    serverBundle: {
      collections: ['ph']
    }
  },
  image: {
    format: ['avif', 'webp', 'jpg', 'png'],
  }

})
