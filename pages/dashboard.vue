<template>
  <div>
  <Main/>
  <div class="flex gap-[20px] w-full">
  <BarChart :title="'RESSORTISSANTS ENREGISTRÉS PAR RÉGION'" :data="data1" :showNumbers="true"/>
  <BarChart :title="'RESSORTISSANTS ENREGISTRÉS PAR CATÉGORIE'" :data="data2" :showNumbers="false"/>
  </div>
</div>
</template>

<script setup>

import Main from '~/components/StatisticCards/Main.vue';
import BarChart from '~/components/Charts/BarChart.vue';
const data1=[{name:"Adamoua",number:"4,777"},{name:"Centre",number:"9,305"},{name:"Est",number:"7,242"},{name:"Extrême-Nord",number:"6,815"},{name:"Littoral",number:"5,116"},{name:"Nord",number:"8,993"},{name:"Nord-Ouest",number:"4,158"},{name:"Ouest",number:"1,413"}]
const data2=[{name:"Agriculteurs",number:"4,777"},{name:"Pêcheurs",number:"7,305"},{name:"Eleveurs",number:"9,305"},{name:"Exploitants Forestiers",number:"1,413"}]
const router = useRouter();
function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`));

  return cookieValue ? cookieValue.split('=')[1] : null;
}
onMounted(async () => {
  const token=getCookie("jwt")
  if (!token){
    router.push("/login")
  }
})
</script>

<style>

</style>