export function handleFormData(data, globalKey, group = false) {
  let formData = new FormData();
  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      if (typeof item === "object" && item !== null) {
        for (let [key, value] of Object.entries(item)) {
          if (key === "group" || key === "key" || key === "value")
            formData.append(`${globalKey}[${index}][${key}]`, value);
        }
      } else {
        formData.append(`${globalKey}[${index}]`, item);
      }
    });
  }

  return formData;
}

// Regular expression to check for common image file extensions
const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg|ico)$/i;

// Function to check if a value is an image URL
function isImageURL(value) {
  return typeof value === "string" && imageExtensions.test(value);
}

// Function to process nested keys, with image URL check
function processNestedKeys(object, keys, value, keyProp) {
  const [parentKey, childKey] = keys;
  if (!object[parentKey]) object[parentKey] = {};
  if (isImageURL(value)) delete object[parentKey][childKey];
  else object[parentKey][childKey] = value;

  return object;
}

const exaptionsCase = (key) => {
  return key.startsWith("plate_");
};

// Function to process a single field
function processField(object, field, keyProp) {
  const key = field[keyProp]?.toString();
  if (!key) return object;

  const keys = key.split(".");
  if (exaptionsCase(key)) {
    return handleExceptionCase(object, field);
  } else if (keys.length > 1) {
    if (field.value !== undefined) {
      return processNestedKeys(object, keys, field.value, keyProp);
    }
    return object;
  } else {
    if (field.value === undefined) return object;

    if (isImageURL(field.value)) {
      delete object[key];
    } else {
      object[key] = field.value;
    }
    return object;
  }
}

// Function to process group children
function processGroupChildren(children, keyProp) {
  return children.reduce((groupAcc, child) => {
    const key = child[keyProp]?.toString();
    if (key) {
      if (exaptionsCase(key)) return handleExceptionCase(groupAcc, child);
      const childKeys = key.split(".");
      if (childKeys.length > 1)
        return processNestedKeys(groupAcc, childKeys, child.value, keyProp);
      else {
        if (!isImageURL(child.value)) groupAcc[key] = child.value;
      }
    }
    return groupAcc;
  }, {});
}

// Function to handle group fields with payload type
function processGroupFieldWithPayload(object, field, keyProp) {
  const groupObject = processGroupChildren(field.children || [], keyProp);
  const payloadShape = field.payload || "array";
  const key = field[keyProp]?.toString();
  if (!key) return object;

  if (payloadShape === "object") object[key] = groupObject;
  else if (payloadShape === "array") {
    if (!object[key]) object[key] = [];
    object[key].push(groupObject);
  }

  return object;
}

// Main function to transform schema
export function transformSchemaToObject(schema, keyProp = "key") {
  return schema.reduce((acc, field) => {
    if (field.type === "group" || field.type === "groupUI") {
      return processGroupFieldWithPayload(acc, field, keyProp);
    } else {
      return processField(acc, field, keyProp); // i change this function to ignore the undefined values
    }
  }, {});
}

export const updateSchemaValues = async (
  schema,
  data,
  assignValuesToSchemaKeys = []
) => {
  if (!data) return schema;

  // Create a lookup object for assignValuesToSchemaKeys
  const schemaKeyLookup = assignValuesToSchemaKeys.reduce(
    (acc, { schemaKey, dataKey }) => {
      acc[schemaKey] = dataKey;
      return acc;
    },
    {}
  );

  schema.forEach((item) => {
    if (typeof item.key === "string") {
      if (schemaKeyLookup[item.key]) {
        const value = schemaKeyLookup[item.key]
          .split(".")
          .reduce((o, k) => (o || {})[k], data);
        item.value = value !== null && value !== undefined ? value : null;
      } else if (item.key.includes(".")) {
        // Handle nested keys
        const keys = item.key.split(".");
        let value = data;

        // Traverse through the nested keys
        for (let i = 0; i < keys.length; i++) {
          if (value && keys[i] in value) {
            value = value[keys[i]];
          } else {
            value = undefined;
            break;
          }
        }

        // Set the item value if found, otherwise keep the default value
        item.value = value !== undefined ? value : item.value;
      } else if (item.key in data) {
        // Handle simple keys
        if (item.key === "permissions" && Array.isArray(data.permissions)) {
          item.value = data.permissions.map((permission) => permission.name);
        } else {
          item.value = data[item.key];
        }
      }
    }
  });

  return schema;
};

export function resetSchemaValues(schema) {
  schema.forEach((item) => {
    if (typeof item.value == "string") item.value = "";
    else item.value = [];
  });
}

export function objectToQueryString(obj, prefix = "") {
  const queryParams = Object.keys(obj)
    .filter((key) => obj[key] !== undefined) // Filter out undefined values
    .map((key) => {
      const value = obj[key];
      const queryKey = prefix
        ? `${prefix}[${encodeURIComponent(key)}]`
        : encodeURIComponent(key);

      if (Array.isArray(value)) {
        // Handle arrays
        return value
          .map((val) => `${queryKey}[]=${encodeURIComponent(val)}`)
          .join("&");
      } else if (typeof value === "object" && value !== null) {
        // Handle nested objects
        return objectToQueryString(value, queryKey);
      } else {
        // Handle simple values
        return `${queryKey}=${encodeURIComponent(value)}`;
      }
    })
    .join("&");

  return queryParams;
}

export const handleErrors = async (schema, errors) => {
  schema.forEach((field) => {
    if (field.key) {
      if (errors[field.key]) {
        // If the full key exists in errors, use it directly
        field.errorMessages = errors[field.key];
      } else {
        // Fallback to empty array if no error is found
        field.errorMessages = [];
      }
    } else {
      // If no key is defined for the field, clear error messages
      field.errorMessages = [];
    }
  });
  return schema;
};

export function findSchemaIndex(schema, key) {
  for (let i = 0; i < schema.length; i++) {
    if (schema[i].key === key) {
      return i;
    }
    if (schema[i].children) {
      const childIndex = findSchemaIndex(schema[i].children, key);
      if (childIndex !== -1) {
        // Return the index as a path: parent index + child index
        return `${i}.${childIndex}`;
      }
    }
  }
  return -1; // Not found
}

export function findSchemaItem(schema, key) {
  return schema.find((item) => item.key === key);
}
