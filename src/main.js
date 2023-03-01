/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import fastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
