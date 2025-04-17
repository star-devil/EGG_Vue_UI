<template>
  <div class="w-full flex flex-row justify-between items-center">
    <div class="flex flex-row items-center">
      <AppHandleBar />
      <AppBreadcrumb />
    </div>

    <AppSettings />
  </div>
</template>

<script lang="ts" setup>
import AppBreadcrumb from './AppBreadcrumb.vue';
</script>
