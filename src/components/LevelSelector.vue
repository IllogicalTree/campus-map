<template>
    <div class="level-selector">
        <button @click="building.incrementLevel()">
            <v-icon name="fa-arrow-up" scale="1.5" />
        </button>
        <span>Level {{ building.level }}</span>
        <button @click="building.decrementLevel()">
            <v-icon name="fa-arrow-down" scale="1.5" />
        </button>
    </div>
</template>

<script setup>
import { useBuildingStore } from '@/stores/building';

const building = useBuildingStore();
</script>

<style scoped>
    .level-selector {
        position: absolute;
        z-index: 2;
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