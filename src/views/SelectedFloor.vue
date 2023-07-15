<script setup>
import { watchEffect, shallowRef, watch, ref } from 'vue';
import { useBuildingStore } from '@/stores/building';
import { useSearchStore } from '@/stores/search';
import { useHighlightStore } from '@/stores/highlight';

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

var drag = false;
var offset = { x: 0, y: 0 };
var factor = .1;
var matrix = new DOMMatrix();

const style = ref();

const pointerUp = event => drag = false;

const wheel = event => {

   
    //console.log("wheel")
    var zoom = event.deltaY > 0 ? -1 : 1;
    var scale = 1 + factor * zoom;
    offset = {
        x: event.offsetX,
        y: event.offsetY
    };
    matrix.preMultiplySelf(new DOMMatrix()
        .translateSelf(offset.x, offset.y)
        .scaleSelf(scale, scale)
        .translateSelf(-offset.x, -offset.y));
    //viewPort.style.transform = matrix.toString();
    //viewPortTransform.value = matrix.toString();
    style.value = {
        transform: matrix.toString()
    };
};

function throttle (timer) {
  let queuedCallback
  return callback => {
    if (!queuedCallback) {
      timer(() => {
        const cb = queuedCallback
        queuedCallback = null
        cb()
      })
    }
    queuedCallback = callback
  }
}

const throttledWrite = throttle(requestAnimationFrame)
//const throttledRead = throttle(requestPostAnimationFrame)

const pointerDown = event => {
    //console.log("pointer down")
    drag = true;
    offset = { x: event.offsetX, y: event.offsetY };
    
};

const pointerMove = event =>{
    throttledWrite(() => {
    //console.log("pointer move", drag)
    if (drag) {
        var tx = event.offsetX - offset.x;
        var ty = event.offsetY - offset.y;
        offset = {
            x: event.offsetX,
            y: event.offsetY
        };
        
        matrix.preMultiplySelf(new DOMMatrix()
            .translateSelf(tx, ty));
            
        // viewPort.style.transform = matrix.toString();
        //viewPortTransform.value = matrix.toString();
        style.value = {
            transform: matrix
        };
    }
    });
};

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
        <div id="around">
            <component id="canvas" v-if="floorComponent" :is="floorComponent"  @click="event => highlight(event?.target)" style="background: pink" :style="style" @pointerup="pointerUp" @wheel="wheel" @pointerdown="pointerDown" @pointermove="pointerMove"/>
        </div>
       
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

#around{
  display: flex;
  width: 100%;
  border: 1px dashed orange;
  height: 50vh;
  overflow: hidden;
}

#canvas{
  flex: 1;
  height: auto;
}

</style>