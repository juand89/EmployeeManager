<template>
  <div id="TheInput">
    <div class="text-sm font-bold text-gray-700 tracking-wide">
      {{ label }}
    </div>
    <input
      class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('input', $event.target.value.trim())"
      @blur="onBlur($event.target.value.trim())"
    />
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
  },
  methods: {
    onBlur(event) {
      this.$emit('blur', event)
    },
  },
}
</script>
