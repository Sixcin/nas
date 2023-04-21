<template>
  <transition
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <MenuItems
      class="bg-surface2 shadow-2 absolute z-50 my-2 w-[12.5rem] origin-top-right rounded-md focus:outline-none ltr:right-6 rtl:left-6"
    >
      <div class="py-2">
        <slot></slot>
      </div>
    </MenuItems>
  </transition>
</template>

<script lang="ts" setup>
import { MenuItems } from "@headlessui/vue";
</script>
