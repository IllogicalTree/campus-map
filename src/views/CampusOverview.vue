<script setup>
import { useRouter } from 'vue-router';
import CampusOverview from '../components/CampusOverview.vue';
import { useBuildingStore } from '@/stores/building';

const selectedBuilding = useBuildingStore();
const router = useRouter();

const buildings = [ //list of buiildings that match the folder names in components so they can be imported later
    'BusinessSchool',
    'IshbelGordon',
    'RGUSport',
    'SirIanWood',
    'Gatehouse',
    'GarthdeeHouseAnnexe',
    'GraysArt'
];

const handleClickEvent = event => {
    if (buildings.includes(event.target?.parentNode?.id)) { //if the clicked vector id is one of the set list of buildings 
        console.log(event.target.parentNode.id);
        selectedBuilding.setBuilding(event.target.parentNode.id); //get the selected building from the id of the clicked vector and set the building in the building store
        router.push({ name: 'Floor' }); //route to /floor
    };
};
</script>

<template>
    <main>
        <CampusOverview @click="event => handleClickEvent(event)" />
    </main>
</template>
