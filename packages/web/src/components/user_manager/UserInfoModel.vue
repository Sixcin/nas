<template>
  <DialogPanel :class="DialogCardBgClass">
    <div class="flex items-center gap-x-4">
      <MDMonogram>{{ user?.username[0].toUpperCase() }}</MDMonogram>
      <MDCardContentText>
        <template #default>
          <DialogTitle as="h2">{{ user?.username }}</DialogTitle>
        </template>
        <template #subhead>{{ user ? $t(user?.role) : "" }}</template>
      </MDCardContentText>
    </div>
    <MDCardContent class="flex flex-col">
      <CardSecondaryTitle
        >🥝 <span>{{ $t("groups") }}</span>
      </CardSecondaryTitle>
      <MDChips class="mt-2">
        <template v-for="group in user?.groups">
          <MDAssistChip>{{ group }}</MDAssistChip>
        </template>
      </MDChips>
      <div class="flex gap-x-2">
        <div class="grow basis-0">
          <CardSecondaryTitle>🆔 <span>UID</span></CardSecondaryTitle>
          <CardContent class="break-all">{{ user?.uid }}</CardContent>
        </div>
        <div class="grow basis-0">
          <CardSecondaryTitle>🚂 <span>GID</span></CardSecondaryTitle>
          <CardContent class="break-all">{{ user?.gid }}</CardContent>
        </div>
      </div>
      <div class="flex gap-x-2">
        <div class="grow basis-0">
          <CardSecondaryTitle
            >🏠 <span>{{ $t("homeDirectory") }}</span>
          </CardSecondaryTitle>
          <CardContent class="break-all">{{ user?.home }}</CardContent>
        </div>
        <div class="grow basis-0">
          <CardSecondaryTitle>🐚 <span>Shell</span></CardSecondaryTitle>
          <CardContent class="break-all">{{ user?.shell }}</CardContent>
        </div>
      </div>
      <CardSecondaryTitle
        >👒 <span>{{ $t("fullName") }}</span>
      </CardSecondaryTitle>
      <CardContent>{{ user?.fullName }}</CardContent>
    </MDCardContent>
    <MDCardButtons class="mt-2">
      <slot></slot>
    </MDCardButtons>
  </DialogPanel>
</template>

<script lang="ts" setup>
import MDCardButtons from "../m3/MDCardButtons.vue";
import MDCardContent from "../m3/MDCardContent.vue";
import MDMonogram from "../m3/MDMonogram.vue";
import MDCardContentText from "../m3/MDCardContentText.vue";
import MDAssistChip from "../m3/MDAssistChip.vue";
import MDChips from "../m3/MDChips.vue";
import axios from "axios";
import Res from "../../interfaces/res";
import getURL from "../../utils/get-url";
import CardSecondaryTitle from "../page/CardSecondaryTitle.vue";
import CardContent from "../page/CardContent.vue";
import { inject, ref } from "vue";
import { DialogPanel, DialogTitle } from "@headlessui/vue";
import { DialogCardBgClass } from "../../class/model-bg-class";

interface User {
  username: string;
  role: string;
  groups: string[];
  uid: number;
  gid: number;
  fullName: string;
  home: string;
  shell: string;
}

const user = ref<User>();
const username = inject("username");

(async () => {
  const { data } = await axios.get<Res<User>>(
    getURL(`users/user/username/${username}`)
  );

  user.value = data.data;
})();
</script>
