<template>
  <div class="layout-wrap bg-surface-0 flex h-screen w-screen px-5 py-4">
    <!-- 左侧菜单 -->
    <aside class="z-1000">
      <AppSidebar />
    </aside>

    <!-- 右侧主要内容区 -->
    <div class="flex flex-1 flex-col transition-all duration-300">
      <!-- 顶部导航栏 -->
      <header class="z-1000 h-20">
        <AppHeader />
        <AppTabBar />
      </header>

      <!-- 主内容区 -->
      <main class="h-full">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from './header/AppHeader.vue';
</script>

<style scoped lang="scss">
.layout-wrap {
  background-image: url('../assets/icons/bg.svg');
  background-repeat: repeat;
}
</style>
