<template>
  <div class="field-label mb-2">{{ label }}</div>
  <span class="d-none">{{ showPassword }}</span>
  <v-text-field
    :id="id"
    hide-details="auto"
    outlined
    v-model="innerValue"
    :placeholder="placeholder"
    :type="showPassword ? 'text' : 'password'"
    persistent-hint
    :required="required"
    :rules="rules"
    dense
    :autocomplete="autocomplete"
    @keyup="emit('update:modelValue', innerValue)"
  >
    <template v-slot:prepend-inner>
      <img :src="icon" alt="" />
    </template>
    <template v-if="switchPassword" v-slot:append-inner>
      <v-icon v-if="showPassword" color="primary" @click="togglePasswordVisibility">
        mdi-eye-off-outline
      </v-icon>
      <v-icon v-else color="primary" @click="togglePasswordVisibility"> mdi-eye-outline </v-icon>
    </template>
  </v-text-field>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  id: String,
  label: String,
  placeholder: String,
  icon: String,
  switchPassword: Boolean,
  required: Boolean,
  autocomplete: String,
  rules: Array
})

const emit = defineEmits(['update:modelValue'])

const innerValue = ref(props.modelValue)
const showPassword = ref(false)

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal
  }
)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>
