<template>
    <div class="form-group flex flex-col gap-1">
      <label :for="inputId">{{ label }}</label>
      <input
        :type="type"
        :id="inputId"
        :placeholder="placeholder"
        :class="inputClasses"
        v-model="inputValue"
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
      value: {
        type: [String, Number],
        default: '',
      },
    },
   
  };
  </script>
  
  <style scoped>

  .form-group {
    margin-bottom: 15px;
  }
  </style>
  