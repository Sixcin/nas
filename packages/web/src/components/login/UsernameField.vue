<template>
  <MDOutlineTextField
    :rules="rules"
    label="username"
    name="username"
    spellcheck="false"
  >
    <template #leading-icon>
      <ID></ID>
    </template>
  </MDOutlineTextField>
</template>

<script lang="ts" setup>
import ID from "../icons/ID.vue";
import MDOutlineTextField from "../m3/MDOutlineTextField.vue";

function rules(value: string): boolean | string {
  if (!value) {
    return "emptyUsername";
  }

  return value.length > 0;
}
</script>
