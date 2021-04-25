<template>
  <div id="app">
    <TheHeader v-if="$route.name !== 'login'" />
    <router-view />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'App',
  components: { 
    TheHeader
  }
}
</script>
