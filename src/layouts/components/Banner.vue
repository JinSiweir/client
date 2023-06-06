<template>
  <div>banner</div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);
</script>

<style lang="less" scoped>
.nav {
  :deep(.t-menu) {
    justify-content: flex-end;
  }
}
</style>
