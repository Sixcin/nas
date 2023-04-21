<template>
  <div class="my-7 flex h-14 items-center justify-center pl-2.5">
    <router-link :to="{ name: 'Home' }">
      <HeaderLogo></HeaderLogo>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import HeaderLogo from "./HeaderLogo.vue";
</script>
