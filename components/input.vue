<template>
    <div class="form-group flex flex-col gap-1">
      <label :for="inputId">{{ label }}</label>
      <input
        :type="type"
        :id="inputId"
        :placeholder="placeholder"
        :class="inputClasses"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        default: '',
      },
      inputClasses: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      modelValue: {
        type: [String, Number],
        default: '',
      },
    },
    emits: ['update:modelValue'],
    methods: {
        focus() {
            this.$refs.input.focus()
        },
        select() {
            this.$refs.input.select()
        },
        setSelectionRange(start, end) {
            this.$refs.input.setSelectionRange(start, end)
        },
    },
  };
  </script>
  
  <style scoped>

  .form-group {
    margin-bottom: 15px;
  }
  </style>
  