<template>
  <MenuItem #default="{ active }">
    <div
      :class="{ 'bg-surfaceVariant': active }"
      class="text-onSurface group flex w-full items-center py-2 pl-4 pr-6 text-base transition-colors duration-300"
    >
      <div class="flex gap-x-4 py-2">
        <slot></slot>
      </div>
    </div>
  </MenuItem>
</template>

<script lang="ts" setup>
import { MenuItem } from "@headlessui/vue";
</script>
