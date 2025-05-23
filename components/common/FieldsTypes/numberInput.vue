<template>
  <div
    class="field"
    :class="{
      'required-field': required,
      '!flex-col !items-start': mode === 'vertical'
    }"
  >
    <div
      :class="{
        '!w-full !max-w-full': mode === 'vertical'
      }"
      class="field-label"
    >
      {{ $t(label) }}
    </div>
    <v-number-input
      :class="{
        '!w-full': mode === 'vertical'
      }"
      hide-details="auto"
      hide-label
      v-model="innerValue"
      :placeholder="$t(placeholder)"
      :required="required"
      :disabled="disabled"
      :rules="rules"
      :control-variant="variant"
      v-bind="$attrs"
      :max="max"
      :min="min"
      :step="step"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  label: String,
  modelValue: Number,
  mode: String,
  placeholder: String,
  required: Boolean,
  disabled: Boolean,
  variant: String,
  max: Number,
  min: Number,
  step: Number,
  rules: Array
})
const emit = defineEmits(['update:modelValue'])
const innerValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue
  }
)

watch(innerValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>
