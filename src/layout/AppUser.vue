<template>
  <div class="end-wrap">
    <Divider />
    <div
      class="overflow-hidden w-full border-0 flex items-center cursor-pointer"
      @click="toggleUserMenu"
    >
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        class="mr-2"
        shape="circle"
      />
      <span class="inline-flex flex-row items-center">
        <span class="font-bold">Amy Elsner</span>
        <Tag value="Admin" severity="info" class="text-sm ml-2"></Tag>
      </span>
    </div>
    <TieredMenu ref="menu" :model="userMenuItems" popup />
  </div>
</template>

<script lang="ts" setup>
const menu = ref();
const userMenuItems = ref([
  {
    label: 'Profile',
    icon: 'pi pi-user'
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog'
  },
  {
    label: 'Logout',
    icon: 'pi pi-sign-out'
  },
  {
    separator: true
  },
  {
    label: 'Collapse',
    icon: 'pi pi-angle-double-left',
    command: () => {
      collapseMenu();
    }
  }
]);

const toggleUserMenu = (event: Event) => {
  menu.value.toggle(event);
};

const collapseMenu = () => {
  menu.value.hide();
};
</script>
