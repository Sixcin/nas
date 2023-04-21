<template>
  <div
    class="bg-primary hover:shadow-1 inline-block rounded-full transition-all"
  >
    <div
      class="hover:bg-onPrimary/[0.08] text-onPrimary active:bg-onPrimary/[0.12] rounded-full py-2.5 px-6 text-sm font-medium"
    >
      <slot></slot>
    </div>
  </div>
</template>
