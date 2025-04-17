<template>
  <div class="inline-block">
    <Breadcrumb class="menu-breadcrumb" :home="home" :model="items" />
  </div>
</template>

<script lang="ts" setup>
const home = ref({
  icon: 'pi pi-home'
});
const items = ref([
  { label: 'Electronics' },
  { label: 'Computer' },
  { label: 'Accessories' }
]);
</script>

<style scoped lang="scss">
.menu-breadcrumb {
  padding: var(--p-button-padding-y) var(--p-button-padding-x);
}
</style>
