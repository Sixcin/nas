<template>
  <NormalPage>
    <NormalTitle class="hidden md:block">
      <template #emj>🖊️</template>
      <template #title>
        <i18n-t keypath="editUserTitle" tag="span">
          <template #user
            ><span class="text-primary">{{ $t("User") }}</span>
          </template>
        </i18n-t>
      </template>
    </NormalTitle>
    <div
      :class="
        Math.round(Math.random())
          ? 'bg-primary text-onPrimary'
          : 'bg-tertiary text-onTertiary'
      "
      class="shadow-2 mt-16 flex h-32 w-32 shrink-0 items-center justify-center rounded-full"
    >
      <div class="text-center text-7xl font-medium">
        {{ $route.params.username[0].toUpperCase() }}
      </div>
    </div>
    <Form
      autocomplete="off"
      class="mt-16 grid grid-cols-[repeat(auto-fill,300px)] gap-8"
    >
      <MDOutlineTextField label="username" name="username">
        <template #leading-icon>
          <User></User>
        </template>
      </MDOutlineTextField>
      <MDOutlineTextField label="fullName" name="nickname">
        <template #leading-icon>
          <ID></ID>
        </template>
      </MDOutlineTextField>
      <MDOutlineTextField label="uid" name="uid">
        <template #leading-icon>
          <IDCard></IDCard>
        </template>
      </MDOutlineTextField>
    </Form>
  </NormalPage>
</template>

<script lang="ts" setup>
import NormalPage from "../components/page/NormalPage.vue";
import NormalTitle from "../components/page/NormalTitle.vue";
import MDOutlineTextField from "../components/m3/MDOutlineTextField.vue";
import User from "../components/icons/User.vue";
import ID from "../components/icons/ID.vue";
import IDCard from "../components/icons/IDCard.vue";
import { Form } from "vee-validate";
</script>
