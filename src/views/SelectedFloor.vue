<script setup>
import { watchEffect, shallowRef, watch } from 'vue';
import { useBuildingStore } from '@/stores/building';
import { useSearchStore } from '@/stores/search';
import { useHighlightStore } from '@/stores/highlight';
import LevelSelector from '../components/LevelSelector.vue';
import BuildingSelector from '../components/BuildingSelector.vue';

const search = useSearchStore();
const building = useBuildingStore();
const highlighted = useHighlightStore();
const floorComponent = shallowRef();

watchEffect(() => import(`../assets/floors/${building.nameId}Level${building.level}.svg`).then(val => {
    //creates a string made up of the building name and level and import that component
    floorComponent.value = val.default;
    setTimeout(() => highlight(document.querySelector(`[id='${search.query}'] > *`)), 10);
}).catch(() => floorComponent.value = null));

const highlight = target => {
    const element = document.querySelector(`[id='${target?.parentNode?.id}'] > *`); //any element with an id
    if (!element || element === highlighted.highlightedElement) {
        highlighted.highlightedElement = null;
        building.roomId = null; //unhighlight when clicking off or clicking the same object again 
        return;
    };
    building.roomId = element?.parentNode?.id;
    highlighted.highlightedElement = element;
};

watch(() => highlighted.highlightedElement,
    (highlightedElement, previouslyHighlightedElement) => {
        highlightedElement?.classList?.add('highlight');
        previouslyHighlightedElement?.classList?.remove('highlight');
    }
);

const highlightCategory = category => {
    const elements = document.querySelectorAll(`[id*='${category.substring(1)}'] > *`);
    if (Array.from(elements).every((element, index) => element === highlighted.highlightedElements[index])) {
        highlighted.highlightedElements = [];
        return;
    };
    highlighted.highlightedElements = elements;
};

watch(() => highlighted.highlightedElements,
    (highlightedElements, previouslyHighlightedElements) => {
        highlightedElements?.forEach(element => element.classList.add('highlight'));
        previouslyHighlightedElements?.forEach(element => element.classList.remove('highlight'));
    }
);

watch(() => search.query, () => highlight(document.querySelector(`[id='${search.query}'] > *`)));
</script>

<template>
    <main>
        <nav style="display: flex; justify-content: start;">
            <RouterLink to="/" style="z-index: 3; display: flex; align-items: center;">
                <v-icon name="fa-arrow-left" scale="1.5"></v-icon>
                <span style="padding-left: .5rem">Home</span>
            </RouterLink>
        </nav>
        <BuildingSelector></BuildingSelector>
        <LevelSelector></LevelSelector>
        <div class="floor">
            <component v-if="floorComponent" :is="floorComponent" @click="event => highlight(event?.target)" />
        </div>
        <div class="filters">
            <button @click="highlightCategory('accessible_toilet')">
                <v-icon name="fa-wheelchair" scale="1.2" />
                <span>Accessible Toilets</span>
            </button>
            <button @click="highlightCategory('lift')">
                <v-icon name="md-elevator" scale="1.2" />
                <span>Lifts</span>
            </button>
            <button @click="highlightCategory('stair')">
                <v-icon name="md-stairs" scale="1.2" />
                <span>Stairs</span>
            </button>
            <button @click="highlightCategory('bathroom')">
                <v-icon name="bi-badge-wc-fill" scale="1.2" />
                <span>Bathrooms</span>
            </button>
        </div>
    </main>
</template>

<style scoped>
    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-bottom: 1rem;
    }

    .floor {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        max-height: 65vh;
        margin-bottom: 2rem;
    }

    svg {
        width: auto;
        height: auto;
    }

    .filters {
        display: flex;
        justify-content: center;
    }
    .filters button {
        display: flex;
        align-items: center;
    }

    .filters button span {
       padding-left: .2rem
    }

</style>