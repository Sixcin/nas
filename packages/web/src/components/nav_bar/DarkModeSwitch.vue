<template>
  <MDMenu>
    <template #button>
      <MenuButton aria-label="Change Dark Mode">
        <HeaderIcon>
          <Sun v-show="!isDarkMode"></Sun>
          <Moon v-show="isDarkMode"></Moon>
        </HeaderIcon>
      </MenuButton>
    </template>
    <template #items>
      <MDMenuItem @click="theme.changeToLight">
        <Sun></Sun>
        {{ $t("light") }}
      </MDMenuItem>
      <MDMenuItem @click="theme.changeToDark">
        <Moon></Moon>
        {{ $t("dark") }}
      </MDMenuItem>
      <MDMenuItem @click="theme.changeToSystem">
        <Brightness></Brightness>
        {{ $t("followSystem") }}
      </MDMenuItem>
    </template>
  </MDMenu>
</template>

<script lang="ts" setup>
import HeaderIcon from "./HeaderIcon.vue";
import Sun from "../icons/Sun.vue";
import Moon from "../icons/Moon.vue";
import Brightness from "../icons/Brightness.vue";
import MDMenu from "../m3/MDMenu.vue";
import MDMenuItem from "../m3/MDMenuItem.vue";
import { useThemeStore } from "../../store/theme";
import { storeToRefs } from "pinia";
import { MenuButton } from "@headlessui/vue";

const theme = useThemeStore();
const { isDarkMode } = storeToRefs(theme);
</script>
