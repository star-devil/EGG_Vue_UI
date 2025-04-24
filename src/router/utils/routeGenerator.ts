import { RouteRecordRaw } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import type { LucideIcon } from 'lucide-vue-next';

interface MenuItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    pageName: string;
    title: string;
    url: string;
  }[];
}

interface MenuGroup {
  groupName: string;
  menu: MenuItem[];
}

export function generateRoutesFromMenu(
  menuData: MenuGroup[]
): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // 创建根路由，使用AppLayout作为布局组件
  const rootRoute: RouteRecordRaw = {
    path: '/',
    component: AppLayout,
    children: []
  };

  // 遍历菜单组和子菜单，生成路由配置
  menuData.forEach((group) => {
    group.menu.forEach((menuItem) => {
      // 处理子菜单项
      if (menuItem.items) {
        menuItem.items.forEach((subItem) => {
          const route: RouteRecordRaw = {
            path: subItem.url,
            name: subItem.title,
            component: () => import(`../../views${subItem.pageName}`),
            meta: {
              groupName: group.groupName,
              menuTitle: menuItem.title,
              title: subItem.title,
              keepAlive: true
            }
          };
          rootRoute.children?.push(route);
        });
      }
    });
  });

  routes.push(rootRoute);
  return routes;
}
