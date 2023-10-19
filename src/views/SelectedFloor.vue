<script setup>
import { watchEffect, shallowRef, watch, ref, onMounted, onUnmounted } from 'vue';
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

watchEffect(() => import(`../assets/floors/${building.nameId}Level${building.level}.svg`).then(val => {
    //creates a string made up of the building name and level and import that component
    floorComponent.value = val.default;
    setTimeout(() => highlight(document.querySelector(`[id='${search.query}'] > *`)), 10);
}).catch(() => floorComponent.value = null));

const highlight = target => {
    //code for library redirect .. for now 
    if (target?.parentNode?.id === "Library") { //if the clicked vector id is one of the set list of buildings (in buildingstore)
        building.setBuilding(target.parentNode.id);
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
        highlightedElement?.classList?.add('highlight')
        previouslyHighlightedElement?.classList?.remove('highlight');
        //highlightedElement ? drawer.open() : drawer.close()
        //code removed in favour of the below code
        //open the drawer if not already, do not close unless closed manually
        //this also fixes the visual bug where the page would load and the automatically visible drawer would close immediately
        drawer.open();
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

console.log("Important Places", building.importantPlaces)

</script>

<template>
    <div class="d-flex flex-column align-center justify-center ma-4" style="height: 100%">
        <section style="width: 100%; max-width: 680px" class="d-flex flex-row justify-center">
            <div style="width: 100%" class="d-flex flex-column">


                
                <section v-if='drawer.isMobile' class="d-fiex mt-2 justify-space-between">
                    <v-btn class='my-1 mr-3' icon='mdi-wheelchair' @click="highlightCategory('accessible_toilet')"/>
                    <v-btn class='my-1 mr-3' icon='mdi-elevator' @click="highlightCategory('lift')"/>
                    <v-btn class='my-1 mr-3' icon='mdi-stairs' @click="highlightCategory('stair')"/>
                    <v-btn class='my-1 mr-3' icon='mdi-toilet' @click="highlightCategory('bathroom')"/>
                </section>

                <section v-else class="d-fiex mt-2 space-between">
                    <v-btn class='my-2 mx-4' prepend-icon='mdi-wheelchair' @click="highlightCategory('accessible_toilet')">
                        Accessible Toilets
                    </v-btn>
                    <v-btn class='my-2 mx-4' prepend-icon='mdi-elevator' @click="highlightCategory('lift')">
                        Lifts
                    </v-btn>
                    <v-btn class='my-2 mx-4' prepend-icon='mdi-stairs' @click="highlightCategory('stair')">
                        Stairs
                    </v-btn>
                    <v-btn class='my-2 mx-4' prepend-icon='mdi-toilet' @click="highlightCategory('bathroom')">
                        Bathrooms
                    </v-btn>
                </section>

            </div>
            <div class="d-flex flex-column pl-4" :style="drawer.isMobile ? 'z-index: 999' : 'position: absolute; top: 40vh; right: 1rem; z-index: 999'">
                <LevelSelector />
            </div>
        </section>
        <component class='py-md-4' v-if="floorComponent" :is="floorComponent" @click="event => highlight(event?.target)"/>
            <!--<div class="p-2">This map is provided as is and was developed as a student project. While every best effort has been made, no guarantees are made regarding the accuracy or correctness of the information provided.</div>-->
    </div>
</template>
    