<template>
  <BaseModal>
    <form
      class="flex flex-col justify-center space-y-5 mt-5 bg-white w-96 shadow-xl rounded p-5"
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
      <div>
        <TheInput
          label="Email"
          v-model="employee.email"
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
          @click="registerEmployee"
        >
          Register Employee
        </button>
      </div>
    </form>
  </BaseModal>
</template>
<script>
import BaseModal from '@/components/BaseModal.vue'
import TheInput from '@/components/TheInput.vue'
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
  methods: {
    registerEmployee() {},
  },
}
</script>
