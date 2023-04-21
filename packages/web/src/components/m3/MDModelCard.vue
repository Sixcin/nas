<template>
  <div class="relative z-10 font-sans">
    <MDModelWrapper>
      <slot></slot>
    </MDModelWrapper>
  </div>
</template>

<script lang="ts" setup>
import MDModelWrapper from "./MDModelWrapper.vue";
</script>
