import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Layout from '@/layouts/index.vue';

const ROUTES: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Layout,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/home',
        name: 'HomeIndex',
        component: () => import('@/pages/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/introduce',
        name: 'Introduce',
        component: () => import('@/pages/introduce/index.vue'),
        meta: {
          title: '海外仓介绍',
        },
      },
      {
        path: '/behalf',
        name: 'Behalf',
        component: () => import('@/pages/behalf/index.vue'),
        meta: {
          title: '一件代发',
        },
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('@/pages/news/index.vue'),
        meta: {
          title: '行业新闻',
        },
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/about/index.vue'),
        meta: {
          title: '关于我们',
        },
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('@/pages/product/index.vue'),
        meta: {
          title: '仓库商品',
        },
      },
      {
        path: '/member',
        name: 'Member',
        component: () => import('@/pages/member/index.vue'),
        redirect: '/record',
        meta: {
          title: '用户中心',
        },
        children: [
          {
            path: '/record',
            name: 'MemberRecord',
            component: () => import('@/pages/member/record/index.vue'),
            meta: {
              title: '用户中心',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
  },
  // {
  //   path: '/:w+',
  //   name: '404Page',
  //   redirect: '/result/404',
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
