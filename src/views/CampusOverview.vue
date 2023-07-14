<script setup>
import { useRouter } from 'vue-router';
import CampusOverview from '../components/CampusOverview.vue';
import { useBuildingStore } from '@/stores/building';

const selectedBuilding = useBuildingStore();
const router = useRouter();

const buildings = [
    'BusinessSchool',
    'IshbelGordon',
    'RGUSport',
    'SirIanWood'
];

const handleClickEvent = event => {
    if (buildings.includes(event.target?.parentNode?.id)) {
        selectedBuilding.setBuilding(event.target.parentNode.id);
        router.push({ name: 'Floor' });
    };
};
</script>

<template>
    <main>
        <CampusOverview @click="event => handleClickEvent(event)" />
    </main>
</template>
