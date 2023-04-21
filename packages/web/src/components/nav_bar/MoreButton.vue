<template>
  <MDMenu>
    <template #button>
      <MenuButton aria-label="More Options">
        <HeaderIcon>
          <More></More>
        </HeaderIcon>
      </MenuButton>
    </template>
    <template #items>
      <MDMenuItem @click="openModal">
        <Info></Info>
        {{ $t("aboutApp") }}
      </MDMenuItem>
    </template>
  </MDMenu>
  <MDModel :close-modal="closeModal" :is-open="isOpen">
    <AppInfoModel>
      <button class="rounded-full" @click="closeModal">
        <MDFilledButton>{{ $t("close") }}</MDFilledButton>
      </button>
    </AppInfoModel>
  </MDModel>
</template>

<script lang="ts" setup>
import HeaderIcon from "./HeaderIcon.vue";
import More from "../icons/More.vue";
import MDMenu from "../m3/MDMenu.vue";
import MDMenuItem from "../m3/MDMenuItem.vue";
import Info from "../icons/Info.vue";
import MDModel from "../m3/MDModel.vue";
import MDFilledButton from "../m3/MDFilledButton.vue";
import AppInfoModel from "./AppInfoModel.vue";
import { MenuButton } from "@headlessui/vue";
import { ref } from "vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}
</script>
