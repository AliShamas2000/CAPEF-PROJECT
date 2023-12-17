<template>
    <button :id="buttonId" :class="buttonClasses" @click="handleClick">
      {{ buttonText }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      buttonId: {
        type: String,
        default: '',
      },
      buttonClasses: {
        type: String,
        default: '',
      },
      buttonText: {
        type: String,
        default: '',
      },
    },
    methods: {
      handleClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  