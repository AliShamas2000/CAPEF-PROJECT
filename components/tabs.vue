<template>
    <div class="flex flex-row gap-5 pt-5 pb-5 border-tabs">
        <div @click="changeTab(1)" :class="{ active: activeTab === 1 }">
            Ressortissants
        </div>
        <div @click="changeTab(2)" :class="{ active: activeTab === 2 }">
            Personnes Physiques
        </div>
        <div @click="changeTab(3)" :class="{ active: activeTab === 3 }">
            Personnes Morales
        </div>
    </div>
</template>
  
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { activeTab } = defineProps(['activeTab']);
const emit = defineEmits();

const changeTab = (tabNumber) => {
    emit('changeTab', tabNumber);
};
</script>
  
<style scoped>
.active {
    color: #339966;
    opacity: 1;
    border-bottom: 2px solid #339966;
    margin-bottom: -19px;
}
</style>
  