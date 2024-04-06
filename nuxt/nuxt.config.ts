// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true,
  },
  devServer: {
    port: 3000,
  },
  strapi: {
    url: process.env.STRAPI_URL,
  },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
