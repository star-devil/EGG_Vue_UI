import { RouteRecordRaw } from 'vue-router';

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/AppLayout.vue'),
    meta: {
      title: 'Home',
      keepAlive: true
    }
  }
];

export default homeRoutes;
