<template>
  <DialogPanel :class="ImageCardBgClass">
    <MDCardImage class="hidden md:block"></MDCardImage>
    <MDCardMain>
      <DialogTitle as="h2" class="font-art text-onSurface text-2xl font-medium">
        Node<span class="text-primary">Nas</span>
      </DialogTitle>
      <AppInfoContent></AppInfoContent>
      <MDCardButtons>
        <slot></slot>
      </MDCardButtons>
    </MDCardMain>
  </DialogPanel>
</template>

<script lang="ts" setup>
import MDCardButtons from "../m3/MDCardButtons.vue";
import AppInfoContent from "./AppInfoContent.vue";
import MDCardImage from "../m3/MDCardImage.vue";
import MDCardMain from "../m3/MDCardMain.vue";
import { DialogPanel, DialogTitle } from "@headlessui/vue";
import { ImageCardBgClass } from "../../class/model-bg-class";
</script>
