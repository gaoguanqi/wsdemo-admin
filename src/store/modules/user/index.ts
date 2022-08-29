import { defineStore } from "pinia";

import { UserState } from "./types";

/**
 *   userId?: string;
 phone?: string;
 userName?: string;
 nikeName?: string;
 avatar?: string;
 token?: string;
 role?: RoleType;
 */
export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    userId: undefined,
    phone: undefined,
    userName: undefined,
    nikeName: undefined,
    avatar: undefined,
    token: undefined,
    role: "",
  }),
  getters: {
    userProfile(state: UserState): UserState {
      return { ...state };
    },
  },
  actions: {
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === "user" ? "user" : "admin";
        resolve(this.role);
      });
    },
    // 设置用户的信息
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },
    // 重置用户信息
    resetInfo() {
      this.$reset();
    },
  },
});
