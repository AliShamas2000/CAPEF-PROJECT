<template>
    <div class="pl-5 pt-3">
        <div class="flex flex-row items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <path fill="#000000"
                    d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8 .4 34.3z" />
            </svg>
            <div class="members-title1">
                Agents KYC</div>
        </div>

    </div>
    <br>
    <br>
    <br>
    <form action="">
        <div class="title-form pl-5">Informations Personnelles</div>
        <br>
        <div class="flex gap-4 pl-5">

            <div class="flex-1">
                <NameInput label="&nbsp;NOM" placeholder="Nom" :input-classes="customInputClasses" v-model="nom"
                    :modelValue="nom" />
            </div>
            <div class="flex-1">
                <NameInput label="&nbsp;PRÉNOM" placeholder="Prénom" :input-classes="customInputClasses" v-model="aa"
                    :modelValue="aa" />
            </div>

            <div class="flex-1">
            </div>
        </div>
        <div class="flex gap-4 pl-5">

            <div class="flex-1">
                <TypeInput label="&nbsp;SEXE" inputId="" :input-classes="customInputClasses" :value="a" :options="a"
                    placeholder="&nbsp;&nbsp;— Choisir —" />
            </div>
            <div class="flex-1">
                <Date label="&nbsp;PRÉNOM" placeholder="DATE DE NAISSANCE" :input-classes="customInputClasses" v-model="aa"
                    :modelValue="aa" />
            </div>

            <div class="flex-1">
            </div>
        </div>
        <div class="flex gap-4 pl-5 pt-5">

            <div class="flex-1">
                <NameInput label="&nbsp;TÉLÉPHONE" placeholder="Numéro Cni" :input-classes="customInputClasses"
                    v-model="aa" />
            </div>
            <div class="flex-1">
                <NameInput label="&nbsp;NUMÉRO CNI" placeholder="Numéro Cni" :input-classes="customInputClasses"
                    v-model="aa" :modelValue="aa" />
            </div>

            <div class="flex-1">
            </div>
        </div>
        <div class="flex gap-4 pl-5 pt-5" style="width: 67%;">

            <div class="flex-1">
                <FileInput label="&nbsp;TÉLÉPHONE" placeholder="Numéro Cni" :input-classes="customInputClasses"
                    v-model="aa" />
            </div>

          
        </div>
    </form>
</template>

<script setup>


import NameInput from "@/components/input.vue";
import TypeInput from "@/components/selectInput.vue";
import FileInput from "@/components/fileInput.vue";
import Date from "@/components/datepicker.vue";
import Button from "@/components/button.vue";
import SearchInput from "@/components/search.vue";

definePageMeta({
    layout: "default",
});
const customInputClasses = 'normal-input';
import Table from '~/components/table.vue';

</script>