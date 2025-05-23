<template>
  <div class="home-page_container mt--100">
    <HeroSection />
    <ServicesSection />
    <ClientsSection />
    <PartnershipsSection />
    <NewsSection :posts="localePosts" />
    <CareersSection />
    <NewsletterSection />
  </div>
</template>

<script setup>
import HeroSection from "~/components/specific/Landing/HeroSection.vue";
import ServicesSection from "~/components/specific/Landing/ServicesSection.vue";
import ClientsSection from "~/components/specific/Landing/ClientsSection.vue";
import PartnershipsSection from "~/components/specific/Landing/PartnershipsSection.vue";
import NewsSection from "~/components/specific/Landing/NewsSection.vue";
import CareersSection from "~/components/specific/Landing/CareersSection.vue";
import NewsletterSection from "~/components/specific/Landing/NewsletterSection.vue";
import { posts } from "~/data/server";
const { locale } = useI18n();
const localePosts = computed(() => posts.value[locale.value]);

useHead({
  title: "Home",
  meta: [{ name: "description", content: "Home Page" }],
});
</script>

<style lang="scss">
.home-page_container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: rgb(var(--v-theme-background));
}
</style>
