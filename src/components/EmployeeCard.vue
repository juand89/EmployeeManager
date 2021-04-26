<template>
  <div class="h-fit  bg-white rounded-lg overflow-hidden shadow-md mr-10 mb-5 ">
    <!-- Employee -->
    <div class="p-7 bg-blue-100">
      <div class="flex items-center mt-2">
        <p
          class="flex items-center justify-center w-14 h-14 mr-4 bg-blue-500 rounded-full"
        >
          <span class="text-sm font-bold text-white">{{ showInitials }}</span>
        </p>
        <div>
          <h2 class="font-bold">
            {{ `${employee.firstName} ${employee.lastName}` }}
          </h2>
          <p class="text-gray-600">{{ employee.position }}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-baseline justify-between p-7">
      <p v-if="!isAdmin" class="pl-2 text-sm text-right">Requested On: {{ formatDate }}</p>
      <p v-else class="pl-2 text-sm text-right">Started On: {{ formatDate }}</p>
      <button
        class="px-2.5 ml-10 py-1  font-bold text-center text-white bg-green-400 hover:bg-green-600 rounded-full"
        @click="$emit('handleButton')"
      >
        {{
          isAdmin
            ? 'Employee Detail'
            : employee.review 
            ? 'Show review'
            : 'Submit a review'
        }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    employee: {
      type: Object,
      default: function() {
        return {
          id: '',
          firstName: '',
          lastName: '',
          position: '',
          review: ''
        }
      },
    },
    date: {
      type: String,
      default: '',
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showInitials() {
      if (this.employee.firstName && this.employee.lastName) {
        return this.employee.firstName.trim().substring(0, 1).toUpperCase() + this.employee.lastName.trim().substring(0, 1).toUpperCase();
      }
      return 'NA'
    },
    formatDate() {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      const date = new Date(this.employee.createdAt.toDate())
      return date.toLocaleDateString(options)
    }
  },
}
</script>
