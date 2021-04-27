<template>
  <BaseModal @close="$emit('closeModal')">
    <!-- title section -->
    <div
      class="max-w-xs md:max-w-md  p-5 py-7 bg-white border-b border-gray-200 rounded-lg"
    >
      <div class="text-center font-semibold text-gray-700 mb-8">
        Do you really want to delete these employee? This process cannot be
        undone.
      </div>
      <!-- button section -->
      <div class="flex justify-center">
        <button
          @click="$emit('closeModal')"
          class="bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2
        focus:outline-none font-semibold mx-1"
        >
          Cancel
        </button>
        <button
          class="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none font-semibold mx-1"
          @click="$emit('onDelete')"
        >
          Delete
        </button>
      </div>
    </div>
  </BaseModal>
</template>
<script>
import BaseModal from '@/components/BaseModal.vue'

export default {
  components: {
    BaseModal,
  },
}
</script>
