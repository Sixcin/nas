<template>
  <Menu as="div" class="relative inline-block text-left">
    <slot name="button"></slot>
    <MDMenuItems>
      <slot name="items"></slot>
    </MDMenuItems>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from "@headlessui/vue";
import MDMenuItems from "../m3/MDMenuItems.vue";
</script>
