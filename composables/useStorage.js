import { useStorage } from "@vueuse/core";
import { useNuxtApp } from "#app"; // Import useNuxtApp

export function useMyStorage() {
  const nuxtApp = useNuxtApp();
  const isBrowser = process.client;

  const storage = isBrowser
    ? localStorage
    : {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        key: () => null,
        length: 0,
      };

  function get(keyOrKeys) {
    if (!isBrowser) return null;

    if (Array.isArray(keyOrKeys)) {
      const result = {};
      keyOrKeys.forEach((key) => {
        const stored = useStorage(key, null, storage);
        result[key] = stored.value;
      });
      return result;
    } else {
      const stored = useStorage(keyOrKeys, null, storage);
      return stored.value;
    }
  }

  function set(keyOrData, value) {
    if (!isBrowser) return;

    if (typeof keyOrData === "object" && keyOrData !== null) {
      Object.keys(keyOrData).forEach((name) => {
        const stored = useStorage(name, keyOrData[name], storage);
        stored.value = keyOrData[name];
      });
    } else if (typeof keyOrData === "string" && value !== undefined) {
      const stored = useStorage(keyOrData, value, storage);
      stored.value = value;
    }
  }

  function remove(...keys) {
    if (!isBrowser) return;

    keys.forEach((key) => {
      storage.removeItem(key);
    });
  }

  function has(key) {
    if (!isBrowser) return false;
    return storage.getItem(key) !== null;
  }

  function clear() {
    if (!isBrowser) return;
    storage.clear();
  }

  return {
    get,
    set,
    remove,
    has,
    clear,
  };
}
