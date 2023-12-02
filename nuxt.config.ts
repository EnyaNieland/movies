// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon-tw'],
  runtimeConfig: {
    omdb: {
      apiBase: 'http://www.omdbapi.com/',
      apiKey: '',
    },
  },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
})
