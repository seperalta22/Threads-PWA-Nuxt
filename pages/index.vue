<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
// const user = useSupabaseUser();

let posts = ref([]);
let isPosts = ref(true);
let isLoading = ref(false);

onBeforeMount(() => {
  posts.value = [
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/300?img=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      picture: "https://picsum.photos/500/500?random=1",
    },
  ];
});
</script>

<template>
  <MainLayout>
    <div id="IndexPage" class="w-full overflow-auto">
      <div class="mx-auto max-w-[500px] overflow-hidden">
        <div id="Posts" class="px-4 max-w-[600px] mx-auto">
          <div v-if="isPosts" v-for="post in posts" :key="post">
            <Post :post="post" @isDeleted="posts = []" />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
