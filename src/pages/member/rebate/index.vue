<template>
  <div class="rebate-container">
    <div class="title">推广赚钱</div>
    <div class="award">
      <Space class="award=left">
        <label>
          账号：
          <span class="user">{{ 'aaa@gmail.com' }}</span>
        </label>
        <label>
          金额：
          <span class="salary">{{ '¥123.00' }}</span>
        </label>
      </Space>
      <Button class="award-right">领取</Button>
    </div>
    <Divider class="divider"></Divider>
    <div class="data-content">
      <div class="data-content-head">
        <div class="data-content-head-left">
          <RadioGroup variant="default-filled" default-value="1">
            <RadioButton value="1">我的佣金</RadioButton>
            <RadioButton value="2">团队数据</RadioButton>
            <RadioButton value="3">领取记录</RadioButton>
          </RadioGroup>
        </div>
        <div class="data-content-head-right">
          <Space>
            <Input></Input>
            <Select></Select>
          </Space>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Divider, Input, RadioButton, RadioGroup, Select, Space } from 'tdesign-vue-next';
</script>

<style lang="less" scoped>
@content-width: 80%;
.rebate-container {
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

  .award {
    padding-top: 30px;
    display: flex;
    width: @content-width;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-bottom: 10px;
  }

  .divider {
    border-color: black;
    width: @content-width;
    margin: auto;
    margin-bottom: 10px;
  }

  .data-content {
    width: @content-width;
    margin: auto;

    &-head {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
