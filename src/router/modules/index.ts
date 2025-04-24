import { RouteRecordRaw } from 'vue-router';
import { generateRoutesFromMenu } from '../utils/routeGenerator';
import { navMain } from '@/router/utils/menuData.ts';

const generateRoutes: RouteRecordRaw[] = generateRoutesFromMenu(navMain);

export default generateRoutes;
