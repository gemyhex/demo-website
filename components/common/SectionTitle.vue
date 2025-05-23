<template>
  <div class="flex flex-col justify-center align-center">
    <h2 :class="theme.global.name.value" v-if="title">{{ title }}</h2>
    <p v-if="description" class="text-center">{{ description }}</p>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
defineProps({
  title: String,
  description: String,
});
</script>

<style lang="scss" scoped>
div {
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
h2 {
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  color: rgba(var(--v-theme-text), 1);
  font-family: var(--secondary-font);
  &.dark {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 25%,
      #fff 75%,
      rgba(255, 255, 255, 0) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

p {
  color: rgba(var(--v-theme-text), 0.3);
  text-align: center;
  font-family: var(--font-family);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2rem;
}
</style>
