<template>
  <router-link
    :class="{ 'bg-secondaryContainer text-onSecondaryContainer': active }"
    :to="to"
    class="rounded-full transition-colors"
  >
    <div
      :class="classObject"
      class="flex h-full w-full items-center gap-x-3 rounded-full py-3 transition-colors"
    >
      <slot name="logo"></slot>
      <span v-show="!isFold" class="text-sm font-medium">
        <slot name="text"></slot>
      </span>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useNavStore } from "../../store/nav";
import { storeToRefs } from "pinia";

const { isFold } = storeToRefs(useNavStore());

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  to: {
    type: Object,
    default: { name: "Home" },
  },
});

const classObject = computed(() => [
  props.active
    ? "hover:bg-onSurface/[0.08] active:bg-onSurface/[0.12]"
    : "hover:bg-onSecondaryContainer/[0.08] active:bg-onSecondaryContainer/[0.12]",
  isFold.value ? "pl-3 pr-3" : "pl-4 pr-4",
]);
</script>
