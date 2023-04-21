<template>
  <aside>
    <nav
      :class="{ 'w-64': !isFold }"
      class="custom-scrollbar hidden h-full overflow-y-scroll overscroll-y-contain md:block"
    >
      <NavLogo></NavLogo>
      <NavItems></NavItems>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import NavItems from "../components/nav_drawer/NavItems.vue";
import NavLogo from "../components/nav_drawer/NavLogo.vue";
import { useNavStore } from "../store/nav";
import { storeToRefs } from "pinia";

const { isFold } = storeToRefs(useNavStore());
</script>
