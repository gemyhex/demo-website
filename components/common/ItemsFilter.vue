<template>
  <DevOnly>
    <section>
      <VContainer>
        <ul class="flex justify-center categories">
          <li
            v-for="(type, index) in itemsTypes"
            :key="index"
            class="control"
            :class="{
              'mixitup-control-active': activeFilter === type.value,
              [theme.global.name.value]: true,
            }"
            :data-filter="type.value"
            @click="setFilter(type.value)"
          >
            {{ type.name }}
          </li>
        </ul>
      </VContainer>
    </section>
    <section class="grid-gallery">
      <VContainer>
        <v-row id="items">
          <v-col
            lg="4"
            v-for="(item, index) in items"
            :key="index"
            :class="item.type"
            class="mix"
          >
            <slot name="item" :item="item"></slot>
          </v-col>
        </v-row>
        <div class="gap"></div>
        <div class="gap"></div>
        <div class="gap"></div>
      </VContainer>
    </section>
  </DevOnly>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const { items, itemsTypes } = defineProps({
  items: Array,
  itemsTypes: Array,
});

const mixer = ref(null);
const activeFilter = ref(null);

const setFilter = (filterValue) => {
  if (mixer.value) {
    mixer.value.filter(filterValue);
    activeFilter.value = filterValue;
  }
};

onMounted(async () => {
  const { default: mixitup } = await import("mixitup");
  nextTick(() => {
    const containerEl = document.getElementById("items");
    if (containerEl) {
      mixer.value = mixitup(containerEl, {
        animation: {
          clampHeight: false,
        },
      });
      // Set the first type as the default filter
      if (itemsTypes?.length > 0) {
        const firstFilter = itemsTypes[0].value;
        mixer.value.filter(firstFilter);
        activeFilter.value = firstFilter; // Highlight the first filter
      }
    }
  });
});
</script>

<style lang="scss" scoped>
.categories {
  border-radius: 26px;
  background: rgba(var(--v-theme-filter_bg), 1);
  border: 1px solid var(rgba(var(--v-theme-filter_border), 1));
  backdrop-filter: blur(4px);
  padding: 10px 0px;
  align-items: center;
  width: fit-content;
  margin: auto;
  list-style: none;
  li {
    display: flex;
    height: 32px;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 1rem;
    color: rgba(var(--v-theme-filter_text), 1);
    margin-inline: 0.5rem;
    border-radius: 32px;
    font-family: var(--font-family);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &.dark {
      color: rgba(var(--v-theme-filter_text), 0.3);
    }
    &.mixitup-control-active {
      background-color: rgba(var(--v-theme-white), 1);
      color: rgba(var(--v-theme-dark_4), 1);
    }
  }
}
</style>
