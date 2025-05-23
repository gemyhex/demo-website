<template>
  <v-dialog
    v-model="dialog"
    :persistent="persistent"
    :max-width="width"
    @afterLeave="$emit('afterLeave')"
  >
    <div class="close" @click="dialog = false" v-if="isCloseable">
      <SvgIcon name="close" />
    </div>
    <v-card>
      <div class="title" v-if="title">
        <v-card-title v-if="title">{{ title }}</v-card-title>
        <slot name="title" v-else></slot>
      </div>
      <div class="content">
        <!-- <Loading v-if="!isDataLoaded" /> -->
        <slot name="content"></slot>
      </div>
      <template v-slot:actions v-if="!customAction">
        <slot name="actions"></slot>
      </template>
      <div class="loader_wrap" v-if="isLoading">
        <div class="loading_spin"></div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  width: [String, Number],
  isCloseable: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
  persistent: {
    type: Boolean,
    default: true,
  },
  customAction: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  isDataLoaded: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue", "afterLeave"]);

const dialog = ref(props.modelValue);

watch(dialog, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    dialog.value = newValue;
  }
);
</script>

<style lang="scss" scoped>
:deep(.v-card) {
  margin: 1rem;
  // overflow: visible !important;
  border: 3px solid rgba(var(--v-theme-sidebar_border)) !important;
  background-color: rgba(var(--v-theme-sidebar_list_bg));
}

:deep(.title) {
  background: rgba(var(--v-theme-primary), 1);
  color: rgba(var(--v-theme-surface), 1);
}

:deep(.v-card-actions) {
  justify-content: flex-start !important;
  gap: 1rem;

  .v-btn ~ .v-btn:not(.v-btn-toggle .v-btn) {
    margin-inline-start: 0 !important;
  }
}

:deep(.v-field__field) {
  align-items: center;
}

.close {
  width: 32px;
  height: 32px;
  position: absolute;
  box-shadow: 0px 2px 4px 0px #a5a3ae4d;
  background-color: rgba(var(--v-theme-background), 1);
  border-radius: 6px;
  padding: 6px;
  top: 0px;
  right: 10px;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(var(--v-theme-text_800), 1);

  :deep(svg) {
    width: 12px;
    height: 12px;
  }
}

.content {
  padding: 2.5rem;
  position: relative;
  height: 100%;
}
</style>
