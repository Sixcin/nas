<template>
  <Section :items="items" :title="$t('system')" emj="🍉"></Section>
</template>
<script lang="ts" setup>
import Section from "./Section.vue";
import Console from "../icons/Console.vue";
import Process from "../icons/Process.vue";
import Service from "../icons/Service.vue";
import Plugin from "../icons/Plugin.vue";

const items = [
  { name: "plugin", pathNames: ["Plugin"], component: Plugin },
  {
    name: "service",
    pathNames: ["Service"],
    component: Service,
  },
  { name: "process", pathNames: ["Process"], component: Process },
  { name: "console", pathNames: ["Console"], component: Console },
];
</script>
