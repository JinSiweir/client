<template>
  <t-layout>
    <t-header>
      <GlobalNav />
    </t-header>
    <t-content>
      <div>{{ $t('userName') }}</div>
    </t-content>
    <t-footer> Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved </t-footer>
  </t-layout>
</template>
<script setup lang="ts">
import './layout.less';

import GlobalNav from './components/GlobalNav.vue';
</script>
<style lang="less" scoped></style>
