<template>
  <div
    class="border-outlineVariant flex items-center gap-x-4 rounded-xl border p-4"
  >
    <Menu as="div" class="relative inline-block text-left">
      <MenuButton
        class="flex inline-flex w-full items-center gap-x-4 rounded-md bg-opacity-20 text-base font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        aria-label="More Options"
      >
        <div
          :class="Math.round(Math.random()) ? 'bg-primary' : 'bg-tertiary'"
          class="text-onPrimary flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        >
          <slot name="icon"></slot>
        </div>

        <p class="text-onSurfaceVariant text-base">
          <slot></slot>
        </p>

        <ServiceSwitch class="ml-0"></ServiceSwitch>
        <ChevronDownIcon
          class="text-onSurfaceVariant ml-0 w-5 hover:text-violet-100"
          aria-hidden="false"
        />
      </MenuButton>

      <MenuItems>
        <ServiceMenuItem @click="openModal">
          <Info></Info>
          {{ $t("Edit Service") }}
        </ServiceMenuItem>
      </MenuItems>
    </Menu>
    <MDModel :close-modal="closeModal" :is-open="isOpen">
      <ServiceInfoModel>
        <template #dialogContent>
          <slot name="dialog"></slot>
        </template>
        <button class="rounded-full" @click="closeModal">
          <MDFilledButton>{{ $t("save & close") }}</MDFilledButton>
        </button>
      </ServiceInfoModel>
    </MDModel>
  </div>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import ServiceMenuItem from "./ServiceMenuItem.vue";
import ServiceInfoModel from "./ServiceInfoModel.vue";
import ServiceSwitch from "./ServiceSwitch.vue";
import Info from "../icons/Info.vue";
import MDModel from "../m3/MDModel.vue";
import MDFilledButton from "../m3/MDFilledButton.vue";
import { NButton } from "naive-ui";
import { ref } from "vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}
</script>
