+
<template>
  <main class="mt--100">
    <section>
      <BreadCrumb />
      <SectionTitle :title="t('aboutUs.aboutUsDescription')" />
    </section>
    <section>
      <VContainer>
        <v-row align="center">
          <v-col cols="6">
            <SvgIcon name="AI-Enhanced Analytics" size="free" maxWidth="630" />
          </v-col>
          <v-col cols="6">
            <CardInfo
              :badge="t('home.wakeb_ai')"
              :title="t('project.name')"
              :innerDescription="t('services.cloudHostingDescription')"
            />
          </v-col>
        </v-row>
      </VContainer>
    </section>
    <section>
      <VContainer>
        <div
          :class="theme.global.name.value"
          class="flex justify-center items-center gap-6 flex-col"
        >
          <SvgIcon
            :name="
              theme.global.name.value === 'light' ? 'vision_light' : 'vision'
            "
            size="free"
            maxWidth="196"
          />
          <ShadowTitle :title="t('about_us.visionTitle')" />
          <p class="description">
            {{ t("about_us.visionDescription") }}
          </p>
        </div>
      </VContainer>
    </section>
    <section>
      <VContainer>
        <div
          :class="theme.global.name.value"
          class="section-bg quotation flex justify-center items-center gap-6 flex-col"
        >
          <ShadowTitle :title="t('about_us.quotationTitle')" />
          <h4>{{ t("about_us.quotationDescription") }}</h4>
          <div class="info">
            <p class="description text-center">
              {{ t("about_us.quotationInfo") }}
            </p>
          </div>
        </div>
      </VContainer>
    </section>
    <section>
      <VContainer>
        <div
          :class="theme.global.name.value"
          class="section-bg flex justify-center items-center gap-6 flex-col"
        >
          <div class="location">
            <SvgIcon name="location" maxWidth="40" />
          </div>
          <ShadowTitle :title="t('about_us.headOffice')" />
          <p class="description text-center">
            {{ t("about_us.headAddress") }}
          </p>
        </div>
        <NewsletterSection />
      </VContainer>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from "#imports";

import NewsletterSection from "~/components/specific/Landing/NewsletterSection.vue";
import { useBreadCrumbStore } from "@/stores/breadCrumb";
const { t } = useI18n();
import { useTheme } from "vuetify";
const theme = useTheme();
const { setBreadcrumbs } = useBreadCrumbStore();
useHead({
  title: t("nav.about_us"),
  meta: [{ name: "description", content: "Home Page" }],
});

setBreadcrumbs([
  {
    title: "nav.home",
    disabled: false,
    to: "/",
  },
  {
    title: "nav.about_us",
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
  .quotation {
    max-width: 1150px;
    margin: 0 auto;
    padding: 53px 65px;
    border-radius: 42px;
    &.dark {
      background: linear-gradient(
        102.83deg,
        rgba(25, 28, 36, 0.05) 0%,
        #0c0d11 100%
      );
    }

    &.light {
      background-color: rgba(#4dc3ff1a, 0.1);

      h4 {
        color: #949494;
      }

      .info {
        &::before,
        &::after {
          color: #949494;
        }
      }
    }

    .info {
      position: relative;
      &::before {
        content: "“";
        position: absolute;
        color: rgba(var(--v-theme-white), 0.5);
        font-size: 5rem;
        inset-inline-end: -3rem;
        line-height: 5rem;
        top: 0;
      }
      &::after {
        content: "“";
        position: absolute;
        color: rgba(var(--v-theme-white), 0.5);
        font-size: 5rem;
        inset-inline-start: -3rem;
        line-height: 5rem;
        bottom: 0;
        transform: rotate(180deg);
      }
    }
  }
  .section-bg {
    position: relative;
    z-index: 2;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      inset: 0;
      background: url("@/assets/images/icons/card-bg.svg") no-repeat center
        center/cover;
      z-index: 1;
      background-size: 100% 290%;
    }
  }
  .dark {
    .location {
      background-color: #070709;
    }
  }
  .light {
    .location {
      background-color: rgba(#4dc3ff1a, 0.1);

      svg {
        color: #4dc3ff;
      }
    }
  }
  .location {
    width: 80px;
    height: 80px;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h4 {
    color: rgba(var(--v-theme-white), 1);
    font-size: 1.5rem;
  }
}
</style>
