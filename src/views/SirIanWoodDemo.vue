<!-- Although this view is called 'SirIanWoodDemo' it is routed to /demo which is the demo for all buildings -->


<script setup>

import { watchEffect, shallowRef } from 'vue';
import { useBuildingStore } from '@/stores/building';
import {useSearchStore } from '@/stores/search';
//imports

const search = useSearchStore();
const building = useBuildingStore();
const floorComponent = shallowRef('');

watchEffect(() => {
    import(`../components/${building.nameId}/${building.nameId}Level${building.level}.vue`).then(val => floorComponent.value = val.default)
});

let previouslySelectedFill = ''
let previouslySelectedElement = ''

//function that handles vector behaviour when an individual shape is highlighted
const highlight = (target, isSearch) => {
    if (!target) {
        return
    }
    building.setRoomId('');
    if (previouslySelectedElement) {
        previouslySelectedElement.style.fill = previouslySelectedFill;
        previouslySelectedElement.style.stroke = ''
    }
    if (previouslySelectedElement === target && !isSearch) {
        previouslySelectedElement = ''
        previouslySelectedFill = ''
        return
    }
    if (target.style.cssText.includes('hsl(59, 100%, 50%, 0.2)')) {
        return
    }
    building.setRoomId(target?.parentNode?.id);

    previouslySelectedFill = target.style.fill
    previouslySelectedElement = target
    target.style.fill = 'hsl(59, 100%, 50%, 0.2)';
    target.style.stroke = 'yellow';
}

//highlight(document.querySelector(`[id='${search.query}'] > *`), true);

let previouslySelectedElements = [];
let previouslySelectedCategory = '';

//function that handles highlighting certain groups of vectors
const highlightAll = category => {
    
    if (previouslySelectedCategory === category) {
        previouslySelectedCategory = '';
        previouslySelectedElements.forEach(element => {
            element.style.fill = '';
            element.style.stroke = '';
        });
        previouslySelectedElements = [];
        return
    }
    previouslySelectedCategory = category;
    const elements = document.querySelectorAll(`[id*='${category.substring(1)}'] `);
    //const elements = document.querySelectorAll(`[id*='toilet'] `);
    previouslySelectedElements.forEach(element => {
        element.style.fill = '';
        element.style.stroke = '';
    });
    previouslySelectedElements = [];
    elements.forEach(element => {
        previouslySelectedElements.push(element);
        element.style.fill = 'hsl(59, 100%, 50%, 0.2)';
        element.style.stroke = 'yellow';
    });
}

watchEffect(() => {
    if (search.query === '') {
        return
    }
    highlight(document.querySelector(`[id='${search.query}'] > *`), true);
})

//handles highlighting when a vector is clicked
const onClick = event => {
    if (!event.target?.parentNode?.id) {
        return
    }
    highlight(event.target);
}

</script>

<!-- template is loaded into the 'RouterView' of the App.vue-->
<template>
    <main>
        <header>
            <nav>
                <button @click="building.incrementLevel()">Up</button>
                <button @click="building.decrementLevel()">Down</button>
                <span>{{ building.name }} - Level {{ building.level }}, {{ building.room }}</span>
            </nav>
        </header>
        <component v-if="floorComponent" :is="floorComponent"
            @click="(event) => onClick(event)" />
        <footer>
            <button @click="highlightAll('accessible_toilet')">Accessible Toilets</button>
                <button @click="highlightAll('lift')">Lifts</button>
                <button @click="highlightAll('stair')">Stairs</button>
                <button @click="highlightAll('bathroom')">Bathrooms</button>
        </footer>
    </main>
</template>

<script>
</script>
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
</style>
