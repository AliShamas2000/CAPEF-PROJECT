<template>
    <div class="form-group flex flex-col gap-1">
      <label :for="inputId">{{ label }}</label>
      <div class="input-wrapper">
        <select :id="inputId" :class="inputClasses" v-model="inputValue" style="background-color: #F8F8F8;">
          <option :value="null" disabled selected>{{ placeholder }}</option>
          <option v-for="(option, index) in options" :key="index" :value="option.districtid">
            {{ option.districtname }}
          </option>
        </select>
        <svg
          class="select-input"
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="10"
          viewBox="0 0 320 512"
        >
          <path
            fill="#339966"
            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
          />
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
      inputId: {
        type: String,
        required: true,
      },
      inputClasses: {
        type: String,
        default: '',
      },
      value: {
        type: [String, Number],
        default: null,
      },
      options: {
        type: Array,
        default: () => [],
      },
      placeholder: {
        type: String,
        default: 'Select an option', // Default placeholder text
      },
    },
    data() {
      return {
        inputValue: this.value,
      };
    },
    methods: {
    emitInput() {
      this.$emit('update:modelValue', this.inputValue);
    },
  },
  };
  </script>
  
  <style scoped>
  .input-wrapper {
    position: relative;
  }
  
  .select-input {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  </style>
  