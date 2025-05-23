<template>
  <div class="field" :class="{ 'required-field': required }">
    <div class="field-label">{{ label }}</div>
    <v-textarea
      hide-details="auto"
      v-model="innerValue"
      :placeholder="placeholder"
      :required="required"
      :rules="rules"
      dense
      variant="outlined"
      v-bind="$attrs"
      outlined
      @keyup="emit('update:modelValue', innerValue)"
    />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: String,
  label: String,
  icon: String,
  placeholder: String,
  required: Boolean,
  rules: Array
})
const emit = defineEmits(['update:modelValue'])
const innerValue = ref(props.modelValue)
</script>
