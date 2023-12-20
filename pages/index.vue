<template>
 <div class="pl-5 pt-3">
    <div class="members-title">Tableau De Bord</div>

    <Tabs :activeTab="activeTab" @changeTab="changeTab" />


    <div class="flex gap-4 pb-5">
      <div class="flex-1">
        <Date label="&nbsp;PRÉNOM" placeholder="DATE DE NAISSANCE" :input-classes="customInputClasses" v-model="aa"
          :modelValue="aa" />
      </div>
      <div class="flex-1">
        <Date label="&nbsp;PRÉNOM" placeholder="DATE DE NAISSANCE" :input-classes="customInputClasses" v-model="aa"
          :modelValue="aa" />
      </div>
      <div class="flex-1">
        <TypeInput label="&nbsp;STATUT" inputId="" :input-classes="customInputClasses" :modelValue="a" :options="a"
          placeholder="&nbsp;&nbsp;— Choisir —" />
      </div>
      <div class="flex-1">
        <br>
        <Button buttonText="&nbsp;RECHERCHER" buttonClasses="btn-filter" />

      </div>
      <div class="flex-1">
      </div>
    </div>


    <div v-if="activeTab === 1">
      <div>
        <Main />
        <div class="flex gap-[20px] w-full">
          <BarChart :title="'RESSORTISSANTS ENREGISTRÉS PAR RÉGION'" :data="data1" :showNumbers="true" />
          <BarChart :title="'RESSORTISSANTS ENREGISTRÉS PAR CATÉGORIE'" :data="data2" :showNumbers="false" />
        </div>
      </div>
    </div>

    <div v-if="activeTab === 2">
      <div>
        <Main />
        <div class="flex gap-[20px] w-full">
          <BarChart :title="'RESSORTISSANTS ENREGISTRÉS PAR RÉGION'" :data="data1" :showNumbers="true" />
          <BarChart :title="'RESSORTISSANTS ENREGISTRÉS PAR CATÉGORIE'" :data="data2" :showNumbers="false" />
        </div>
      </div>
    </div>

    <div v-if="activeTab === 3">
      <div>
        <Main />
        <div class="flex gap-[20px] w-full">
          <BarChart :title="'RESSORTISSANTS ENREGISTRÉS PAR RÉGION'" :data="data1" :showNumbers="true" />
          <BarChart :title="'RESSORTISSANTS ENREGISTRÉS PAR CATÉGORIE'" :data="data2" :showNumbers="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tabs from '~/components/tabs.vue';
import Main from '~/components/StatisticCards/Main.vue';
import BarChart from '~/components/Charts/BarChart.vue';
import TypeInput from "@/components/selectInput.vue";
import Button from "@/components/button.vue";
import { filterDashboard } from "~/server/filterDashboard";
// import { getFilterAgents } from "~/server/getFilterAgents";
import { ref, onMounted } from 'vue';
import Date from "@/components/datepicker.vue";

const data1 = [{ name: "Adamoua", qty: "4,777" }, { name: "Centre", qty: "9,305" }, { name: "Est", qty: "7,242" }, { name: "Extrême-Nord", number: "6,815" }, { name: "Littoral", qty: "5,116" }, { name: "Nord", qty: "8,993" }, { name: "Nord-Ouest", qty: "4,158" }, { name: "Ouest", qty: "1,413" }]
const data2 = [{ name: "Agriculteurs", qty: "4,777" }, { name: "Pêcheurs", qty: "7,305" }, { name: "Eleveurs", qty: "9,305" }, { name: "Exploitants Forestiers", qty: "1,413" }]

const activeTab = ref(1);

const customInputClasses = 'normal-input';

const changeTab = (tabNumber) => {
  activeTab.value = tabNumber;
};

defineProps(['activeTab']);
defineEmits(['changeTab']);

const dataRegion=ref(null)
const dataCategory=ref(null)
const filtersData=ref(null)
const membertypeid=ref(null)
const fromDate=ref(null)
const toDate=ref(null)
const statusid=ref(null)
function filterDashboardData(){
  filterDashboard(membertypeid.value,fromDate.value,toDate.value,statusid.value)
    .then((response) => {
         dataRegion.value=response.membersbyregions
         dataCategory.value=response.membersbycategories
         console.log(dataRegion)
    })
    .catch((error) => {
      console.error("fetch failed:", error);
    });
}
onMounted(()=>{
   
  filterDashboardData()
    // getFilterAgents()
    // .then((response) => {
    //     filtersData.value=response
    // })
    // .catch((error) => {
    //   console.error("fetch failed:", error);
    // });
})
</script>

<style lang="scss" scoped></style>
