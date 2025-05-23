<template>
  <div
    class="field ga-0"
    :class="({ 'required-field': required, 'rtl-styles': locale === 'ar' }, classList)"
  >
    <div class="d-flex mb-3">
      <div class="field-label me-1">{{ $t(label) }}</div>
    </div>
    <QuillEditor
      :class="direction"
      :id="id"
      :required="required"
      :rules="rules"
      theme="snow"
      v-model:content="innerValue"
      :placeholder="placeholder ? $t(placeholder) : ''"
      contentType="html"
      @textChange="emit('update:modelValue', innerValue)"
    >
    </QuillEditor>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const props = defineProps({
  classList: String,
  modelValue: String,
  id: String,
  label: String,
  placeholder: String,
  required: Boolean,
  rules: Array,
  direction: String
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

<style lang="scss">
.ql-toolbar.ql-snow {
  border: 1px solid rgba(var(--v-theme-input_border), 1);
  border-radius: 0.5rem 0.5rem 0 0;
  direction: ltr;
}

.ql-container.ql-snow {
  border-radius: 0 0 0.5rem 0.5rem;
  border: 1px solid rgba(var(--v-theme-input_border), 1);
  min-height: 5rem;
}

.rtl-styles .ql-snow .ql-picker-label {
  justify-content: flex-end;
}

.rtl-styles .ql-editor.ql-blank::before {
  left: auto;
}

.rtl * {
  text-align: right;
  direction: rtl;
}

.ql-editor.ql-blank::before {
  color: rgba(var(--v-theme-flowIconBorderColor), 1);
  font-style: normal;
  font-size: 0.95rem;
  font-weight: 400;
  right: 15px;
}

.rtl-styles .ql-editor {
  text-align: right;
}

.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
  background-color: rgba(var(--v-theme-background), 1);
  color: rgba(var(--v-theme-primary), 1);
}

.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
  stroke: rgba(var(--v-theme-primary), 1);
}
</style>
