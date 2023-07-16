<script setup>
import { watchEffect, shallowRef, watch, ref} from 'vue';
import { useBuildingStore } from '@/stores/building';
import { useSearchStore } from '@/stores/search';
import { useHighlightStore } from '@/stores/highlight';
import DraggableComponent from '../components/DraggableComponent.vue';

const search = useSearchStore();
const building = useBuildingStore();
const highlighted = useHighlightStore();
const floorComponent = shallowRef();

watchEffect(() => import(`../components/${building.nameId}/${building.nameId}Level${building.level}.vue`).then(val => {
    floorComponent.value = val.default;
    setTimeout(() => highlight(document.querySelector(`[id='${search.query}'] > *`)), 10);
}));

const highlight = target => {
    const element = document.querySelector(`[id='${target?.parentNode?.id}'] > *`);
    if (element?.parentNode?.id === 'around') {
        return;
    }
    if (!element || element === highlighted.highlightedElement) {
        highlighted.highlightedElement = null;
        building.roomId = null;
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


const map = ref({x: -100, y: -50});

</script>

<template>
    <main>
        <header>
            <nav>
                <button @click="building.incrementLevel()">Up</button>
                <button @click="building.decrementLevel()">Down</button>
                <span>{{ building.name }} - Level {{ building.level }}, {{ building.room }}</span>
            </nav>
        </header>
        <svg viewBox="-100 -50 200 100" style="background: #eee">
            <DraggableComponent v-model="map"  @click="event => console.log('clicked ', event)">
                <component 
                    v-if="floorComponent" 
                    :is="floorComponent"  
                    @click="event => console.log('clicked ', event)"
                />
            </DraggableComponent>
        </svg>
       
        <footer>
            <button @click="highlightCategory('accessible_toilet')">Accessible Toilets</button>
            <button @click="highlightCategory('lift')">Lifts</button>
            <button @click="highlightCategory('stair')">Stairs</button>
            <button @click="highlightCategory('bathroom')">Bathrooms</button>
        </footer>
    </main>
</template>

<style scoped>
    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-bottom: 1rem;
    }
    span {
        padding: .5rem;
        margin: .5rem;
    }
</style>
