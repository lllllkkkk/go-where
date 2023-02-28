import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Info from '../views/info/info.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Info/:id',
    name: 'Info',
    component: Info,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    // 始终滚动到顶部
    return { x: 0, y: 0 };
  },
});

export default router;
