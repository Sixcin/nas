<template>
  <MDOutlineTextField label="password" name="password" type="password">
    <template #leading-icon>
      <Key></Key>
    </template>
  </MDOutlineTextField>
</template>

<script lang="ts" setup>
import MDOutlineTextField from "../m3/MDOutlineTextField.vue";
import Key from "../icons/Key.vue";
</script>
