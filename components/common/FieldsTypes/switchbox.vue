<template>
  <v-switch
    color="primary"
    v-model="innerValue"
    v-bind="$attrs"
    :label="label"
    hide-details
    :true-value="1"
    :false-value="0"
    inset
    @change="emit('update:modelValue', innerValue)"
  ></v-switch>
</template>

<script setup>
import { ref, watch } from 'vue'

// Define the component props
const props = defineProps({
  modelValue: Number,
  label: String,
  placeholder: String,
  icon: String,
  required: Boolean
})

const emit = defineEmits(['update:modelValue'])
const innerValue = ref(props.modelValue)
</script>
