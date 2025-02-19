import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '@/services/types/user';
import { login, checkLogin, logout } from '@/services/user';

export const useUserStore = defineStore('user', () => {
  // state
  const userInfo = ref<User | null>(null);
  const loading = ref(false);

  // actions
  async function doLogin() {
    const user = await login();
    userInfo.value = user;
  }

  async function doCheckLogin() {
    const user = await checkLogin();
    console.log('user', user);
    userInfo.value = user;
  }

  async function doLogout() {
    await logout();
    userInfo.value = null;
  }

  return {
    userInfo,
    loading,
    doLogin,
    doCheckLogin,
    doLogout,
  };
});
