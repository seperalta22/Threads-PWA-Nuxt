import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    post:[],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),
});
