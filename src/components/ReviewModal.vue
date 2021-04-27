<template>
  <BaseModal @close="$emit('closeModal')">
    <div
      class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl"
    >
      <!-- header section --->
      <div
        class="flex flex-row justify-between p-5 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
      >
        <p class="font-semibold text-gray-800">{{ `${this.employee.firstName} ${this.employee.lastName}` }}</p>
        <svg
          @click="$emit('closeModal')"
          class="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <!-- comment section -->
      <div class="flex flex-col px-6 py-5 bg-gray-50" :class="{'rounded-b-lg': employee.review}">
        <p class="mb-2 font-semibold text-gray-700">Your review</p>
        <textarea
          v-if="!employee.review"
          type="text"
          name="review"
          v-model="review"
          placeholder="Type review..."
          class="p-5 mb-5 focus:border-blue-500 bg-white border border-gray-200 rounded shadow-sm h-36"
          id="review"
        ></textarea>
        <p v-else class="p-4 m-6 font-semibold bg-blue-100 border rounded-lg">{{employee.review}}</p>
      </div>
      <!-- submit revieww -->
      <div
        class="flex flex-row-reverse p-4 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        v-if="!employee.review"
      >
        <button
          class="px-4 py-2 text-gray-700 font-medium bg-white border border-gray-400 rounded hover:bg-gray-100"
          @click="submitReview"
        >
          Submit
        </button>
      </div>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue'
import { employeesCollection, firestoreTime } from '../../plugins/firebase.js'
export default {
  components: {
    BaseModal,
  },
  props: {
    employee: {
      type: Object,
      default: function() {
        return { firstName: '', lastName: ''}
      },
    },
    userId: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return { 
      review: '',
    }
  },
  methods: {
    submitReview() {
      employeesCollection.doc(this.userId).collection('reviews').doc(this.employee.id).update({
        review: this.review,
        updatedAt: firestoreTime,
        status: 'completed'
      }).then(() => {
        this.$emit('closeModal')
        this.$emit('updateStatus', this.employee, this.review)
      }).catch((error) => {
        console.error(error)
        alert(error)
      })
    }
  }
}
</script>

<style scoped>
textarea:focus {
  outline: none !important;
  border-color: #9c9c9c;
  box-shadow: 0 0 10px #9c9c9c;
}
</style>
