<template>
  <div class="field" :class="{ 'required-field': required }">
    <div class="field-label">{{ label }}</div>
    <v-text-field
      :id="id"
      hide-details="auto"
      outlined
      v-model="innerValue"
      :placeholder="placeholder"
      :required="required"
      :rules="rules"
      dense
      @keyup="emit('update:modelValue', innerValue)"
    >
      <template v-if="icon" v-slot:prepend-inner>
        <img :src="icon" alt="" />
      </template>
    </v-text-field>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  id: String,
  label: String,
  placeholder: String,
  icon: String,
  required: Boolean,
  rules: Array
})

const emit = defineEmits(['update:modelValue'])

const innerValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal
  }
)
</script>
