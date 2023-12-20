<template>
    <div class="pl-5 pt-3">
        <div class="members-title">Agents KYC</div>
        <div class="flex flex-row gap-3">
            <div class="flex flex-row gap-3 pt-3 pb-3 mt-5 mb-5 background-members w-85">
                <br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.76" height="16.76" viewBox="0 0 16.76 16.76">
                    <g id="Group_2611" data-name="Group 2611" transform="translate(0 0)">
                        <g id="Group_2485" data-name="Group 2485" transform="translate(0 0)">
                            <g id="Group_2484" data-name="Group 2484" transform="translate(0 0)">
                                <g id="Group_2483" data-name="Group 2483">
                                    <path id="Path_4803" data-name="Path 4803"
                                        d="M13.035,16.76H3.724A3.725,3.725,0,0,1,0,13.035V12.1a.931.931,0,1,1,1.862,0v.931A1.862,1.862,0,0,0,3.724,14.9h9.311A1.862,1.862,0,0,0,14.9,13.035V12.1a.931.931,0,1,1,1.862,0v.931a3.725,3.725,0,0,1-3.724,3.724Z"
                                        transform="translate(0 0)" fill="#396" />
                                    <path id="Path_4880" data-name="Path 4880"
                                        d="M8.38,0a.928.928,0,0,0-.65.265h0l0,0h0l0,0L4,4A.931.931,0,0,0,5.314,5.314L7.449,3.179V12.1a.931.931,0,1,0,1.862,0V3.179l2.135,2.135A.931.931,0,0,0,12.762,4L9.038.273l0,0h0l0,0h0L9,.236A.925.925,0,0,0,8.742.073h0A.927.927,0,0,0,8.38,0Z"
                                        transform="translate(0 0)" fill="#396" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <div class="exp">
                    TÉLÉCHARGER
                </div>
                <div class="mr-2 pr-2 border-r border-gray-500"></div>

                <svg xmlns="http://www.w3.org/2000/svg" width="16.76" height="16.76" viewBox="0 0 16.76 16.76">
                    <g id="Group_2612" data-name="Group 2612" transform="translate(0 0)">
                        <g id="Group_2485" data-name="Group 2485" transform="translate(0 0)">
                            <g id="Group_2484" data-name="Group 2484" transform="translate(0 0)">
                                <g id="Group_2483" data-name="Group 2483">
                                    <path id="Path_4803" data-name="Path 4803"
                                        d="M13.035,16.76H3.724A3.725,3.725,0,0,1,0,13.035V12.1a.931.931,0,1,1,1.862,0v.931A1.862,1.862,0,0,0,3.724,14.9h9.311A1.862,1.862,0,0,0,14.9,13.035V12.1a.931.931,0,1,1,1.862,0v.931a3.725,3.725,0,0,1-3.724,3.724ZM8.38,13.035a.928.928,0,0,1-.65-.265h0l0,0h0l0,0L4,9.038A.931.931,0,0,1,5.314,7.721L7.449,9.856V.931a.931.931,0,0,1,1.862,0V9.856l2.135-2.135a.931.931,0,1,1,1.317,1.317L9.038,12.763l0,0h0l0,0h0L9,12.8a.925.925,0,0,1-.257.162h0a.927.927,0,0,1-.361.073Z"
                                        transform="translate(0 0)" fill="#396" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>

                <div class="exp">
                    EXPORTER
                </div>

            </div>
            <Button buttonText="&nbsp;AJOUTER UN AGENT" buttonClasses="w-15 btn-add pt-3 pb-3 mt-5 mb-5 " />
        </div>
        <div class="pt-5">
            <div class="flex gap-4">
                <div class="flex-1">

                    <TypeInput label="&nbsp;RÉGION" inputId="" :input-classes="customInputClasses" :modelValue="regionid"
                        :options="filtersData?.regions" placeholder="&nbsp;&nbsp;— Choisir —" />
                </div>
                <div class="flex-1">
                    <TypeInput label="&nbsp;DÉPARTEMENT" inputId="" :input-classes="customInputClasses"
                        :modelValue="districtid" :options="filtersData?.districts" placeholder="&nbsp;&nbsp;— Choisir —" />
                </div>
                <div class="flex-1">
                    <TypeInput label="&nbsp;ARRONDISSEMENT" inputId="" :input-classes="customInputClasses"
                        :modelValue="areaid" :options="filtersData?.areas" placeholder="&nbsp;&nbsp;— Choisir —" />
                </div>
                <div class="flex-1">
                    <TypeInput label="&nbsp;VILLAGE" inputId="" :input-classes="customInputClasses" :modelValue="villageid"
                        :options="filtersData?.villages" placeholder="&nbsp;&nbsp;— Choisir —" />
                </div>
                <div class="flex-1">
                    <TypeInput label="&nbsp;STATUT" inputId="" :input-classes="customInputClasses" :modelValue="statusid"
                        :options="filtersData?.status" placeholder="&nbsp;&nbsp;— Choisir —" />
                </div>
            </div>

            <br>

        </div>

        <Button buttonText="&nbsp;FILTRER" buttonClasses="width-btn-10 btn-add pt-3 pb-3 mt-5 mb-5 " @click="filterAgent" />
        <br>
        <br>
        <div class="flex pt-2">
            <div class="flex-1">
                <SearchInput label="&nbsp; SEARCH BY AGENT NAME / AGENT ID" placeholder="Search By Agent Name / Agent ID"
                    :input-classes="customInputClasses" v-model="a" type="text" :modelValue="a" />
            </div>
            <div class="flex-1">
            </div>
        </div>
        <div class="pt-5">
            <Table :agents="agents" />
        </div>
    </div>
</template>

<script setup>

import TypeInput from "@/components/selectInput.vue";
import Button from "@/components/button.vue";
import SearchInput from "@/components/search.vue";

definePageMeta({
    layout: "default",
});
const customInputClasses = 'normal-input';
import Table from '~/components/agentTable.vue';
import { filterAgents } from "~/server/filterAgent";
import { getFilterAgents } from "~/server/getFilterAgents";
import { ref, onMounted } from 'vue';
const agents = ref(null)
const filtersData = ref(null)
const regionid = ref(null)
const districtid = ref(null)
const areaid = ref(null)
const villageid = ref(null)
const statusid = ref(null)
function filterAgent() {
    filterAgents(regionid.value, districtid.value, areaid.value, villageid.value, statusid.value)
        .then((response) => {
            agents.value = response.agents
        })
        .catch((error) => {
            console.error("fetch failed:", error);
        });
}
onMounted(() => {

    filterAgent()
    getFilterAgents()
        .then((response) => {
            filtersData.value = response
        })
        .catch((error) => {
            console.error("fetch failed:", error);
        });
})
</script>