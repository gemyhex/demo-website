<template>
  <div class="flex flex-col gap-12">
    <div class="flex flex-col gap-6">
      <span v-if="index" class="">{{ index }}</span>
      <Badge v-if="badge" :title="badge" />
      <ShadowTitle v-if="title" :title="title" />
      <p class="description" v-if="description">{{ description }}</p>
      <div
        v-if="innerDescription"
        class="content flex flex-col gap-6"
        v-html="innerDescription"
      ></div>
      <slot class="content" name="content"></slot>
    </div>
    <Button
      v-if="button"
      :title="button"
      :link="buttonLink"
      class="w-fit"
      icon="arrow"
    />
  </div>
</template>

<script setup>
import Button from "~/components/common/Button.vue";

const props = defineProps({
  index: String,
  badge: String,
  title: String,
  description: String,
  innerDescription: String,
  button: String,
  buttonLink: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

<style lang="scss" scoped>
span {
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 32px;
  color: rgba(var(--v-theme-dark_4), 1);
  border: 1px solid rgba(44, 44, 46, 0.5);
  background: rgba(var(--v-theme-white), 1);
  font-family: var(--font-family);
  width: fit-content;
}

.content :deep(p) {
  color: rgba(var(--v-theme-paragraph), 1);
  font-family: var(--font-family);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.content p {
  color: rgba(var(--v-theme-paragraph), 1);
  font-family: var(--font-family);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
</style>
