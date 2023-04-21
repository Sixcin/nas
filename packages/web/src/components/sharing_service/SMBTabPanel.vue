<template>
  <TabPanel>
    <SecondaryTitle class="mt-8">
      <i18n-t keypath="specialSections" tag="span">
        <template #special>
          <span class="text-tertiary">{{ $t("special") }}</span>
        </template>
      </i18n-t>
    </SecondaryTitle>
    <SecondaryTitle class="mt-8">
      <i18n-t keypath="ordinarySections" tag="span">
        <template #ordinary>
          <span class="text-tertiary">{{ $t("ordinary") }}</span>
        </template>
      </i18n-t>
    </SecondaryTitle>
  </TabPanel>
</template>

<script lang="ts" setup>
import { TabPanel } from "@headlessui/vue";
import SecondaryTitle from "../page/SecondaryTitle.vue";
</script>
