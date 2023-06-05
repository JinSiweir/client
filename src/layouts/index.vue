<template>
  <t-layout>
    <t-header>
      <GlobalNav />
    </t-header>
    <t-header> <Nav /> </t-header>
    <t-content>
      <div>{{ $t('userName') }}</div>
      <Content />
    </t-content>
    <t-footer> Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved </t-footer>
  </t-layout>
</template>
<script setup lang="ts">
import './layout.less';

import Content from './components/Content.vue';
import GlobalNav from './components/GlobalNav.vue';
import Nav from './components/Nav.vue';
</script>
<style lang="less" scoped></style>
