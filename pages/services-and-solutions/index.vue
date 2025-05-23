<template>
  <main class="mt--100">
    <section>
      <BreadCrumb />
      <SectionTitle
        :title="t('services.pageTitle')"
        :description="t('services.pageDescription')"
      />
    </section>
    <section>
      <VContainer>
        <v-row align="center">
          <v-col cols="6">
            <CardInfo
              index="1"
              :title="t('services.aiServiceTitle')"
              :innerDescription="t('services.aiServiceDescription')"
              :button="t('services.aiExploreButton')"
              buttonLink="services-and-solutions/artificial-intelligence"
            />
          </v-col>

          <v-col cols="6" class="flex flex-col gap-6">
            <div class="gird-1-2">
              <NuxtLink
                v-for="(project, index) in randomThreeProjects"
                :key="project.id"
                :to="localePath(`/project/${project.id}`)"
              >
                <Card
                  :type="index == 0 ? 'horizontal' : 'cross'"
                  :badge="index == 0 ? project.badge : ''"
                  :title="project.title"
                  :description="
                    project.description.length > 50
                      ? project.description.slice(0, 50) + '...'
                      : project.description
                  "
                  :svg="project.icon"
                />
              </NuxtLink>
            </div>
          </v-col>
        </v-row>
      </VContainer>
    </section>
    <section>
      <VContainer>
        <v-row align="center">
          <v-col cols="6" class="flex flex-col gap-6">
            <div class="gird-2-1">
              <NuxtLink
                v-for="(project, index) in randomThreeProjects2"
                :key="project.id"
                :to="localePath(`/project/${project.id}`)"
              >
                <Card
                  :type="index == 0 ? 'vertical' : 'cross'"
                  :badge="index == 0 ? project.badge : ''"
                  :title="project.title"
                  :description="
                    project.description.length > 50
                      ? project.description.slice(0, 50) + '...'
                      : project.description
                  "
                  :svg="project.icon"
                />
              </NuxtLink>
            </div>
          </v-col>
          <v-col cols="6">
            <CardInfo
              index="2"
              :title="t('services.cloudHostingTitle')"
              :innerDescription="t('services.cloudHostingDescription')"
              :button="t('services.aiExploreButton')"
              buttonLink="services-and-solutions/artificial-intelligence"
            />
          </v-col>
        </v-row>
      </VContainer>
    </section>
    <section>
      <VContainer>
        <v-row align="center">
          <v-col cols="6">
            <CardInfo
              index="3"
              :title="t('services.specializedServicesTitle')"
              :innerDescription="t('services.specializedServicesDescription')"
              :button="t('services.aiExploreButton')"
              buttonLink="services-and-solutions/artificial-intelligence"
            />
          </v-col>
          <v-col cols="6" class="flex flex-col gap-6">
            <div class="gird-1-2">
              <NuxtLink
                v-for="(project, index) in randomThreeProjects3"
                :key="project.id"
                :to="localePath(`/project/${project.id}`)"
              >
                <Card
                  :type="index == 0 ? 'horizontal' : 'cross'"
                  :badge="index == 0 ? project.badge : ''"
                  :title="project.title"
                  :description="
                    project.description.length > 50
                      ? project.description.slice(0, 50) + '...'
                      : project.description
                  "
                  :svg="project.icon"
                />
              </NuxtLink>
            </div>
          </v-col>
        </v-row>
      </VContainer>
    </section>
    <section>
      <VContainer>
        <v-row align="center" class="flex-row-reverse">
          <v-col cols="6">
            <CardInfo
              index="4"
              :title="t('services.digitalEnvironmentTitle')"
              :innerDescription="t('services.digitalEnvironmentDescription')"
              :button="t('services.aiExploreButton')"
              buttonLink="services-and-solutions/artificial-intelligence"
            />
          </v-col>
          <v-col cols="6" class="flex flex-col gap-6">
            <div class="gird-1-2">
              <NuxtLink
                v-for="(project, index) in randomThreeProjects4"
                :key="project.id"
                :to="localePath(`/project/${project.id}`)"
              >
                <Card
                  :type="index == 0 ? 'horizontal' : 'cross'"
                  :badge="index == 0 ? project.badge : ''"
                  :title="project.title"
                  :description="
                    project.description.length > 50
                      ? project.description.slice(0, 50) + '...'
                      : project.description
                  "
                  :svg="project.icon"
                />
              </NuxtLink>
            </div>
          </v-col>
        </v-row>
      </VContainer>
    </section>
    <NewsletterSection />
  </main>
</template>

<script setup>
import NewsletterSection from "~/components/specific/Landing/NewsletterSection.vue";
import { useBreadCrumbStore } from "@/stores/breadCrumb";
import projects from "~/data/projects";
import { useI18n, useLocalePath } from "#imports";
const localePath = useLocalePath();
const randomThreeProjects = projects
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);

const randomThreeProjects2 = projects
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);

const randomThreeProjects3 = projects
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);

const randomThreeProjects4 = projects
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);

const { t } = useI18n();

const { setBreadcrumbs } = useBreadCrumbStore();
setBreadcrumbs([
  {
    title: "nav.home",
    disabled: false,
    to: "/",
  },
  {
    title: "nav.services_and_solutions",
    disabled: true,
    to: "",
  },
]);

useHead({
  title: t("nav.services_and_solutions"),
  meta: [{ name: "description", content: "Home Page" }],
});
</script>

<style lang="scss" scoped>
main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: rgb(var(--v-theme-background));
  padding-top: calc(135px);
  display: flex;
  flex-direction: column;
  gap: 124px;
}

.gird-1-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  a:nth-of-type(1) {
    grid-area: 1 / 1 / 2 / 3;
  }
  a:nth-of-type(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  a:nth-of-type(3) {
    grid-area: 2 / 2 / 3 / 3;
  }
}
.gird-2-1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  a:nth-of-type(1) {
    grid-area: 1 / 1 / 3 / 2;
  }
  a:nth-of-type(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  a:nth-of-type(3) {
    grid-area: 2 / 2 / 3 / 3;
  }
}

:deep() {
  .vertical {
    .side {
      transform: translateX(-50%) !important;
    }
  }
}
</style>
