export const useMenuStore = defineStore('menu', () => {
  const isCollapsed = ref(false);

  function toggleCollapse() {
    isCollapsed.value = !isCollapsed.value;
  }

  return {
    isCollapsed,
    toggleCollapse
  };
});
