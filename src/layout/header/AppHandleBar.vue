<template>
  <div class="inline-block text-xl">
    <Button variant="text" icon="pi pi-bars" @click="collapseMenu"> </Button>

    <Button variant="text" icon="pi pi-refresh"> </Button>
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();

const collapseMenu = () => {
  menuStore.toggleCollapse();
};
</script>
