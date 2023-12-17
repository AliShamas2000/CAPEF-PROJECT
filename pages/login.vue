<template>
    <div class="login_div flex flex-col gap-5   pt-5 pb-1 justify-start">
        <div class="login-container flex flex-col items-center">
            <div class="logo-login pb-5">
                <img src="~assets/images/logo.png" alt="Logo" class="">
            </div>
            <br>
            <div class="pt-5 title-login pb-5">Connexion Admin CAPEF</div>
            <br>

            <MyInput label="NOM DE L’UTILISATEUR" placeholder="Nom De L’utilisateur" :input-classes="customInputClasses"
                v-model="username" />

            <PasswordInput label="MOT DE PASSE" placeholder="Mot De Passe" :input-classes="customInputClasses"
                v-model="password" type="password" />

                <Button buttonText="SE CONNECTER"  buttonClasses="btn-login" />

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "login",
});

import MyInput from "@/components/input.vue";
import PasswordInput from "@/components/passwordInput.vue";
import Button from "@/components/button.vue";

const username = ref('');
const customInputClasses = 'normal-input';

</script>

<style lang="scss" scoped></style>
