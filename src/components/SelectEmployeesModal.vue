<template>
  <BaseModal @close="$emit('closeModal')">
    <div class="max-w-xs md:max-w-md">
      <!-- header section --->
      <div
        class="flex flex-row-reverse justify-between p-5 py-3 bg-white border-b border-gray-200 "
      >
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
      <!-- employee selection section --->
      <div
        class="flex flex-col justify-center space-y-5 bg-white w-96 shadow-xl p-5 max-w-xs md:max-w-md"
      >
        <TheInput
          label="Search Employee"
          v-model="employeeName"
          type="text"
          name="search"
          id="serach_employee"
          placeholder="Enter employee name"
        />
        <!-- employee list section --->
        <div class="shadow  bg-white rounded overflow-y-auto">
          <div class="flex flex-col h-72 w-full">
            <div
              v-for="employee in employees"
              :key="employee.id"
              class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-green-100"
            >
              <div
                class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative"
                :class="employee.isSelected && 'border-green-600 border-l-2'"
                @click="assignReviewer(employee)"
              >
                <div class="w-full items-center flex">
                  <div class="mx-2 leading-6  ">
                    {{ `${employee.firstName} ${employee.lastName}` }}
                  </div>
                </div>
              </div>
            </div>
            <div
              class="cursor-pointer w-full border-gray-100 border-b hover:bg-green-100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
<script>
import BaseModal from '@/components/BaseModal.vue'
import TheInput from '@/components/TheInput.vue'
import { employeesCollection, firestoreTime } from '../../plugins/firebase.js'

export default {
  components: {
    BaseModal,
    TheInput,
  },
  data() {
    return {
      employeeName: '',
      employeeId: this.$route.params.id,
    }
  },
  props: {
    employees: { type: Array, default: () => [],
      required: true}

  },
  methods: {
    checkEmployee(employee) {
      employee.isSelected = !employee.isSelected
    },
    assignReviewer(employee) {
      if (employee.isSelected) {
        employeesCollection
          .doc(this.employeeId)
          .collection('reviews')
          .doc(employee.id)
          .delete()
          .then(() => {
            this.$emit('selectEmployee', employee)
          })
          .catch((error) => {
            alert(error)
            console.error(error)
          })
      } else {
        employeesCollection
          .doc(this.employeeId)
          .collection('reviews')
          .doc(employee.id)
          .set({
            review: '',
            firstName: employee.firstName,
            lastName: employee.lastName,
            position: employee.position,
            updatedAt: firestoreTime,
            createdAt: firestoreTime,
            status: 'pending',
            reviewerId: employee.id,
          })
          .then(() => {
            this.$emit('selectEmployee', employee)
          })
          .catch((error) => {
            alert(error)
            console.error(error)
          })
      }
    },
  },
}
</script>
