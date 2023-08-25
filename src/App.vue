<script setup>
import { RouterView } from 'vue-router'
//import { useScreenOrientation } from '@vueuse/core'
//const { orientation, isSupported } = useScreenOrientation()
import Navigation from './components/Navigation.vue';

</script>

<!-- template html loaded into every page -->
<!-- contains the search bar and the header buttons for viewing all the svgs of each building-->
<template>
    
    <v-app>
    <v-layout class="rounded rounded-md">
        <Navigation/>
        <v-main class="d-flex flex-column align-center justify-center pa-md-2" >
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
    }

    .unionArea{
        fill:#72891c;
    }

    .union{
        fill:#94b226;
    }

    svg {
        width: 100%;
        max-height: 65vh;
    }

    svg text{
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }

    .buildingLabel,
    .mainBuilding,
    .room {
        fill: #75378f;
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
        fill: #370e48;
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
        fill: #6c7f28
    }

    .road {
        fill: #f8cdff;
    }

    .parking {
        fill: #8bbdf5
    }

    .otherBuilding{
        fill: #977ca3;
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
