<template>
  <div class="imageInput">
    <div class="image-preview">
      <img :src="innerValue" alt="image" v-if="innerValue" />
      <span v-else>
        <!-- <img src="@/assets/images/empty.jpg" alt="empty" /> -->
      </span>
    </div>
    <div class="field" :class="{ 'required-field': required }">
      <div for="file-image" class="field-label">{{ label }}</div>
      <input class="d-none" id="file-image" type="file" @change="fileHandler" />
      <label for="file-image" class="custom-input">
        <div class="file-name">
          {{ file ? file.name : placeholder }}
        </div>
        <div class="file-icon"></div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  required: Boolean,
  rules: Array,
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);
const file = ref(null);

const fileHandler = (e) => {
  file.value = e.target.files[0];
  if (file.value) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target.result;
      innerValue.value = result;
      emit("update:modelValue", file.value);
    };
    reader.readAsDataURL(file.value);
  }
};

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal;
  }
);
</script>

<style lang="scss" scoped>
.imageInput {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.custom-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 2px 0px #1018280d;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  > div {
    padding: 8px 10px;
  }
  .file-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 1px solid #d0d5dd;
    img {
      width: 20px;
      height: 20px;
    }
  }
}

.image-preview {
  width: 64px;
  min-width: 64px;
  height: 64px;
  min-height: 64px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.field {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
  flex: 1;
}

.required-field .field-label::after {
  content: "*";
  color: red;
  margin-left: 5px;
}
</style>
