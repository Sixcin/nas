<template>
  <HDivider v-if="!isFold" class="mx-4"></HDivider>
  <Disclosure v-slot="{ open }" defaultOpen>
    <DisclosureButton v-if="!isFold">
      <SectionHeader>
        <template #emj>
          {{ props.emj }}
        </template>
        <template #title>
          {{ props.title }}
        </template>
      </SectionHeader>
    </DisclosureButton>
    <div v-show="isShow(open)">
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <DisclosurePanel class="flex flex-col gap-y-1" static>
          <template v-for="item in props.items">
            <NavItem
              :active="isActive(item.pathNames)"
              :to="{ name: item.pathNames[0] }"
            >
              <template #logo>
                <component :is="item.component"></component>
              </template>
              <template #text>{{ $t(item.name) }}</template>
            </NavItem>
          </template>
        </DisclosurePanel>
      </transition>
    </div>
  </Disclosure>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { useRoute } from "vue-router";
import { useNavStore } from "../../store/nav";
import { storeToRefs } from "pinia";
import HDivider from "../page/HDivider.vue";
import SectionHeader from "./SectionHeader.vue";
import NavItem from "./NavItem.vue";

interface Item {
  name: string;
  pathNames: string[];
  component: any;
}

interface Props {
  emj: string;
  title: string;
  items: Item[];
}

const { isFold } = storeToRefs(useNavStore());
const props = defineProps<Props>();

function isActive(names: string[]): boolean {
  return names.includes(useRoute().name as string);
}

function isShow(open: boolean): boolean {
  if (isFold.value) {
    return true;
  } else {
    return open;
  }
}
</script>
