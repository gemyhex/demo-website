<template>
  <v-btn icon rounded-pill class="theme-btn" @click="switchTheme">
    <svg-icon :name="themeIcon" size="sm"></svg-icon>
  </v-btn>
</template>

<script setup>
import { useTheme } from "vuetify";

const themeIcon = computed(() =>
  theme.global.current.value.dark ? "moon" : "sun"
);
const modeCookie = useCookie("mode");

const theme = useTheme();

if (modeCookie.value) theme.global.name.value = modeCookie.value;

const switchTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  modeCookie.value = theme.global.name.value;
};
</script>

<style lang="scss" scoped>
//button {
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  width: 28px;
//  height: 28px;
//  padding: 2px 3px;
//  border-radius: 8px;
//  background-color: rgba(var(--v-theme-sidebar_bg), 1);
//  color: rgba(var(--v-theme-text_900), 1);
//}

:deep(button) {
  svg {
    width: 20px;
    height: 20px;
    color: rgba(var(--v-theme-text), 1);
  }
}
</style>
