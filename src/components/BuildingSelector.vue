<template>
    <div class="level-selector">
        <button>
            <v-icon name="fa-arrow-left" scale="1.5" />
        </button>
        <span class="heading">{{ building.name }} <span v-if="building.room">-</span> {{ building.room }}</span>
        <button>
            <v-icon name="fa-arrow-right" scale="1.5" />
        </button>
    </div>
</template>

<script setup>
import { useBuildingStore } from '@/stores/building';

const building = useBuildingStore(); //needed so that the templating {{ building.name }} will link to the data in building store (which is the data in data)
</script>

<style scoped>
    .level-selector {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5rem
    }
    svg {
        width: auto;
        height: auto;
    }
    .heading {
        padding: .5rem;
        margin: .5rem;
    }
</style>