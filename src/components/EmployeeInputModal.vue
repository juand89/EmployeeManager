<template>
  <BaseModal @close="$emit('closeModal')">
    <div class="max-w-xs md:max-w-md">
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
      <form
        class="flex flex-col justify-center space-y-5  bg-white w-96 max-w-xs md:max-w-md shadow-xl p-5"
      >
        <div>
          <TheInput
            label="First Name"
            v-model="employee.firstName"
            type="text"
            name="first name"
            id="fist name"
            placeholder="Enter first name"
          />
        </div>
        <div>
          <TheInput
            label="Last Name"
            v-model="employee.lastName"
            type="text"
            name="last name"
            id="position"
            placeholder="Enter last name"
          />
        </div>
        <div>
          <TheInput
            label="Positon"
            v-model="employee.position"
            type="text"
            name="position"
            id="position"
            placeholder="Enter position of the employee"
          />
        </div>
        <div v-if="!isEdit">
          <TheInput
            label="Email"
            v-model="employee.email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div v-if="!isEdit" class="mt-8">
          <div>
            <TheInput
              label="Password"
              v-model="employee.password"
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
            @click="submitEmployee"
          >
            {{ isEdit ? 'Register Employee' : 'Update Employee' }}
          </button>
        </div>
      </form>
    </div>
  </BaseModal>
</template>
<script>
import BaseModal from '@/components/BaseModal.vue'
import TheInput from '@/components/TheInput.vue'
import {
  auth,
  employeesCollection,
  firestoreTime,
} from '../../plugins/firebase.js'
export default {
  components: {
    BaseModal,
    TheInput,
  },
  data() {
    return {
      employee: {
        firstName: '',
        lastName: '',
        position: '',
        email: '',
        password: '',
      },
    }
  },
  props: {
    employeeEdit: {
      type: Object,
      default: function() {
        return {
          id: '',
          firstName: '',
          lastName: '',
          position: '',
          email: '',
          password: '',
        }
      },
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (this.isEdit) {
      this.employee = JSON.parse(JSON.stringify(this.employeeEdit))
    }
  },
  methods: {
    updateEmployee() {
      employeesCollection.doc(this.employee.id).update({
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        position: this.employee.position,
        updatedAt: firestoreTime,
      })
    },
    submitEmployee() {
      if (this.isEdit) {
        this.updateEmployee()
      } else {
        auth
          .createUserWithEmailAndPassword(
            this.employee.email,
            this.employee.password
          )
          .then((employeeRecord) => {
            employeesCollection.doc(employeeRecord.user.uid).set({
              email: this.employee.email,
              firstName: this.employee.firstName,
              lastName: this.employee.lastName,
              position: this.employee.position,
              createdAt: firestoreTime,
              updatedAt: firestoreTime,
              role: 'employee',
            })
            this.$emit('fetchEmployees')
            this.$emit('closeModal')
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
