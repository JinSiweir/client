<template>
  <div class="home">
    <HomeSwiper />
    <main class="home-container">
      <div>search</div>
      <section class="subcat container">
        <Row>
          <Col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="subcat-tit">致力于成为全球供应链基础设施服务商</div>
            <div class="subcat-subtit"></div>
            <div class="subcat-list"></div>
          </Col>
          <Col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div>Col</div>
          </Col>
        </Row>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Col, Row } from 'tdesign-vue-next';

import HomeSwiper from './components/HomeSwiper.vue';
</script>

<style lang="less" scoped>
.home {
  // background: @base-bg-primary-color;
  .home-container {
    .subcat {
      &-tit {
        font-size: 30px;
        font-weight: 700;
        text-align: left;
        padding-top: 50px;
        position: relative;
        &::after {
          height: 5px;
          width: 100px;
          background-color: rgb(152, 33, 35);
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0px;
          margin-left: -25px;
        }
      }
    }
  }
}
</style>
