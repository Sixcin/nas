<template>
  <SecondaryTitle class="mt-8">
    <i18n-t keypath="locationAndSource" tag="span">
      <template #source>
        <span class="text-tertiary">{{ $t("source") }}</span>
      </template>
    </i18n-t>
  </SecondaryTitle>
  <MDCards>
    <MDOutlineCard v-for="location in locations">
      <template #icon>
        <component :is="location.icon"></component>
      </template>
      {{ $t(location.title) }}
    </MDOutlineCard>
  </MDCards>
</template>

<script lang="ts" setup>
import SecondaryTitle from "../page/SecondaryTitle.vue";
import Home from "../icons/Home.vue";
import MDOutlineCard from "../m3/MDOutlineCard.vue";
import MDCards from "../m3/MDCards.vue";
import DatabaseNet from "../icons/DatabaseNet.vue";
import RubbishBin from "../icons/RubbishBin.vue";
import Add from "../icons/Add.vue";

const locations = [
  {
    icon: Home,
    title: "homeDirectory",
  },
  {
    icon: DatabaseNet,
    title: "smbDirectory",
  },
  {
    icon: RubbishBin,
    title: "recentlyDeleted",
  },
  {
    icon: Add,
    title: "addLocation",
  },
];
</script>
