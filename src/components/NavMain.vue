<script setup lang="ts">
import { motion } from 'motion-v';
import { ChevronRight, type LucideIcon } from 'lucide-vue-next';

defineProps<{
  menus: {
    groupName: string;
    menu: {
      title: string;
      url: string;
      icon?: LucideIcon;
      isActive?: boolean;
      items?: {
        title: string;
        url: string;
      }[];
    }[];
  }[];
}>();
</script>

<template>
  <SidebarGroup v-for="menu in menus" :key="menu.groupName">
    <SidebarGroupLabel>{{ menu.groupName }}</SidebarGroupLabel>
    <SidebarMenu>
      <Collapsible
        v-for="items in menu.menu"
        :key="items.title"
        as-child
        :default-open="items.isActive"
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
            <AnimatePresence>
              <motion.div
                :key="items.title"
                :initial="{ height: 0, opacity: 0, transform: 'translateZ(0)' }"
                :animate="{
                  height: 'auto',
                  opacity: 1
                }"
                :exit="{ height: 0, opacity: 0 }"
              >
                <SidebarMenuSub>
                  <SidebarMenuSubItem
                    v-for="subItem in items.items"
                    :key="subItem.title"
                  >
                    <SidebarMenuSubButton as-child>
                      <router-link
                        :to="subItem.url"
                        class="hover:scale-105 hover:origin-center transition-transform duration-200 ease-linear"
                      >
                        <span>{{ subItem.title }}</span>
                      </router-link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </motion.div>
            </AnimatePresence>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  </SidebarGroup>
</template>
