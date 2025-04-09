<template>
  <div class="bg-surface-0 flex h-screen w-screen p-6">
    <!-- 左侧菜单 -->
    <aside class="z-1000">
      <AppSidebar />
    </aside>

    <!-- 右侧主要内容区 -->
    <div class="flex flex-1 flex-col">
      <!-- 顶部导航栏 -->
      <header></header>

      <!-- 主内容区 -->
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
