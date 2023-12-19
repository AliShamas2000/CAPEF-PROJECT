<template>
  <div class="form-group1 flex flex-col gap-1">
    <label :for="inputId">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :type="type"
        :id="inputId"
        :placeholder="placeholder"
        :class="inputClasses"
        v-model="inputValue"
      />
      <svg class="search-input" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#339960" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
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
      default: 'file',
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

.search-input {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
 
}
input{
  background-color: #f8f8f8 !important;
 
}

input::placeholder {
  padding-left:5px;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0px;
    color: #000000;
    text-transform: capitalize;
    opacity: 0.3 !important;
  }
</style>
