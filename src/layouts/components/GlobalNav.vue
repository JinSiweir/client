<template>
  <div :class="layoutCls">
    <t-head-menu theme="dark" value="item1" height="120px">
      <template #operations>
        <t-dropdown trigger="click" :options="langList" :on-click="(e: any) => changeLang(e.value)">
          <t-button theme="default" shape="square" variant="text">
            <t-icon name="internet" />
          </t-button>
        </t-dropdown>
      </template>
    </t-head-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { prefix } from '@/config/global';
import { langList } from '@/locales';
import { useLocale } from '@/locales/useLocale';

const { changeLocale } = useLocale();
const changeLang = (lang: unknown) => {
  changeLocale(lang as string);
};
const layoutCls = computed(() => [`${prefix}-global-nav`]);
</script>
<style scoped lang="less"></style>
