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
            <td class="pt-5 pb-5 pl-5" >
              <div :class="{ 'active-color': agent.status.toLowerCase() === 'activated', 'inactive-color': agent.status.toLowerCase() === 'inactive' }">  {{ agent.status }}</div>

</td>



            <td class="pt-5 pb-5 pl-30"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="6" viewBox="0 0 192 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"/></svg></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  const props = defineProps(["agents"]);
  </script>
  