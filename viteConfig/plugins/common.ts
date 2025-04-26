import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint2';
import tailwindcss from '@tailwindcss/vite';

export default function setupCommonPlugins() {
  return [
    vue(),
    eslint({ lintOnStart: true, cache: false, fix: true }),
    tailwindcss()
  ];
}
