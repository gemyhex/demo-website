<template>
  <div :class="theme.global.name.value" class="embla" ref="emblaRef">
    <div class="embla__container">
      <slot name="embla-items"></slot>
    </div>
    <div class="mt-15 flex justify-center align-center" v-if="props.isActions">
      <div class="embla-actions flex align-center gap-6">
        <v-btn icon @click="scrollPrev">
          <svg-icon name="arrow--left" size="xs"></svg-icon>
        </v-btn>
        <div class="embla-dots">
          <div
            v-for="(dot, index) in totalSlides"
            :key="index"
            class="dot"
            :class="{ active: index === activeIndex }"
            @click="scrollTo(index)"
          ></div>
        </div>
        <v-btn icon @click="scrollNext">
          <svg-icon name="arrow--right" size="xs"></svg-icon>
        </v-btn>
      </div>
    </div>
    <div class="shadow left" v-if="isShadow"></div>
    <div class="shadow right" v-if="isShadow"></div>
  </div>
</template>
<script setup>
import { useTheme } from "vuetify";
import emblaCarouselVue from "embla-carousel-vue";
const { locale } = useI18n();
const theme = useTheme();
const props = defineProps({
  startIndex: { type: [Number, String], default: 0 },
  isShadow: { type: Boolean, default: false },
  isActions: { type: Boolean, default: false },
  loop: { type: Boolean, default: true },
});

const totalSlides = ref(0);
const activeIndex = ref(0);
const emblaApi = ref(null);

const [emblaRef, emblaInstance] = emblaCarouselVue({
  loop: props.loop,
  draggable: true,
  dragFree: false,
  align: "center",
  direction: locale.value == "ar" ? "rtl" : "ltr",
  containScroll: "trimSnaps",
  startIndex: props.startIndex,
});

const scrollTo = (index) => {
  if (emblaApi.value) {
    emblaApi.value.scrollTo(index);
    activeIndex.value = emblaApi.value.selectedScrollSnap();
  }
};

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

onMounted(() => {
  emblaApi.value = emblaInstance.value;

  if (emblaApi.value) {
    totalSlides.value = emblaApi.value.scrollSnapList().length;

    emblaApi.value.on("select", () => {
      activeIndex.value = emblaApi.value.selectedScrollSnap();
    });
  }
});
</script>
<style scoped lang="scss">
.dark {
  .shadow {
    background: linear-gradient(270deg, #0c0c0f 0%, rgba(12, 12, 15, 0) 100%);
  }
}
.light {
  .shadow {
    background: linear-gradient(
      270deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  :deep() {
    .embla__slide {
      color: rgba(var(--v-theme-text), 0.3) !important;
      &--active {
        color: rgba(var(--v-theme-text), 1) !important;
      }
    }
  }
}

.embla__container {
  display: flex;
  align-items: center;
  gap: 20px;
  will-change: transform;
}

.shadow {
  width: 150px;
  height: 48px;
  position: absolute;
  top: 0;
  &.left {
    left: 0;
    transform: rotate(180deg);
  }

  &.right {
    right: 0;
  }
}
</style>
