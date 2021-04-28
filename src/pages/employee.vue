<template>
  <div
    id="employee"
    class="bg-gray-100 h-screen overflow-y-hidden px-4 md:px-10 py-10"
  >
    <!-- modal section -->
    <SelectEmployeesModal
      :employees="employees"
      @selectEmployee="selectEmployee"
      v-if="showSelectEmployees"
      @closeModal="showSelectEmployees = !showSelectEmployees"
    />
    <EmployeeInputModal
      v-if="showRegisterEmployees"
      :employeeEdit="employee"
      :isEdit="true"
      @closeModal="showRegisterEmployees = !showRegisterEmployees"
      @updateEmployee="getEmployee"
    />
    <DeleteModal
      v-if="showDeleteModal"
      @onDelete="deleteEmployee"
      @closeModal="showDeleteModal = !showDeleteModal"
    />
    <!-- delete button section -->
    <div
      class="flex flex-row-reverse border-b-2 justify-between w-full bg-teal items-center pb-5"
    >
      <button
        class="bg-red-400 text-gray-100 p-3 rounded-full tracking-wide py-2
              font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-600
              shadow-lg text-sm sm:text-base"
        @click="showDeleteModal = !showDeleteModal"
      >
        Remove Employee
      </button>
    </div>
    <!-- employee information section -->
    <div class="bg-white p-3 shadow-sm rounded-sm">
      <div
        class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
      >
        <span class="text-gray-500">
          <svg
            class="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>
        <span class="tracking-wide text-sm md:text-base">
          Employee Information
        </span>
        <div class="flex-grow flex-row-reverse flex">
          <button
            class="flex items-center text-gray-500 space-x-2 border border-gray-400 px-2 py-1 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
            @click="showRegisterEmployees = !showRegisterEmployees"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"
              />
            </svg>
            <span class="uppercase md:text-sm text-xs  font-semibold ">
              Edit
            </span>
          </button>
        </div>
      </div>
      <div class="text-gray-700">
        <div class="grid md:grid-cols-2 text-sm">
          <div class="grid grid-cols-2">
            <div class="px-2 sm:px-4 py-2 font-semibold">First Name</div>
            <div class="px-2 sm:px-4 py-2">{{ employee.firstName }}</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-2 sm:px-4 py-2 font-semibold">Last Name</div>
            <div class="px-2 sm:px-4 py-2">{{ employee.lastName }}</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-2 sm:px-4 py-2 font-semibold">Position</div>
            <div class="px-2 sm:px-4 py-2">{{ employee.position }}</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-2 sm:px-4 py-2 font-semibold">Email</div>
            <div class="px-2 sm:px-4 py-2">
              {{ employee.email }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Employees Reviews Section -->
    <div class="bg-white p-3 shadow-sm rounded-sm mt-8">
      <div
        class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
      >
        <span>
          <svg
            class="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </span>
        <span class="tracking-wide w-1/6">Reviews</span>
        <div class="flex-grow flex-row-reverse flex">
          <button
            class="flex items-center text-gray-500 space-x-2 border border-gray-400 px-2 py-1 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
            @click="showSelectEmployees = !showSelectEmployees"
          >
            <span class="text-green-500">
              <svg
                class="h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span class="uppercase md:text-sm text-xs font-semibold">
              Select Employees
            </span>
          </button>
        </div>
      </div>
      <!-- Reviews List -->
      <div v-if="!reviewers.length">
        <span class="font-bold">
          This employee has no reviewers assigned yet.
        </span>
      </div>
      <div v-for="reviewer in reviewers" :key="reviewer.reviewerId">
        <div class="flex items-start mb-4 text-sm border-b-2 pb-4">
          <p
            class="flex items-center justify-center w-10 h-10 mr-4 bg-gray-400 rounded-full"
          >
            <span class="text-sm font-bold text-white">
              {{ getInitials(reviewer.firstName, reviewer.lastName) }}
            </span>
          </p>
          <div class="flex-1 overflow-hidden">
            <div>
              <span class="font-bold">
                {{ `${reviewer.firstName} ${reviewer.lastName}` }}
              </span>
              <span class="text-grey text-xs">
                {{ getDate(reviewer.updatedAt) }}
              </span>
            </div>
            <p class="text-black leading-normal">
              {{
                reviewer.status === 'pending' || reviewer.status === undefined
                  ? 'This review is pending..'
                  : `${reviewer.review}`
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectEmployeesModal from '@/components/SelectEmployeesModal'
import { employeesCollection } from '../../plugins/firebase.js'
import EmployeeInputModal from '@/components/EmployeeInputModal'
import DeleteModal from '@/components/DeleteModal'
export default {
  components: {
    SelectEmployeesModal,
    EmployeeInputModal,
    DeleteModal,
  },
  data() {
    return {
      showSelectEmployees: false,
      showRegisterEmployees: false,
      showDeleteModal: false,
      employee: {},
      employees: [],
      reviewers: [],
    }
  },
  async mounted() {
    await this.getEmployee()
    await this.fetchEmployees()
  },
  methods: {
    async getEmployee() {
      const id = this.$route.params.id
      const employee = await employeesCollection.doc(id).get()
      this.employee = Object.assign({ id: employee.id }, employee.data())
    },
    getInitials(firstName, lastName) {
      if (firstName && lastName) {
        return (
          firstName
            .trim()
            .substring(0, 1)
            .toUpperCase() +
          lastName
            .trim()
            .substring(0, 1)
            .toUpperCase()
        )
      }
      return 'NA'
    },
    getDate(firebaseDate) {
      if (firebaseDate) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        const date = new Date(firebaseDate.toDate())
        return date.toLocaleDateString(options)
      }
      return ''
    },
    async fetchEmployees() {
      // get employees from firebase
      const employees = await employeesCollection
        .where('createdAt', '<', new Date())
        .orderBy('createdAt', 'desc')
        .get()
      // get reviewers from current user
      await this.fetchReviewers()
      employees.forEach((employee) => {
        if (this.employee.id !== employee.id) {
          let findReviewer = false
          // search if reviewer is assign to the current user
          findReviewer = this.reviewers.find(
            (reviewer) => reviewer.id === employee.id
          )
          const employeeData = Object.assign(
            { id: employee.id, isSelected: findReviewer ? true : false },
            employee.data()
          )
          this.employees.push(employeeData)
        }
      })
    },
    async fetchReviewers() {
      const reviewersCollection = await employeesCollection
        .doc(this.employee.id)
        .collection('reviews')
        .get()
      this.reviewers = []
      if (reviewersCollection.size) {
        reviewersCollection.forEach((reviewer) => {
          const reviewerData = Object.assign(
            { id: reviewer.id },
            reviewer.data()
          )
          this.reviewers.push(reviewerData)
        })
      }
    },
    selectEmployee(employee) {
      if (!employee.isSelected) {
        this.reviewers.push(employee)
      } else {
        this.reviewers = this.reviewers.filter(
          (reviewer) => reviewer.id !== employee.id
        )
      }
      employee.isSelected = !employee.isSelected
    },
    deleteEmployee() {
      this.showDeleteModal = false
      employeesCollection
        .doc(this.employee.id)
        .delete()
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.error(error)
          alert(error)
        })
    },
  },
}
</script>
