<template>
  <section>
    <VContainer>
      <div class="contact">
        <div class="flex flex-col gap-2 justify-center items-center">
          <h2>{{ $t("trialHeader") }}</h2>
          <p>{{ $t("trialDescription") }}</p>
        </div>
        <Button :title="$t('contact_us')" icon="arrow" type="primary" />
      </div>
    </VContainer>
  </section>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
</script>

<style lang="scss" scoped>
.contact {
  background: linear-gradient(
    180deg,
    rgba(7, 7, 9, 0.2) 0%,
    rgba(7, 7, 9, 0.7) 93.41%
  );

  border-radius: 56px;
  padding: 59px 32px;
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #24252a;

  // border-image: linear-gradient(to right, #24252A 0%, #24252a00 100%) 1;
  // background: url("@/assets/images/icons/squares.svg") no-repeat center
  // center/cover;
  h2 {
    color: rgba(var(--v-theme-text), 1);
    font-family: var(--secondary-font);
    font-weight: 700;
  }
  p {
    color: rgba(var(--v-theme-text), 0.3);
  }
}
</style>
