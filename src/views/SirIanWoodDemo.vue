<script setup>
import { watchEffect, shallowRef, watch } from 'vue';
import { useBuildingStore } from '@/stores/building';
import { useSearchStore } from '@/stores/search';
import { useHighlightStore } from '@/stores/highlight';

const search = useSearchStore();
const building = useBuildingStore();
const highlighted = useHighlightStore();
const floorComponent = shallowRef();

watchEffect(() => import(`../components/${building.nameId}/${building.nameId}Level${building.level}.vue`).then(val => floorComponent.value = val.default));

const highlight = target => {
    const element = document.querySelector(`[id='${target?.parentNode?.id}'] > *`);
    if (element === highlighted.highlightedElement) {
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
    const elements = document.querySelectorAll(`[id*='${category.substring(1)}'] `);
    if (elements === highlighted.highlightedElements) {
        highlighted.highlightedElements = null;
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
        <header>
            <nav>
                <button @click="building.incrementLevel()">Up</button>
                <button @click="building.decrementLevel()">Down</button>
                <span>{{ building.name }} - Level {{ building.level }}, {{ building.room }}</span>
            </nav>
        </header>
        <component v-if="floorComponent" :is="floorComponent" @click="event => highlight(event?.target)" />
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

<style>
g:hover {
    cursor: pointer;
    stroke: yellow;
}

.background,
.room {
    fill: #75378f;
}

.background {
    opacity: 0.55;
}

.lift {
    fill: #2d6d9c;
}

.bathroom {
    fill: #4b337f;
}

.accessible-toilet {
    fill: #c26700;
}

.stair {
    fill: #b03a4f;
}

.reception {
    fill: #6c7f28
}

.highlight {
    fill: hsl(59, 100%, 50%, 0.2);
    stroke: yellow;
}</style>