<template>
  <div :class="theme.global.name.value" class="services-section pt-100">
    <div class="flex align-center gap-2">
      <EmblaCarousal is-shadow :loop="false">
        <template #embla-items>
          <div
            v-for="(item, index) in slides"
            :key="index"
            :class="[
              'embla__slide',
              { 'embla__slide--active': activeIndex === index },
            ]"
          >
            {{ item }}
          </div>
        </template>
      </EmblaCarousal>
      <div class="embla-actions flex align-center gap-6">
        <v-btn icon @click="scrollPrev">
          <svg-icon
            name="arrow--left"
            size="xs"
            :class="current === 'ar' ? 'rtl-dir' : ''"
          ></svg-icon>
        </v-btn>
        <v-btn icon @click="scrollNext">
          <svg-icon
            name="arrow--right"
            size="xs"
            :class="current === 'ar' ? 'rtl-dir' : ''"
          ></svg-icon>
        </v-btn>
      </div>
    </div>
    <VContainer>
      <div class="services-section_content">
        <svg-icon
          name="services_before"
          size="free"
          class="services_before"
        ></svg-icon>
        <svg-icon
          name="services_after"
          size="free"
          class="services_after"
        ></svg-icon>
        <div class="blur-background"></div>
        <div class="services-cards_container">
          <VContainer>
            <VRow>
              <VCol cols="12" sm="12" md="5">
                <Card
                  type="horizontal"
                  :badge="$t('services.wakebAiSolutionBadge')"
                  :title="$t('services.awareTitle')"
                  :button="$t('services.seeMoreButton')"
                  :description="$t('services.awareDescription')"
                  :svg="
                    theme.global.name.value === 'light'
                      ? 'automated-customer-support_light'
                      : 'automated-customer-support'
                  "
                />
              </VCol>
              <VCol cols="12" sm="12" md="7">
                <Card
                  type="horizontal"
                  :badge="$t('services.wakebAiSolutionBadge')"
                  :title="$t('services.awareTitle')"
                  :button="$t('services.seeMoreButton')"
                  :description="$t('services.awareDescription')"
                  :svg="
                    theme.global.name.value === 'light'
                      ? 'automated-customer-support_light'
                      : 'automated-customer-support'
                  "
                />
              </VCol>
              <VCol cols="12" sm="12" md="7">
                <Card
                  type="horizontal"
                  :badge="$t('services.wakebAiSolutionBadge')"
                  :title="$t('services.awareTitle')"
                  :button="$t('services.seeMoreButton')"
                  :description="$t('services.awareDescription')"
                  :svg="
                    theme.global.name.value === 'light'
                      ? 'AI-commands-center_light'
                      : 'AI-commands-center'
                  "
                />
              </VCol>
              <VCol cols="12" sm="12" md="5">
                <Card
                  type="horizontal"
                  :badge="$t('services.wakebAiSolutionBadge')"
                  :title="$t('services.awareTitle')"
                  :button="$t('services.seeMoreButton')"
                  :description="$t('services.awareDescription')"
                  :svg="
                    theme.global.name.value === 'light'
                      ? 'AI-commands-center_light'
                      : 'AI-commands-center'
                  "
                />
              </VCol>
            </VRow>
          </VContainer>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import { useLocale, useTheme } from "vuetify";
import EmblaCarousal from "~/components/specific/Landing/EmblaCarousal.vue";

const theme = useTheme();
const { current } = useLocale();
const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: true,
  draggable: true,
  dragFree: false,
  align: "center",
  containScroll: "trimSnaps",
  startIndex: 2,
});

const activeIndex = ref(2);
const slides = ref([
  "Web Solutions",
  "UAV's",
  "Artificial Intelligence",
  "Cloud Hosting",
  "Specialized Services",
  "Digital Environment",
  "Data",
  "Others",
]);

const scrollPrev = () => {
  if (emblaApi.value) {
    emblaApi.value.scrollPrev();
    activeIndex.value = emblaApi.value.selectedScrollSnap();
  }
};

const scrollNext = () => {
  if (emblaApi.value) {
    emblaApi.value.scrollNext();
    activeIndex.value = emblaApi.value.selectedScrollSnap();
  }
};

const scrollTo = (index) => {
  if (emblaApi.value) {
    emblaApi.value.scrollTo(index);
    activeIndex.value = emblaApi.value.selectedScrollSnap();
  }
};
</script>

<style scoped lang="scss">
.light {
  .blur-background {
    display: none;
  }
  .services_before {
    display: none !important;
  }

  :deep() {
    svg {
      filter: unset !important;
    }
  }

  .embla-actions {
    button {
      background: #e8e8e8;
      border: 1px solid #ffffff;
      box-shadow: -8px -4px 22.1px 0px #ffffff1a inset;
      box-shadow: 0px 8px 32px 0px #ffffff0d;
      :deep() {
        svg * {
          fill: #000000;
        }
      }
    }
  }
}

.services-section {
  min-height: 100vh;

  .services_before {
    bottom: 20%;
    left: -6%;
  }

  .services_after {
    top: 18%;
    right: -10%;
  }
  .services_before,
  .services_after {
    position: absolute;
    height: 95px;
  }

  .services-section_content {
    position: relative;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;

    .services-cards_container {
      z-index: 1;
      width: calc(100%);
      height: 100%;

      .card {
        min-height: 246px;
        max-height: 260px;
        height: 100%;
      }
    }
  }

  .embla {
    padding-inline-start: 25px;
  }

  .embla__slide {
    flex: 0 0 12.5%;
    min-width: fit-content;
    transition: transform 0.3s ease, color 0.3s ease;
    color: rgba(var(--v-theme-white), 0.3);
    font-family: var(--secondary-font);
    font-size: clamp(1rem, 5vw, 2rem);
    font-weight: 600;
    letter-spacing: 1.7px;
    text-align: center;
    cursor: pointer;

    &:hover,
    &.embla__slide--active {
      color: rgba(var(--v-theme-white), 1);
      transition: all 0.3s ease;
    }
  }
}

.blur-background {
  width: 450px;
  height: 450px;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, 25%);
  z-index: 0;
}
</style>
