<template>
  <MDCircle
    :class="
      Math.round(Math.random())
        ? 'bg-primary text-onPrimary'
        : 'bg-tertiary text-onTertiary'
    "
    class="flex"
  >
    <div class="m-auto text-center font-medium">
      <slot></slot>
    </div>
  </MDCircle>
</template>

<script lang="ts" setup>
import MDCircle from "./MDCircle.vue";
</script>
