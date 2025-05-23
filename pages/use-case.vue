<template>
  <main class="mt--100">
    <section class="flex justify-center items-center flex-col">
      <BreadCrumb class="w-100" />
      <SectionTitle class="w-100" :title="t('use_case.pageTitle')" />
      <SvgIcon
        :name="
          theme.global.name.value == 'light' ? 'use_case_light' : 'use_case'
        "
        size="free"
        maxWidth="630"
      />
    </section>
    <section class="content" v-for="section in sections" :key="section.index">
      <div class="container-fluid py-3">
        <v-row align="center">
          <v-col cols="6">
            <CardInfo
              :index="section.index"
              :title="section.title"
              :description="section.description"
            />
          </v-col>
          <v-col cols="6">
            <SvgIcon
              :name="
                theme.global.name.value === 'light'
                  ? section.svg + '_light'
                  : section.svg
              "
              size="free"
              maxWidth="630"
            />
          </v-col>
        </v-row>
      </div>
    </section>
    <NewsletterSection />
  </main>
</template>

<script setup>
import NewsletterSection from "~/components/specific/Landing/NewsletterSection.vue";
import { useBreadCrumbStore } from "@/stores/breadCrumb";
import { useTheme } from "vuetify";
const theme = useTheme();
const { t } = useI18n();

const { setBreadcrumbs } = useBreadCrumbStore();
useHead({
  title: t("nav.services_and_solutions"),
  meta: [{ name: "description", content: "Home Page" }],
});

setBreadcrumbs([
  {
    title: "nav.home",
    disabled: false,
    to: "/",
  },
  {
    title: "nav.use_case",
    disabled: true,
    to: "/",
  },
]);

const sections = ref([
  {
    index: "1",
    title: t("use_case.Environment"),
    description: t("lorem"),
    svg: "automated-customer-support",
  },
  {
    index: "2",
    title: t("use_case.Health_sector"),
    description: t("lorem"),
    svg: "AI-commands-center",
  },
  {
    index: "3",
    title: t("use_case.Haj"),
    description: t("lorem"),
    svg: "automated-customer-support",
  },
  {
    index: "4",
    title: t("use_case.oil"),
    description: t("lorem"),
    svg: "AI-Enhanced Analytics",
  },
  {
    index: "5",
    title: t("use_case.trade"),
    description: t("lorem"),
    svg: "automated-customer-support",
  },
  {
    index: "6",
    title: t("use_case.Industrial"),
    description: t("lorem"),
    svg: "AI-commands-center",
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

  section.content:nth-of-type(odd) {
    .v-row {
      flex-direction: row-reverse;
    }
  }
}
</style>
