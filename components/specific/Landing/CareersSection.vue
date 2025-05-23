<template>
  <div class="careers-section pt-100">
    <VContainer>
      <!-- <Card
          :badge="$t('services.careersBadge')"
          :title="$t('services.cooperativeTraining')"
          :button="$t('services.joinWakebTeam')"
          :description="$t('services.careersDescription')"
          svg="careers"
          is-button
      /> -->
    </VContainer>
  </div>
</template>

<style scoped lang="scss">
.careers-section {
  max-width: calc(100% - 25%);
  margin: 0 auto;

  :deep(.card) {
    padding: 40px 16px;
    min-height: 246px;
    max-height: 340px;
    height: 100% !important;
    h3 {
      font-size: clamp(1.725rem, 5vw, 2.125rem);
      max-width: 450px;
      letter-spacing: 1.7px;
      line-height: 2.25rem;
    }
    p {
      max-width: 540px;
    }
    button {
      border-radius: 32px;
      border: 1px solid #2c2c2e;
      background: #0c0c14;
      box-shadow: 0px 8px 32px 0px rgba(var(--v-theme-white), 0.05),
        -8px -4px 22.1px 0px rgba(var(--v-theme-white), 0.1) inset;
      color: rgba(var(--v-theme-white), 1) !important;
      padding: 8px 40px;
    }
    .badge-container {
      font-size: clamp(0.625rem, 5vw, 0.625rem);
      background: transparent;
      border-radius: 32px;
      border: 1px solid #3e3e44;
      box-shadow: 0 4px 4px 0 rgba(var(--v-theme-black), 0.15);
    }
    &.horizontal {
      justify-content: space-between;
      .side {
        width: 100%;
        max-width: 500px !important;
      }
    }
  }
}
</style>
