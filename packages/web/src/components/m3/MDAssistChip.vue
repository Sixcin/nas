<template>
  <div
    class="text-onSurface border-outline rounded-lg border transition-colors"
  >
    <div
      class="hover:bg-onSurfaceVariant/[0.08] active:bg-onSurfaceVariant/[0.12] flex justify-center rounded-lg py-2 pr-4 text-sm font-medium transition-colors"
    >
      <div class="px-2">
        <slot name="icon"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
