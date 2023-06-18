<template>
  <div class="footer-container">
    <Row class="footer-container-content">
      <Col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <img :src="footerImg" alt="" />
      </Col>
      <Col :xs="6" :sm="6" :md="3" :lg="3" :xl="3">
        <dd class="footer-list">
          <p>语言支持</p>
          <template v-for="item in langList" :key="item">
            <dl @click="() => changeLang(item.value)">{{ item.content }}</dl>
          </template>
        </dd>
      </Col>
      <Col :xs="6" :sm="6" :md="3" :lg="3" :xl="3">
        <dd class="footer-list">
          <p>网站相关</p>
          <template v-for="item in MENU_ROUTE_LIST" :key="item">
            <dl @click="() => changeRoute(item.path)">{{ item.title }}</dl>
          </template>
        </dd>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { Col, Row } from 'tdesign-vue-next';
import { useRouter } from 'vue-router';

import footerImg from '@/assets/layout-footer-bg.png';
import { MENU_ROUTE_LIST } from '@/constants';
import { langList } from '@/locales';
import { useLocale } from '@/locales/useLocale';

const router = useRouter();
const { changeLocale } = useLocale();
const changeLang = (lang: unknown) => {
  changeLocale(lang as string);
};

const changeRoute = (path: string) => {
  router.push(path);
};
</script>

<style lang="less">
.footer-container {
  padding: 30px 0;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &-content {
    width: 100%;
    .footer-list {
      color: var(--td-text-color-anti);
      p {
        position: relative;
        font-size: 20px;
        padding-bottom: 10px;
        padding-left: 10px;
        margin-bottom: 15px;
        &::after {
          height: 5px;
          width: 50px;
          background-color: var(--td-brand-color);
          content: '';
          position: absolute;
          bottom: -10px;
          left: 10px;
          margin-left: 0;
        }
      }
      dl {
        padding-left: 10px;
        height: var(--td-comp-size-m);
        line-height: var(--td-comp-size-m);
        font-size: 14px;
        &:hover {
          cursor: pointer;
          background-color: var(--td-gray-color-10);
          border-radius: var(--td-radius-default);
        }
      }
    }
  }
}
</style>
