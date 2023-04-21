<template>
  <button aria-label="Logout" @click="openModal">
    <HeaderIcon>
      <Logout></Logout>
    </HeaderIcon>
  </button>
  <MDModel :close-modal="closeModal" :is-open="isOpen">
    <LogoutModel>
      <button class="rounded-full" @click="logout">
        <MDTextButton>{{ $t("confirm") }}</MDTextButton>
      </button>
      <button class="rounded-full" @click="closeModal">
        <MDTextButton>{{ $t("cancel") }}</MDTextButton>
      </button>
    </LogoutModel>
  </MDModel>
</template>

<script lang="ts" setup>
import HeaderIcon from "./HeaderIcon.vue";
import Logout from "../icons/Logout.vue";
import MDModel from "../m3/MDModel.vue";
import LogoutModel from "./LogoutModel.vue";
import MDTextButton from "../m3/MDTextButton.vue";
import { ref } from "vue";
import { useUserStore } from "../../store/user";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

function logout() {
  userStore.clearUser();
  router.push({ name: "Login" });
}
</script>
