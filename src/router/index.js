import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../pages/login.vue';
import main from '../pages/main.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: main,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  }
]

const router = new VueRouter({
  routes,
})
export default router;