<template>
  <t-layout>
    <t-header class="global-header">
      <GlobalNav />
    </t-header>
    <t-header class="nav-header"> <NavMenu /> </t-header>
    <t-content>
      <Content />
    </t-content>
    <t-footer class="global-footer">
      <XFooter />
    </t-footer>
  </t-layout>
</template>
<script setup lang="ts">
import './layout.less';

import Content from './components/Content.vue';
import XFooter from './components/Footer.vue';
import GlobalNav from './components/GlobalNav.vue';
import NavMenu from './components/NavMenu.vue';
</script>
<style lang="less" scoped>
.global-header {
  background: @base-bg-primary-color;
}
.nav-header {
  background: @base-bg-primary-color;
}
.global-footer {
  background: @base-bg-primary-color;
}
</style>
