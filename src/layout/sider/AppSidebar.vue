<template>
  <div class="layout-sidebar" :class="{ collapsed: menuStore.isCollapsed }">
    <AppLogo />
    <AppMenu />
    <AppUser />
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();
</script>
