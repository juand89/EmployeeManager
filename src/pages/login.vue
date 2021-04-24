<template>
  <div id="main" class="h-screen bg-gray-50">
    <div class="flex flex-col justify-center items-center w-full h-7/1">
      <h2
        class="text-center text-4xl text-blue-500 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold sm:mb-24 mb-20"
      >
        Employee Login
      </h2>
      <div>
        <form class="flex flex-col justify-center space-y-5 mt-5 bg-white w-96 shadow-xl rounded p-5">
          <div>
            <TheInput
              label="Email"
              v-model="email"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div class="mt-8">
            <div>
              <TheInput
                label="Password"
                v-model="password"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div class="mt-10">
            <button
              class="bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
                    shadow-lg"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import TheInput from '@/components/TheInput.vue'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  components: {
    TheInput,
  },
}
</script>
