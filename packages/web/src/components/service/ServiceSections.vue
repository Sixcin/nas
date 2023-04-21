<!--suppress ALL -->
<template>
  <MDCards>
    <ServiceMenus v-for="service in services">
      <template #icon>
        <component :is="service.icon"></component>
      </template>
      {{ $t(service.title) }}
      <template #dialog>
        <component :is="service.dialog"></component>
      </template>
    </ServiceMenus>
  </MDCards>
</template>

<script lang="ts" setup>
import MDOutlineCard from "../m3/MDOutlineCard.vue";
import MDCards from "../m3/MDCards.vue";
import DatabaseNet from "../icons/DatabaseNet.vue";
import NFS from "../icons/NFS.vue";
import ServiceMenus from "./ServiceMenus.vue";
import AFPdialog from "./dialogs/AFPdialog.vue";
import DNSdialog from "./dialogs/DNSdialog.vue";
import FTPdialog from "./dialogs/FTPdialog.vue";
import RsyncDialog from "./dialogs/RsyncDialog.vue";

const services = [
  {
    icon: DatabaseNet,
    title: "AFP",
    dialog: AFPdialog,
  },
  {
    icon: DatabaseNet,
    title: "DNS",
    dialog: DNSdialog,
  },
  {
    icon: DatabaseNet,
    title: "FTP",
    dialog: FTPdialog,
  },
  {
    icon: NFS,
    title: "Rsync",
    dialog: RsyncDialog,
  },
];
</script>
