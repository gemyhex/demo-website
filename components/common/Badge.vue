<template>
  <div :class="theme.global.name.value">{{ title }}</div>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  border-radius: 32px;
  background: #27282e;
  color: rgba(var(--v-theme-badge), 1) !important;
  background-color: rgba(var(--v-theme-badge_bg), 1);
  box-shadow: 0px 4px 4px 0px #00000026;
  font-family: var(--font-family);
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  white-space: nowrap;
  &.light {
    box-shadow: unset;
  }
}
</style>
