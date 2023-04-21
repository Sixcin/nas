<template>
  <TabGroup>
    <div class="m-auto mt-8 w-full md:max-w-xl md:py-2">
      <slot name="tab-list"></slot>
    </div>
    <NormalPage>
      <TabPanels>
        <slot name="tab-panels"></slot>
      </TabPanels>
    </NormalPage>
  </TabGroup>
</template>

<script lang="ts" setup>
import { TabGroup, TabPanels } from "@headlessui/vue";
import NormalPage from "./NormalPage.vue";
</script>
