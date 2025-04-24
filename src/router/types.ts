import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    groupName?: string;
    title?: string;
  }
}
