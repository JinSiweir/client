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
      <section class="subfw-bg">
        <div class="subfw container">
          <div class="subfw-tit">服务体系</div>
          <div class="subfw-list">
            <Row :justify="'space-around'">
              <Col v-for="item in subfwList" :key="item.title" :xs="6" :sm="6" :md="2" :lg="2" :xl="2">
                <Card class="subfw-list-item">
                  <div class="subfw-list-item-img">
                    <img :src="item.img" alt="" srcset="" />
                  </div>
                  <div class="subfw-list-item-tit">{{ item.title }}</div>
                  <div class="subfw-list-item-desc">{{ item.desc }}</div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div class="maps container">
          <div class="maps-tit">海外仓布局</div>
          <img :src="homeIphoneCar" alt="" class="about-img" />
          <img :src="homeMapAf" alt="" />
        </div>
      </section>
      <section class="lcbg">
        <div class="subfw container">
          <div class="subfw-tit">我们的优势</div>
          <div class="subfw-list womys">
            <Row :justify="'space-around'">
              <Col v-for="item in subfwList2" :key="item.title" :xs="6" :sm="6" :md="3" :lg="3" :xl="3">
                <Card class="subfw-list-item">
                  <div class="subfw-list-item-img">
                    <img :src="item.img" alt="" srcset="" />
                  </div>
                  <div class="subfw-list-item-tit">{{ item.title }}</div>
                  <div class="subfw-list-item-desc">{{ item.desc }}</div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div class="workflow container">
          <div class="workflow-tit">流程体系</div>
          <div class="workflow-sublist">
            <div></div>
            <template v-for="(item, idx) in subfwList3" :key="idx">
              <div class="workflow-sublist-item">
                <div class="bubble">
                  <span>{{ idx + 1 }}</span>
                  <div class="bubble-content">{{ item }}</div>
                </div>
                <div class="point">{{ idx }}</div>
                <div class="placeholder"></div>
              </div>
            </template>
          </div>
          <div class="workflow-bg">
            <img :src="homeCar" alt="" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Card, Col, Row } from 'tdesign-vue-next';

import item1 from '@/assets/home/001.png';
import item2 from '@/assets/home/002.png';
import item3 from '@/assets/home/003.png';
import item4 from '@/assets/home/004.png';
import item5 from '@/assets/home/005.png';
import item6 from '@/assets/home/a_icon_006.8ec5bc98.png';
import homeCar from '@/assets/home/index_car.396a881f.png';
import indexEarth from '@/assets/home/index_earth.96625297.png';
import homeMapAf from '@/assets/home/index_map.af36f56a.png';
import homeIphoneCar from '@/assets/home/index_phonecar.fe81163e.png';
import subfw001 from '@/assets/home/subfw001.png';
import subfw002 from '@/assets/home/subfw002.png';
import subfw003 from '@/assets/home/subfw003.png';
import subfw004 from '@/assets/home/subfw004.png';
import subfw005 from '@/assets/home/subfw005.png';
import subfw006 from '@/assets/home/subfw006.png';
import subfw007 from '@/assets/home/subfw007.png';
import subfw008 from '@/assets/home/subfw008.png';
import subfw009 from '@/assets/home/subfw009.png';
import subfw010 from '@/assets/home/subfw010.png';
import subfw011 from '@/assets/home/subfw011.png';
import subfw012 from '@/assets/home/subfw012.png';

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

const subfwList = [
  {
    img: subfw001,
    title: '海外仓业务',
    desc: '提供标准化仓储配送，定制化仓储服务及头程服务。',
  },
  {
    img: subfw002,
    title: '海外仓转运',
    desc: '国内转运和直发转运服务，实现零库存本土发货优势。',
  },
  {
    img: subfw003,
    title: '海外仓分销',
    desc: '丰富的产品线，降低滞销风险，海外仓本土发货。',
  },
  {
    img: subfw004,
    title: '供应链金融',
    desc: '解决采购、运输、库存全链条供应链资金需求。',
  },
];
const subfwList2 = [
  {
    img: subfw005,
    title: '100',
    desc: '100万+㎡海外仓面积',
  },
  {
    img: subfw006,
    title: '50',
    desc: '50个订单处理中心',
  },
  {
    img: subfw007,
    title: '30',
    desc: '30万+日均订单量',
  },
  {
    img: subfw008,
    title: '3000',
    desc: '3000+海内外员工',
  },
  {
    img: subfw009,
    title: '99.99',
    desc: '发货准确率达99.99%',
  },
  {
    img: subfw010,
    title: '99.95',
    desc: '库存准确率>99.95%',
  },
  {
    img: subfw011,
    title: '24',
    desc: '发货时效小于24小时',
  },
  {
    img: subfw012,
    title: '48',
    desc: '入库时效小于48小时',
  },
];

