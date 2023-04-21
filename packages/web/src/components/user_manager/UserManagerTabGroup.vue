<template>
  <NormalTabGroup>
    <template #tab-list>
      <NormalTabList :items="items"></NormalTabList>
    </template>
    <template #tab-panels>
      <UserTabPanel></UserTabPanel>
      <GroupTabPanel></GroupTabPanel>
    </template>
  </NormalTabGroup>
</template>

<script lang="ts" setup>
import Group18 from "../icons/18px/Group.vue";
import Group from "../icons/Group.vue";
import User18 from "../icons/18px/User.vue";
import User from "../icons/User.vue";
import NormalTabGroup from "../page/NormalTabGroup.vue";
import UserTabPanel from "./UserTabPanel.vue";
import GroupTabPanel from "./GroupTabPanel.vue";
import NormalTabList from "../page/NormalTabList.vue";

const items = [
  {
    name: "users",
    smallIcon: User18,
    largeIcon: User,
  },
  {
    name: "groups",
    smallIcon: Group18,
    largeIcon: Group,
  },
];
</script>
