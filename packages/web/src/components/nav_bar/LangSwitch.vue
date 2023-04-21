<template>
  <MDMenu>
    <template #button>
      <MenuButton aria-label="Change Language">
        <HeaderIcon>
          <Lang></Lang>
        </HeaderIcon>
      </MenuButton>
    </template>
    <template #items>
      <template v-for="local in locales">
        <MDMenuItem
          :dir="local.code === 'ar' ? 'rtl' : 'ltr'"
          @click="changeLang(local.code)"
        >
          {{ local.name }}
        </MDMenuItem>
      </template>
    </template>
  </MDMenu>
</template>

<script lang="ts" setup>
import MDMenu from "../m3/MDMenu.vue";
import HeaderIcon from "./HeaderIcon.vue";
import Lang from "../icons/Lang.vue";
import MDMenuItem from "../m3/MDMenuItem.vue";
import { useI18n } from "vue-i18n";
import { useLangStore } from "../../store/lang";
import { MenuButton } from "@headlessui/vue";
import { applyLang } from "../../utils/lang";

const i18n = useI18n();
const lang = useLangStore();
const locales = [
  { code: "ar", name: "عربي (ar)" },
  { code: "en", name: "English (en)" },
  { code: "fr", name: "Français (fr)" },
  { code: "zh-CN", name: "简体中文 (zh-CN)" },
];

function changeLang(locale: string) {
  i18n.locale.value = locale;
  lang.changeRTL(locale === "ar");
  applyLang(locale);

  localStorage.setItem("locale", locale);
}
</script>
