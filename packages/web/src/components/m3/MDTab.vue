<template>
  <Tab #default="{ selected }" class="grow basis-0">
    <div>
      <div
        :class="selected ? 'text-primary' : 'text-onSurfaceVariant'"
        class="mx-auto flex max-w-fit flex-col flex-nowrap items-center gap-y-0.5 pt-2.5"
      >
        <slot name="icon"></slot>
        <span class="text-sm font-medium">
          <slot></slot>
        </span>
        <div class="h-1.5 w-full px-0.5 pt-[3px]">
          <div
            :class="{ 'bg-primary': selected }"
            class="h-[3px] rounded-t-full"
          ></div>
        </div>
      </div>
    </div>
  </Tab>
</template>

<script lang="ts" setup>
import { Tab } from "@headlessui/vue";
</script>
