<template>
  <NormalTitle>
    <template #emj>🛰️</template>
    <template #title>{{ $t("service") }}</template>
  </NormalTitle>
</template>

<script lang="ts" setup>
import NormalTitle from "../page/NormalTitle.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<i18n>
  {
    "en": {
      "Service": "Service"
    },
    "zh-CN": {
      "Service": "服务"
    }
  }
  </i18n>
