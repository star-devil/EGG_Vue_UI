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

const getFirstMenuItem = (
  menuData: MenuGroup[]
): { path: string; menuItem: MenuItem } | null => {
  for (const group of menuData) {
    for (const menuItem of group.menu) {
      if (menuItem.items && menuItem.items.length > 0) {
        return { path: menuItem.items[0].url, menuItem };
      }
    }
  }
  return null;
};

export function generateRoutesFromMenu(menuData: MenuGroup[]): {
  routes: RouteRecordRaw[];
  firstMenuItem: ReturnType<typeof getFirstMenuItem>;
} {
  const routes: RouteRecordRaw[] = [];

  // 创建根路由，使用AppLayout作为布局组件
  const rootRoute: RouteRecordRaw = {
    path: '/',
    component: AppLayout,
    children: []
  };

  // 获取第一个菜单项并设置重定向
  const firstMenuItem = getFirstMenuItem(menuData);
  if (firstMenuItem) {
    rootRoute.redirect = firstMenuItem.path;
    // 设置第一个菜单项为激活状态
    firstMenuItem.menuItem.isActive = true;
  }

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
  return { routes, firstMenuItem };
}
