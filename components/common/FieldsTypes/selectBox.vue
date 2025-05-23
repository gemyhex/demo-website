<template>
  <div class="field" :class="{ 'required-field': required }">
    <div v-if="label" class="field-label">{{ $t(label) }}</div>
    <div class="flex gap-2">
      <v-select
        :items="options"
        :model-value="modelValue"
        @update:model-value="updateValue"
        :placeholder="$t(placeholder)"
        :multiple="multiple"
        :required="required"
        :rules="rules"
        :item-value="itemValue"
        :item-title="itemTitle"
        :chips="chips"
        :return-object="returnObject"
        hide-details="auto"
      />
      <div class="addingCase" v-if="schema">
        <Button @click="showAddingModal = true" class="openModal" icon="sun" />
        <Modal v-model="showAddingModal" width="1000" :custom-action="true">
          <template #content>
            <GenericForm :schema="schema" @submit="submitAdding" ref="form">
              <template #submit>
                <div class="flex gap-3">
                  <Button
                    class="mt-5"
                    :title="'BUTTONS.CLOSE'"
                    type="close"
                    @click="showAddingModal = false"
                  />
                  <Button class="mt-5" :title="'BUTTONS.ADD'" action="submit" />
                </div>
              </template>
            </GenericForm>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import Modal from "@/components/common/Modal.vue";
import GenericForm from "@/components/common/GenericForm/index.vue";

const form = ref(null);
const showAddingModal = ref(false);

const props = defineProps({
  label: String,
  modelValue: [String, Array, Number, Object],
  defaultValue: [String, Array, Number, Object],
  options: Array,
  multiple: Boolean,
  required: Boolean,
  placeholder: String,
  itemTitle: String,
  schema: Array,
  chips: Boolean,
  itemValue: {
    default: "value",
  },
  returnObject: {
    default: false,
  },
  rules: Array,
});
const emit = defineEmits(["update:modelValue", "addingData"]);
const updateValue = (value) => emit("update:modelValue", value);
const submitAdding = async (value) => {
  const { valid } = await form.value.validate();
  if (!valid) return;
  emit("addingData", value);
  showAddingModal.value = false;
};

watch(
  () => props.options,
  (newVal) => {
    if (props.defaultValue == undefined) return;
    if (newVal.length !== 0) {
      if (props.returnObject) {
        const selectItem = newVal.find(
          (option) => option[props.itemValue] === props.modelValue
        );
        updateValue(selectItem);
      } else updateValue(props.modelValue);
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
:deep(.openModal) {
  padding: 10px;
  width: 58px;
  height: 58px !important;
}
</style>
