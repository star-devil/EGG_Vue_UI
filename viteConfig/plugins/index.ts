import type { PluginOption } from 'vite';
import setupAutoImport from './autoImport';
import setupAutoImportComponents from './autoComponents';
import setupCommonPlugins from './common';
import setupStaticPerf from './staticPerf';

export default function () {
  const plugins: PluginOption[] = [
    ...setupCommonPlugins(),
    setupAutoImport(),
    setupAutoImportComponents(),
    setupStaticPerf()
  ];

  return plugins;
}
