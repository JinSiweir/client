<template>
  <div class="list-admin-table">
    <t-row>
      <t-col :span="10">
        <t-row>
          <t-col :span="4">
            <t-form-item name="username" label-width="0">
              <t-select v-model="pickupStatus" @change="handleSearch">
                <t-option
                  v-for="item in SEARCH_OPTIONS"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></t-option>
              </t-select>
            </t-form-item>
          </t-col>
          <t-button
            theme="primary"
            type="submit"
            :style="{ marginLeft: 'var(--td-comp-margin-s)' }"
            @click="handleDelivery"
          >
            批量发货
          </t-button>
        </t-row>
      </t-col>
      <t-col :span="2"
        ><t-pagination
          v-model:current="currentPage"
          v-model:page-size="pageSize"
          class="pagination-container"
          :total="total"
        >
        </t-pagination>
      </t-col>
    </t-row>

    <div class="table-container">
      <t-table
        :data="data"
        :loading="fetchLoading"
        :columns="COLUMNS"
        :vertical-align="'middle'"
        :hover="true"
        :selected-row-keys="selectedRowKeys"
        select-on-row-click
        @select-change="onSelectChange"
      >
        <template #op="slotProps">
          <t-button @click="handleInformation(slotProps)">查看商品</t-button>
        </template>
        <template #info="slotProps">
          <div>
            {{ slotProps?.row?.name }}
          </div>
        </template>
      </t-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import { queryOrderSoverseas } from '@/api/member';
import { useFetchData } from '@/hooks/useFetchData';

import { COLUMNS, SEARCH_OPTIONS } from './constants';

const pickupStatus = ref('all');
const { data, total, currentPage, pageSize, fetchData, fetchLoading } = useFetchData(queryOrderSoverseas, {
  pickupStatus: pickupStatus.value,
});

const handleSearch = () => {
  fetchData();
};
const selectedRowKeys = ref([]);
const onSelectChange = (value) => {
  selectedRowKeys.value = value;
};
const handleDelivery = () => {
  console.log(selectedRowKeys.value);
};

const handleInformation = (info: any) => {
  // 查看信息
  console.log(info);
};
</script>

<style lang="less" scoped>
.list-admin-table {
  background-color: var(--td-bg-color-container);
  padding: var(--td-comp-paddingTB-xxl) var(--td-comp-paddingLR-xxl);
  border-radius: var(--td-radius-medium);

  .table-container {
    margin-top: var(--td-comp-margin-xxl);
  }
}

.form-item-content {
  width: 100%;
}

.operation-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .expand {
    .t-button__text {
      display: flex;
      align-items: center;
    }
  }
}

.payment-col {
  display: flex;

  .trend-container {
    display: flex;
    align-items: center;
    margin-left: var(--td-comp-margin-s);
  }
}
</style>
