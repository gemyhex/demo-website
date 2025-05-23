<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab v-for="tabItem in tabs" :key="tabItem.slot" :value="tabItem.slot">
        <span class="tab-icon" v-if="tabItem.icon" v-html="tabItem.icon"></span>
        {{ tabItem.label }}
        <span class="tab-notification" v-if="tabItem.notification">{{
          tabItem.notification
        }}</span>
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="tabItem in tabs"
          :key="tabItem.slot"
          :value="tabItem.slot"
        >
          <template v-if="tabItem.content">
            {{ tabItem.content }}
          </template>
          <template v-else>
            <slot :name="tabItem.slot"></slot>
          </template>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Props definition
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => [],
  },
  selectedTab: {
    type: String,
    required: false,
    default: "",
  },
});

const tab = ref(props.selectedTab);
const emits = defineEmits(["updateTab"]);

// Watch for changes in selectedTab prop to update the current tab
watch(
  () => props.selectedTab,
  (newVal) => {
    tab.value = newVal;
  }
);
watch(tab, (newVal) => {
  emits("updateTab", newVal);
});
</script>

<style lang="scss" scoped>
.v-tabs {
  width: fit-content !important;
}

:deep(.v-slide-group__content) {
  background-color: rgba(var(--v-theme-sidebar_bg), 1);
  border: 1px solid rgba(var(--v-theme-sidebar_border), 1);
  border-radius: 17px;

  .v-btn {
    color: rgba(var(--v-theme-text_400), 1) !important;
    padding: 8px 22px;
    border-radius: 16px !important;
    position: relative;
    margin: 0 8px;
    border: 3px solid transparent;

    &:first-child {
      margin-inline-end: 8px;
      margin-inline-start: 0;
    }

    &:last-child {
      margin-inline-start: 8px;
      margin-inline-end: 0;
    }

    &:not(:first-child) {
      &::before {
        content: "";
        position: absolute;
        inset: -12px;
        width: 1px;
        background-color: rgba(var(--v-theme-sidebar_border), 1);
        height: 150%;
      }
    }

    .v-tab__slider {
      display: none;
    }
  }

  .v-btn__content {
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .tab-notification {
      width: 29px;
      height: 24px;
      background-color: #f9fafb;
      border: 1px solid #eaecf0;
      border-radius: 50%;
      padding: 2px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #344054;
      font-size: 14px;
      font-weight: 500;
    }
  }

  .v-tab-item {
    &--selected {
      background-color: rgba(var(--v-theme-primary), 1);
      color: #fff !important;
      border: 3px solid rgba(var(--v-theme-primary_light), 1);
    }
  }
}
</style>
