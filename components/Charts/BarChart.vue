<template>
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
</template>
  
  <script setup>
import { defineProps, ref, onMounted } from "vue";

const ApexCharts = ref(null);
onMounted(async () => {
  if (process.browser) {
    const module = await import("vue3-apexcharts");
    ApexCharts.value = module.default;
  }
});

const seriesData = [20, 50, 30, 70, 90]; // Replace this with your dynamic data

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
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: seriesData.map((value, index) => `Label ${index + 1}`),
    labels: {
        items: {
      style: {
        fontSize: "13px",
        fontFamily: "var(--primary-font-family)",
        fontWeight: "medium",
        lineHeight: "24px",
      },
    },
}
  },

  grid: {
    show: false,
  },
  annotations: {
    points: seriesData.map((value, index) => ({
      x: `Label ${index + 1}`,
      y: value,
      marker: {
        size: 0,
      },
      label: {
        text: value.toString(),
        position: "top",
        offsetY: -10,
        style: {
          background: "transparent",
          fontSize: "12px",
          borderColor: "transparent",
          fontFamily: "var(--primary-font-family)",
          fontWeight:"bold",
        },
      },
    })),
  },
};

const series = ref([
  {
    name: "Example Series",
    data: seriesData,
  },
]);
</script>
  
  <style>
.apexcharts-yaxis {
  display: none;
}
#SvgjsG1088 rect {
  display: none !important;
}
.apexcharts-text tspan{
    font-size: 13px;
    font-family: var(--primary-font-family) !important;
    font-weight: medium;
    line-height: 24px;
    color: #000000;
}
</style>
  