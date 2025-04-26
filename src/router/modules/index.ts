import { generateRoutesFromMenu } from '../utils/routeGenerator';
import { navMain } from '@/router/utils/menuData.ts';

const { routes: generateRoutes, firstMenuItem } =
  generateRoutesFromMenu(navMain);

export { firstMenuItem };
export default generateRoutes;
