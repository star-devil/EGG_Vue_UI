import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import eslint from 'vite-plugin-eslint2';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import tailwindcss from '@tailwindcss/vite';

export default function setupCommonPlugins() {
  return [
    vue(),
    eslint({ lintOnStart: true, cache: false, fix: true }),
    Components({
      // 配置type文件生成位置
      dts: 'types/components.d.ts',
      dirs: ['src/**/components', 'src/layout/**'],
      extensions: ['vue', 'tsx', 'jsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
      deep: true, // 搜索子目录
      resolvers: [PrimeVueResolver()]
    }),
    tailwindcss()
  ];
}
