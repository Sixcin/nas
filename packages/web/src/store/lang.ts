import { defineStore } from "pinia";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export const useLangStore = defineStore("lang", () => {
  const isRTL = ref(useI18n().locale.value.includes("ar"));

  function applyRTL() {
    document.body.setAttribute("dir", isRTL.value ? "rtl" : "ltr");
  }

  function removeRTL() {
    document.body.removeAttribute("dir");
  }

  function changeRTL(value: boolean) {
    isRTL.value = value;
    applyRTL();
  }

  return {
    applyRTL,
    changeRTL,
    removeRTL,
  };
});
