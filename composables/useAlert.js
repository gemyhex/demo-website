import Swal from "sweetalert2";
// import storage from './useStorage'
import { icons } from "@/plugins/icons";
import { useNuxtApp } from "#app";

export const getLocale = () => {
  const { $i18n } = useNuxtApp();
  return $i18n.locale.value;
};

export const showAlert = (message, type = "error") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: type,
    title: message,
  });
};

export const confirmDelete = ({ title, message, icon } = {}) => {
  const locale = storage.get("locale") || "en";

  const defaultTitle =
    locale === "ar"
      ? "هل أنت متأكد من حذف هذا؟"
      : "Are you sure you want to delete?";
  const defaultMessage =
    locale === "ar"
      ? "هل أنت متأكد أنك تريد حذف هذا؟ ,لا يمكن التراجع عن هذا الإجراء."
      : "Are you sure you want to delete this? This action cannot be undone.";
  const defaultIcon = icon || icons?.DeleteIcon;
  return Swal.fire({
    customClass: {
      container: `swal2-container confirmation ${locale}`,
      header: "custom-test",
    },
    iconHtml: defaultIcon,
    title: title || defaultTitle,
    text: message || defaultMessage,
    showCancelButton: true,
    showCloseButton: true,
    reverseButtons: locale === "ar",
    confirmButtonColor: "rgba(var(--v-theme-primary))",
    confirmButtonText: locale === "ar" ? "موافق" : "OK",
    cancelButtonText: locale === "ar" ? "إلغاء" : "Cancel",
  }).then((result) => result.isConfirmed);
};
