<template>
  <div :class="layoutCls" class="container">
    <t-head-menu theme="dark" height="120px" class="global-nav-menu">
      <template #operations>
        <Button v-if="!hasLogin" @click="handleLogin"> 请登录 </Button>
        <t-space v-if="hasLogin">
          <t-avatar :image="userInfo.avatar" />
          <Divider :layout="'vertical'" class="divider"></Divider>
          <Button :variant="'text'" :ghost="true" @click="logout"> 退出 </Button>
        </t-space>
        <t-dropdown trigger="click" :options="langList" :on-click="(e: any) => changeLang(e.value)">
          <Button theme="default" shape="square" variant="text">
            <t-icon name="internet" />
          </Button>
        </t-dropdown>
      </template>
    </t-head-menu>
  </div>
</template>

<script lang="ts" setup>
import { Button, Divider } from 'tdesign-vue-next';
import { computed } from 'vue';

import { prefix } from '@/config/global';
import { langList } from '@/locales';
import { useLocale } from '@/locales/useLocale';
import router from '@/router';
import { useUserStore } from '@/store';

const { changeLocale } = useLocale();
const changeLang = (lang: unknown) => {
  changeLocale(lang as string);
};
const { userInfo, logout } = useUserStore();

const handleLogin = () => {
  router.push('/login');
};

const hasLogin = computed(() => {
  return useUserStore().token;
});

const layoutCls = computed(() => [`${prefix}-global-nav`]);
</script>
<style scoped lang="less"></style>
