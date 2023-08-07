<script lang="ts" setup>
import { useUserStore } from "stores/user";
const userStore = useUserStore();

const runtimeConfig = useRuntimeConfig();
let isMenu = ref(false);
let isDeleting = ref(false);
let isLike = ref(false);

const emit = defineEmits(["isDeleted"]);
const props = defineProps({
  post: Object,
});
// const client = useSupabaseClient();
// const user = useSupabaseUser();
</script>

<template>
  <div class="z-50 bottom-0 h-full w-full">
    <div class="py-2 w-full">
      <div class="flex items-center justify-between">
        <div class="flex items-center text-white">
          <img class="rounded-full h-[35px]" :src="post?.img" alt="image" />
          <div class="ml-2 font-semibold text-[18px]">{{ post?.name }}</div>
        </div>
        <div @click="isMenu = !isMenu" class="relative">
          <button
            :disabled="isDeleting"
            class="flex items-center text-white p-1 h-[24px] w-[24px] hover:bg-gray-800 rounded-full cursor-pointer"
            :class="isMenu ? 'bg-gray-800' : ''"
          >
            <Icon
              v-if="!isDeleting"
              name="bi:three-dots"
              size="18"
              color="#ffffff"
            />
            <Icon
              v-else
              name="eos-icons:bubble-loading"
              size="18"
              color="#ffffff"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
