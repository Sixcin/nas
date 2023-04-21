<template>
  <NormalTitle>
    <template #emj>🍹</template>
    <template #title>
      <i18n-t keypath="fileSharingTitle" tag="span">
        <template #sharing
          ><span class="text-primary">{{ $t("sharing") }}</span>
        </template>
      </i18n-t>
    </template>
  </NormalTitle>
</template>

<script lang="ts" setup>
import NormalTitle from "../page/NormalTitle.vue";
</script>
