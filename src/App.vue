<script setup>
import { RouterView } from 'vue-router'
import { useScreenOrientation } from '@vueuse/core'
const { orientation } = useScreenOrientation()

</script>

<!-- template html loaded into every page -->
<!-- contains the search bar and the header buttons for viewing all the svgs of each building-->
<template>
    <div class='orientation-message' v-if="orientation.includes('portrait')">
        <span>Please rotate your device and view this site in landscape for the best user experience</span>
    </div>
    <div id="appContent" v-else>
        <RouterView />
    </div>
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
        width: 100vw;
        max-height: 65vh;
    }

    svg text{
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }

    .buildingLabel,
    .mainBuilding,
    .background,
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
        opacity: 0.55;
        pointer-events:none;
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
            stroke: rgba(255, 251, 24, 0.8);
            stroke-width: 2px;
        }
    }

    .highlight {
        fill: hsla(184, 100%, 50%, 0.2);
        animation: blink 1.6s infinite;
    }
</style>
