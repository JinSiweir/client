import { createRouter, createWebHistory } from 'vue-router';

const ROUTES = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/index.vue'),
  },
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
