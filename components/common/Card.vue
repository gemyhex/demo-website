<template>
  <div class="card relative" :class="[type, theme.global.name.value]">
    <SvgIcon name="card-bg" v-if="!hideBg" size="free" class="absolute" />
    <Badge class="category" v-if="category" :title="category" />
    <div class="card-wrapper flex flex-col gap-6 info">
      <div class="info-section flex flex-col gap-2 relative z-1">
        <Badge class="badge-container" v-if="badge" :title="badge" />
        <h3 v-if="title">{{ title }}</h3>
        <p v-if="description">{{ description }}</p>
      </div>
      <Button
        v-if="button"
        :title="button"
        :icon="isButton ? '' : 'arrow'"
        :type="isButton ? '' : 'transparent px-0'"
      />
      <slot v-if="customSlot" />
    </div>
    <SvgIcon v-if="svg" :name="svg" size="free" class="side" />
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

defineProps({
  type: {
    type: String,
    default: "horizontal",
  },
  category: String,
  title: String,
  badge: String,
  description: String,
  button: String,
  svg: String,
  isButton: {
    type: Boolean,
    default: false,
  },
  hideBg: {
    type: Boolean,
    default: false,
  },
  customSlot: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.card {
  border-radius: 42px;
  display: flex;
  height: 246px;
  &.horizontal {
    flex-direction: row;
    align-items: center;
    gap: 32px;
    .side {
      max-height: 500px;
    }
    .info {
      padding-inline: 1.7rem;
    }
    svg.side {
      max-width: 240px !important;
      max-height: 240px !important;
    }
  }
  &.vertical {
    height: calc((246px * 2) + 1.5rem);
    &.sm {
      height: 406px;
      .side {
        inset: 1rem;
        width: 240px;
        height: 240px;
      }
    }
    .info {
      position: absolute;
      inset-inline: 1.5rem;
      bottom: 1.25rem;
      z-index: 99;
    }
    .side {
      position: absolute;
      top: 0;
      left: 0;
      max-height: 100%;
    }
    svg.side {
      max-width: 240px !important;
      max-height: 240px !important;
    }
  }
  &.cross {
    .info {
      position: absolute;
      inset-inline: 1.5rem;
      bottom: 1.25rem;
    }

    .side {
      position: absolute;
      top: 0;
      inset-inline-end: 0;
      max-height: 100%;
    }

    svg.side {
      max-width: 184px !important;
      max-height: 184px !important;
    }
  }

  &.dark {
    border: 1px solid #24252a;
    background: linear-gradient(103deg, #191c24 0%, #0c0d11 100%);
  }
  &.light {
    background-color: #fff;
    border: 1px solid #dedede;
    svg {
      filter: invert(1);
    }
  }

  .category {
    position: absolute;
    top: 1rem;
    inset-inline-end: 1rem;
    border-radius: 32px;
    font-size: 10px;
    border: 1px solid var(--liner-strok-white, rgba(255, 255, 255, 0));
    background: var(
      --liner-stork-white,
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0) 100%
      )
    );
  }
  h3 {
    color: rgba(var(--v-theme-text), 1);
    font-family: var(--font-family);
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    color: rgba(var(--v-theme-text), 0.3);
    font-family: var(--font-family);
    font-size: 13px;
    font-weight: 400;
  }
}

.relative {
  position: relative;
  overflow: hidden;
  :deep(.absolute) {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
  }
}
</style>
