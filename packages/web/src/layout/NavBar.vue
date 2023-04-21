<template>
  <header
    :class="{ 'bg-surface/40 backdrop-blur-lg': !isTop }"
    class="text-onSurface sticky top-0 left-0 right-0 z-10 px-1 py-1 transition-colors duration-300"
  >
    <div class="flex items-center gap-x-1">
      <LeadingIcons></LeadingIcons>
      <Headline></Headline>
      <TrailingIcons></TrailingIcons>
    </div>
  </header>
</template>

<script lang="ts" setup>
import LeadingIcons from "../components/nav_bar/LeadingIcons.vue";
import Headline from "../components/nav_bar/Headline.vue";
import TrailingIcons from "../components/nav_bar/TrailingIcons.vue";

defineProps<{
  isTop: boolean;
}>();
</script>
