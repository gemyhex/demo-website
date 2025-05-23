import { defineStore } from "pinia";
import { ref } from "vue";

export const useBreadCrumbStore = defineStore("breadCrumb", () => {
  const currentPage = ref("");
  const breadCrumb = ref([]);

  const setBreadcrumbs = (breadcrumbs) => {
    breadCrumb.value = breadcrumbs;
    setCurrentPage(breadcrumbs[breadcrumbs.length - 1]?.title || "");
  };

  const setCurrentPage = (page) => {
    currentPage.value = page;
  };

  return { currentPage, breadCrumb, setBreadcrumbs, setCurrentPage };
});
