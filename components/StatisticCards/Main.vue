<template>
  <div class="flex flex-wrap">
    <div
      v-for="(data, index) in dataCards"
      :key="index"
    >
      <Card :data="data" />
    </div>
  </div>
</template>
  
  <script setup>
import Card from "./Card.vue";

const dataCards = [
  {
    name: "TOTAL RESSORTISSANTS ENREGISTRÉS",
    number: "47,819",
    color: "#000000",
    opacity: 100,
  },
  {
    name: "RESSORTISSANTS INCOMPLET",
    number: "6,626",
    color: "#F0C300",
    opacity: 100,
  },
  {
    name: "RESSORTISSANTS EN ATTENTE",
    number: "6,626",
    color: "#9FCE63",
    opacity: 100,
  },
  {
    name: "RESSORTISSANTS VALIDÉS",
    number: "40,000",
    color: "#339966",
    opacity: 100,
  },
  {
    name: "RESSORTISSANTS DÉSACTIVÉS",
    number: "841",
    color: "#000000",
    opacity: 50,
  },
  {
    name: "RESSORTISSANTS BLOQUÉS",
    number: "352",
    color: "#F00000",
    opacity: 100,
  },
];
</script>
  
  <style>
</style>
  