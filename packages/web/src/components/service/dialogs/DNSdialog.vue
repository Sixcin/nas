<template>
  <MDCardContent>
    <CardTitle>
      <template #emj>🍥</template>
      <template #title>{{ $t("about Dynamic DNS") }}</template>
    </CardTitle>
    <div></div>
    <CardSecondaryTitle
      >🔮 <span>{{ $t("Provider") }}</span>
    </CardSecondaryTitle>
    <Accounts></Accounts>

    <div class="text-onSurfaceVariant flex items-center gap-x-2">
      <div class="relative right-0 mt-4">
        <dialog-switch></dialog-switch>
      </div>
      <h4 class="text-onSurfaceVariant mt-3 text-sm">CheckIP Server SSL</h4>
      <info class="mt-3"></info>
    </div>

    <n-divider class="text-onSurface" />

    <CheckServerIPdnsInput></CheckServerIPdnsInput>
    <CheckIPpathdnsInput></CheckIPpathdnsInput>

    <div class="text-onSurfaceVariant flex items-center gap-x-2">
      <div class="relative right-0 mt-4">
        <dialog-switch></dialog-switch>
      </div>
      <h4 class="text-onSurfaceVariant mt-3 text-sm">SSL</h4>
      <info class="mt-3"></info>
    </div>

    <n-divider class="text-onSurface" />

    <DomainNameInput></DomainNameInput>
    <UserNameInput></UserNameInput>
    <PasswordInput></PasswordInput>
  </MDCardContent>
</template>

<script lang="ts" setup>
import CardTitle from "../../page/CardTitle.vue";
import MDCardContent from "../../m3/MDCardContent.vue";
import CardSecondaryTitle from "../../page/CardSecondaryTitle.vue";
import Accounts from "../component/AFPListBoxs/Accounts.vue";
import DialogSwitch from "../dialogSwitch.vue";
import Info from "../../icons/Info.vue";
import CheckServerIPdnsInput from "../component/DNSinputs/CheckServerIPdnsInput.vue";
import CheckIPpathdnsInput from "../component/DNSinputs/CheckIPpathdnsInput.vue";
import DomainNameInput from "../component/DNSinputs/DomainNameInput.vue";
import UserNameInput from "../component/DNSinputs/UserNameInput.vue";
import PasswordInput from "../component/DNSinputs/PasswordInput.vue";
import { NDivider } from "naive-ui";
import { ref } from "vue";
</script>
