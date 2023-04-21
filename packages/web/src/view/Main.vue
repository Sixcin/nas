<template>
  <div
    :class="isDarkMode ? 'bg-decoration-dark' : 'bg-decoration-light'"
    class="bg-background flex h-full w-full overflow-hidden bg-[length:720px] bg-right-top bg-no-repeat font-sans transition-colors duration-300"
  >
    <NavDrawer></NavDrawer>
    <MainView></MainView>
  </div>
</template>

<script lang="ts" setup>
import NavDrawer from "../layout/NavDrawer.vue";
import { useThemeStore } from "../store/theme";
import MainView from "../layout/MainView.vue";
import { storeToRefs } from "pinia";

const { isDarkMode } = storeToRefs(useThemeStore());
</script>
