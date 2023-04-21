<template>
  <MDCardContent>
    <CardTitle>
      <template #emj>🍥</template>
      <template #title>{{ $t("about AFP") }}</template>
    </CardTitle>
    <div class="mt-10 md:mt-0"></div>
    <CardSecondaryTitle
      >🔮 <span>{{ $t("Guest Account") }}</span>
    </CardSecondaryTitle>
    <Accounts></Accounts>

    <div class="text-onSurfaceVariant flex items-center gap-x-2">
      <div class="relative right-0 mt-4">
        <dialog-switch></dialog-switch>
      </div>
      <h4 class="text-onSurfaceVariant mt-3 text-sm">Guest Access</h4>
      <info class="mt-3"></info>
    </div>

    <CardSecondaryTitle
      >🔮 <span>{{ $t("Max Connections") }}</span>
    </CardSecondaryTitle>
    <Numbox></Numbox>

    <CardSecondaryTitle
      >🔮 <span>{{ $t("Chmod Request") }}</span>
    </CardSecondaryTitle>
    <Accounts></Accounts>

    <CardSecondaryTitle
      >🔮 <span>{{ $t("Map ACLs") }}</span>
    </CardSecondaryTitle>
    <Accounts></Accounts>

    <CardSecondaryTitle
      >🔮 <span>{{ $t("Global Auxiliary parameters") }}</span>
    </CardSecondaryTitle>
    <Accounts></Accounts>
  </MDCardContent>
</template>

<script lang="ts" setup>
import CardTitle from "../../page/CardTitle.vue";
import MDCardContent from "../../m3/MDCardContent.vue";
import ListBox from "../component/ListBox.vue";
import Accounts from "../component/AFPListBoxs/Accounts.vue";
import CardSecondaryTitle from "../../page/CardSecondaryTitle.vue";
import Info from "../../icons/Info.vue";
import dialogSwitch from "../dialogSwitch.vue";
import DialogSwitch from "../dialogSwitch.vue";
import Numbox from "../component/Numbox.vue";
</script>
