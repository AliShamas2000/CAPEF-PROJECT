// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [
    '~/plugins/vue-apexcharts.js',
    '~/plugins/vue-tel-input.js'
  ],
})