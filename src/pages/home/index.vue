<template>
  <div class="home">
    <HomeSwiper />
    <main class="home-container">
      <div>search</div>
      <section class="subcat container">
        <Row>
          <Col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="subcat-tit">致力于成为全球供应链基础设施服务商</div>
            <div class="subcat-subtit">打造高效、高性价比、精准、敏捷的仓储物流服务</div>
            <div class="subcat-list">
              <div v-for="item in subCatList" :key="item.label" class="subcat-list-subitem">
                <img :src="item.img" alt="" />
                {{ item.label }}
              </div>
            </div>
          </Col>
          <Col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <img :src="indexEarth" class="earth-img" />
          </Col>
        </Row>
      </section>
      <section class="subfw container">
        <div class="subfw-tit">服务体系</div>
        <div class="subfw-list"></div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Col, Row } from 'tdesign-vue-next';

import item1 from '@/assets/home/001.png';
import item2 from '@/assets/home/002.png';
import item3 from '@/assets/home/003.png';
import item4 from '@/assets/home/004.png';
import item5 from '@/assets/home/005.png';
import item6 from '@/assets/home/a_icon_006.8ec5bc98.png';
import indexEarth from '@/assets/home/index_earth.96625297.png';

import HomeSwiper from './components/HomeSwiper.vue';

const subCatList = [
  {
    label: '供应链金融',
    img: item1,
  },
  {
    label: '海外仓分销',
    img: item2,
  },
  {
    label: '海外仓储',
    img: item3,
  },
  {
    label: '财务管理',
    img: item4,
  },
  {
    label: '海外仓转运',
    img: item5,
  },
  {
    label: '营销应用',
    img: item6,
  },
];
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
        padding-top: 70px;
        position: relative;
        &::after {
          height: 5px;
          width: 100px;
          background-color: var(--td-brand-color);
          content: '';
          position: absolute;
          bottom: -20px;
          left: 0px;
          margin-left: 0px;
        }
      }
      &-subtit {
        padding: 50px 0;
        text-align: left;
        font-size: larger;
      }

      &-list {
        padding: 0 0;
        display: flex;
        flex-wrap: wrap;
        &-subitem {
          width: 33.3%;
          padding: 30px 0;
          text-align: center;
          font-weight: 700;
          font-size: larger;
          img {
            display: block;
            width: 110px;
            margin: 0 auto;
          }
        }
      }
      .earth-img {
        background-size: 50%;
        vertical-align: middle;
        width: 100%;
        height: 100%;
      }
    }

    .subfw {
      text-align: center;
      padding-top: 50px;
      &-tit {
        font-size: xx-large;
        position: relative;
        text-align: center;
        font-weight: 700;
        &::after {
          height: 5px;
          width: 50px;
          background-color: var(--td-brand-color);
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          margin-left: -25px;
        }
      }
      &-list {
      }
    }
  }
}
</style>
