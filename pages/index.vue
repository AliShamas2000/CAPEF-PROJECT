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
        <TypeInput label="&nbsp;STATUT" inputId="" :input-classes="customInputClasses" :value="a" :options="a"
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

import Date from "@/components/datepicker.vue";

const data1 = [{ name: "Adamoua", number: "4,777" }, { name: "Centre", number: "9,305" }, { name: "Est", number: "7,242" }, { name: "Extrême-Nord", number: "6,815" }, { name: "Littoral", number: "5,116" }, { name: "Nord", number: "8,993" }, { name: "Nord-Ouest", number: "4,158" }, { name: "Ouest", number: "1,413" }]
const data2 = [{ name: "Agriculteurs", number: "4,777" }, { name: "Pêcheurs", number: "7,305" }, { name: "Eleveurs", number: "9,305" }, { name: "Exploitants Forestiers", number: "1,413" }]

const activeTab = ref(1);

const customInputClasses = 'normal-input';

const changeTab = (tabNumber) => {
  activeTab.value = tabNumber;
};

defineProps(['activeTab']);
defineEmits(['changeTab']);
</script>

<style lang="scss" scoped></style>
