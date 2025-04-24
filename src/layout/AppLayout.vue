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
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem class="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator class="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div class="grid auto-rows-min gap-4 md:grid-cols-3">
              <div class="aspect-video rounded-xl bg-muted/50" />
              <div class="aspect-video rounded-xl bg-muted/50" />
              <div class="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div
              class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"
            />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </aside>

    <!-- 右侧主要内容区 -->
    <!-- <div class="flex flex-1 flex-col transition-all duration-300"> -->
    <!-- 顶部导航栏 -->
    <!-- <header class="z-1000 h-20">
        <AppHeader />
        <AppTabBar />
      </header> -->

    <!-- 主内容区 -->
    <!-- <main class="h-full">
        <router-view></router-view>
      </main> -->
    <!-- </div> -->
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.layout-wrap {
  background-image: url('../assets/icons/bg.svg');
  background-repeat: repeat;
}
</style>
