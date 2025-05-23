export default defineNuxtPlugin((nuxtApp) => {
  // const { showError } = useAlertStore();
  const token = useCookie("token");
  const locale = useCookie("locale");
  const api = $fetch.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    onRequest({ request, options, error }) {
      options.headers.set("Content-Type", "application/json; charset=UTF-8");
      options.headers.set("Accept", "application/json; charset=UTF-8");
      options.headers.set("Access-Control-Allow-Origin", "*");

      if (token.value)
        options.headers.set("Authorization", `Bearer ${token.value}`);
    },
    async onResponseError({ response }) {
      if (response.status === 401)
        await nuxtApp.runWithContext(() => navigateTo("/login"));

      // showError(response._data.message);
    },
  });

  return {
    provide: {
      api,
    },
  };
});
