<template>
  <component
    :is="dynamicComponent"
    :style="componentStyle"
    :filled="filled"
    :fontControlled="false"
  />
</template>

<script setup>
import { useI18n } from "#imports";
import { computed } from "vue";

const { locale } = useI18n();

const props = defineProps({
  name: String,
  readOnly: {
    type: Boolean,
    default: false,
  },
  filled: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "currentColor",
  },
  size: {
    type: [String, Number],
    default: "md",
  },
  transform: {
    type: Boolean,
    default: true,
  },
  maxWidth: {
    type: [String, Number],
    default: "100%",
  },
  module: {
    type: String,
    default: null,
  },
});

const sizeMap = {
  xs: 20,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
};

const componentStyle = computed(() => {
  const style = {
    display: "block",
    cursor: props.readOnly ? "not-allowed" : "normal",
    maxWidth:
      typeof props.maxWidth === "number"
        ? `${props.maxWidth}px`
        : props.maxWidth,
    transform: locale.value === "ar" && props.transform ? "scaleX(-1)" : "none", // Flip for Arabic
  };

  if (props.size !== "free") {
    const sizeValue =
      typeof props.size === "string" ? sizeMap[props.size] : props.size;
    const dimension = sizeValue ?? sizeMap.md;
    style.width = `${dimension}px`;
    style.height = `${dimension}px`;
  }

  return style;
});

// Import all icons
const icons = import.meta.glob("~/assets/images/icons/*.svg", { eager: true });

const dynamicComponent = computed(() => {
  return icons[`/assets/images/icons/${props.name}.svg`] || "";
});
</script>
