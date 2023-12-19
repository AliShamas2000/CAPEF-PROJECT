<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="bg-table">
                <tr>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-10">
                        ID
                    </th>

                    <th scope="col" class="pt-5 pb-5 pl-5 pr-21">
                        Type
                    </th>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
                        Catégorie
                    </th>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
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
                        Agent
                    </th>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
                        TX ID Number
                    </th>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
                        Inscription (Statut)
                    </th>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
                        Inscription (Montant)
                    </th>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
                        Cotisation (Statut)
                    </th>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
                        Cotisation (Montant)
                    </th>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
                        Statut
                    </th>
                    <th scope="col" class="pt-5 pb-5 pl-5 pr-20">
                        Action
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="member in members" :key="member.id" class="bg-row">
                    <td class="pt-5 pb-5 pl-5">{{ member.id }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.membertype }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.categories }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.name }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.region }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.district }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.area }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.village }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.byagentname }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.subscriptiontrxid }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.seasonpaymentpaid }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.subscriptionpaymentpaid }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.seasonpayment }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.subscriptionpayment }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.status }}</td>
                    <td class="pt-5 pb-5 pl-5">{{ member.action }}</td>
                  </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { defineProps} from "vue";
const props = defineProps(["members"]);
</script>
