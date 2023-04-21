import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavStore = defineStore("nav", () => {
  const isFold = ref(false);

  function toggleFold() {
    isFold.value = !isFold.value;
  }

  return {
    isFold,
    toggleFold,
  };
});
