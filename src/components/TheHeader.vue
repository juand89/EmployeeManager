<template>
  <header class="bg-green-400 border-b">
    <div class="flex justify-around w-full bg-teal p-4">
      <span class="font-semibold text-xl tracking-tight text-white">
        Employees Review
      </span>
      <div class="flex-grow flex-row-reverse  flex">
          <button
            class="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white "
            @click="logout"
          >
            Log Out
          </button>
      </div>
    </div>
  </header>
</template>
<script>
import { auth } from '../../plugins/firebase.js'
export default {
  name: 'TheHeader',
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push('login')
      }).catch((error) => {
        console.log(error);
        alert(error);
      });
    }
  }
}
</script>