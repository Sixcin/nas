<template>
  <NormalPage>
    <HomeTitle></HomeTitle>
    <SecondaryTitle class="mt-10">{{ $t("notification") }}</SecondaryTitle>
    <SecondaryTitle class="mt-8">{{ $t("suggestion") }}</SecondaryTitle>
    <SecondaryTitle class="mt-8">{{ $t("status") }}</SecondaryTitle>
  </NormalPage>
</template>

<script lang="ts" setup>
import HomeTitle from "../components/home/HomeTitle.vue";
import NormalPage from "../components/page/NormalPage.vue";
import SecondaryTitle from "../components/page/SecondaryTitle.vue";
</script>
