<template lang="">
  <v-checkbox
    hide-details
    v-model="innerValue"
    true-value="1"
    false-value="0"
    @change="emit('update:modelValue', innerValue)"
    :label="label"
    :required="required"
  ></v-checkbox>
</template>
<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  id: String,
  label: String,
  placeholder: String,
  icon: String,
  switchPassword: Boolean,
  required: Boolean,
  rules: Array,
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal;
  }
);
</script>
<style lang="scss" scoped>
:deep(.v-selection-control__wrapper) {
  color: #cbd5e0;
}

:deep(.v-selection-control__input > .v-icon) {
  opacity: 1;
}
</style>
