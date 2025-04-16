import { createApp } from 'vue';
import App from './App.vue';
import './scss/tailwind.css';
import './scss/style.scss';
import pinia from './stores';
import router from './router/ index';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
// 自定义主题
import { definePreset } from '@primeuix/themes';
import myTheme from './scss/theme.json';
// 滚动条
import Simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

const MyPreset = definePreset(Aura, myTheme);

const app = createApp(App);

app.component('SimpleBar', Simplebar);

app
  .use(pinia)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: MyPreset,
      options: {
        darkModeSelector: '.app-style-control',
        cssLayer: {
          name: 'primevue',
          order: 'theme, base, primevue'
        }
      }
    }
  })
  .mount('#app');
