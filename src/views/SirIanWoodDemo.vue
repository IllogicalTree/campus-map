<script setup>
import { watchEffect, shallowRef } from 'vue';
import { useBuildingStore } from '@/stores/building';
import {useSearchStore } from '@/stores/search';

const search = useSearchStore();
const building = useBuildingStore();
const floorComponent = shallowRef('');

watchEffect(() => {
    import(`../components/${building.name}/${building.name}Level${building.level}.vue`).then(val => floorComponent.value = val.default)
});
</script>

<template>
    <main>
        <header>
            <nav>
                <button @click="building.incrementLevel()">Up</button>
                <button @click="building.decrementLevel()">Down</button>
                <span>{{ building.name }} - Level {{ building.level }}</span>
                {{ search.query }}
            </nav>
        </header>
        <component v-if="floorComponent" :is="floorComponent"
            @click="(event) => console.log(event.target?.parentNode?.id)" />
    </main>
</template>

<script>
</script>
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
        