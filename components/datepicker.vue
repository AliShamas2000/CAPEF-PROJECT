<template>
    <div class="form-group flex flex-col gap-1">
      <label :for="inputId">{{ label }}</label>
      <div class="input-wrapper">
        <input
          :type="type"
          :id="inputId"
          :placeholder="placeholder"
          :class="inputClasses"
          v-model="inputValue"
          onfocus="(this.type='date')"
        />
        <svg class="datepicker-icon " xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#339966" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
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
        default: 'date',
      },
      value: {
        type: [String, Number],
        default: '',
      },
    },
    data() {
      return {
        inputValue: this.value,
      };
    },
  };
  </script>
  
  <style scoped>
  .input-wrapper {
    position: relative;
  }
  
  .datepicker-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
   
  }
  </style>
  