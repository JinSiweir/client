<template>
  <div class="record-container">
    <div class="title">记录</div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.record-container {
  margin-top: 30px;
  border-radius: 10px;
  padding: 30px 0;
  background-color: #e5e5e5;
  margin-top: 30px;
  border-radius: 10px;
  padding: 30px 0;
  background-color: #e5e5e5;
  width: 100%;

  .title {
    position: relative;
    top: 50%;
    width: 100%;
    text-align: center;
    color: var(--td-text-color-primary);
    font-size: 30px;
    font-weight: 700;
    padding-top: 30px;
    &::after {
      height: 5px;
      width: 100px;
      background-color: var(--td-brand-color);
      content: '';
      position: absolute;
      bottom: -30px;
      left: 50%;
      margin-left: -50px;
    }
  }
}
</style>
