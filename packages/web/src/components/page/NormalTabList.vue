<template>
  <MDSegmentedButtons
    v-if="isLaptop"
    :class="
      props.items.length === 2
        ? ''
        : props.items.length === 3
        ? 'ltr:left-px rtl:right-px'
        : props.items.length === 4
        ? 'ltr:left-px rtl:right-px'
        : props.items.length === 5
        ? 'ltr:left-0.5 rtl:right-0.5'
        : ''
    "
    class="relative"
  >
    <template v-for="(item, index) in props.items">
      <!--   This looks silly because tailwind can't resolve `right-[${index}px]`   -->
      <MDSegmentedButton
        :class="
          index === 0
            ? ''
            : index === 1
            ? 'ltr:right-px rtl:left-px'
            : index === 2
            ? 'ltr:right-0.5 rtl:left-0.5'
            : index === 3
            ? 'ltr:right-[3px] rtl:left-[3px]'
            : index === 4
            ? 'ltr:right-1 rtl:left-1'
            : ''
        "
        :first="index === 0"
        :last="index === props.items.length - 1"
        class="relative"
      >
        <component :is="item.smallIcon"></component>
        {{ $t(item.name) }}
      </MDSegmentedButton>
    </template>
  </MDSegmentedButtons>
  <MDTabs v-if="!isLaptop">
    <template v-for="item in props.items">
      <MDTab>
        <template #icon>
          <component :is="item.largeIcon"></component>
        </template>
        {{ $t(item.name) }}
      </MDTab>
    </template>
  </MDTabs>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import MDSegmentedButtons from "../m3/MDSegmentedButtons.vue";
import MDTabs from "../m3/MDTabs.vue";
import MDTab from "../m3/MDTab.vue";
import MDSegmentedButton from "../m3/MDSegmentedButton.vue";

interface Item {
  name: string;
  smallIcon: any;
  largeIcon: any;
}

const props = defineProps<{ items: Item[] }>();

const windowWidth = ref(window.innerWidth);

function handleResize() {
  windowWidth.value = window.innerWidth;
}

const isLaptop = computed(() => {
  return windowWidth.value > 768;
});

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
