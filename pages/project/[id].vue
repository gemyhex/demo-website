<template>
  <main class="mt--100">
    <section>
      <VContainer>
        <v-row align="center">
          <v-col cols="6">
            <CardInfo
              :badge="project.badge"
              :title="project.title"
              :description="project.description"
              :button="t('contact_us')"
            />
          </v-col>
          <v-col cols="6">
            <SvgIcon
              class="project-icon"
              :class="theme.global.name.value"
              :name="project.icon"
              size="free"
              maxWidth="630"
            />
          </v-col>
        </v-row>
      </VContainer>
    </section>
    <section v-for="(feature, index) in project.features" :key="index">
      <VContainer>
        <div class="flex flex-col gap-4 items-center justify-center mb-15">
          <Badge :title="$t('features')" />
          <ShadowTitle :title="feature?.title" />
        </div>
        <v-row align="center">
          <v-col cols="4" v-for="item in feature?.list" :key="item.id">
            <div class="card flex flex-col items-start justify-start">
              <SvgIcon name="stars" size="free" class="absolute" />
              <div class="icon">
                <SvgIcon :name="item.icon" size="lg"></SvgIcon>
              </div>
              <h3>{{ item.title }}</h3>
            </div>
          </v-col>
        </v-row>
      </VContainer>
    </section>
    <FreeTrial />
  </main>
</template>

<script setup>
import { useI18n } from "#imports";
import projects from "@/data/projects.js";
import { useTheme } from "vuetify";
import FreeTrial from "~/components/specific/Landing/FreeTrial.vue";
const theme = useTheme();
const { t } = useI18n();
const route = useRoute();
const { id } = route.params;
const project = projects.find((project) => project.id == id);
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

.project-icon.light {
  filter: invert(1);
}

.card {
  background-color: rgba(var(--v-theme-card_bg), 1);
  gap: 52px;
  position: relative;
  overflow: hidden;
  padding: 32px;
  border-radius: 42px;
  min-height: 344px;
  .absolute {
    position: absolute;
    left: 0;
    width: unset;
    height: 70%;
    bottom: 0;
    top: 20%;
    z-index: 1;
  }
  .icon {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 24px;
    position: relative;
    z-index: 2;
    background-color: rgba(var(--v-theme-card_icon_bg));
    color: rgba(var(--v-theme-card_icon), 1);
  }
  h3 {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    color: rgba(var(--v-theme-card_text), 1);
  }
}
</style>
