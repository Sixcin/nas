<template>
  <article id="main-view" class="grow overflow-y-auto overscroll-y-contain">
    <NavBar :is-top="isTop"></NavBar>
    <router-view></router-view>
  </article>
</template>

<script lang="ts" setup>
import NavBar from "../layout/NavBar.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "throttle-debounce";

const isTop = ref(true);

onMounted(() => {
  const article = document.getElementById("main-view");
  article?.addEventListener(
    "scroll",
    throttle(1000, () => {
      isTop.value = article?.scrollTop === 0;
    })
  );
});
onUnmounted(() => {
  document.getElementById("main-view")?.removeEventListener("scroll", () => {});
});
</script>
