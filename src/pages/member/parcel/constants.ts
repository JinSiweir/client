import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    title: 'id',
    align: 'left',
    width: 120,
    colKey: 'id',
    fixed: 'left',
  },
  {
    title: '用户名',
    width: 160,
    ellipsis: true,
    colKey: 'username',
  },
  {
    title: '超级管理员',
    colKey: 'superAdmin',
  },
  {
    title: '状态',
    colKey: 'active',
  },
  {
    title: '创建时间',
    width: 160,
    ellipsis: true,
    colKey: 'createTime',
  },
  {
    title: '更新时间',
    width: 160,
    ellipsis: true,
    colKey: 'updateTime',
  },
  {
    align: 'left',
    fixed: 'right',
    width: 160,
    colKey: 'op',
    title: '操作',
  },
];
