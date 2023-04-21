<template>
  <DialogPanel :class="DialogBgClass">
    <div class="flex flex-col gap-y-4 px-6 pt-6">
      <div class="text-secondary m-auto">
        <Logout></Logout>
      </div>
      <DialogTitle as="h3" class="text-onSurface text-center text-2xl"
        >{{ $t("logout") }}
      </DialogTitle>
      <MDCardContent>
        <p class="text-onSurfaceVariant text-sm font-medium">
          {{ $t("logoutPrompt") }}
        </p>
      </MDCardContent>
    </div>
    <MDCardButtons class="p-6">
      <slot></slot>
    </MDCardButtons>
  </DialogPanel>
</template>

<script lang="ts" setup>
import MDCardButtons from "../m3/MDCardButtons.vue";
import MDCardContent from "../m3/MDCardContent.vue";
import Logout from "../icons/Logout.vue";
import { DialogPanel, DialogTitle } from "@headlessui/vue";
import { DialogBgClass } from "../../class/model-bg-class";
</script>
