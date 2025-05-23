<template>
  <div :class="theme.global.name.value" class="clients-section pt-100">
    <VContainer>
      <div class="clients-section_content">
        <SvgIcon name="clients_stars" size="free" class="section-bg" />
        <Badge :title="$t('home.our_clients')" />

        <ShadowTitle class="mb-15" :title="$t('home.client_success')" />

        <div class="clients-section_list mt-15">
          <EmblaCarousal class="mb-80">
            <template #embla-items>
              <div class="embla__slide" v-for="item in 10" :key="item">
                <SvgIcon
                  :transform="false"
                  :name="`partner_R${item}`"
                  size="free"
                  class="logo_standard"
                />
              </div>
            </template>
          </EmblaCarousal>
          <EmblaCarousal start-index="1">
            <template #embla-items>
              <div class="embla__slide" v-for="item in 10" :key="item">
                <SvgIcon
                  :transform="false"
                  :name="`partner_R${item}`"
                  size="free"
                />
              </div>
            </template>
          </EmblaCarousal>
        </div>
        <div class="split-border"></div>
      </div>
    </VContainer>
    <div class="blur-background"></div>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
import emblaCarouselVue from "embla-carousel-vue";
import { ref } from "vue";
import EmblaCarousal from "~/components/specific/Landing/EmblaCarousal.vue";

const theme = useTheme();
const [emblaRef] = emblaCarouselVue({
  loop: true,
  draggable: true,
  dragFree: true,
  align: "center",
  containScroll: "trimSnaps",
  startIndex: 0,
});

const [emblaRefI] = emblaCarouselVue({
  loop: true,
  draggable: true,
  dragFree: true,
  align: "center",
  containScroll: "trimSnaps",
  startIndex: 3,
});
</script>

<style scoped lang="scss">
.dark {
  .clients-section {
    .clients-section_content {
      &:before {
        border: 2px solid rgba(36, 37, 42, 1);
      }
    }
  }
}
.light {
  .clients-section {
    &:before {
      border: 2px solid #dfdfdf00;
    }
  }
  .embla__slide {
    color: rgb(var(--v-theme-text), 1) !important;
  }
}

.clients-section {
  position: relative;
  .clients-section_content {
    width: 100%;
    position: relative;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 56.575px 56.575px;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60%;
      border-top: none;
      border-radius: 0 0 56.575px 56.575px;
    }

    .section-badge,
    .linear-section_title,
    .clients-section_list {
      z-index: 1;
    }
    svg {
      &.section-bg {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 0;
      }
    }

    .clients-section_list {
      width: 100%;
      padding-inline-start: 5px;
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
  }
}

.embla__slide {
  flex: 0 0 12.5%;
  transition: transform 0.3s ease, color 0.3s ease;
  cursor: default;
  text-align: center;
  svg {
    width: 100%;
    height: 40px;
  }
}

.blur-background {
  width: 406px;
  height: 406px;
  bottom: -30%;
  left: -10%;
  filter: blur(350px);
}
</style>
