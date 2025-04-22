<template>
  <AnimatePresence :initial="false">
    <motion.div
      v-show="menuStore.isCollapsed"
      key="sidebar"
      class="layout-sidebar"
      :initial="{
        opacity: 0,
        scale: 0,
        x: '-100%'
      }"
      :animate="{
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }"
      :exit="{
        opacity: 0,
        scale: 0,
        x: '-100%',
        transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
        transformOrigin: 'left bottom'
      }"
    >
      <AppLogo />
      <AppMenu />
      <AppUser />
    </motion.div>
  </AnimatePresence>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();
</script>
