<template>
  <div class="field" :class="{ 'required-field': required }">
    <div class="field-label">{{ label }}</div>
    <v-text-field
      v-model="innerValue"
      :active="menu2"
      readonly
      @click="menu2 = !menu2"
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
        <v-date-picker
          v-if="menu2"
          v-model="pickerValue"
          @update:modelValue="updateDate"
          color="primary"
          :max="new Date()"
        ></v-date-picker>
      </v-menu>
    </v-text-field>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import moment from "moment";

const menu2 = ref(false);

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  icon: String,
  required: Boolean,
  min: String,
  max: String,
  rules: Array,
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(
  props.modelValue ? moment(props.modelValue).format("D-M-YYYY") : null
);
const pickerValue = ref(props.modelValue ? new Date(props.modelValue) : null);

watch(innerValue, (newVal) => {
  emit("update:modelValue", newVal);
});

const updateDate = (value) => {
  innerValue.value = moment(value).format("D-M-YYYY");
  menu2.value = false;
};
</script>

<style lang="scss" scoped>
:deep(.v-picker-title) {
  display: none;
}
</style>
