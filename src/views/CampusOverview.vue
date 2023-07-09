<script setup>
import { useRouter } from 'vue-router'

import CampusOverview from '../components/CampusOverview.vue'


const router = useRouter()

const buildings = [
    'BusinessSchool',
    'IshbelGordon',
    'RGUSport',
    'SirIanWood'
]
const handleClickEvent = (event) => {
    if (buildings.includes(event.target?.parentNode?.id)) {
        router.push({
            name: event.target.parentNode.id
        })
    }
}
    
</script>

<template>
    <main>
        <CampusOverview @click="(event) => handleClickEvent(event)" />
    </main>
</template>
