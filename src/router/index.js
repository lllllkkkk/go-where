import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Info from '../views/info/info.vue';

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

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    // 始终滚动到顶部
    return { x: 0, y: 0 };
  },
});

export default router;
