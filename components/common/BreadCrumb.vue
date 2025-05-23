<template>
  <section>
    <div class="px-lg-6 d-flex align-center justify-space-between w-100">
      <div class="w-100">
        <v-breadcrumbs
          density="compact"
          :items="BreadcrumbItems"
          color="primary"
          class="px-0 py-1"
          v-if="BreadcrumbItems.length > 1"
        >
          <template v-slot:title="{ item }">
            {{ $t(item.title) }}
          </template>
        </v-breadcrumbs>
        <div class="flex justify-between gap-2 w-100">
          <SvgIcon
            maxWidth="232px"
            size="free"
            class="left"
            name="breadcrumb-left"
          />
          <h4 :class="theme.global.name.value" v-if="BreadcrumbItems.length">
            {{ $t(BreadcrumbItems[BreadcrumbItems.length - 1].title) }}
          </h4>
          <SvgIcon
            maxWidth="232px"
            size="free"
            class="right"
            name="breadcrumb-right"
          />
        </div>
      </div>
      <div id="teleported-items"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useBreadCrumbStore } from "@/stores/breadCrumb";
import { useTheme } from "vuetify";
const theme = useTheme();
const breadCrumbStore = useBreadCrumbStore();
const BreadcrumbItems = computed(() => breadCrumbStore.breadCrumb);
</script>

<style lang="scss" scoped>
h4 {
  position: relative;
  -webkit-text-stroke: 0.5px rgba(var(--v-theme-text), 1);
  color: rgba(var(--v-theme-invert_text), 1);
  font-family: var(--font-family);
  font-size: 68.165px;
  font-weight: 900;
  letter-spacing: 3.408px;
  white-space: nowrap;
  text-transform: uppercase;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    background: linear-gradient(0deg, #fff 0%, #fff 30%, transparent 100%);
  }

  &.dark {
    &::before {
      background: linear-gradient(
        0deg,
        #0c0c0f 0%,
        #0c0c0f 30%,
        transparent 100%
      );
    }
  }
}

.v-breadcrumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  &__item {
    font-size: 12px;
  }
}

:deep(.v-breadcrumbs-item) {
  color: rgba(var(--v-theme-text), 0.3) !important;
}
:deep(.v-breadcrumbs-divider) {
  color: rgba(var(--v-theme-text), 0.3) !important;
}

:deep(.v-breadcrumbs-item--disabled) {
  opacity: 1;
  color: rgba(var(--v-theme-text), 1) !important;
}
</style>
