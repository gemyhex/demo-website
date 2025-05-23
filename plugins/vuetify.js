import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { theme } from "@/data/theme";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Translations provided by Vuetify
import { ar } from "vuetify/locale";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme,
    components,
    directives,
    locale: {
      locale: "ar",
      fallback: "ar",
      messages: { ar },
    },
  });
  app.vueApp.use(vuetify);
});
