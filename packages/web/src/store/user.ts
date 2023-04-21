import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const _nickname = ref(localStorage.getItem("nn"));
  const _token = ref(localStorage.getItem("tk"));
  const _username = ref(localStorage.getItem("un"));

  const isLogin = computed(() => {
    return !!_token.value;
  });
  const nickname = computed(() => {
    return _nickname.value;
  });
  const token = computed(() => {
    return _token.value;
  });
  const username = computed(() => {
    return _username.value;
  });

  function setUser(tk: string, nn: string, un: string) {
    _token.value = tk;
    _nickname.value = nn;
    _username.value = un;

    localStorage.setItem("tk", tk);
    localStorage.setItem("nn", nn);
    localStorage.setItem("un", un);
  }

  function clearUser() {
    _token.value = null;
    _nickname.value = null;
    _username.value = null;

    localStorage.removeItem("tk");
    localStorage.removeItem("nn");
    localStorage.removeItem("un");
  }

  return {
    clearUser,
    isLogin,
    nickname,
    setUser,
    token,
    username,
  };
});
