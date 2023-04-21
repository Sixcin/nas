<template>
  <transition
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <MenuItem
      class="bg-surface1 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      #default="{ active }"
    >
      <div
        class="text-onSurface group flex w-full items-center py-2 pl-4 pr-6 text-base transition-colors duration-300"
      >
        <div class="flex gap-x-4 py-2">
          <slot></slot>
        </div>
      </div>
    </MenuItem>
  </transition>
</template>

<script lang="ts" setup>
import { MenuItem } from "@headlessui/vue";
</script>
