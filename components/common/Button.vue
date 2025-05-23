<template>
  <div>
    <v-tooltip :location="location" :text="title" v-if="isTooltip">
      <template v-slot:activator="{ props }">
        <v-btn
          :color="type"
          :loading="isLoading"
          :type="action"
          :class="type"
          :disabled="disabled"
          class="font-weight-bold"
          v-bind="props"
          :to="link ? link : null"
          @click="(e) => emit('click', e)"
        >
          <SvgIcon :name="icon" />
        </v-btn>
      </template>
    </v-tooltip>

    <v-btn
      v-if="title != '' && !isTooltip"
      :color="type"
      v-bind="$attrs"
      @click="(e) => emit('click', e)"
      :loading="isLoading"
      :type="action"
      :class="type"
      :disabled="disabled"
      :min-width="minWidth"
      :to="link ? link : null"
      :height="height"
      class="font-weight-bold"
    >
      <SvgIcon :name="icon" v-if="icon && iconPosition == 'right'" />
      <p>{{ title }}</p>
      <SvgIcon :name="icon" v-if="icon && iconPosition == 'left'" />
    </v-btn>
    <v-btn
      v-else-if="title == '' && !isTooltip"
      :loading="isLoading"
      :color="type"
      :type="action"
      v-bind="$attrs"
      @click="(e) => emit('click', e)"
      :disabled="disabled"
      :class="type"
      :to="link ? link : null"
      class="font-weight-bold"
    >
      <SvgIcon :name="icon" />
      <slot name="content"></slot>
    </v-btn>
  </div>
</template>
<script setup>
import SvgIcon from "~/components/common/SvgIcon.vue";
const emit = defineEmits(["click"]); // Add this
defineProps({
  isTooltip: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    default: () => "top",
  },
  link: {
    type: String,
    default: () => null,
  },
  title: {
    type: String,
    default: () => "",
  },
  iconPosition: {
    type: String,
    default: () => "left",
    validator(value) {
      return ["left", "right"].includes(value);
    },
  },
  type: {
    type: String,
    default: "primary",
    validator(value) {
      return [
        "primary",
        "gold",
        "primary-border",
        // used until now
        "danger",
        "warning",
        "close",
        "outline",
        "dark",
        "teleport",
        "primary-outline",
        "icon-only",
        "sidebar",
        "hidden",
        "no-bg",
        "table-icon",
        "filter-btn",
      ].includes(value);
    },
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
    default: () => "button",
    validator(value) {
      return ["button", "reset", "submit"].includes(value);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: [String, Object],
  height: {
    type: String,
    default: "50px",
  },
  minWidth: {
    type: String,
    default: "120px",
  },
});
</script>

<style lang="scss" scoped>
.v-btn {
  padding: 10px 39px;
  box-shadow: none;
  border-radius: 32px;
  height: 50px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-transform: none;
  min-width: unset;
  font-family: var(--font-family);

  :deep(.v-btn__content) {
    gap: inherit;
    line-height: 0;
  }

  :deep(.v-btn__content:has(svg)) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  &.table-icon {
    padding: 7px;
    border-radius: 8px;
    height: 36px;
    width: 36px;
    box-shadow: none;
    min-width: unset;

    :deep(svg) {
      width: 20px;
      height: 20px;
    }

    &.restore {
      border: 1px solid #e5dfff;
      color: rgba(var(--v-theme-primary), 1);
    }

    &.edit {
      border: 1px solid #e5dfff;
      color: rgba(var(--v-theme-primary), 1);
    }

    &.view {
      border: 1px solid #cae8f4;
      color: rgba(var(--v-theme-primary), 1);
    }

    &.delete {
      border: 1px solid #fecdca;
      color: rgba(var(--v-theme-error), 1);
    }

    &.cancel {
      border: 1px solid #fecdca;
      color: rgba(var(--v-theme-error), 1);
    }
  }

  &.primary-outline {
    background-color: transparent !important;
    color: rgba(var(--v-theme-primary), 1) !important;
    border: 2px solid rgba(var(--v-theme-primary), 1);
    transition: 0.4s;

    &:hover {
      border: 2px solid rgba(var(--v-theme-primary), 1);
      color: rgba(var(--v-theme-white_dafault), 1) !important;
      background-color: rgba(var(--v-theme-primary), 1) !important;
    }
  }
  &.transparent {
    border: transparent;
    color: rgba(var(--v-theme-white), 0.3) !important;
    background-color: transparent !important;
    :deep(.v-btn__overlay) {
      display: none !important;
    }
    &:hover * {
      background-color: transparent !important;
    }
  }
  &.primary-border {
    background-color: rgba(var(--v-theme-primary), 1) !important;
    color: white !important;
    transition: 0.4s;
    border: 2px solid rgba(var(--v-theme-blue), 1);

    &:hover {
      box-shadow: 0px 0px 12.3px 0px rgba(var(--v-theme-blue), $alpha: 0.4);
    }
  }

  &.primary {
    background-color: rgba(var(--v-theme-button_primary), 1) !important;
    color: rgba(var(--v-theme-dark_4), 1) !important;
    transition: 0.4s;

    &:hover {
      box-shadow: 0px 0px 12.3px 0px rgba(var(--v-theme-blue), $alpha: 0.4);
    }

    &:disabled {
      background-color: rgba(var(--v-theme-primary), 1) !important;
      color: rgba(var(--v-theme-white_dafault), 1) !important;
      border: none !important;
      opacity: 0.5;
    }
  }

  &.danger {
    border: 2px solid rgba(var(--v-theme-error), 1);
    background-color: rgba(var(--v-theme-error), 1) !important;
    color: rgba(var(--v-theme-white_dafault), 1) !important;
  }

  &.close {
    background-color: rgba(var(--v-theme-btn-close), 1);
    border: 2px solid rgba(var(--v-theme-btn-close), 1);
    color: rgba(var(--v-theme-btn-close-text), 1);
  }

  &.bg-icon-only {
    width: 16px;
    padding: 0 !important;
    color: rgba(var(--v-theme-btn-disabled-text), 1);
    background-color: transparent !important;
  }

  &.outline {
    border: 1px solid var(--Colors-Border-border-disabled, #d0d5dd);
  }

  &.dark {
    background-color: #11044c !important;
    color: #fff;
  }

  &.light_grey {
    background-color: #fafafa !important;
  }

  &.sidebar {
    background-color: rgba(var(--v-theme-sidebar_bg), 1) !important;
  }

  &.no-bg {
    background-color: transparent !important;
    border: unset !important;
    color: rgba(var(--v-theme-text_400), 1) !important;
    height: 32px !important;
    font-weight: bold !important;
  }

  &.filter-btn {
    background-color: rgba(var(--v-theme-sidebar_bg), 1) !important;
    border: 1px solid rgba(var(--v-theme-sidebar_border), 1);
    color: rgba(var(--v-theme-text_400), 1) !important;
    height: 56px !important;
    width: fit-content !important;
    padding: 1rem;

    &:hover {
      border: 1px solid rgba(var(--v-theme-primary), 1);
    }
  }

  &.hidden {
    display: none;
  }

  &.remove-row {
    margin-top: 2.6rem !important;
    height: 58px;
    width: 58px;
    padding: 0;

    :deep(svg) {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  &.teleport {
    height: 48px;
    border-radius: 14px;
  }
}

@media (max-width: 600px) {
  .v-btn {
    padding: 10px 16px;
  }
}
</style>
