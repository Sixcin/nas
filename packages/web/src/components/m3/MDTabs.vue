<template>
  <TabList class="flex justify-center">
    <slot></slot>
  </TabList>
  <HDivider></HDivider>
</template>

<script lang="ts" setup>
import { TabList } from "@headlessui/vue";
import HDivider from "../page/HDivider.vue";
</script>
