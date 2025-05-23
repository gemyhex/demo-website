<template>
  <div class="news-section pt-100" :class="theme.global.name.value">
    <div class="blur-background"></div>
    <VContainer fluid>
      <div class="news-section_content">
        <div class="flex flex-col items-center" v-if="isIndex">
          <Badge :title="$t('home.our_news')" />

          <ShadowTitle class="mb-6" :title="$t('home.last_news')" />
        </div>
        <div class="flex justify-between w-100" v-else>
          <ShadowTitle class="mb-6" :title="$t('blogs.similarNews')" />
          <Button :title="$t('buttons.see_all')" type="outline" link="/blogs" />
        </div>
        <div class="news-section_list">
          <div class="slides-container">
            <EmblaCarousal :loop="false" :is-actions="true">
              <template #embla-items>
                <NewsCard v-for="post in posts" :key="post.id" :item="post" />
              </template>
            </EmblaCarousal>
          </div>
        </div>
      </div>
    </VContainer>
  </div>
</template>
<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
import emblaCarouselVue from "embla-carousel-vue";
import EmblaCarousal from "~/components/specific/Landing/EmblaCarousal.vue";
import NewsCard from "~/components/specific/Landing/NewsCard.vue";
defineProps({
  posts: Array,
  isIndex: { type: Boolean, default: true },
});
</script>
<style scoped lang="scss">
.news-section {
  position: relative;
  .news-section_content {
    width: 100%;
    position: relative;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-badge,
    .linear-section_title,
    .news-section_list {
      z-index: 1;
    }

    img {
      &.section-bg {
        width: 100%;
        position: absolute;
        top: -50%;
        z-index: 0;
      }
    }

    .news-section_list {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }
}

.embla__slide {
  min-width: 413px;
  flex: 0 0 25.75%;
  transition: transform 0.3s ease, color 0.3s ease;
  background: linear-gradient(181deg, rgba(7, 7, 9, 0) 1.15%, #191c24 99.54%);
  padding: 16px 16px 20px 16px;
  min-height: 300px;
  border-radius: 32px;
  border: 1px solid rgba(var(--v-theme-border_light_gray));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .news-cover {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 24px;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 24px;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 98%;
      //z-index: -1;
      //background-color: rgba(0, 0, 255, 0.5);
      //mix-blend-mode: hue;
      //filter: brightness(0.9) contrast(1.1);
      border-radius: 32px;

      .section-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        background: rgba(var(--v-theme-bg_gray));
        border-color: rgba(var(--v-theme-border_gray));
        font-size: clamp(0.625rem, 5vw, 0.875rem);
      }
    }

    &:hover img {
      transform: scale(1.175);
      transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    }
  }

  .card-info_section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: clamp(0.625rem, 5vw, 0.875rem);

    p {
      color: rgba(var(--v-theme-white), 0.3);
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 20px;
      }
    }

    .section-badge {
      background: rgba(var(--v-theme-white), 0.03);
      border: none;
    }
  }

  .card-description {
    color: rgba(var(--v-theme-white));
    font-size: clamp(0.625rem, 5vw, 0.875rem);
  }
}

:deep() {
  .embla-actions {
    button {
      width: 52px;
      height: 52px;
    }
  }
  .embla-dots {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 99px;

      &.active {
        width: 24px;
      }
    }
  }
}

.dark {
  :deep() {
    .embla-actions {
      button {
        box-shadow: -8px -4px 22.1px 0px rgba(255, 255, 255, 0.1019607843) inset,
          0px 8px 32px 0px rgba(255, 255, 255, 0.0509803922) inset !important;
        background: rgba(var(--v-theme-bg_dark));
        border: 1px solid rgba(var(--v-theme-button_border));
        color: white;
      }
    }
    .embla-dots {
      .dot {
        background: rgba(var(--v-theme-white), 0.3);
        &.active {
          background: rgb(var(--v-theme-white));
        }
      }
    }
  }
}
.light {
  :deep() {
    .embla-actions {
      button {
        box-shadow: -8px -4px 22.1px 0px #ffffff1a inset;
        box-shadow: 0px 8px 32px 0px #ffffff0d;
        background: #f1f1f1;
        border: 1px solid #d9d9d9;
        svg * {
          fill: #4dc3ff;
        }
      }
    }
    .embla-dots {
      .dot {
        background: rgba(#4dc3ff, 0.3);
        &.active {
          background: #4dc3ff;
        }
      }
    }
  }
}

.blur-background {
  width: 589px;
  height: 589px;
  top: 0;
  right: -15%;
  filter: blur(250px);
}
</style>
