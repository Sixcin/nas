<template>
  <TabPanel>
    <MDCardOutline class="mt-8">
      <MDListCard>
        <template v-for="user in users">
          <MDListCardItem>
            <MDMonogram>{{ user.username.at(0).toUpperCase() }}</MDMonogram>
            <UserManagerInfo>
              {{ user.username }}
              <template #role>{{ $t(user.role) }}</template>
            </UserManagerInfo>
            <UserManagerIcons :username="user.username"></UserManagerIcons>
          </MDListCardItem>
        </template>
      </MDListCard>
    </MDCardOutline>
    <div class="mt-8 flex justify-center">
      <div class="inline-block">
        <NPagination
          v-model:page="page"
          v-model:page-size="limit"
          :item-count="100"
          class="text-onSurface"
          simple
        ></NPagination>
      </div>
    </div>
    <div class="h-32"></div>
    <MDExtendedFAB>
      <Add></Add>
      {{ $t("addUser") }}
    </MDExtendedFAB>
  </TabPanel>
</template>

<script lang="ts" setup>
import MDCardOutline from "../m3/MDCardOutline.vue";
import MDListCard from "../m3/MDListCard.vue";
import MDListCardItem from "../m3/MDListCardItem.vue";
import UserManagerInfo from "./UserManagerInfo.vue";
import UserManagerIcons from "./UserManagerIcons.vue";
import MDExtendedFAB from "../m3/MDExtendedFAB.vue";
import Add from "../icons/Add.vue";
import getURL from "../../utils/get-url";
import MDMonogram from "../m3/MDMonogram.vue";
import axios from "axios";
import { ref } from "vue";
import { TabPanel } from "@headlessui/vue";
import { NPagination } from "naive-ui";

const users = ref();
const page = ref(1);
const limit = ref(10);

(async () => {
  const res = await axios.get(getURL("users/user"));

  users.value = res.data.data;
})();
</script>
