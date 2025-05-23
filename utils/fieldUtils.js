export const createTextField = ({
  t,
  key,
  label,
  isEmail = false,
  setToFilter = false,
  required = true,
  minLength = 0,
  minValue,
  disabled = false,
  cols = { md: 4, lg: 4 },
  mode = "vertical", // value can be 'horizontal' or 'vertical'
  value,
  defaultValue = value,
  hide,
  updateValueHandler = null,
  clearable = false,
  rules = [],
}) => ({
  key,
  type: "text",
  label: t(`fields.${label}`),
  placeholder: t(`placeholder.${label}`),
  value,
  required,
  mode,
  disabled,
  setToFilter,
  defaultValue,
  clearable,
  hide,
  rules: [
    ...(required
      ? [(v) => !!v || t("validation.required", { field: label })]
      : []),
    ...(minLength
      ? [
          (v) =>
            v?.length >= minLength ||
            t(`validation.min_length`, { min: minLength }),
        ]
      : []),
    ...(minValue
      ? [(v) => v >= minValue || t(`validation.min_value`, { min: minValue })]
      : []),
    ...(isEmail
      ? [(v) => !v || /.+@.+\..+/.test(v) || t("validation.invalid_email")]
      : []),
    ...rules,
  ],
  cols: { sm: 12, ...cols },
  ...(updateValueHandler && { updateValueHandler }),
});

export const createNumberField = ({
  t,
  key,
  label,
  hide = false,
  required = true,
  setToFilter = false,
  max,
  min = 0,
  minValue,
  disabled = false,
  mode = "vertical", // value can be 'horizontal' or 'vertical'
  step = 1,
  variant = "split",
  cols = { md: 4, lg: 4 },
  value,
  defaultValue = value,
  updateValueHandler = null,
  isIntegerOnly = false,
  rules = [],
}) => ({
  key,
  type: "number",
  disabled,
  label: t(`fields.${label}`),
  placeholder: t(`placeholder.${label}`),
  value,
  required,
  setToFilter,
  mode,
  max,
  min,
  step,
  defaultValue,
  variant,
  rules: [
    ...(required
      ? [
          (v) =>
            (v !== null && v !== undefined && v !== "") ||
            t("validation.required", { field: label }),
        ]
      : []),
    ...(minValue
      ? [(v) => v >= minValue || t(`validation.min_value`, { min: minValue })]
      : []),
    ...(isIntegerOnly
      ? [
          (v) =>
            Number.isInteger(Number(v)) ||
            t("validation.intger_only", { field: label }),
        ]
      : []),
    ...rules,
  ],
  cols: { sm: 12, ...cols },
  hide,
  ...(updateValueHandler && { updateValueHandler }),
});

export const createPasswordField = ({
  t,
  key,
  label,
  required = true,
  minLength = 6,
  cols = { md: 4, lg: 4 },
  clearable = false,
  mode = "vertical", // value can be 'horizontal' or 'vertical'
  value,
  updateValueHandler,
  rules = [],
}) => ({
  key,
  type: "password",
  label: t(`fields.${label}`),
  placeholder: t(`placeholder.${label}`),
  value,
  required,
  mode,
  clearable,
  rules: [
    ...rules,
    ...(required
      ? [(v) => !!v || t("validation.required", { field: label })]
      : []),
    ...(minLength
      ? [
          (v) =>
            v?.length >= minLength ||
            t(`validation.min_length`, { min: minLength }),
        ]
      : []),
  ],
  cols: { sm: 12, ...cols },
  ...(updateValueHandler && { updateValueHandler }),
});

export const createPhoneField = ({
  t,
  key,
  label,
  required = true,
  cols = { md: 4, lg: 4 },
  mode = "vertical", // value can be 'horizontal' or 'vertical'
  value,
  defaultValue = value,
  updateValueHandler,
}) => ({
  key,
  type: "phone",
  label: t(`fields.${label}`),
  placeholder: t(`placeholder.${label}`),
  value,
  mode,
  required,
  defaultValue,
  rules: [
    ...(required
      ? [(v) => !!v || t("validation.required", { field: label })] // Required field rule as inline function
      : []),
    (v) => /^\+2\d{11}$/.test(v) || t("validation.invalid_phone"), // Phone pattern rule as inline function
  ],
  cols: { sm: 12, ...cols },
  ...(updateValueHandler && { updateValueHandler }),
});

