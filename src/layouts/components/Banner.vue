<template>
  <div class="banner">
    <img :src="bannerInfo.bannerJpg" class="banner-bg" />
    <div class="banner-title">{{ bannerInfo.title }}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import userCenterJPG from '@/assets/banner_user_center.jpg';

const pathAndBg: Map<string, string> = new Map([
  ['/home', userCenterJPG],
  ['/introduce', userCenterJPG],
  ['/behalf', userCenterJPG],
  ['/news', userCenterJPG],
  ['/about', userCenterJPG],
  ['/product', userCenterJPG],
  ['/member', userCenterJPG],
]);

const bannerInfo = computed(() => {
  const { matched } = useRoute();
  const bannerJpg = pathAndBg.get(matched[1].path);
  return {
    title: matched[1].meta.title,
    bannerJpg,
  };
});
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  .banner-bg {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    background-size: 50%;
  }
  .banner-title {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    color: #fff;
    font-size: 35px;
    font-weight: 700;
    &::after {
      height: 5px;
      width: 100px;
      background-color: var(--td-brand-color);
      content: '';
      position: absolute;
      bottom: -30px;
      left: 50%;
      margin-left: -50px;
    }
  }
}
</style>
