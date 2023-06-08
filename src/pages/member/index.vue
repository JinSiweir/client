<template>
  <div class="userinfo-container">
    <UserInfoCard />
    <router-view> </router-view>
  </div>
</template>

<script setup lang="ts">
import UserInfoCard from './components/UserInfoCard.vue';
</script>

<style lang="less" scoped>
.userinfo-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
