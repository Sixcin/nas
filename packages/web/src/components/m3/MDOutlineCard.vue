<template>
  <MDCardOutline>
    <div class="flex items-center gap-x-4 p-4">
      <MDCircle
        :class="Math.round(Math.random()) ? 'bg-primary' : 'bg-tertiary'"
        class="text-onPrimary flex items-center justify-center"
      >
        <slot name="icon"></slot>
      </MDCircle>
      <MDCardContentText>
        <slot></slot>
        <template #subhead>
          <slot name="subhead"></slot>
        </template>
      </MDCardContentText>
    </div>
    <slot name="media"></slot>
  </MDCardOutline>
</template>

<script lang="ts" setup>
import MDCardContentText from "./MDCardContentText.vue";
import MDCircle from "./MDCircle.vue";
import MDCardOutline from "./MDCardOutline.vue";
</script>
