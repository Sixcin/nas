<template>
  <div class="hidden md:flex">
    <DarkModeSwitch></DarkModeSwitch>
    <LangSwitch></LangSwitch>
    <LogoutButton></LogoutButton>
    <Avatar></Avatar>
    <MoreButton></MoreButton>
  </div>
  <div class="flex md:hidden">
    <HeaderIcon>
      <More></More>
    </HeaderIcon>
  </div>
</template>

<script lang="ts" setup>
import HeaderIcon from "./HeaderIcon.vue";
import More from "../icons/More.vue";
import Avatar from "./Avatar.vue";
import DarkModeSwitch from "./DarkModeSwitch.vue";
import LangSwitch from "./LangSwitch.vue";
import MoreButton from "./MoreButton.vue";
import LogoutButton from "./LogoutButton.vue";
</script>
