<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="bg-table">
          <tr>
            <th scope="col" class="pt-5 pb-5 pl-5 pr-10">
              ID
            </th>
            <th scope="col" class="pt-5 pb-5 pl-5 pr-21">
              Nom
            </th>
            <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
              Région
            </th>
            <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
              Département
            </th>
            <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
              Arrondissement
            </th>
            <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
              Village
            </th>
            <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
              Email
            </th>
            <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
                Status
              </th>
            <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(agent, index) in agents" :key="index" class="bg-row">
            <td class="pt-5 pb-5 pl-5">{{ index + 1 }}</td>
            <td class="pt-5 pb-5 pl-5">{{ agent.firstname }} {{ agent.lastname }}</td>
            <td class="pt-5 pb-5 pl-5">{{ agent.regions }}</td>
            <td class="pt-5 pb-5 pl-5">{{ agent.districts }}</td>
            <td class="pt-5 pb-5 pl-5">{{ agent.areas }}</td>
            <td class="pt-5 pb-5 pl-5">{{ agent.villages }}</td>
            <td class="pt-5 pb-5 pl-5">{{ agent.email }}</td>
            <td class="pt-5 pb-5 pl-5">{{ agent.status }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  const props = defineProps(["agents"]);
  </script>
  