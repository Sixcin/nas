<template>
  <Tab #default="{ selected }" class="grow basis-0">
    <div
      :class="[
        { 'ltr:rounded-l-full rtl:rounded-r-full': first },
        { 'ltr:rounded-r-full rtl:rounded-l-full': last },
        selected
          ? 'bg-secondaryContainer text-onSecondaryContainer'
          : 'text-onSurface',
      ]"
      class="border-outline flex h-10 items-center justify-center gap-x-4 border px-4 text-sm font-medium"
    >
      <slot></slot>
    </div>
  </Tab>
</template>

<script lang="ts" setup>
import { Tab } from "@headlessui/vue";

defineProps<{
  first?: boolean;
  last?: boolean;
}>();
</script>
