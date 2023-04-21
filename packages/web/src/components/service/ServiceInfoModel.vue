<template>
  <DialogPanel :class="ImageCardBgClass">
    <ServiceCardImage class="hidden md:block"></ServiceCardImage>
    <MDCardMain>
      <DialogTitle as="h2" class="font-art text-onSurface text-2xl font-medium">
        Edit<span class="text-primary"> Service</span>
      </DialogTitle>
      <slot name="dialogContent"></slot>
      <MDCardButtons>
        <slot></slot>
      </MDCardButtons>
    </MDCardMain>
  </DialogPanel>
</template>

<script lang="ts" setup>
import MDCardButtons from "../m3/MDCardButtons.vue";
import MDCardImage from "../m3/MDCardImage.vue";
import ServiceCardImage from "./ServiceCardImage.vue";
import MDCardMain from "../m3/MDCardMain.vue";
import { DialogPanel, DialogTitle } from "@headlessui/vue";
import { ImageCardBgClass } from "../../class/model-bg-class";
</script>
