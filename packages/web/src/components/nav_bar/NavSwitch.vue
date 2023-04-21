<template>
  <button aria-label="Toggle Navigation Drawer" @click="toggleFold">
    <HeaderIcon>
      <MenuUnfold v-show="!isFold"></MenuUnfold>
      <MenuFold v-show="isFold"></MenuFold>
    </HeaderIcon>
  </button>
</template>

<script lang="ts" setup>
import HeaderIcon from "./HeaderIcon.vue";
import MenuFold from "../icons/MenuFold.vue";
import MenuUnfold from "../icons/MenuUnfold.vue";
import { useNavStore } from "../../store/nav";
import { storeToRefs } from "pinia";

const nav = useNavStore();
const { isFold } = storeToRefs(nav);
const toggleFold = () => {
  nav.toggleFold();
};
</script>
