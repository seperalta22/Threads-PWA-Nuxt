<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
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

const hasLikedComputed = computed(() => {
  if (!user.value || !props.post) return false;
  let res = false;
  if (props.post.likes) {
    props.post.likes.forEach((like: any) => {
      if (
        like.userId == user.value.identities[0].user_id &&
        like.postId == props.post?.id
      ) {
        res = true;
      }
    });
  }
  return res;
});

const likePost = async (id) => {
  isLike.value = true;
  try {
    await useFetch(`/api/like-post/`, {
      method: "POST",
      body: {
        userId: user.value.identities[0].user_id,
        postId: id,
      },
    });
    await userStore.getAllPosts();
    isLike.value = false;
  } catch (error) {
    console.log(error);
    isLike.value = false;
  }
};

const unlikePost = async (id) => {
  isLike.value = true;
  try {
    await useFetch(`/api/unlike-post/${id}`, { method: "DELETE" });
    await userStore.getAllPosts();
    isLike.value = false;
  } catch (error) {
    console.log(error);
    isLike.value = false;
  }
};

const likesFunc = () => {
  let likePostObj = null;

  if (props.post.likes.length < 1) {
    likePost(props.post.id);
    return null;
  } else {
    props.post.likes.forEach((like) => {
      if (
        like.userId == user.value.identities[0].user_id &&
        like.postId == props.post.id
      ) {
        likePostObj = like;
      }
    });
  }

  if (likePostObj) {
    unlikePost(likePostObj.id);
    return null;
  }

  likePost(props.post.id);
};
</script>

<template>
  <div class="z-50 bottom-0 h-full w-full"></div>
</template>
