import { CSSOptions } from 'vite';
import autoprefixer from 'autoprefixer';

export default function (): CSSOptions {
  const preprocessorOptions = {
    scss: {
      api: 'modern-compiler'
    }
  };
  const postcss = {
    plugins: [
      autoprefixer({
        grid: true
      })
    ]
  };
  return { preprocessorOptions, postcss };
}
