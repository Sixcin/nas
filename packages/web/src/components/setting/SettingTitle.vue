<template>
  <NormalTitle>
    <template #emj>🛠️</template>
    <template #title>
      <i18n-t keypath="settingsTitle" tag="span">
        <template #settings
          ><span class="text-primary">{{ $t("settings") }}</span></template
        >
      </i18n-t>
    </template>
  </NormalTitle>
</template>

<script lang="ts" setup>
import NormalTitle from "../page/NormalTitle.vue";
</script>
