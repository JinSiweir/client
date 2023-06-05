<template>
  <t-head-menu theme="dark" value="item1" height="120px" class="nav">
    <template #logo>
      <img
        width="136"
        class="logo"
        src="https://www.531q.xyz/public/uploads/all/Ng3KuA2wIc5QJkj5Zujhtes9kuPDwjhtNc3chWhh.png"
        alt="logo"
      />
    </template>
    <t-menu-item value="home"> 首页 </t-menu-item>
    <t-menu-item value="2"> 海外仓库介绍 </t-menu-item>
    <t-menu-item value="3"> 一件代发 </t-menu-item>
    <t-menu-item value="4"> 行业新闻 </t-menu-item>
    <t-menu-item value="5"> 关于我们 </t-menu-item>
    <t-menu-item value="item3"> 仓库商品 </t-menu-item>
    <t-menu-item value="userCenter"> 用户中心 </t-menu-item>
  </t-head-menu>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.nav {
  :deep(.t-menu) {
    justify-content: flex-end;
  }
}
</style>
