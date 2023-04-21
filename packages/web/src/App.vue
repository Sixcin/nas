<template>
  <NConfigProvider :theme="isDarkMode ? darkTheme : lightTheme" abstract>
    <router-view></router-view>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useThemeStore } from "./store/theme";
import { onMounted, onUnmounted } from "vue";
import { useLangStore } from "./store/lang";
import { applyLang, removeLang } from "./utils/lang";
import { darkTheme, lightTheme, NConfigProvider } from "naive-ui";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const { applyStyle, removeStyle } = themeStore;
const { isDarkMode } = storeToRefs(themeStore);
const { applyRTL, removeRTL } = useLangStore();

onMounted(() => {
  applyLang(useI18n().locale.value);
  applyStyle();
  applyRTL();
});
onUnmounted(() => {
  removeLang();
  removeStyle();
  removeRTL();
});
</script>
