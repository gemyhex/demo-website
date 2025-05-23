// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: [
    {
      path: "~/components/common",
    },
  ],
  ssr: true,
  css: ["~/assets/sass/main.scss"],
  nitro: {
    compressPublicAssets: true,
    preset: "node-server",
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  // Performancce
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-svgo",
    "@vueuse/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["ar", "en"],
    defaultLocale: "ar",
    strategy: "prefix_except_default",
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
