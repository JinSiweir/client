import { defineStore } from 'pinia';

import { LoginInfo } from '@/api/model/userModel';
import { login } from '@/api/user';

interface UserInfo {
  avatar?: string;
  name?: string;
  email?: string;
}
const InitUserInfo: UserInfo = {
  avatar: '',
  name: '',
  email: '',
};

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: { ...InitUserInfo },
  }),
  getters: {},
  actions: {
    async login(loginInfo: LoginInfo) {
      try {
        const { token } = await login(loginInfo);
        if (token) {
          this.token = token;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async logout() {
      this.userInfo = { ...InitUserInfo };
    },
  },
  persist: {
    afterRestore: () => {
      //
    },
    key: 'user',
    paths: ['token'],
  },
});
