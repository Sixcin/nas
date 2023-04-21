<template>
  <div
    class="bg-surface3 text-primary hover:bg-surface4 shadow-3 hover:shadow-4 absolute bottom-8 rounded-2xl text-sm font-medium transition-all ltr:right-8 rtl:left-8 ltr:md:right-16 rtl:md:left-16"
  >
    <button
      class="hover:bg-primary/[0.08] focus:bg-primary/[0.12] active:bg-primary/[0.12] flex items-center gap-x-3 rounded-2xl py-4 pl-4 pr-5 transition-colors"
    >
      <slot></slot>
    </button>
  </div>
</template>
