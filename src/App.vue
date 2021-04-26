<template>
  <div id="app">
    <TheHeader v-if="showHeader" />
    <router-view />
  </div>
</template>

<script>
import { firebase } from '../plugins/firebase.js'
import TheHeader from '@/components/TheHeader.vue'
export default {
  name: 'App',
  components: { 
    TheHeader
  },
  data() {
    return {
      showHeader: false,
    }
  },
  async mounted() {
     if (await firebase.getCurrentUser()) {
       this.showHeader = true;
     }
  },
  watch: {
    '$route.path' (newVal) {
      this.showHeader = newVal !== '/login'
    }
  },
}
</script>
