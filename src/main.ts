import { createApp } from 'vue';
import App from './App.vue';
import './scss/tailwind.css';
import './scss/style.scss';
import pinia from './stores';
import router from './router/ index';
// 滚动条
import Simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

const app = createApp(App);

app.component('SimpleBar', Simplebar);

app.use(pinia).use(router).mount('#app');
