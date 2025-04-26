/**
 * @description: 自动导入组件
 */
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import MotionResolver from 'motion-v/resolver';

export default function setupAutoImportComponents() {
  return Components({
    // 配置type文件生成位置
    dts: 'types/components.d.ts',
    dirs: ['src/**/components', 'src/layout/**'],
    extensions: ['vue', 'tsx', 'jsx'],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    deep: true, // 搜索子目录
    resolvers: [PrimeVueResolver(), MotionResolver()]
  });
}
