import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../pages/login.vue'
import main from '../pages/main.vue'
import firebase from '../../plugins/firebase.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: main,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
]
const router = new VueRouter({
  routes,
})
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
     if (await firebase.getCurrentUser()) {
       next();
     } else {
       next({
         path: '/login',
       });
     }
   } else {
     if (await firebase.getCurrentUser() && to.name === 'login') {
       next({
         path: '/'
       });
     } else {
       next();
     }
   }
})
export default router;
