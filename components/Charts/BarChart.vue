<template>
    <div class="bg-[#FFFFFF] rounded-[8px] shadow-md p-[20px] w-full">
        <div class="chart-title">{{props.title}}</div>
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
      columnWidth: "45%",
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
    categories: props?.data?.map((value, index) => `${value.name}`),
  },
  grid: {
    show: false,
  },
  annotations: {
    points: props.showNumbers
      ? props?.data?.map((value, index) => ({
          x: `${value.name}`,
          y: value.number,
          marker: {
            size: 0,
          },
          label: {
            text: value.number.toString(),
            position: "top",
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
    name: "Example Series",
    data: props?.data?.map((item) => item.number),
  },
]);
</script>
  
  <style>

  #SvgjsG1088 rect {
    display: none !important;
  }
</style>
  