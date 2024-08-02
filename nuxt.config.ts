// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'install ESLint',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }],
    },
  },
  modules: ['@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: false,
    },
  },
})
