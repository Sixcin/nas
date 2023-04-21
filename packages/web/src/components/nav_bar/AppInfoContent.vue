<template>
  <MDCardContent>
    <CardTitle>
      <template #emj>🍥</template>
      <template #title>{{ $t("aboutApp") }}</template>
    </CardTitle>
    <div class="mt-10 md:mt-0"></div>
    <CardSecondaryTitle
      >🔮 <span>{{ $t("version") }}</span>
    </CardSecondaryTitle>
    <div class="text-onSurfaceVariant mt-2 text-sm">
      <span v-if="error">{{ $t("loadingFailure") }}</span>
      <span v-else-if="data">{{ data.data.version }}</span>
      <NSkeleton v-else style="width: 128px" text></NSkeleton>
      <span>{{ dev }}</span>
    </div>
    <CardSecondaryTitle
      >ℹ️ <span>{{ $t("systemInfo") }}</span>
    </CardSecondaryTitle>
    <div class="text-onSurfaceVariant mt-2 text-sm">
      <span v-if="error">{{ $t("loadingFailure") }}</span>
      <template v-else>
        <p v-for="info in infos">
          {{ $t(info.name) }}:
          <span v-if="data">{{ data.data.osInfo[info.value] }}</span>
          <span v-else-if="data">{{ data.data.osInfo[info.value] }}</span>
          <NSkeleton v-else style="width: 128px" text></NSkeleton>
        </p>
      </template>
    </div>
    <CardSecondaryTitle
      >📖 <span>{{ $t("document") }}</span>
    </CardSecondaryTitle>
    <CardSecondaryTitle
      >📜 <span>{{ $t("license") }}</span>
    </CardSecondaryTitle>
    <CardContent>
      NodeNas is Copyright © 2023 - {{ YEAR }} by icekylin. All rights reserved.
    </CardContent>
    <CardContent>
      NodeNas is free software: you can redistribute it and/or modify it under
      the terms of the
      <GPLLink></GPLLink>
      v3 as published by the Free Software Foundation.
    </CardContent>
    <CardContent>
      NodeNas is distributed in the hope that it will be useful, but
      <strong>WITHOUT ANY WARRANTY</strong>; without even the implied warranty
      of <strong>MERCHANTABILITY</strong> or
      <strong>FITNESS FOR A PARTICULAR PURPOSE</strong>. See the
      <GPLLink></GPLLink>
      for more details.
    </CardContent>
  </MDCardContent>
</template>

<script lang="ts" setup>
import MDCardContent from "../m3/MDCardContent.vue";
import GPLLink from "./GPLLink.vue";
import CardTitle from "../page/CardTitle.vue";
import useAxios from "../../composables/useAxios";
import getURL from "../../utils/get-url";
import CardSecondaryTitle from "../page/CardSecondaryTitle.vue";
import CardContent from "../page/CardContent.vue";
import { useUserStore } from "../../store/user";
import { NSkeleton } from "naive-ui";
import { computed } from "vue";

const userStore = useUserStore();

const YEAR = new Date().getFullYear();
const { data, error } = useAxios(getURL("info"), {
  headers: { Authorization: `Bearer ${userStore.token}` },
});
const dev = computed(() => {
  return import.meta.env.DEV ? " (Dev Mode)" : "";
});

const infos = [
  {
    name: "platform",
    value: "pf",
  },
  {
    name: "system",
    value: "distro",
  },
  {
    name: "version",
    value: "release",
  },
  {
    name: "kernel",
    value: "kernel",
  },
  {
    name: "arch",
    value: "arch",
  },
];
</script>
