<template>
  <div
    class="flex cursor-pointer items-center justify-between py-3 px-4 text-sm font-medium"
  >
    <div>
      <div class="mr-3 inline-block w-6 text-center text-lg">
        <slot name="emj"></slot>
      </div>
      <span>
        <slot name="title"></slot>
      </span>
    </div>
    <ChevronDownIcon
      class="text-onSurfaceVariant ui-open:rotate-180 ui-open:transform h-5 w-5"
    />
  </div>
</template>

<script lang="ts" setup>
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
</script>
