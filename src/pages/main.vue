<template>
  <div id="main" class="bg-gray-100 h-screen overflow-y-hidden">
    <!-- modal section -->
    <ReviewModal
      v-if="showReviewModal"
      :employee="employee"
      @closeModal="showReviewModal = !showReviewModal"
      :userId="user.uid"
      @updateStatus="updateStatus"
    />
    <EmployeeInputModal
      @closeModal="showCreateModal = !showCreateModal"
      @fetchEmployees="fetchEmployees"
      v-if="showCreateModal"
    />
    <!-- Sub header section -->
    <div
      class="container flex border-b-2 justify-between w-full bg-teal sm:px-10 px-2 py-10 items-center pb-5"
    >
      <span class="mb-2 font-semibold text-gray-700 text-xl">
        Employees
      </span>
      <button
        v-if="isAdmin"
        class="bg-blue-500 text-gray-100 p-3 rounded-full tracking-wide py-2
              font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
              shadow-lg text-sm sm:text-base"
        @click="showCreateModal = !showCreateModal"
      >
        Add Employee
      </button>
    </div>
    <!-- Employee list section -->
    <div
      class="container py-2 md:px-5 grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl h-fit-screen overflow-y-scroll sm:overflow-y-auto sm:h-auto"
    >
      <div v-for="employee in employees" :key="employee.id">
        <EmployeeCard
          :employee="employee"
          :isAdmin="isAdmin"
          @handleButton="onEmployeeButton(employee)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import EmployeeCard from '@/components/EmployeeCard.vue'
import ReviewModal from '@/components/ReviewModal.vue'
import EmployeeInputModal from '@/components/EmployeeInputModal.vue'
import { employeesCollection, firebase } from '../../plugins/firebase.js'
export default {
  components: {
    EmployeeCard,
    ReviewModal,
    EmployeeInputModal,
  },
  data() {
    return {
      employees: [],
      employeeReview: {},
      showCreateModal: false,
      showReviewModal: false,
      isAdmin: false,
      snapshot: null,
      user: {},
    }
  },
  created() {
    this.checkAdmin()
  },
  methods: {
    async checkAdmin() {
      const user = await firebase.getCurrentUser()
      this.user = user
      const employee = await employeesCollection.doc(user.uid).get()
      // if employee is not in the employeesCollection is an Admin
      this.isAdmin = !employee.exists
      if (this.isAdmin) {
        this.fetchEmployees()
      } else {
        this.fetchReviewers(user.uid)
      }
    },
    async fetchEmployees() {
      this.employees = []
      const employees = await employeesCollection
        .where('createdAt', '<', new Date())
        .orderBy('createdAt', 'desc')
        .get()
      employees.forEach((employee) => {
        // assign the document id to the employee
        const employeeData = Object.assign({ id: employee.id }, employee.data())
        this.employees.push(employeeData)
      })
    },
    addEmployee(employee) {
      this.employees.unshift(employee)
    },
    async fetchReviewers(uid) {
      // get reviewers from current user
      const reviewersCollection = await employeesCollection
        .doc(uid)
        .collection('reviews')
        .get()
      const reviewers = []
      if (reviewersCollection.size) {
        reviewersCollection.forEach((reviewer) => {
          const documentData = Object.assign(
            { id: reviewer.id },
            reviewer.data()
          )
          reviewers.push(documentData)
        })
      }
      this.employees = reviewers
    },
    onEmployeeButton(employee) {
      if (this.isAdmin) {
        this.$router.push({ name: 'employee', params: { id: employee.id } })
      } else {
        this.employee = employee
        this.showReviewModal = !this.showReviewModal
      }
    },
    updateStatus(employee, review) {
      employee.status = 'completed'
      employee.review = review
    },
  },
}
</script>
<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
}
</style>
