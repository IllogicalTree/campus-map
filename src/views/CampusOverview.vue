<script setup>
import { useRouter } from 'vue-router';
import CampusOverview from '../components/CampusOverview.vue';
import { useBuildingStore, buildings } from '@/stores/building';

const selectedBuilding = useBuildingStore();
const router = useRouter();

const handleClickEvent = event => {
    if (Object.keys(buildings).includes(event.target?.parentNode?.id)) { //if the clicked vector id is one of the set list of buildings (in buildingstore)
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
