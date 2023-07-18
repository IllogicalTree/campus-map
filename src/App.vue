<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { watch } from 'vue'

import { useSearchStore } from '@/stores/search';
import { useBuildingStore } from '@/stores/building';

const building = useBuildingStore();
const search = useSearchStore();
const router = useRouter();

watch(() => search.query, query => {
    const regex = new RegExp("[Nn][Ss]?[0-9]{3}"); //find and match
    if (regex.test(query)) {
        const matched = regex.exec(query)[0];
        search.query = matched.toUpperCase();
        building.setLevel(matched.charAt(matched.length - 3));
        router.push({ name: 'Floor' });
    }
});
</script>

<!-- template html loaded into every page -->
<!-- contains the search bar and the header buttons for viewing all the svgs of each building-->
<template>
    <header>
        <nav>
            <RouterLink to="/">Overview</RouterLink>
            <RouterLink to="/all-floors">[TEMP] All Floors</RouterLink>
            <input v-model="search.query" input-type="text" />
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

    .highlight {
        fill: hsl(59, 100%, 50%, 0.2);
        stroke: yellow;
    }
</style>
