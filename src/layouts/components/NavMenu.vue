<template>
  <t-head-menu theme="dark" :value="acitve" height="120px" class="nav">
    <template #logo>
      <img
        width="136"
        class="logo"
        src="https://www.531q.xyz/public/uploads/all/Ng3KuA2wIc5QJkj5Zujhtes9kuPDwjhtNc3chWhh.png"
        alt="logo"
      />
    </template>

    <template v-for="item in routeList" :key="item.path">
      <t-menu-item :value="item.path" :to="item.path"> {{ item.title }} </t-menu-item>
    </template>
  </t-head-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const routeList = [
  {
    title: '首页',
    path: '/home',
    name: 'HomeIndex',
  },
  {
    title: '海外仓介绍',
    path: '/introduce',
    name: 'Introduce',
  },
  {
    title: '一件代发',
    path: '/behalf',
    name: 'Behalf',
  },
  {
    title: '新闻',
    path: '/news',
    name: 'News',
  },
  {
    title: '关于我们',
    path: '/about',
    name: 'About',
  },
  {
    title: '仓库商品',
    path: '/product',
    name: 'Product',
  },
  {
    title: '用户中心',
    path: '/member',
    name: 'Member',
  },
];

const acitve = computed(() => {
  return useRoute().path;
});
</script>

<style lang="less" scoped>
.nav {
  :deep(.t-menu) {
    justify-content: flex-end;
  }
}
</style>
