<template>
  <h3 :class="theme.global.name.value">{{ title }}</h3>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
h3 {
  max-width: 880px;
  text-align: center;
  font-family: var(--secondary-font);
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: rgba(var(--v-theme-dark_4), 1);
  width: fit-content;
  &.dark {
    background: linear-gradient(
      94.93deg,
      rgba(255, 255, 255, 0.3) 7.94%,
      #ffffff 28.75%,
      #ffffff 70.36%,
      rgba(255, 255, 255, 0.3) 91.16%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
