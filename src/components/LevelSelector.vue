<template>
    <div class="level-selector">
        <v-btn icon='mdi-arrow-up' @click="building.incrementLevel()"/>
        <span>Level {{ building.level }}</span>
        <v-btn icon='mdi-arrow-down' @click="building.decrementLevel()"/>
    </div>
</template>

<script setup>
import { useBuildingStore } from '@/stores/building';

const building = useBuildingStore();
</script>

<style scoped>
    .level-selector {
        /*position: absolute;
        z-index: 2;*/
        top: 35vh;
        right: 5vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 20vw;
        padding: .5rem
    }
    svg {
        width: auto;
        height: auto;
    }
</style>