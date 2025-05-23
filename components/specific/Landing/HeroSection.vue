<template>
  <div class="hero-section" :class="theme.global.name.value">
    <SvgIcon
      :name="theme.global.name.value == 'light' ? 'hero_bg_light' : 'hero_bg'"
      class="section_bg"
      size="free"
    />
    <VContainer>
      <div class="hero-section_content">
        <div>
          <v-btn rounded-pill class="company-solution_badge">
            <svg-icon name="star" size="xs"></svg-icon>
            <span class="ms-2">{{ $t("home.wakeb_ai") }}</span>
          </v-btn>
        </div>
        <ShadowTitle :title="$t('home.discover_future')" />
        <p class="hero-section_description">
          {{ $t("home.hero_desc_p1") }} <br />
          {{ $t("home.hero_desc_p2") }}
        </p>
        <div class="hero-section_btns mt-10">
          <Button
            :title="$t('buttons.our_solutions')"
            type="primary"
            icon="arrow"
          />

          <v-btn append-icon="mdi-arrow-right" elevation="0">
            <span>{{ $t("buttons.video") }}</span>
            <template #append>
              <svg-icon
                name="play-circle"
                size="xs"
                :class="current === 'ar' ? 'rtl-dir' : ''"
              ></svg-icon>
            </template>
          </v-btn>
        </div>
      </div>
    </VContainer>
    <div class="contact-us_btn">
      <v-btn icon size="72" rounded-pill color="#171717">
        <svg-icon name="message" size="md"></svg-icon>
      </v-btn>
    </div>
  </div>
</template>
<script setup>
import { useLocale, useTheme } from "vuetify";

const theme = useTheme();
const { current } = useLocale();
</script>
<style scoped lang="scss">
.dark {
  .company-solution_badge {
    background: rgb(var(--v-theme-bg_dark));
    border: 1px solid rgb(var(--v-theme-button_border));
    color: rgb(var(--v-theme-white));
  }
  .hero-section_btns {
    button {
      &:last-child {
        background: rgba(var(--v-theme-bg_dark));
        border: 1px solid rgba(var(--v-theme-button_border));
        color: white;
      }
    }
  }
}
.light {
  .company-solution_badge {
    background: #4dc3ff1a;
    border: 1px solid #4dc3ff;
    color: #4dc3ff;
    box-shadow: unset;
    svg * {
      fill: #4dc3ff;
    }
  }

  p {
    color: rgb(var(--v-theme-text)) !important;
  }
  .hero-section_btns {
    button {
      &:last-child {
        background: #ffffff;
        border: 1px solid #f1f1f1;
        box-shadow: -8px -4px 22.1px 0px #ffffff1a inset;
        box-shadow: 0px 8px 32px 0px #ffffff0d;
        color: #04060f;
      }
    }
  }
}

.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  svg {
    &.section_bg {
      position: absolute;
      width: 100%;
      height: auto;
      object-fit: cover;
      top: 0;
      left: 0;
    }
  }

  .hero-section_content {
    color: rgb(var(--v-theme-white));
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    height: 100vh;

    .company-solution_badge {
      padding: 4px 16px;
      border-radius: 32px;
    }

    .hero-section_description {
      font-size: clamp(1rem, 5vw, 1.25rem);
      color: rgba(var(--v-theme-white), 0.3);
      text-align: center;
      font-family: var(--secondary-font);
    }

    .hero-section_btns {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;

      button {
        border-radius: 32px;
        padding: 8px 40px;
        height: 52px;
        box-shadow: -8px -4px 22.1px 0px #ffffff1a inset,
          0px 8px 32px 0px #ffffff0d !important;
      }
    }
  }

  .contact-us_btn {
    position: absolute;
    bottom: 5%;
    right: 20px;
  }
}
</style>
