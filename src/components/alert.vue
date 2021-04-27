<template>
  <div class="alert-banner w-full fixed top-16">
    <input type="checkbox" class="hidden" id="banneralert" />

    <label
      class="close cursor-pointer flex items-center justify-between w-full p-2 shadow text-white text-center"
      :class="error? 'bg-red-500': 'bg-green-600'"
      title="close"
      for="banneralert"
    >
      show message
      <svg
        class="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path
          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
        ></path>
      </svg>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.alert-banner {
		-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
				animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
</style>