import { onMounted, Ref, ref, unref, watch } from 'vue';

interface Pagination<T> {
  currentPage: number;
  pageSize: number;
  orderBy?: keyof T;
  order?: 'ASC' | 'DESC';
}

export const useFetchData = <T>(queryFn: (params: Pagination<T> & T) => Promise<any>, searchParams: T | Ref<T>) => {
  const fetchLoading = ref(false);
  const data = ref([]);
  const total = ref(0);
  const currentPage = ref(1);
  const pageSize = ref(10);
  const orderBy = ref(undefined);
  const order = ref(undefined);
  const fetchData = async () => {
    const params = unref(searchParams);
    // 过滤'' 移除get请求的无效查询参数
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        if (params[key] === '') {
          params[key] = undefined;
        }
      }
    }

    fetchLoading.value = true;
    try {
      const { list, total: _total } = await queryFn({
        currentPage: currentPage.value,
        pageSize: pageSize.value,
        orderBy: orderBy.value,
        order: order.value,
        ...params,
      });
      data.value = list;
      total.value = _total;
    } catch (error) {
      console.log(error);
    } finally {
      fetchLoading.value = false;
    }
  };
  onMounted(() => {
    fetchData();
  });
  watch([pageSize, currentPage, orderBy, order], () => {
    fetchData();
  });
  return {
    fetchLoading,
    data,
    total,
    pageSize,
    currentPage,
    orderBy,
    order,
    fetchData,
  };
};