export const createSelectField = ({
  t,
  key,
  label,
  options,
  itemTitle = "name",
  itemValue,
  isMultiple = false,
  hide = false,
  setToFilter = false,
  updateValueHandler = null,
  handleAdvancedSelect = null,
  itemClick = null,
  cols = { md: 4, lg: 4 },
  returnObject = false,
  chips = false,
  minLength = 0,
  clearable = false,
  mode = "vertical", // value can be 'horizontal' or 'vertical'
  headers,
  autoSelectFirst,
  customSelectKey,
  customTab,
  storeName,
  serviceLink,
  totalLength = 0,
  value,
  defaultValue = value,
  required = true,
  disabled = false,
  enableTimePicker = false,
  customParams = {},
  showSearch = false,
}) => ({
  key,
  type: storeName ? "selectModal" : "select",
  label: t(`fields.${label}`),
  placeholder: t(`placeholder.${label}`),
  multiple: isMultiple,
  value: null,
  options,
  itemTitle,
  itemValue,
  serviceLink,
  headers,
  storeName,
  defaultValue,
  hide,
  autoSelectFirst,
  mode,
  chips,
  returnObject,
  setToFilter,
  customSelectKey,
  clearable,
  totalLength,
  customTab,
  value,
  required,
  disabled,
  customParams,
  enableTimePicker,
  showSearch,
  rules: [
    ...(required
      ? [(v) => !!v || t("validation.required", { field: label })]
      : []),
    ...(minLength
      ? [
          (v) =>
            v?.length >= minLength ||
            t(`validation.min_length`, { min: minLength }),
        ]
      : []),
  ],
  cols: { sm: 12, ...cols },
  ...(updateValueHandler && { updateValueHandler }),
  ...(handleAdvancedSelect && { handleAdvancedSelect }),
  ...(itemClick && { itemClick }),
});

export const createCheckBoxField = ({
  t,
  key,
  label,
  name,
  trueValue,
  falseValue,
  required = true,
  setToFilter = false,
  value = false,
  hide = false,
  disabled = false,
  defaultValue = value,
  updateValueHandler = null,
  cols = { md: 4, lg: 4 },
}) => ({
  key: key,
  type: "checkbox",
  name,
  disabled,
  label: t(`fields.${label}`),
  placeholder: t(`placeholder.${label}`),
  value,
  trueValue,
  falseValue,
  defaultValue,
  hide,
  required,
  setToFilter,
  rules: [
    ...(required
      ? [(v) => !!v || t("validation.required", { field: label })]
      : []),
  ],
  cols: { sm: 12, ...cols },
  ...(updateValueHandler && { updateValueHandler }),
});

export const createDateTimeField = ({
  t,
  key,
  disabled = false,
  readonly = false,
  label,
  required = true,
  dateOnly = false,
  cols = { md: 4, lg: 4 },
  value,
  disabledFrom,
  mode = "vertical", // value can be 'horizontal' or 'vertical'
  defaultValue = value,
  hide = false,
  updateValueHandler = null,
  setToFilter = false,
  teleport = false,
  enableTimePicker = false,
}) => ({
  key,
  disabled,
  readonly,
  type: dateOnly ? "date" : "datetime",
  label: t(`fields.${label}`),
  placeholder: t(`placeholder.${label}`),
  value,
  required,
  disabledFrom,
  defaultValue,
  hide,
  setToFilter,
  mode,
  teleport,
  enableTimePicker,
  rules: [...(required ? [t(`fields.${label}`)] : [])],
  cols: { sm: 12, ...cols },
  ...(updateValueHandler && { updateValueHandler }),
});

export const createTextAreaField = ({
  t,
  key,
  label,
  required = true,
  cols = { md: 4, lg: 4 },
  mode = "vertical", // value can be 'horizontal' or 'vertical'
  value,
  defaultValue = value,
  minLength = 0,
  hide,
  updateValueHandler = null,
  clearable = false,
  rules = [],
}) => ({
  key,
  type: "textarea",
  label: t(`fields.${label}`),
  placeholder: t(`placeholder.${label}`),
  value,
  required,
  defaultValue,
  hide,
  mode,
  clearable,
  cols: { sm: 12, ...cols },
  rules: [
    ...(required
      ? [(v) => !!v || t("validation.required", { field: label })]
      : []),
    ...(minLength
      ? [
          (v) =>
            v?.length >= minLength ||
            t(`validation.min_length`, { min: minLength }),
        ]
      : []),
    ...rules,
  ],
  ...(updateValueHandler && { updateValueHandler }),
});

export const createImageInput = ({
  t,
  key,
  label,
  required = true,
  cols = { md: 4, lg: 4 },
  maxSize,
  method = "base64",
  value,
  defaultValue = value,
  hide = false,
  updateValueHandler = null,
}) => ({
  key,
  type: "imageUploader",
  label: t(`fields.${label}`),
  placeholder: t(`placeholder.${label}`),
  value,
  required,
  maxSize,
  defaultValue,
  hide,
  method,
  rules: [...(required ? [t(`fields.${label}`)] : [])],
  cols: { sm: 12, ...cols },
  ...(updateValueHandler && { updateValueHandler }),
});
