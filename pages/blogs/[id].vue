<template>
  <main class="mt--100" :class="theme.global.name.value">
    <section class="flex justify-center items-center flex-col">
      <BreadCrumb class="w-100" />
      <SectionTitle class="w-100" :title="selectedPost.title" />
    </section>
    <section>
      <VContainer>
        <v-row>
          <v-col cols="5">
            <div class="titles flex flex-col gap-8">
              <p class="description">{{ $t("blogs.content") }}</p>
              <ul class="flex flex-col gap-8">
                <li class="flex flex-col gap-2" v-for="i in 6" :key="i">
                  <h3>{{ i }}. {{ $t("blogs.postTitle") }}</h3>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="7">
            <div class="flex flex-col gap-6 post">
              <h3>{{ selectedPost.title }}</h3>
              <img
                src="../../assets/images/icons/news_card.svg"
                :alt="selectedPost.title"
              />
              <ul class="flex flex-col gap-6">
                <li class="flex flex-col gap-2" v-for="i in 6" :key="i">
                  <h3>{{ i }}. {{ $t("blogs.postTitle") }}</h3>
                  <p class="description px-6">
                    {{ $t("blogs.postDescription") }}
                  </p>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </VContainer>
    </section>
    <NewsSection :posts="localePosts" :isIndex="false" />
    <NewsletterSection />
  </main>
</template>

<script setup>
import NewsSection from "~/components/specific/Landing/NewsSection.vue";
import NewsletterSection from "~/components/specific/Landing/NewsletterSection.vue";
import { useTheme } from "vuetify";
const theme = useTheme();
const { setBreadcrumbs } = useBreadCrumbStore();
const { t } = useI18n();
useHead({
  title: t("nav.services_and_solutions"),
  meta: [{ name: "description", content: "Home Page" }],
});

import { posts } from "~/data/server";
const { locale } = useI18n();

const route = useRoute();
const postId = route.params.id;
const localePosts = computed(() => posts.value[locale.value]);

const selectedPost = computed(() => {
  return posts.value[locale.value].find((post) => post.id === parseInt(postId));
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
  .post {
    > h3 {
      font-size: 2rem;
    }
    img {
      max-height: 288px;
      width: 100%;
      object-fit: cover;
      border-radius: 24px;
    }
    ul {
      li {
        h3 {
          font-family: var(--secondary-font);
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }
  .titles {
    backdrop-filter: blur(50px);

    width: 415px;
    border-radius: 2rem;
    padding: 2rem 1.5rem;
  }
}

.dark {
  .titles {
    background: linear-gradient(
      189.76deg,
      rgba(25, 28, 36, 0.5) 10.46%,
      rgba(12, 13, 17, 0.5) 89.54%
    );
  }
}
.light {
  .titles {
    background: #4dc3ff1a;
  }
  :deep() {
    .blur-background {
      display: none;
    }
  }
}
</style>
