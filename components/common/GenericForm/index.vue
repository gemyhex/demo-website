<template>
  <VForm @submit.prevent="onSubmit" ref="form">
    <v-row :class="formClass">
      <template v-for="(field, fieldIndex) in schema" :key="field.id">
        <v-col
          v-if="iShowField(field)"
          :lg="field?.cols?.lg"
          :md="field?.cols?.md"
          :cols="field?.cols?.sm"
        >
          <div
            v-if="field.type === 'group' || field.type === 'groupUI'"
            :class="[{ group_ui: field.type === 'groupUI' }, field.classList]"
          >
            <h4 v-if="field.label">{{ $t(field.label) }}</h4>

            <v-row>
              <template v-for="child in field.children" :key="child.id">
                <v-col
                  v-if="iShowField(child)"
                  :lg="child?.cols?.lg"
                  :md="child?.cols?.md"
                  :cols="child?.cols?.sm"
                >
                  <component
                    v-if="child.type !== 'button'"
                    :is="getFieldComponent(child.type)"
                    v-bind="{ ...child }"
                    v-model="child.value"
                    @update:modelValue="
                      child.updateValueHandler
                        ? child.updateValueHandler($event, child)
                        : ''
                    "
                    @itemClick="child.itemClick ? child.itemClick($event) : ''"
                    @handleAdvancedSelect="
                      field.handleAdvancedSelect
                        ? field.handleAdvancedSelect($event)
                        : ''
                    "
                  />

                  <Button
                    v-else
                    :icon="child.icon"
                    :type="child.classList"
                    :iconPosition="child?.iconPosition"
                    :title="child?.label"
                    :disabled="child?.disabled"
                    @click="child.click(fieldIndex)"
                  />

                  <div
                    v-if="child?.errorMessages && child.errorMessages.length"
                    class="error-messages"
                  >
                    <p
                      v-for="error in child.errorMessages"
                      :key="error"
                      class="text-danger"
                    >
                      {{ error }}
                    </p>
                  </div>
                </v-col>
              </template>
            </v-row>
          </div>
          <Button
            v-else-if="field.type === 'button'"
            :icon="field?.icon"
            :type="field?.classList"
            :iconPosition="field?.iconPosition"
            :title="field?.label"
            :disabled="field?.disabled"
            @click="field.click"
          />
          <slot v-else-if="field.type == 'slot'" :name="field.key"></slot>
          <component
            v-else
            :is="getFieldComponent(field.type)"
            v-bind="{ ...field }"
            v-model="field.value"
            @update:modelValue="
              field.updateValueHandler
                ? field.updateValueHandler($event, field)
                : ''
            "
            @itemClick="field.itemClick ? field.itemClick($event) : ''"
            @handleAdvancedSelect="
              field.handleAdvancedSelect
                ? field.handleAdvancedSelect($event)
                : ''
            "
          />

          <div
            v-if="field?.errorMessages && field.errorMessages.length"
            class="error-messages"
          >
            <p
              v-for="error in field.errorMessages"
              :key="error"
              class="text-danger"
            >
              {{ error }}
            </p>
          </div>
        </v-col>
      </template>
    </v-row>
    <slot name="submit"></slot>
  </VForm>
</template>

<script setup>
import { ref, watch } from "vue";
import textInput from "@/components/common/FieldsTypes/textInput.vue";
import passwordInput from "@/components/common/FieldsTypes/passowrdInput.vue";
import textArea from "@/components/common/FieldsTypes/textArea.vue";
import numberInput from "@/components/common/FieldsTypes/numberInput.vue";
import switchbox from "@/components/common/FieldsTypes/switchbox.vue";
import selectBox from "@/components/common/FieldsTypes/selectBox.vue";
import otp from "@/components/common/FieldsTypes/otp.vue";
// import timepicker from "@/components/common/FieldsTypes/timepicker.vue";
// import phone from '@/components/common/FieldsTypes/phone.vue'
import checkbox from "@/components/common/FieldsTypes/checkBox.vue";
// import editor from "@/components/common/FieldsTypes/editor.vue";
// import datePicker from "@/components/common/FieldsTypes/datePicker.vue";
import imageInput from "@/components/common/FieldsTypes/imageInput.vue";
import ImageUploader from "@/components/common/ImageUploader/index.vue";
import Button from "@/components/common/Button.vue";
import { findSchemaIndex } from "@/utils/formDataHandler";
const emit = defineEmits(["submit", "updateSchema"]);
const submitClicked = ref(false);
const props = defineProps({
  formClass: String,
  schema: {
    type: Object,
  },
  propsToWatch: {
    type: Array,
  },
  stopValidation: {
    type: Boolean,
    default: false,
  },
});

const iShowField = (field) => {
  if (field.hide) return false;
  return true;
};

const getFieldComponent = (type) => {
  const components = {
    text: textInput,
    number: numberInput,
    password: passwordInput,
    textarea: textArea,
    switchbox: switchbox,
    select: selectBox,
    otp: otp,
    // phone: phone,
    checkbox: checkbox,
    // date: datePicker,
    // datetime: dateTimeInput,
    image: imageInput,
    imageUploader: ImageUploader,
    // editor: editor,
  };
  return components[type] || "div";
};

const form = ref(null);
const validate = async () => {
  return await form.value?.validate();
};

const onSubmit = async () => {
  submitClicked.value = true;
  if (!props.stopValidation) {
    const { valid } = await validate();
    if (!valid) return;
  }
  emit("submit", props.schema);
};
defineExpose({ validate });
</script>

<style lang="scss" scoped>
@use "./index.scss";
</style>
