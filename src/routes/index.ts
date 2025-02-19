import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '登录',
      },
      beforeEnter: (to, from) => {
        console.log(to, from);
      },
    },
  ],
});

router.beforeEach((to, from) => {
  console.log(to, from);
});

export default router;
