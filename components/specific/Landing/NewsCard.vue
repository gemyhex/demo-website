<template>
  <NuxtLink
    :class="theme.global.name.value"
    :to="localePath(`/blogs/${item.id}`)"
    class="embla__slide"
  >
    <div class="news-cover">
      <img
        :src="item.image"
        srcset="../../../assets/images/icons/news_card.svg"
        :alt="title"
      />
      <div class="overlay">
        <div class="section-badge">{{ item.badge }}</div>
      </div>
    </div>
    <div class="card-info_section">
      <p>
        <img src="../../../assets/images/icons/clock.svg" alt="" />
        <span>{{ item.time }}</span>
      </p>
      <Badge class="category" :title="item.category" />
      <!-- <div class="section-badge">{{ item.category }}</div> -->
    </div>
    <div class="card-description">
      <p>{{ item.title }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
import { useTheme } from "vuetify";
import { useLocalePath } from "#imports";
const localePath = useLocalePath();
const theme = useTheme();

defineProps({
  item: Object,
});
</script>

<style scoped lang="scss">
.embla__slide {
  width: 413px;
  flex: 0 0 25.75%;
  transition: transform 0.3s ease, color 0.3s ease;
  padding: 16px 16px 20px 16px;
  min-height: 300px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &.dark {
    background: linear-gradient(181deg, rgba(7, 7, 9, 0) 1.15%, #191c24 99.54%);
    border: 1px solid rgba(var(--v-theme-border_light_gray));
    .card-info_section {
      p {
        color: rgba(var(--v-theme-text), 0.3);
      }
    }
    .section-badge {
      background: rgba(var(--v-theme-bg_gray));
      border-color: rgba(var(--v-theme-border_gray));
    }
  }
  &.light {
    background: #4dc3ff1a;
    border: 1px solid #f1f1f1;
    .card-info_section {
      p {
        color: rgba(var(--v-theme-text), 1);
      }
    }
    .category {
      box-shadow: unset;
      background: #4dc3ff1a;
    }
    .section-badge {
      background: #f1f1f1;
      border: 1px solid #fff;
      color: rgba(var(--v-theme-text), 1);
    }
  }

  .news-cover {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    height: 288px;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 24px;
      height: 100%;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 98%;
      border-radius: 32px;

      .section-badge {
        position: absolute;
        top: 10px;
        left: 10px;
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
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        width: 20px;
      }
      span {
        font-size: 0.87rem;
      }
    }
  }

  .card-description {
    color: rgba(var(--v-theme-text));
    font-size: clamp(0.625rem, 5vw, 0.875rem);
  }
}
</style>
