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
    }
</style>
