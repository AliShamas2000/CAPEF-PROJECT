<template>
  <div class="bg-[#FFFFFF] rounded-[8px] shadow-md p-[20px] w-full flex flex-col gap-[59px]">
    <div class="chart-title">{{ props?.title }}</div>
    <client-only>
      <ApexCharts
        v-if="ApexCharts"
        :options="options"
        :series="series"
        type="bar"
        height="350"
        class=""
      />
    </client-only>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";
const props = defineProps(["data", "title", "showNumbers"]);
const ApexCharts = ref(null);

onMounted(async () => {
  if (process.browser) {
    const module = await import("vue3-apexcharts");
    ApexCharts.value = module.default;
  }
});

// Convert string numbers to integers
const processedData = props.data.map(item => ({
  name: item.name,
  number: parseInt(item.number.replace(/,/g, ""), 10),
}));

const options = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
      distributed: true,
      borderRadius: 10,
      borderRadiusApplication: "end",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: processedData.map(value => value.name),
  },
  yaxis: {
    max: Math.max(...processedData.map(item => item.number)) + 1000,
  },
  grid: {
    show: false,
  },
  annotations: {
    points: props.showNumbers
      ? processedData.map(value => ({
          x: value.name,
          y: value.number,
          marker: {
            size: 0,
          },
          label: {
            text: value.number.toString(),
            position: "center",
            offsetY: -10,
            style: {
              fontSize: "12px",
              borderColor: "transparent",
              fontFamily: "var(--primary-font-family)",
              fontWeight: "bold",
            },
          },
        }))
      : [],
  },
};

const series = ref([
  {
    data: processedData.map(item => item.number),
  },
]);
</script>

<style></style>
