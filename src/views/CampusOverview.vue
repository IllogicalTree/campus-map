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
    } else {
        if (event.target?.parentNode?.id == "parkings") {
            alert("parking");
        } else {
            //highlight(event?.target);
            //i need the highlight function but not entirely sure how to get it 
        }
    }

    
};
</script>

<template>
    <main>
        <CampusOverview @click="event => handleClickEvent(event)" /> <!-- if the component is clicked handle the click by redirecting-->
    </main>
</template>
