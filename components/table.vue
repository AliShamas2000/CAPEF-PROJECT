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
                    <td class="pt-5 pb-5 pl-5"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="6" viewBox="0 0 192 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"/></svg></td>
                  </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { defineProps} from "vue";
const props = defineProps(["members"]);
</script>
