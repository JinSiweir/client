<template>
  <div class="userinfo-container container">
    <UserInfoCard />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import UserInfoCard from './components/UserInfoCard.vue';
</script>

<style lang="less" scoped>
.userinfo-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
