<template>
  <div class="font-art text-onSurface cursor-pointer text-2xl font-medium">
    <span v-show="!isFold">Node<span class="text-primary">Nas</span></span>
    <span v-show="isFold" class="text-primary">N</span>
  </div>
</template>

<script lang="ts" setup>
import { useNavStore } from "../../store/nav";
import { storeToRefs } from "pinia";

const { isFold } = storeToRefs(useNavStore());
</script>
