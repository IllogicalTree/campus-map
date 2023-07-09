<script setup>
import SirIanWoodLevel1 from '../components/SirIanWood/SirIanWoodLevel1.vue'
import SirIanWoodLevel2 from '../components/SirIanWood/SirIanWoodLevel2.vue'
import SirIanWoodLevel3 from '../components/SirIanWood/SirIanWoodLevel3.vue'
import SirIanWoodLevel4 from '../components/SirIanWood/SirIanWoodLevel4.vue'
import SirIanWoodLevel5 from '../components/SirIanWood/SirIanWoodLevel5.vue'
import SirIanWoodLevel6 from '../components/SirIanWood/SirIanWoodLevel6.vue'
</script>

<template>
    <main>
        <SirIanWoodLevel1 />
        <SirIanWoodLevel2 @click="(a) => console.log('click', a.target.parentNode.id)" />
        <SirIanWoodLevel3 />
        <SirIanWoodLevel4 />
        <SirIanWoodLevel5 />
        <SirIanWoodLevel6 />
    </main>
</template>