<template>
  <MDCardContent>
    <CardTitle>
      <template #emj>🍥</template>
      <template #title>{{ $t("about FTP") }}</template>
    </CardTitle>

    <CardSecondaryTitle
      >🔮 <span>{{ $t("Port") }}</span>
    </CardSecondaryTitle>
    <PortInput></PortInput>

    <CardSecondaryTitle
      >🔮 <span>{{ $t("Clients") }}</span>
    </CardSecondaryTitle>
    <ClientsInput></ClientsInput>

    <CardSecondaryTitle
      >🔮 <span>{{ $t("Clients") }}</span>
    </CardSecondaryTitle>
    <Timeout></Timeout>

    <div class="text-onSurfaceVariant flex items-center gap-x-2">
      <div class="relative right-0 mt-4">
        <dialog-switch></dialog-switch>
      </div>
      <h4 class="text-onSurfaceVariant mt-3 text-sm">Allow Root Login</h4>
      <info class="mt-3"></info>
    </div>

    <div class="text-onSurfaceVariant flex items-center gap-x-2">
      <div class="relative right-0 mt-4">
        <dialog-switch></dialog-switch>
      </div>
      <h4 class="text-onSurfaceVariant mt-3 text-sm">Allow Anonymous Login</h4>
      <info class="mt-3"></info>
    </div>

    <div class="text-onSurfaceVariant flex items-center gap-x-2">
      <div class="relative right-0 mt-4">
        <dialog-switch></dialog-switch>
      </div>
      <h4 class="text-onSurfaceVariant mt-3 text-sm">Allow Local User Login</h4>
      <info class="mt-3"></info>
    </div>
  </MDCardContent>
</template>

<script lang="ts" setup>
import CardTitle from "../../page/CardTitle.vue";
import MDCardContent from "../../m3/MDCardContent.vue";
import CardSecondaryTitle from "../../page/CardSecondaryTitle.vue";
import DialogSwitch from "../dialogSwitch.vue";
import Info from "../../icons/Info.vue";
import PortInput from "../component/FTPinputs/PortInput.vue";
import ClientsInput from "../component/FTPinputs/ClientsInput.vue";
import Timeout from "../component/FTPinputs/Timeout.vue";
</script>
