<template>
  <main class="mt--100">
    <section class="flex justify-center items-center flex-col">
      <BreadCrumb class="w-100" />
      <SectionTitle class="w-100" :title="t('blogs.pageTitle')" />
    </section>

    <section>
      <VContainer>
        <VForm ref="newsletterForm">
          <VTextField
            :rules="[
              {
                required: true,
                pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              },
            ]"
            :placeholder="$t('blogs.search')"
            variant="plain"
            rounded
            hide-details
            density="comfortable"
          >
            <template #append-inner>
              <Button @click="submit" :title="$t('buttons.search')" />
            </template>
          </VTextField>
        </VForm>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <v-row>
          <v-col cols="4" v-for="post in localePosts" :key="post.id">
            <NewsCard class="w-100" :item="post" />
          </v-col>
        </v-row>
      </VContainer>
    </section>
  </main>
</template>

<script setup>
import { useBreadCrumbStore } from "@/stores/breadCrumb";
import NewsCard from "~/components/specific/Landing/NewsCard.vue";
const { setBreadcrumbs } = useBreadCrumbStore();
const { t } = useI18n();
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
    title: "nav.blogs",
    disabled: true,
    to: "/",
  },
]);

import { posts } from "~/data/server";
const { locale } = useI18n();
const localePosts = computed(() => posts.value[locale.value]);
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

.v-form {
  max-width: 860px;
  margin: auto;
  border: 1px solid rgba(var(--v-theme-input_border), 1);
  background: rgba(var(--v-theme-input_bg), 1);
  backdrop-filter: blur(8px);
  border-radius: 2rem;
  padding: 6px;
  padding-inline-start: 20px;

  input {
    padding-top: 0;
    padding-inline-start: 20px;
    color: rgba(var(--v-theme-input_text), 1);
    font-size: 0.875rem;
    &::placeholder {
      color: rgba(var(--v-theme-input_placeholder), 1);
    }
  }
  :deep(input) {
    padding: 0;
  }
  :deep(.v-field__append-inner) {
    padding: 0;
  }
}
</style>
