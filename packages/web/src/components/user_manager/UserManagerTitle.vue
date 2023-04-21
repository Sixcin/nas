<template>
  <NormalTitle>
    <template #emj>🥳</template>
    <template #title>
      <i18n-t keypath="userManagerTitle" tag="span">
        <template #manager
          ><span class="text-primary">{{ $t("manager") }}</span>
        </template>
      </i18n-t>
    </template>
  </NormalTitle>
</template>

<script lang="ts" setup>
import NormalTitle from "../page/NormalTitle.vue";
</script>
