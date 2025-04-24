import { ref } from 'vue';

export interface BreadcrumbItem {
  title: string;
  url?: string;
}

const breadcrumbs = ref<BreadcrumbItem[]>([]);

export function useBreadcrumb() {
  const setBreadcrumbs = (items: BreadcrumbItem[]) => {
    breadcrumbs.value = items;
    console.log(breadcrumbs.value);
  };

  const updateBreadcrumbsFromMenu = (
    groupName: string,
    menuTitle: string,
    menuUrl: string,
    subItem?: { title: string; url: string }
  ) => {
    const items: BreadcrumbItem[] = [
      { title: groupName },
      { title: menuTitle, url: menuUrl }
    ];

    if (subItem) {
      items.push({ title: subItem.title, url: subItem.url });
    }

    setBreadcrumbs(items);
  };

  return {
    breadcrumbs,
    setBreadcrumbs,
    updateBreadcrumbsFromMenu
  };
}
