<template>
  <Swiper class="home-swiper" :duration="300" :interval="2000">
    <SwiperItem v-for="item in SwiperData" :key="item">
      <img :src="item" class="swiper-item" />
    </SwiperItem>
  </Swiper>
</template>
<script lang="ts" setup>
import { Swiper, SwiperItem } from 'tdesign-vue-next';

const SwiperData = [
  'https://www.531q.xyz/public/uploads/all/U7GR1Tl8LOaiUl46644xIMnkLDd8tqhUPD8vT5TK.jpg',
  'https://www.531q.xyz/public/uploads/all/X1ZuhrLXJBMmXEiiTGjh90WUVW30LaWRIHR70ft2.jpg',
  'https://www.531q.xyz/public/uploads/all/l4MBUJjhTXvwNUVRbnfhN0Rf8YgQsbO5QlqdB4q8.jpg',
];
</script>

<style lang="less" scoped>
.home-swiper {
  width: 100%;
  height: 100%;
}
.swiper-item {
  display: block;
  margin: 0 auto;
  width: 100%;
}
</style>
