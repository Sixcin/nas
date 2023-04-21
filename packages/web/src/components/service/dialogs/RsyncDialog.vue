<template>
  <MDCardContent>
    <CardTitle>
      <template #emj>🍥</template>
      <template #title>{{ $t("about Rsync") }}</template>
    </CardTitle>

    <CardSecondaryTitle
      >🔮 <span>{{ $t("TCP Port") }}</span>
    </CardSecondaryTitle>
    <TCPinput></TCPinput>

    <CardSecondaryTitle
      >🔮 <span>{{ $t("Auxiliary Parameters") }}</span>
    </CardSecondaryTitle>
    <AuxiliaryPinput></AuxiliaryPinput>
  </MDCardContent>
</template>

<script lang="ts" setup>
import CardTitle from "../../page/CardTitle.vue";
import MDCardContent from "../../m3/MDCardContent.vue";
import CardSecondaryTitle from "../../page/CardSecondaryTitle.vue";
import TCPinput from "../component/RsyncInputs/TCPinput.vue";
import AuxiliaryPinput from "../component/RsyncInputs/AuxiliaryPinput.vue";
</script>