const subfwList3 = ['用户', '创建商品', '创建入库单', '商品入库', '平台订单关联', '创建订单', '订单跟踪', '订单完成'];
</script>

<style lang="less" scoped>
.home {
  background: white;
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

    .subfw-bg {
      background: url('@/assets/home/index_bg_001.335e46ab.jpg') no-repeat;
      text-align: center;
      .subfw {
        &-tit {
          padding-top: 70px;

          font-size: 40px;
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
          padding-top: 5rem;
          &-item {
            &-img {
              width: 100px;
              height: 100px;
              background-color: var(--td-brand-color);
              border-radius: 50%;
              background-repeat: no-repeat;
            }
            &-tit {
              position: relative;
              font-size: 24px;
              padding: 1rem 0;
              text-align: left;
              font-weight: 700;
              &::after {
                height: 3px;
                width: 50px;
                background-color: var(--td-brand-color);
                content: '';
                position: absolute;
                left: 0px;
                bottom: 0px;
              }
            }
            &-desc {
              margin-top: 10px;
              text-align: left;
            }
          }
        }
      }

      .maps {
        padding-top: 50px;
        &-tit {
          font-size: 40px;
          position: relative;
          text-align: center;
          font-weight: 700;
          margin-bottom: 60px;
          &::after {
            height: 5px;
            width: 100px;
            background-color: var(--td-brand-color);
            content: '';
            position: absolute;
            bottom: -20px;
            left: 46%;
          }
        }
        .about-img {
          width: 24%;
          position: absolute;
          right: 104px;
          top: 20px;
        }
        img {
          margin-top: 5rem;
          width: 100%;
          background-size: 50%;
          vertical-align: middle;
          overflow-clip-margin: content-box;
          overflow: clip;
        }
      }
    }
    .lcbg {
      background: url('@/assets/home/index_bg_002.52d43b2b.jpg') no-repeat;
      text-align: center;
      .subfw {
        &-tit {
          padding-top: 70px;

          font-size: 40px;
          position: relative;
          text-align: center;
          font-weight: 700;
          &::after {
            height: 5px;
            width: 100px;
            background-color: var(--td-brand-color);
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50%;
            margin-left: -50px;
          }
        }
        &-list {
          padding-top: 5rem;
          &-item {
            width: 80%;
            padding: 11px 0px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 1px 1px 3px #ccc;
            margin-bottom: 50px;
            :deep(.t-card__body) {
              padding-bottom: 10px;
            }
            &-img {
              position: absolute;
              right: 24px;
              top: -70px;
              width: 80px;
              height: 80px;
              padding-top: 8px;
              border: 2px solid #000;
              border-radius: 50%;
              display: block;
              margin-top: 3rem;
              img {
                width: 80%;
              }
            }
            &-tit {
              color: var(--td-brand-color);
              font-weight: 700;
              font-size: 35px;
              text-align: left;
            }
            &-desc {
              padding-top: 1rem;
              font-size: 16px;
              text-align: left;
            }
          }
        }
      }
      .workflow {
        padding-top: 10rem;
        padding-bottom: 0;
        &-tit {
          font-size: 40px;
          color: #fff;
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
        &-sublist {
          padding-top: 50px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          // 第一个div虚线
          div:first-child {
            border-right: 3px dashed #fff;
            position: absolute;
            left: calc(50% - 1.5px);
            height: 100%;
          }
          &-item {
            position: relative;
            display: flex;
            // justify-content: center;
            margin: 0 20px;

            div {
              width: 300px;
            }
            .placeholder {
              width: 300px;
              background: red;
            }
            .point {
              width: 20px;
              height: 20px;
              background-color: #fff;
              margin: 0 20px;
              border-radius: 50%;
              margin-top: 20px;
            }
            .bubble {
              position: relative;
              text-align: center;
              background-color: #fff;
              border-radius: 30px;
              display: flex;
              justify-content: flex-start;
              height: 60px;
              line-height: 60px;
              font-size: 20px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
