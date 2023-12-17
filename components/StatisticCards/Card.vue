<template>
  <div
    class="bg-white min-h-[120px] m-[20px] p-[15px] shadow-md rounded-[8px] flex flex-col gap-[15px]"
  >
    <div :style="getTextStyles()">{{ props.data.name }}</div>
    <div :style="getNumberStyles(props.data)" >{{ props.data.number }}</div>
   
  </div>
</template>
  
  <script setup>
import { defineProps, ref, onMounted } from "vue";

const ApexCharts = ref(null);
onMounted(async () => {
  if (process.browser) {
    const module = await import('vue3-apexcharts');
    ApexCharts.value = module.default;
  }
});
const getTextStyles = () => {
  return {
    opacity: "1",
    fontFamily: "var(--primary-font-family)",
    fontSize: "11px",
    color:" #8F9BB3",
    fontWeight:"600",
    fontStyle: "normal",
    fontVariant: "normal",
    lineHeight: "20px",
    width:"70%"
  };
};
const getNumberStyles = (data) => {
  return {
    color: data.color,
    opacity: data.opacity + "%",
    fontFamily: "var(--primary-font-family)",
    fontWeight:"bold",
    fontSize:"20px",
    lineHeight:"24px"

  };
}
const props = defineProps(["data"]);


</script>
  
  <style>
</style>
  