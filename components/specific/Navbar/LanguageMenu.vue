<template>
  <div class="locale-switcher">
    <template v-for="availableLocale in availableLocales">
      <v-btn
        icon
        rounded-pill
        @click="switchLocale(availableLocale.code)"
        :key="availableLocale.code"
        v-if="locale !== availableLocale.code"
      >
        <svg-icon :name="availableLocale.code" size="sm"></svg-icon>
      </v-btn>
    </template>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useLocale } from "vuetify";
import { useCookie } from "#app";

// Composables
const { t, setLocale, locale } = useI18n();
const { current } = useLocale();

// Locale configuration
const availableLocales = computed(() => [
  {
    code: "en",
    name: t("languages.en"),
  },
  {
    code: "ar",
    name: t("languages.ar"),
  },
]);

const localeCookie = useCookie("locale");
const setInitialLocale = (newLocale) => {
  locale.value = newLocale;
  current.value = newLocale;
  setLocale(newLocale);
};
if (localeCookie.value) setInitialLocale(localeCookie.value);

const switchLocale = (newLocale) => {
  setInitialLocale(newLocale);
  localeCookie.value = newLocale;
};
</script>

<style lang="scss" scoped>
.locale-switcher {
  :deep(button) {
    padding: 0;
  }
}
</style>
