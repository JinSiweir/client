<template>
  <t-config-provider :global-config="getTdesignLocale">
    <router-view />
  </t-config-provider>
</template>
<script setup lang="ts">
import { useLocale } from '@/locales/useLocale';

const { getTdesignLocale } = useLocale();
</script>
<style lang="less" scoped>
#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>
