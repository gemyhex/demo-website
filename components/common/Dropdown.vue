<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <Button
        icon="chevronDown"
        dark
        v-bind="props"
        :iconPosition="iconPosition"
        :title="$t(title)"
        :type="type"
      />
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        @click="() => onMenuItemClick(item)"
      >
        <v-list-item-title>
          <router-link v-if="isLinks" :to="item.to">
            {{ item.label }}
          </router-link>
          <span v-else>{{ item.label }}</span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/common/Button.vue";

defineProps({
  menuItems: Array,
  title: String,
  icon: String,
  iconPosition: String,
  type: String,
  isLinks: Boolean,
});

const emits = defineEmits(["selectedItem"]);

const isMenuOpen = ref(false);
const onMenuItemClick = (item) => {
  emits("selectedItem", item);
  isMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
a,
span {
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: #414141;
}
</style>
