<template>
  <v-app>
    <MainNav />
    <v-main>
      <NuxtLoadingIndicator />
      <slot></slot>
    </v-main>
    <MainFooter />
  </v-app>
</template>

<script setup>
import MainNav from "../components/layout/MainNav.vue";
import MainFooter from "../components/layout/MainFooter.vue";
</script>

<style lang="scss" scoped>
.v-layout {
  display: flex;
  flex-direction: column;
  .v-main {
    position: relative;
    flex: 1;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      inset: 0;
      background: url("@/assets/images/icons/squares.svg") no-repeat center
        center/cover;
    }
  }
}
</style>
