import Vue from 'vue';
import VueApexCharts from 'vue3-apexcharts';

Vue.component('apexchart', VueApexCharts);

Vue.use(VueApexCharts);


export default ({ app }, inject) => {
  inject('apexcharts', VueApexCharts);
};
