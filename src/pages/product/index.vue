<template>
  <div class="product container">
    <div class="product-filter">
      <Space>
        <Input></Input>
        <Select></Select>
        <Select></Select>
        <Button>批量上架</Button>
      </Space>
      <Pagination :show-page-number="true" :show-page-size="true" :total-content="false"></Pagination>
    </div>
    <div class="product-content">
      <Table :columns="COLUMNS">
        <template #info="slotProps">
          <div>
            {{ slotProps }}
          </div>
        </template>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Input, Pagination, Select, Space, Table } from 'tdesign-vue-next';

import { COLUMNS } from './constant';
</script>

<style lang="less" scoped>
.product {
  padding: 50px 0px;
  &-filter {
    display: flex;
    margin-bottom: 30px;
  }
}
</style>
