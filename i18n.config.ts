// import ar from "./locales/ar";
// import en from "./locales/en";
// export default defineI18nConfig(() => ({
//   legacy: false,
//   locale: "en",
//   messages: {
//     ar,
//     en,
//   },
// }));

import ar from "./locales/ar";
import en from "./locales/en";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: { ar, en },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      redirectOn: "root",
    },
  };
});
