<template>
  <Field
    v-slot="{ field, errors, errorMessage }"
    v-model="value"
    :name="name"
    :rules="rules"
    as="div"
  >
    <label :for="name" class="text-onSurfaceVariant text-sm">{{
      $t(label)
    }}</label>
    <div
      :class="[
        errorMessage || !isBlur ? 'border-2' : 'border p-px',
        {
          'border-error': errorMessage,
          'border-primary': !errorMessage && !isBlur,
          'border-outline': !errorMessage && isBlur,
        },
      ]"
      class="text-onSurface mt-2 flex rounded bg-transparent"
    >
      <MDIconWrapper>
        <slot name="leading-icon"></slot>
      </MDIconWrapper>
      <input
        :spellcheck="spellcheck || 'true'"
        :type="type || 'text'"
        class="field grow bg-transparent text-base focus:bg-transparent focus:outline-none"
        v-bind="field"
        @blur="isBlur = true"
        @focus="isBlur = false"
      />
      <button
        v-show="isEmpty"
        class="h-12 w-12"
        type="button"
        @click="clearValue"
      >
        <MDIconWrapper class="hover:text-onSurface">
          <Close></Close>
        </MDIconWrapper>
      </button>
    </div>
    <div class="text-error mx-3 mt-1 h-4 text-xs">
      <span>{{ errorMessage ? $t(errorMessage) : "" }}</span>
    </div>
  </Field>
</template>

<script lang="ts" setup>
import MDIconWrapper from "../m3/MDIconWrapper.vue";
import Close from "../icons/Close.vue";
import { computed, ref } from "vue";
import { Field } from "vee-validate";

defineProps<{
  name: string;
  label: string;
  rules?: any;
  type?: string;
  spellcheck?: "true" | "false";
}>();

const value = ref("");
const isBlur = ref(true);
const isEmpty = computed(() => value.value.length > 0);

function clearValue() {
  value.value = "";
}
</script>

<!--
tailwind css has bug with autofill modifier, use native css
-->
<style scoped>
.field:-webkit-autofill {
  background-color: transparent !important;
  background-image: none !important;
  -webkit-box-shadow: 0 0 0 1000px rgb(var(--md-sys-color-surface-1)) inset !important;
  -webkit-text-fill-color: rgb(var(--md-sys-color-on-surface));
  caret-color: rgb(var(--md-sys-color-on-surface));
}
</style>
