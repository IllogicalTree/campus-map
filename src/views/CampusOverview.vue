<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import CampusOverview from '@/assets/floors/CampusOverview.svg';
import { useBuildingStore } from '@/stores/building';
import { buildings, } from '@/data';

const selectedBuilding = useBuildingStore();
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

</script>

<template>
    <main>
        <div class="container">
            <CampusOverview @click="event => handleClickEvent(event)" /> <!-- if the component is clicked handle the click by redirecting-->
        </div>
        <span v-if="selected">Currently selected: {{ selected }}</span>
    </main>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 65vh;
    overflow: hidden;
}
</style>