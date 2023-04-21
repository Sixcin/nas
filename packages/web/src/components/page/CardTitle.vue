<template>
  <div>
    <p class="relative right-2 mt-6 text-6xl md:hidden">
      <slot name="emj"></slot>
    </p>
    <h1 class="text-onSurface mt-10 text-4xl font-medium md:mt-0 md:text-xl">
      <span class="hidden md:inline"><slot name="emj"></slot>&nbsp;</span>
      <slot name="title"></slot>
    </h1>
  </div>
</template>
