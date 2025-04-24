<script setup lang="ts">
import { useBreadcrumb } from '../../composables/useBreadcrumb';

const { breadcrumbs } = useBreadcrumb();
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <BreadcrumbItem>
          <template v-if="item.url">
            <BreadcrumbLink :href="item.url">{{ item.title }}</BreadcrumbLink>
          </template>
          <template v-else>
            <BreadcrumbPage>{{ item.title }}</BreadcrumbPage>
          </template>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index < breadcrumbs.length - 1" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
