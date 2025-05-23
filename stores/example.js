import { defineStore } from "pinia";

export const useExampleStore = defineStore("example", () => {
  const fetchData = () => useAPI("posts");

  return {
    fetchData,
  };
});
