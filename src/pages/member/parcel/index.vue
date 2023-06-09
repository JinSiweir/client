<template>
  <div class="list-admin-table">
    <t-row>
      <t-col :span="10">
        <t-row>
          <t-col :span="4">
            <t-form-item name="username" label-width="0">
              <t-select v-model="pickupStatus">
                <t-option
                  v-for="item in SEARCH_OPTIONS"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></t-option>
              </t-select>
            </t-form-item>
          </t-col>
          <t-button theme="primary" type="submit" :style="{ marginLeft: 'var(--td-comp-margin-s)' }" @click="onSubmit">
            查询
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
        :row-key="'index'"
        :vertical-align="'top'"
        :hover="true"
      >
        <template #op="slotProps">
          <t-button variant="text" theme="primary" shape="square">查看{{ slotProps.a }}</t-button>
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

const onSubmit = (val) => {
  /* eslint no-unused-expressions: "off" */
  val.validateResult && fetchData();
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
