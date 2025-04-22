<template>
  <div class="tabs-chrome">
    <Tabs value="/dashboard" scrollable>
      <TabList>
        <Tab
          v-for="tab in items"
          :key="tab.label"
          :value="tab.route"
          class="tabs-chrome-item"
        >
          <router-link
            v-if="tab.route"
            v-slot="{ href, navigate }"
            :to="tab.route"
            custom
          >
            <a
              v-ripple
              :href="href"
              class="flex items-center gap-2 text-inherit"
              @click="navigate"
            >
              <i :class="tab.icon" />
              <span>{{ tab.label }}</span>
            </a>
          </router-link>
        </Tab>
      </TabList>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  { route: '/dashboard', label: 'Dashboard', icon: 'pi pi-home' },
  { route: '/transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
  { route: '/products', label: 'Products', icon: 'pi pi-list' },
  { route: '/messages', label: 'Messages', icon: 'pi pi-inbox' }
]);
</script>
