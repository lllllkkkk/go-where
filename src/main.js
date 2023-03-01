/* eslint-disable import/no-unresolved */
import { createApp } from 'vue';
import fastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';

fastClick.attach(document.body);

createApp(App).use(router).use(store).mount('#app');
