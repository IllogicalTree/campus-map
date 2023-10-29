<script setup>
import { RouterView } from 'vue-router'
import { useDrawerStore } from '@/stores/drawer';
import {onMounted, onUnmounted} from 'vue'
import Navigation from './components/Navigation.vue';

const drawer = useDrawerStore();
const handleResize = () => window.innerWidth <= 500 ? drawer.mobile() : drawer.desktop();
onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

</script>

<!-- template html loaded into every page -->
<!-- contains the search bar and the header buttons for viewing all the svgs of each building-->
<template>
    
    <v-app>
        <v-layout>
            <Navigation/>
            <v-main class="d-flex flex-column align-center justify-center" >
                <RouterView />
            </v-main>
        </v-layout>
    </v-app>
</template>

<style scoped>
    .orientation-message {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 4rem);
        text-align: center;
        padding: 1rem;
    }
</style>

<style>

/*formatting for maps alongside gui*/
/*later include media queries*/


/* styles across all maps including hover styles */

    g > g:hover {
        cursor: pointer;
        stroke: rgb(126, 244, 255);
    }

    path[opacity] {
        pointer-events: none;
    }

    #road {
        pointer-events:none;
        fill: #eaeaea;
    }

    #road text{
        fill:grey;
    }

    #River {
        fill: rgb(145, 216, 234);
        pointer-events: none;
    }

    #River text {
        fill: rgb(38, 126, 180)
    }

    .unionArea{
        fill:#56378f;
    }

    .union{
        fill:#14207800; /* i am undecided on what colour to make the union*/
        stroke:#c6b5ff;
    }

    svg {
        width: 100%;
        height: 100%;
    }

    svg text{
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16pt;
    letter-spacing: 1pt;
    }

    .mainBuilding,
    .room {
        fill: #7a20a0;
    }

    .buildingLabel{
        font-size: 20px;
    }


    .labelLine{
        stroke:  #75378f;
        stroke-width:1px;
    }

    .background {
        /*opacity: 0.55; */
        fill: #4a0568;
        pointer-events:none;
    }

    .lift {
        fill: #4289bb;
    }

    .bathroom {
        fill: #5036a5;
    }

    .accessible-toilet {
        fill: #c26700;
    }

    .stair {
        fill: #b03a4f;
    }

    .entrance {
        fill: #2dd4e7
    }

    .reception {
        fill: #8eb309
    }

    .print{
        fill:#1abe87
    }

    .road {
        fill: #f8cdff;
    }

    .library{
        fill:#08b480
    }

    .parking {
        fill: #8bbdf5
    }

    .otherBuilding{
        fill: #a48cad;
        pointer-events: none;
    }

    @keyframes blink {
        0% {
            stroke: rgb(48, 238, 255);
            stroke-width: 2px;
        }
    }

    .highlight {
        fill: hsla(188, 47%, 65%, 0.903);
        stroke: rgb(255, 253, 200);
        stroke-width: 0.2%;
        animation: blink 1.6s infinite;
    }

    text {
        user-select: none;
        -moz-user-select: none; 
        -webkit-text-select: none;
        -webkit-user-select: none;
    }

    text {
        user-select: none;
        -moz-user-select: none; 
        -webkit-text-select: none;
        -webkit-user-select: none;
    }
</style>
