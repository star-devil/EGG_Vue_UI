<template>
  <div class="layout-wrap">
    <!-- 左侧菜单 -->
    <aside class="z-1000">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header
            class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
          >
            <div class="flex items-center gap-2 px-4">
              <SidebarTrigger class="-ml-1" />
              <Separator orientation="vertical" class="mr-2 h-4" />
              <AppBreadcrumb />
            </div>
          </header>
          <router-view class="flex flex-1 flex-col p-4 pt-0"> </router-view>
        </SidebarInset>
      </SidebarProvider>
    </aside>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.layout-wrap {
  background-image: url('../assets/icons/bg.svg');
  background-repeat: repeat;
}
</style>
