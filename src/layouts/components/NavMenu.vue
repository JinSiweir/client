<template>
  <t-head-menu theme="dark" :value="active" height="120px" class="nav container">
    <template #logo>
      <img
        width="136"
        class="logo"
        src="https://www.531q.xyz/public/uploads/all/Ng3KuA2wIc5QJkj5Zujhtes9kuPDwjhtNc3chWhh.png"
        alt="logo"
      />
    </template>

    <template v-for="item in MENU_ROUTE_LIST" :key="item.path">
      <t-menu-item :value="item.path" :to="item.path"> {{ item.title }} </t-menu-item>
    </template>
  </t-head-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { MENU_ROUTE_LIST } from '@/constants';

// 菜单的值为 二级路由的path
const active = computed(() => {
  return useRoute().matched[1].path;
});
</script>

<style lang="less" scoped>
.nav {
  :deep(.t-menu) {
    justify-content: flex-end;
  }
  margin: auto;
}
</style>
