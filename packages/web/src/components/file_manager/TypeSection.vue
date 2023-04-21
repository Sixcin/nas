<template>
  <SecondaryTitle class="mt-10">{{ $t("type") }}</SecondaryTitle>
  <MDCards>
    <MDOutlineCard v-for="type in types">
      <template #icon>
        <component :is="type.icon"></component>
      </template>
      {{ $t(type.title) }}
    </MDOutlineCard>
  </MDCards>
</template>

<script lang="ts" setup>
import SecondaryTitle from "../page/SecondaryTitle.vue";
import Pic from "../icons/Pic.vue";
import Video from "../icons/Video.vue";
import Doc from "../icons/Doc.vue";
import Docs from "../icons/Docs.vue";
import Audio from "../icons/Audio.vue";
import Zip from "../icons/Zip.vue";
import MDOutlineCard from "../m3/MDOutlineCard.vue";
import MDCards from "../m3/MDCards.vue";

const types = [
  {
    icon: Pic,
    title: "photos",
  },
  {
    icon: Video,
    title: "videos",
  },
  {
    icon: Doc,
    title: "documents",
  },
  {
    icon: Audio,
    title: "audios",
  },
  {
    icon: Zip,
    title: "archives",
  },
  {
    icon: Docs,
    title: "others",
  },
];
</script>
