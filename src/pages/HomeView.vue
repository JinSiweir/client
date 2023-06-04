<script setup lang="ts">
import { ref } from 'vue';

import { LangCode, t } from '@/locales';
import { useLocale } from '@/locales/useLocale';

const { changeLocale } = useLocale();

const options = [
  { value: 'full', label: '全屏风格' },
  { value: 'card', label: '卡片风格' },
];

const theme = ref('card');
const myCalendar = ref('');
const fillWithZero = ref(true);
const langIndex = ref(0);
const handleFillWithZero = () => {
  if (langIndex.value === 0) {
    langIndex.value = 1;
  } else {
    langIndex.value = 0;
  }
  changeLocale(LangCode[langIndex.value]);
};
</script>

<template>
  <section>{{ t('lang') }}</section>

  <main>
    <t-space direction="vertical" size="large">
      <t-space size="small" align="center">
        <label>请选择风格：</label>
        <t-select v-model="theme">
          <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
        </t-select>
      </t-space>
      <div>
        <label>日期补零：</label>
        <t-switch v-model="fillWithZero" size="large" @change="handleFillWithZero" />
      </div>
      <t-calendar ref="myCalendar" :theme="theme" :is-show-weekend-default="true" :fill-with-zero="fillWithZero" />
    </t-space>
  </main>
</template>
