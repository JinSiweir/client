<!-- <template>
  <div class="list-admin-table">
    <t-form ref="form" :data="formData" :label-width="80" colon @reset="() => fetchData()" @submit="onSubmit">
      <t-row>
        <t-col :span="10">
          <t-row :gutter="[24, 24]">
            <t-col :span="4">
              <t-form-item label="用户名" name="username">
                <t-input
                  v-model="formData.username"
                  class="form-item-content"
                  type="search"
                  placeholder="请输入用户名称"
                  :style="{ minWidth: '134px' }"
                />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="用户编号" name="id">
                <t-input
                  v-model="formData.id"
                  :type="'number'"
                  autocomplete="off"
                  class="form-item-content"
                  placeholder="请输用户编号"
                  :style="{ minWidth: '134px' }"
                />
              </t-form-item>
            </t-col>
          </t-row>
        </t-col>

        <t-col :span="2" class="operation-container">
          <t-button theme="primary" @click="createVisible = true">
            <template #icon><add-icon /></template>
            新建
          </t-button>
          <t-button theme="primary" type="submit" :style="{ marginLeft: 'var(--td-comp-margin-s)' }"> 查询 </t-button>
          <t-button type="reset" variant="base" theme="default"> 重置 </t-button>
        </t-col>
      </t-row>
    </t-form>

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
          <t-button variant="text" theme="primary" shape="square">查看</t-button>
        </template>
      </t-table>
      <t-pagination
        v-model:current="currentPage"
        v-model:page-size="pageSize"
        class="pagination-container"
        :total="total"
      >
      </t-pagination>
    </div>
  </div>
</template>
<script setup lang="ts">
import { AddIcon } from 'tdesign-icons-vue-next';
import { ref } from 'vue';

import { deleteAdmin, getAdminList } from '@/api/user';
import { useFetchData } from '@/hooks/useFetchData';

import { COLUMNS } from './constants';

const searchForm = {
  id: undefined,
  username: undefined,
};
const formData = ref({ ...searchForm });
const { data, total, currentPage, pageSize, fetchData, fetchLoading } = useFetchData(getAdminList, formData);

const onSubmit = (val) => {
  /* eslint no-unused-expressions: "off" */
  val.validateResult && fetchData();
};

const createVisible = ref(false);
</script>

<style lang="less" scoped>
.list-admin-table {
  background-color: var(--td-bg-color-container);
  padding: var(--td-comp-paddingTB-xxl) var(--td-comp-paddingLR-xxl);
  border-radius: var(--td-radius-medium);

  .table-container {
    margin-top: var(--td-comp-margin-xxl);
  }
  .pagination-container {
    margin-top: var(--td-comp-margin-xl);
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
</style> -->
