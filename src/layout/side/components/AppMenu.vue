<script setup>
// import { Calendar, Home, Inbox, Search, Settings } from "lucide-vue-next"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar';
const menu = ref([
  {
    title: 'Home',
    items: [{ title: 'Dashboard', icon: 'pi pi-fw pi-home', url: '/' }]
  },
  {
    title: 'UI Components',
    items: [
      {
        title: 'Form Layout',
        icon: 'pi pi-fw pi-id-card',
        url: '/uikit/formlayout'
      },
      { title: 'Input', icon: 'pi pi-fw pi-check-square', url: '/uikit/input' },
      {
        title: 'Buturln',
        icon: 'pi pi-fw pi-mobile',
        url: '/uikit/buturln',
        class: 'rotated-icon'
      },
      { title: 'Table', icon: 'pi pi-fw pi-table', url: '/uikit/table' },
      { title: 'List', icon: 'pi pi-fw pi-list', url: '/uikit/list' },
      { title: 'Tree', icon: 'pi pi-fw pi-share-alt', url: '/uikit/tree' },
      { title: 'Panel', icon: 'pi pi-fw pi-tablet', url: '/uikit/panel' },
      { title: 'Overlay', icon: 'pi pi-fw pi-clone', url: '/uikit/overlay' },
      { title: 'Media', icon: 'pi pi-fw pi-image', url: '/uikit/media' },
      { title: 'Menu', icon: 'pi pi-fw pi-bars', url: '/uikit/menu' },
      { title: 'Message', icon: 'pi pi-fw pi-comment', url: '/uikit/message' },
      { title: 'File', icon: 'pi pi-fw pi-file', url: '/uikit/file' },
      { title: 'Chart', icon: 'pi pi-fw pi-chart-bar', url: '/uikit/charts' },
      {
        title: 'Timeline',
        icon: 'pi pi-fw pi-calendar',
        url: '/uikit/timeline'
      },
      { title: 'Misc', icon: 'pi pi-fw pi-circle', url: '/uikit/misc' }
    ]
  },
  {
    title: 'Pages',
    icon: 'pi pi-fw pi-briefcase',
    url: '/pages',
    items: [
      {
        title: 'Landing',
        icon: 'pi pi-fw pi-globe',
        url: '/landing'
      },
      {
        title: 'Auth',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            title: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            url: '/auth/login'
          },
          {
            title: 'Error',
            icon: 'pi pi-fw pi-times-circle',
            url: '/auth/error'
          },
          {
            title: 'Access Denied',
            icon: 'pi pi-fw pi-lock',
            url: '/auth/access'
          }
        ]
      },
      {
        title: 'Crud',
        icon: 'pi pi-fw pi-pencil',
        url: '/pages/crud'
      },
      {
        title: 'Not Found',
        icon: 'pi pi-fw pi-exclamation-circle',
        url: '/pages/notfound'
      },
      {
        title: 'Empty',
        icon: 'pi pi-fw pi-circle-off',
        url: '/pages/empty'
      }
    ]
  }
]);
</script>

<template>
  <SimpleBar class="menu-scrollbar">
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarGroupContent>
          <Collapsible
            v-for="items in menu"
            :key="items.title"
            as-child
            :default-open="item.isActive"
            class="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton :tooltip="items.title">
                  <component :is="items.icon" v-if="items.icon" />
                  <span>{{ items.title }}</span>
                  <ChevronRight
                    class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem
                    v-for="subItem in item.items"
                    :key="subItem.title"
                  >
                    <SidebarMenuSubButton as-child>
                      <a :href="subItem.url">
                        <span>{{ subItem.title }}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarGroupContent>
      </SidebarMenu>
    </SidebarGroup>
    <!-- <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items.items" :key="item.title">
              <SidebarMenuButton asChild>
                <router-link
                  v-if="item.url && !item.items && item.visible !== false"
                  :to="item.url"
                >
                  <i :class="item.icon"></i>
                  <span>{{ item.title }}</span>
                </router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup> -->
    <!-- <ul class="layout-menu">
      <template v-for="(item, i) in menu" :key="item">
        <AppMenuItem
          v-if="!item.separaurlr"
          :item="item"
          :index="i"
        ></AppMenuItem>
        <li v-if="item.separaurlr" class="menu-separaurlr"></li>
      </template>
    </ul> -->
  </SimpleBar>
</template>
