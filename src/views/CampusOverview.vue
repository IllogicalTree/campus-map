<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CampusOverview from '@/assets/floors/CampusOverview.svg';
import { useBuildingStore } from '@/stores/building';
import { useDrawerStore } from '@/stores/drawer';
import { buildings, } from '@/data';
import SearchBar from '@/components/SearchBar.vue';
import { rooms } from '../data';
//import GUI from '@/components/GUI/HomePageGUI.vue';

const selectedBuilding = useBuildingStore();
const drawer = useDrawerStore();
const router = useRouter();
const selected = ref('');
const highlighted = ref();

const handleClickEvent = event => {
    if (Object.keys(buildings).includes(event.target?.parentNode?.id)) { //if the clicked vector id is one of the set list of buildings (in buildingstore)
        selectedBuilding.setBuilding(event.target.parentNode.id); //get the selected building from the id of the clicked vector and set the building in the building store
        router.push({ name: 'Floor' }); //route to /floor
    } else if (Object.keys(buildings).includes(event.target?.parentNode?.parentNode?.id)) {
        selectedBuilding.setBuilding(event.target.parentNode.parentNode.id);
        router.push({ name: 'Floor' });
    } else {
        highlight(event?.target)
    } 
};

const highlight = target => {
    const element = document.querySelector(`[id='${target?.parentNode?.id}'] > *`);
    if (!element || element === highlighted.value) {
        highlighted.value = null;
        selected.value = null;
        return;
    };
    selected.value = element?.parentNode?.id;
    highlighted.value = element;
};

watch(() => highlighted.value,
    (highlightedElement, previouslyHighlighted) => {
        highlightedElement?.classList.add('highlight');
        previouslyHighlighted?.classList.remove('highlight');
    }
);

onMounted(() => {
    selectedBuilding.roomId = null
    drawer.close()
});

</script>

<template>
        <CampusOverview @click="event => handleClickEvent(event)" />
</template>

<style scoped>
.right{
    flex: 65%
}

.left{
    flex: 35%;
}

nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 1rem;
}
</style>