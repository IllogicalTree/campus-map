<script setup>
import { watchEffect, shallowRef, watch, ref } from 'vue';
import { useBuildingStore } from '@/stores/building';
import { useSearchStore } from '@/stores/search';
import { useHighlightStore } from '@/stores/highlight';
import { useDrawerStore } from '@/stores/drawer';
import LevelSelector from '@/components/LevelSelector.vue';
import SearchBar from '@/components/SearchBar.vue'

const search = useSearchStore();
const building = useBuildingStore();
const highlighted = useHighlightStore();
const drawer = useDrawerStore();
const floorComponent = shallowRef();

import { useScreenOrientation } from '@vueuse/core'
    const { orientation } = useScreenOrientation()
    const isMobile = ref()
    isMobile.value = orientation.value.includes('portrait')
    watch(() => orientation.value, newValue => isMobile.value = newValue.includes('portrait'))


watchEffect(() => import(`../assets/floors/${building.nameId}Level${building.level}.svg`).then(val => {
    //creates a string made up of the building name and level and import that component
    floorComponent.value = val.default;
    setTimeout(() => highlight(document.querySelector(`[id='${search.query}'] > *`)), 10);
}).catch(() => floorComponent.value = null));

const highlight = target => {
    //code for library redirect .. for now 
    if (target?.parentNode?.id === "Library") { //if the clicked vector id is one of the set list of buildings (in buildingstore)
        building.setBuilding(target.parentNode.id);
        //building.setBuilding(target.parentNode.id); 
        //router.push({ name: 'Floor' }); 
    } else {
        const element = document.querySelector(`[id='${target?.parentNode?.id}'] > *`); //any element with an id
        if (!element || element === highlighted.highlightedElement) {
            highlighted.highlightedElement = null;
            building.roomId = null; //unhighlight when clicking off or clicking the same object again 
            return;
        };
        
        building.roomId = element?.parentNode?.id;
        highlighted.highlightedElement = element;
    }
    
};

watch(() => highlighted.highlightedElement,
    (highlightedElement, previouslyHighlightedElement) => {
        highlightedElement?.classList?.add('highlight');
        previouslyHighlightedElement?.classList?.remove('highlight');
        highlightedElement ? drawer.open() : drawer.close()
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
    <div class="d-flex flex-column align-center justify-center ma-4" style="height: 100%">
        <section style="width: 100%; max-width: 680px" class="d-flex flex-row justify-center">
            <div style="width: 100%" class="d-flex flex-column">
                
                <section v-if='isMobile' class="d-fiex mt-2 justify-space-between">
                    <v-btn class='my-1 mr-3' icon='mdi-wheelchair' @click="highlightCategory('accessible_toilet')"/>
                    <v-btn class='my-1 mr-3' icon='mdi-elevator' @click="highlightCategory('lift')"/>
                    <v-btn class='my-1 mr-3' icon='mdi-stairs' @click="highlightCategory('stair')"/>
                    <v-btn class='my-1 mr-3' icon='mdi-toilet' @click="highlightCategory('bathroom')"/>
                </section>

                <section v-else class="d-fiex mt-2 space-between">
                    <v-btn prepend-icon='mdi-wheelchair' @click="highlightCategory('accessible_toilet')">
                        Accessible Toilets
                    </v-btn>
                    <v-btn prepend-icon='mdi-elevator' @click="highlightCategory('lift')">
                        Lifts
                    </v-btn>
                    <v-btn prepend-icon='mdi-stairs' @click="highlightCategory('stair')">
                        Stairs
                    </v-btn>
                    <v-btn prepend-icon='mdi-toilet' @click="highlightCategory('bathroom')">
                        Bathrooms
                    </v-btn>
                </section>

            </div>
            <div class="d-flex flex-column pl-4">
                <LevelSelector/>
            </div>
        </section>
        <component class='py-md-4' v-if="floorComponent" :is="floorComponent" @click="event => highlight(event?.target)" />
    </div>
</template>
    
    <!--
    <div class="pageHeight container">
       
       
        <main id="map">
            <div id="topSection" class="wrap"> 
                
            </div>
            

            <div class="container">  
                <component v-if="floorComponent" :is="floorComponent" @click="event => highlight(event?.target)" />
            </div>
            
            <div class="container">
                <nav>
                    <RouterLink to="/" style="z-index: 3; display: flex; align-items: center;">
                        <vue-icon name="fa-arrow-left" scale="1.5"/>
                        <span style="padding-left: .5rem">Home</span>
                    </RouterLink>
                    
                </nav>
            </div>

           

        </main>
    </div>
-->


<style>



    /*GUI styles*/

    /*
    #roomInfo{
        margin:1rem;

    }

    ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            top: 0;
            left: 0;
    }

    #collapse-menu{
        background-color: rgb(235, 235, 235);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.318);
        margin:0px;
        margin-top:40vh;
        margin-bottom: 40vh;
        border-radius: 20px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        padding:0;
    }

    #collapse-menu p{
        -webkit-transform: rotate(-90deg);
    }

    #centered-div {
        z-index:1;
        display: flex;
        flex-direction: column;
        color: white;
        box-shadow: 0 0 5px rgba(0,0,0,0.8);
        width:25vw;

        background-color: #341b3f;

        border-radius: 30px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    #GUIHeader{
        border-top-right-radius: 30px;
        background-color: #75378f;
        height:10vh;
    }

    #GUIMain{
        margin-bottom:2rem;
        padding:0;
        height:100%;
        overflow:auto;
    }

    */

    /* formatting styles */

    /*

    #topSection{
        display:flex;
        justify-content: space-between;
        height:7.5vh;
        flex-wrap: wrap;
    }

    #topSection div{
        display: flex;
    }

    #GUI{
        height:100vh;
        display:flex;
    }

    .wrap{
        flex-wrap: wrap;
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 1rem;
    }

    .floor {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        max-height: 85vh;
    }

    svg {
        width: auto;
        height: auto;
    }

    .filters button {
        display: flex;
        align-items: center;
        margin-right:1rem;
        background-color:  rgb(235, 235, 235);
        padding:1rem;
        border-radius:2rem;
    }

    .filters button span {
       padding-left: .2rem
    }
    */

</style>