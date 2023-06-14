import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const SEARCH_OPTIONS = [
  {
    label: '全部',
    value: 'all',
  },
  {
    label: '已发货',
    value: 'picked',
  },
  {
    label: '未发货',
    value: 'unpicked',
  },
];

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    colKey: 'op',
    align: 'center',
    title: '操作',
  },
  {
    title: '商品信息',
    colKey: 'info',
  },
  {
    title: '快递单号',
    width: 160,
    ellipsis: true,
    colKey: 'kuaidicode',
  },
  {
    title: '利润',
    colKey: 'profit_amount',
  },
  {
    title: '发货状态',
    colKey: 'delivery_status',
  },
  {
    title: '编号',
    ellipsis: true,
    colKey: 'order_code',
  },
  {
    title: '时间',
    ellipsis: true,
    colKey: 'order_date',
  },
];
