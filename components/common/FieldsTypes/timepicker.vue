<template>
  <div class="field" :class="{ 'required-field': required }">
    <div class="field-label">{{ label }}</div>
    <v-text-field
      v-model="innerValue"
      :active="menu2"
      readonly
      @click="menu2 = true"
      :required="required"
      :rules="rules"
      :placeholder="placeholder"
    >
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        activator="parent"
        transition="scale-transition"
      >
        <v-time-picker
          v-if="menu2"
          v-model="innerValue"
          full-width
          format="ampm"
          ampm-in-title
          :min="min"
          :max="max"
          @change="menu2 = false"
        ></v-time-picker>
      </v-menu>
    </v-text-field>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { VTimePicker } from "vuetify/labs/VTimePicker";

const menu2 = ref(false);

const props = defineProps({
  modelValue: String,
  id: String,
  label: String,
  placeholder: String,
  icon: String,
  switchPassword: Boolean,
  required: Boolean,
  min: String,
  max: String,
  rules: Array,
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);

watch(innerValue, (newVal) => {
  emit("update:modelValue", newVal);
});
</script>

<style lang="scss" scoped>
:deep(.v-picker-title) {
  display: none;
}
</style>
