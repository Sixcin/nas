<template>
  <NormalTitle>
    <template #emj>🍻</template>
    <template #title>
      <i18n-t keypath="sharingServiceTitle" tag="span">
        <template #service
          ><span class="text-primary">{{ $t("service") }}</span>
        </template>
      </i18n-t>
    </template>
  </NormalTitle>
</template>

<script lang="ts" setup>
import NormalTitle from "../page/NormalTitle.vue";
</script>
