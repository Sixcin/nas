<template>
  <Section :items="items" :title="$t('main')" emj="🍧"></Section>
</template>

<script lang="ts" setup>
import Section from "./Section.vue";
import Share from "../icons/Share.vue";
import Folder from "../icons/Folder.vue";
import Dashboard from "../icons/Dashboard.vue";
import Home from "../icons/Home.vue";

const items = [
  { name: "home", pathNames: ["Home"], component: Home },
  { name: "dashboard", pathNames: ["Dashboard"], component: Dashboard },
  { name: "fileManager", pathNames: ["FileManager"], component: Folder },
  { name: "fileSharing", pathNames: ["FileSharing"], component: Share },
];
</script>
