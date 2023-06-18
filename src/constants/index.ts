// 标签类型
type TagTheme = 'default' | 'success' | 'primary' | 'warning' | 'danger';
// 通知的优先级对应的标签类型
export const NOTIFICATION_TYPES: Map<string, TagTheme> = new Map([
  ['low', 'primary'],
  ['middle', 'warning'],
  ['high', 'danger'],
]);

// 通用请求头
export enum ContentTypeEnum {
  Json = 'application/json;charset=UTF-8',
  FormURLEncoded = 'application/x-www-form-urlencoded;charset=UTF-8',
  FormData = 'multipart/form-data;charset=UTF-8',
}

// 路由菜单
export const MENU_ROUTE_LIST = [
  {
    title: '首页',
    path: '/home',
    name: 'HomeIndex',
  },
  {
    title: '海外仓介绍',
    path: '/introduce',
    name: 'Introduce',
  },
  {
    title: '一件代发',
    path: '/behalf',
    name: 'Behalf',
  },
  {
    title: '新闻',
    path: '/news',
    name: 'News',
  },
  {
    title: '关于我们',
    path: '/about',
    name: 'About',
  },
  {
    title: '仓库商品',
    path: '/product',
    name: 'Product',
  },
  {
    title: '用户中心',
    path: '/member',
    name: 'Member',
  },
];
