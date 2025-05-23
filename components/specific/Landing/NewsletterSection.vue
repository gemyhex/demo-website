<template>
  <div
    :class="theme.global.name.value"
    class="newsletter-section pt-100 pb-100"
  >
    <div class="blur-background"></div>
    <div class="newsletter-wrapper">
      <VContainer class="py-0">
        <Card
          :title="$t('home.subscribeNewsletter')"
          :description="$t('home.newsletterDescription')"
          hide-bg
          customSlot
        >
          <template #default>
            <VForm ref="newsletterForm">
              <VTextField
                :rules="[
                  {
                    required: true,
                    pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  },
                ]"
                :placeholder="$t('home.emailPlaceholder')"
                variant="plain"
                rounded
                hide-details
                density="comfortable"
              >
                <template #append-inner>
                  <Button @click="submit" :title="$t('home.subscribe')" />
                </template>
              </VTextField>
            </VForm>
            <SvgIcon name="section-dots" size="free" class="pos-left"></SvgIcon>
            <SvgIcon
              name="section-dots"
              size="free"
              class="pos-right"
            ></SvgIcon>
          </template>
        </Card>
      </VContainer>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
</script>

<style scoped lang="scss">
.newsletter-section {
  position: relative;

  .newsletter-wrapper {
    position: relative;
    z-index: 1;
    background: rgba(var(--v-theme-background), 1);
  }

  &.dark {
    .blur-background {
      background: rgba(17, 4, 76, 0.8);
    }
    :deep(.card) {
      border: 1px solid #24252a;
      background: linear-gradient(
        180deg,
        rgba(12, 12, 20, 0) 0%,
        #0c0c14 93.41%
      );
    }
  }
  &.light {
    .blur-background {
      background: rgba(17, 4, 76, 0.2);
    }
    :deep(.card) {
      border: 1px solid #f5f5f5;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.7) 0%,
        #f5f5f5 93.41%
      );
    }
  }

  :deep(.card) {
    padding: 40px 32px;
    min-height: 300px;
    height: 100% !important;
    border-radius: 56px;

    h3 {
      font-size: clamp(1.725rem, 5vw, 2.125rem);
    }

    &.horizontal {
      justify-content: center;
      text-align: center;
      position: relative;
      overflow: hidden;

      .pos-right,
      .pos-left {
        position: absolute;
        height: 100%;
      }

      .pos-left {
        top: 0;
        left: 0;
      }

      .pos-right {
        bottom: 0;
        right: 0;
        transform: rotate(180deg) !important;
      }

      .card-wrapper {
        gap: 2.5rem !important;
      }

      .info-section {
        gap: 0.375rem !important;
      }

      .v-field {
        border-radius: 32px;
        border: 1px solid rgba(var(--v-theme-input_border), 1);
        background: rgba(var(--v-theme-input_bg), 1);
        backdrop-filter: blur(4px);
        padding: 6px;

        input {
          padding-top: 0;
          padding-inline-start: 20px;
          color: rgba(var(--v-theme-input_text), 1);
          font-size: 0.875rem;
          &::placeholder {
            color: rgba(var(--v-theme-input_placeholder), 1);
          }
        }

        .v-field__append-inner {
          padding-top: 0;

          button {
            height: 52px;
          }
        }
      }
    }
  }

  .blur-background {
    width: 60%;
    height: 135px;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
    filter: blur(75px);
    z-index: 0;
  }
}
</style>
