<template>
  <div class="flex">
    <MDStandardIconButton @click="openModal">
      <Info></Info>
    </MDStandardIconButton>
    <MDStandardIconButton class="hidden sm:block" @click="handelEditClick">
      <Edit></Edit>
    </MDStandardIconButton>
  </div>
  <MDModel :close-modal="closeModal" :is-open="isOpen">
    <UserInfoModel>
      <button class="rounded-full" @click="closeModal">
        <MDFilledButton>{{ $t("close") }}</MDFilledButton>
      </button>
    </UserInfoModel>
  </MDModel>
</template>

<script lang="ts" setup>
import Edit from "../icons/Edit.vue";
import MDStandardIconButton from "../m3/MDStandardIconButton.vue";
import Info from "../icons/Info.vue";
import MDModel from "../m3/MDModel.vue";
import MDFilledButton from "../m3/MDFilledButton.vue";
import UserInfoModel from "./UserInfoModel.vue";
import { provide, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  username: string;
}>();

const router = useRouter();
const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

function handelEditClick() {
  router.push({ name: "EditUser", params: { username: props.username } });
}

provide("username", props.username);
</script>
