import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import router from './router'
import './index.css'

Vue.config.productionTip = false
Vue.use(firestorePlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
