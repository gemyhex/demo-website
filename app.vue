<template>
  <v-locale-provider :locale="locale">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-locale-provider>
</template>

<script setup>
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});
watch(locale, (newLocale) => {
  useHead({
    htmlAttrs: {
      lang: newLocale,
    },
  });
});
</script>
