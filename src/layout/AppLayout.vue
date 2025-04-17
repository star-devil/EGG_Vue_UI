<template>
  <div class="bg-surface-0 flex h-screen w-screen p-6">
    <!-- 左侧菜单 -->
    <aside class="z-1000 transition-all duration-300">
      <AppSidebar />
    </aside>

    <!-- 右侧主要内容区 -->
    <div class="flex flex-1 flex-col transition-all duration-300">
      <!-- 顶部导航栏 -->
      <header class="z-1000 h-20">
        <AppHeader />
      </header>

      <!-- 主内容区 -->
      <main class="bg-surface-0 h-full">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from './header/AppHeader.vue';
</script>
