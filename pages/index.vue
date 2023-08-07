<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
// const user = useSupabaseUser();

let posts = ref([]);
let isPosts = ref(false);
let isLoading = ref(false);
</script>

<template>
  <MainLayout>
    <div id="IndexPage" class="w-full overflow-auto">
      <div class="mx-auto max-w-[500px] overflow-hidden">
        <div id="Posts" class="px-4 max-w-[600px] mx-auto">
          <div v-if="isPosts" v-for="post in posts" :key="post">
            {{ post }}
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
