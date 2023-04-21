<template>
  <div class="grow overflow-hidden py-1.5">
    <p class="text-onSurface truncate text-base">
      <slot></slot>
    </p>
    <p class="text-onSurfaceVariant truncate text-sm">
      <slot name="role"></slot>
    </p>
  </div>
</template>
