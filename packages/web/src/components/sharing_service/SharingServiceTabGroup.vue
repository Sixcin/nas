<template>
  <NormalTabGroup>
    <template #tab-list>
      <NormalTabList :items="items"></NormalTabList>
    </template>
    <template #tab-panels>
      <SMBTabPanel></SMBTabPanel>
    </template>
  </NormalTabGroup>
</template>

<script lang="ts" setup>
import NormalTabGroup from "../page/NormalTabGroup.vue";
import NormalTabList from "../page/NormalTabList.vue";
import Windows from "../icons/Windows.vue";
import Windows18 from "../icons/18px/Windows.vue";
import ShareSys18 from "../icons/18px/ShareSys.vue";
import ShareSys from "../icons/ShareSys.vue";
import WebDav18 from "../icons/18px/WebDav.vue";
import WebDav from "../icons/WebDav.vue";
import NFS18 from "../icons/18px/NFS.vue";
import NFS from "../icons/NFS.vue";
import SMBTabPanel from "./SMBTabPanel.vue";

const items = [
  {
    name: "smb",
    smallIcon: Windows18,
    largeIcon: Windows,
  },
  {
    name: "webDAV",
    smallIcon: WebDav18,
    largeIcon: WebDav,
  },
  {
    name: "nfs",
    smallIcon: NFS18,
    largeIcon: NFS,
  },
  {
    name: "iSCSI",
    smallIcon: ShareSys18,
    largeIcon: ShareSys,
  },
];
</script>
