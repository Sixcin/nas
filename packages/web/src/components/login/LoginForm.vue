<!--suppress HtmlUnknownTarget -->
<template>
  <Form class="flex grow flex-col gap-y-4" @submit="onSubmit">
    <MDCardContent>
      <CardTitle>
        <template #emj>🐳</template>
        <template #title>{{ $t("login") }}</template>
      </CardTitle>
      <UsernameField class="mt-10 md:mt-4"></UsernameField>
      <PasswordField class="mt-1"></PasswordField>
      <p class="text-onSurfaceVariant mt-4 text-sm">
        Find our GDPR Policy
        <a class="text-primary" href="/docs/appendix/gdpr.html">here</a>.
      </p>
    </MDCardContent>
    <LoginButtons></LoginButtons>
  </Form>
</template>

<script lang="ts" setup>
import MDCardContent from "../m3/MDCardContent.vue";
import CardTitle from "../page/CardTitle.vue";
import getURL from "../../utils/get-url";
import axios from "axios";
import UsernameField from "./UsernameField.vue";
import PasswordField from "./PasswordField.vue";
import LoginButtons from "./LoginButtons.vue";
import { useUserStore } from "../../store/user";
import { useRouter } from "vue-router";
import { Form } from "vee-validate";

const router = useRouter();
const userStore = useUserStore();

async function onSubmit(value: any) {
  try {
    const { data } = await axios({
      method: "post",
      url: getURL("login"),
      data: value,
    });

    userStore.setUser(data.data["access_token"], "", "");
    await router.push({ name: "Home" });
  } catch (e) {}
}
</script>
