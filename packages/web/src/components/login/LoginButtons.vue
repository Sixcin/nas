<!--suppress HtmlUnknownTarget -->
<template>
  <MDCardButtons>
    <button class="rounded-full" type="submit">
      <MDFilledButton>{{ $t("login") }}</MDFilledButton>
    </button>
    <a class="rounded-full" href="/docs/index.html">
      <MDOutlineButton>{{ $t("docs") }}</MDOutlineButton>
    </a>
  </MDCardButtons>
</template>

<script lang="ts" setup>
import MDCardButtons from "../m3/MDCardButtons.vue";
import MDFilledButton from "../m3/MDFilledButton.vue";
import MDOutlineButton from "../m3/MDOutlineButton.vue";
</script>
