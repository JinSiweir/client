import 'nprogress/nprogress.css'; // progress bar style

import NProgress from 'nprogress'; // progress bar

import router from '@/router';

NProgress.configure({ showSpinner: false });

// to, from, next
router.beforeEach(async () => {
  NProgress.start();

  NProgress.done();
});

router.afterEach((to) => {
  if (to.path === '/login') {
    //
  }
  NProgress.done();
});
