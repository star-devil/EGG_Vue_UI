import { createRouter, createWebHistory } from 'vue-router';
import generateRoutes from './modules';
import { useBreadcrumb } from '../layout/composables/useBreadcrumb';

const router = createRouter({
  history: createWebHistory(),
  routes: [...generateRoutes]
});

// 路由导航守卫，用于处理面包屑的更新
router.beforeEach((to, _from, next) => {
  const { setBreadcrumbs } = useBreadcrumb();
  console.log('to--', to);

  // 根据路由meta信息更新面包屑
  if (to.meta.groupName && to.meta.menuTitle && to.meta.title) {
    setBreadcrumbs([
      { title: to.meta.groupName as string },
      { title: to.meta.menuTitle as string },
      { title: to.meta.title as string, url: to.path }
    ]);
  }

  next();
});

export default router;
