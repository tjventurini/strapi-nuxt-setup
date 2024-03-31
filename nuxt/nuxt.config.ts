// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi'],
  typescript: {
    typeCheck: true,
  },
  devServer: {
    port: 3000,
  },
  strapi: {
    url: 'strapi',
  },
})
