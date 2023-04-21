<template>
  <div class="text-onSurfaceVariant flex flex-col gap-y-1 pl-4 pr-1.5 pb-1">
    <MainSection></MainSection>
    <SystemSection></SystemSection>
    <ManagerSection></ManagerSection>
  </div>
</template>

<script lang="ts" setup>
import MainSection from "./MainSection.vue";
import SystemSection from "./SystemSection.vue";
import ManagerSection from "./ManagerSection.vue";
</script>
