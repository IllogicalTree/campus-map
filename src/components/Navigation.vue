<script setup>
    import {ref, watch} from 'vue'
    import { useRouter } from 'vue-router'
    import { useBuildingStore } from '@/stores/building';
    import { useDrawerStore } from '@/stores/drawer';
    import SearchBar from '@/components/SearchBar.vue'

    const building = useBuildingStore(); 
    const drawer = useDrawerStore();
    const route = useRouter();

    const nextBuilding = () => building.next()
    const prevBuilding = () => building.prev()

    
    watch(() => building.roomData?.data, data => {
        if (!data) {
            return
        }
        let temp = {};
        for (const [key, value] of Object.entries(data)) {
            if (value != '') {
                temp[key] = value;
            }
        }
        building.roomDataFiltered = temp;
    });

    const isOverview = ref(route.currentRoute.value.name === 'CampusOverview' );
    watch(() => route.currentRoute.value.name, name => {
        isOverview.value = name === 'CampusOverview'
    })

</script>


<template>
        <v-navigation-drawer permanent absolute v-model="drawer.visible" :location="drawer.isMobile ? 'bottom' : 'left'" :height="drawer.isMobile ? '100%' : '100%'">
            <v-toolbar>
                <v-toolbar-title v-if="isOverview">RGU Campus Map  </v-toolbar-title>
                <v-toolbar-title v-else> {{ building.name }}</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-item>
                    <v-card>
                        <v-card-title>{{ building.room }}</v-card-title>
                        <div id="roomInfo" v-if="building.room">
                            <div v-if="building.roomData?.data">
                                <ul>
                                    <li v-for="(prop, label) in building.roomDataFiltered" :key="label" >
                                        <span >{{ label }} - {{ prop }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div v-else>
                                No additional info for this room
                            </div>
                        </div>
                        <div id="roomInfo" v-else> Click on a room to see its details, or click on a filter to see what points of interest are found on this floor.</div>
                </v-card>
                    <v-spacer></v-spacer>
                    <v-card>
                        <v-card-title>Places of interest</v-card-title>
                    </v-card>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        
        <v-app-bar id="appBar">
            <template v-slot:prepend>
                <v-app-bar-nav-icon v-if="!isOverview" @click="drawer.toggle"></v-app-bar-nav-icon>
            </template>
            
            <v-app-bar-title v-if="isOverview" class="flex text-center" >RGU Campus Map</v-app-bar-title>
            <v-app-bar-title v-else class="flex text-center" >
                <v-btn @click='prevBuilding' icon="mdi-arrow-left"/>
                {{ building.name }}
                <v-btn @click='nextBuilding' icon="mdi-arrow-right"/>
            </v-app-bar-title>
           
            <v-btn v-if="!isOverview" @click="$router.push('/')" icon="mdi-home"/>
        </v-app-bar>
</template>

<style>
.v-toolbar__content > .v-toolbar-title {
    margin-inline-start: 0 !important;
}</style>