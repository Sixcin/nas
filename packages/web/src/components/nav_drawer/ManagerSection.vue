<template>
  <Section :items="items" :title="$t('manager')" emj="🍞"></Section>
</template>

<script lang="ts" setup>
import Section from "./Section.vue";
import Net from "../icons/Net.vue";
import Disk from "../icons/Disk.vue";
import DatabaseNet from "../icons/DatabaseNet.vue";
import Users from "../icons/Users.vue";
import Settings from "../icons/Settings.vue";

const items = [
  {
    name: "userManager",
    pathNames: ["UserManager", "EditUser"],
    component: Users,
  },
  {
    name: "sharingService",
    pathNames: ["SharingService"],
    component: DatabaseNet,
  },
  { name: "diskManager", pathNames: ["Disk"], component: Disk },
  { name: "networkSettings", pathNames: ["Network"], component: Net },
  { name: "generalSettings", pathNames: ["Setting"], component: Settings },
];
</script>
