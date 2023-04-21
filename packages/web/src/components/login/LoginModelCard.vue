<template>
  <MDModelCard>
    <div :class="ImageCardBgClass">
      <MDCardImage class="hidden md:block"></MDCardImage>
      <MDCardMain>
        <div class="flex items-center">
          <span class="font-art text-onSurface grow text-2xl font-medium">
            Node<span class="text-primary">Nas</span>
          </span>
          <DarkModeSwitch></DarkModeSwitch>
          <LangSwitch></LangSwitch>
        </div>
        <LoginForm></LoginForm>
      </MDCardMain>
    </div>
  </MDModelCard>
</template>

<script lang="ts" setup>
import MDModelCard from "../m3/MDModelCard.vue";
import MDCardImage from "../m3/MDCardImage.vue";
import MDCardMain from "../m3/MDCardMain.vue";
import LoginForm from "./LoginForm.vue";
import DarkModeSwitch from "../nav_bar/DarkModeSwitch.vue";
import LangSwitch from "../nav_bar/LangSwitch.vue";
import { ImageCardBgClass } from "../../class/model-bg-class";
</script>
