<template>
  <TransitionRoot :show="isOpen" appear as="template">
    <Dialog as="div" class="relative z-50 font-sans" @close="closeModal">
      <MDModelTC1></MDModelTC1>
      <MDModelWrapper>
        <MDModelTC2>
          <slot></slot>
        </MDModelTC2>
      </MDModelWrapper>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { Dialog, TransitionRoot } from "@headlessui/vue";
import MDModelTC1 from "./MDModelTC1.vue";
import MDModelTC2 from "./MDModelTC2.vue";
import MDModelWrapper from "./MDModelWrapper.vue";

defineProps<{
  isOpen: boolean;
  closeModal: () => void;
}>();
</script>
