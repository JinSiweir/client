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
