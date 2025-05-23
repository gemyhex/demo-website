<template>
  <div :class="theme.global.name.value" class="partners-section pt-100">
    <VContainer>
      <div class="partners-section_content">
        <Badge :title="$t('home.our_partners')" />

        <ShadowTitle class="mb-15" :title="$t('home.integrated_partners')" />
        <div class="partners-section_list">
          <SvgIcon name="clients_stars" class="section-bg"></SvgIcon>
          <div class="tabs-container">
            <v-tabs v-model="tab" align-tabs="center" class="mb-15" hide-slider>
              <v-tab :value="1">Digital infrastructure</v-tab>
              <div class="divider"></div>
              <v-tab :value="2">Information security</v-tab>
              <div class="divider"></div>
              <v-tab :value="3">Business Solution</v-tab>
            </v-tabs>
          </div>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="item in 3" :key="item">
              <EmblaCarousal :is-shadow="true" class="mb-80">
                <template #embla-items>
                  <div class="embla__slide" v-for="item in logos" :key="item">
                    <SvgIcon :transform="false" :name="item" size="free" />
                  </div>
                </template>
              </EmblaCarousal>
              <EmblaCarousal :is-shadow="true">
                <template #embla-items>
                  <div class="embla__slide" v-for="item in logos" :key="item">
                    <SvgIcon :transform="false" :name="item" size="free" />
                  </div>
                </template>
              </EmblaCarousal>
            </v-tabs-window-item>
          </v-tabs-window>
          <div class="mt-15 flex justify-center align-center">
            <Button :title="$t('buttons.become_partner')" />
          </div>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
import { ref } from "vue";
import EmblaCarousal from "~/components/specific/Landing/EmblaCarousal.vue";

const theme = useTheme();
const tab = ref(null);

const logos = ref([
  "Counfluence",
  "ChartMogul",
  "Better Uptime",
  "Discourse",
  "Ebay",
  "Anima",
  "Adobe",
  "Asana",
  "Breezy",
  "Clearscope",
  "Cron",
  "Coda",
  "DocuSign",
  "Gem",
]);
</script>

<style scoped lang="scss">
.light {
  .partners-section_list {
    background: linear-gradient(102.83deg, #ffffff 0%, #ffffff 100%);
    border: 1px solid #dadbe0;
  }
  .tabs-container {
    :deep(.v-tabs) {
      border: 1px solid rgba(var(--v-theme-s));

      .divider {
        background: rgba(var(--v-theme-white), 0.1);
      }
    }
  }
  .embla__slide {
    filter: grayscale(100%) contrast(200%);
  }
}
.dark {
  .partners-section_list {
    background: linear-gradient(
      180deg,
      #070709 0%,
      #38383800 70%,
      #ffffff1c 100%
    );
    border: 2px solid rgba(36, 37, 42, 1);
  }
}

.partners-section {
  .partners-section_content {
    width: 100%;
    position: relative;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-badge,
    .linear-section_title,
    .partners-section_list {
      z-index: 1;
    }

    svg {
      &.section-bg {
        width: 100%;
        position: absolute;
        top: -50%;
        z-index: 0;
      }
    }

    .partners-section_list {
      position: relative;
      width: 100%;
      border-radius: 56.575px;
      overflow: hidden;
      padding: 32px 32px 20px 32px;

      button.become-partner {
        background: rgba(var(--v-theme-bg_dark));
        border: 1px solid rgba(var(--v-theme-button_border));
        color: white;
        box-shadow: -8px -4px 22.1px 0 rgba(255, 255, 255, 0.1) inset,
          0px 8px 32px 0px rgba(255, 255, 255, 0.05) !important;
        border-radius: 32px;
        height: 52px;
        padding: 8px 40px;
      }

      .tabs-container {
        :deep(.v-tabs) {
          width: fit-content;
          height: fit-content;
          padding: 8px 10px;
          border-radius: 26px;
          margin: 0 auto;
          background: rgba(var(--v-theme-filter_bg), 1);
          border: 1px solid var(rgba(var(--v-theme-filter_border), 1));
          .v-slide-group__content {
            align-items: center;
          }

          .divider {
            width: 2px;
            height: 75%;
            //margin-top: 12.5%;
            border-radius: 8px;
            background: rgba(var(--v-theme-white), 0.1);
          }
        }

        button {
          color: rgba(var(--v-theme-filter_text), 1);
          border-radius: 32px;
          padding: 6px 16px;
          height: 32px;
          margin: 0 8px;

          &:first-child {
            margin-inline-start: 0;
          }

          &:hover {
            //color: rgba(var(--v-theme-white), 1);
            background: rgba(var(--v-theme-white), 0.15);
            border-radius: 32px;
          }

          &.v-tab--selected {
            background-color: rgba(var(--v-theme-white), 1);
            color: rgba(var(--v-theme-dark_4), 1);
          }
        }
      }
    }

    .section-badge {
      width: fit-content;
      height: fit-content;
      background: rgb(var(--v-theme-bg_dark));
      border: 1px solid rgb(var(--v-theme-button_border));
      color: rgb(var(--v-theme-white));
      padding: 4px 16px;
      border-radius: 32px;
    }

    .embla__slide {
      flex: 0 0 12.5%;
      transition: transform 0.3s ease, color 0.3s ease;
      cursor: default;
      text-align: center;

      svg {
        width: 100%;
        height: 40px;
        color: rgba(var(--v-theme-text), 1);
        &:hover {
          filter: none;
        }
      }
    }
  }
}
</style>
