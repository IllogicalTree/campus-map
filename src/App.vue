<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from './components/SearchBar.vue';
</script>

<!-- template html loaded into every page -->
<!-- contains the search bar and the header buttons for viewing all the svgs of each building-->
<template>
    <header>
        <nav>
            <RouterLink to="/">Overview</RouterLink>
            <RouterLink to="/all-floors">[TEMP] All Floors</RouterLink>
            <SearchBar/>
        </nav>
    </header>
    <RouterView />
</template>

<style scoped>
    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-bottom: 1rem;
    }
</style>

<style>
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
        fill: #cde6ff;
    }

    .parking {
        fill: #8bbdf5
    }

    .otherBuilding{
        fill: #977ca3;
    }

    .highlight {
        fill: hsla(184, 100%, 50%, 0.2);
        stroke: rgb(126, 244, 255);
    }
</style>
