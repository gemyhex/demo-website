<template>
  <main class="mt--100">
    <section>
      <BreadCrumb />
      <SectionTitle :title="t('artificial_intelligence.pageTitle')" />
    </section>

    <ItemsFilter :itemsTypes="projectsTypes" :items="projects">
      <template #item="{ item }">
        <NuxtLink :to="localePath(`/project/${item.id}`)">
          <Card
            type="vertical sm"
            :category="item.badge"
            :title="item.title"
            :description="
              item.description.length > 100
                ? item.description.slice(0, 100) + '...'
                : item.description
            "
            :svg="item.icon"
          />
        </NuxtLink>
      </template>
    </ItemsFilter>
    <NewsletterSection />
  </main>
</template>

<script setup>
import NewsletterSection from "~/components/specific/Landing/NewsletterSection.vue";
import { useBreadCrumbStore } from "@/stores/breadCrumb";
import { useI18n, useLocalePath } from "#imports";
const localePath = useLocalePath();
import projects from "~/data/projects";
const { t } = useI18n();
useHead({
  title: t("nav.artificial_intelligence"),
  meta: [{ name: "description", content: "Home Page" }],
});

const { setBreadcrumbs } = useBreadCrumbStore();
setBreadcrumbs([
  {
    title: "nav.home",
    disabled: false,
    to: "/",
  },
  {
    title: "nav.services_and_solutions",
    disabled: false,
    to: "/services-and-solutions",
  },
  {
    title: "nav.artificial_intelligence",
    disabled: true,
    to: "",
  },
]);

const projectsTypes = ref([
  {
    name: t("artificial_intelligence.video_image_analytics"),
    value: ".video",
  },
  {
    name: t("artificial_intelligence.voice_text_analytics"),
    value: ".voice",
  },
  {
    name: t("artificial_intelligence.generative_ai"),
    value: ".ai",
  },
  {
    name: t("artificial_intelligence.data_analytics"),
    value: ".data-analytics",
  },
]);
</script>

<style lang="scss" scoped>
main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: calc(135px);
  display: flex;
  flex-direction: column;
  gap: 78px;
}
</style>
