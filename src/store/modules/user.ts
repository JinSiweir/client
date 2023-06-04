import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: {},
  }),
  getters: {},
  actions: {},
  persist: {
    afterRestore: () => {
      //
    },
    key: 'user',
    paths: ['token'],
  },
});
