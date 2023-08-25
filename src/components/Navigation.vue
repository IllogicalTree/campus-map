<script setup>
    import {ref, watch} from 'vue'
    import { useBuildingStore } from '@/stores/building';
    import { useDrawerStore } from '@/stores/drawer';

    const building = useBuildingStore(); 
    const drawer = useDrawerStore();

    const nextBuilding = () => building.next()
    const prevBuilding = () => building.prev()

    import { useScreenOrientation } from '@vueuse/core'
    const { orientation } = useScreenOrientation()
    const isMobile = ref()
    isMobile.value = orientation.value.includes('portrait')
    watch(() => orientation.value, newValue => isMobile.value = newValue.includes('portrait'))
    
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

</script>


<template>
        <v-navigation-drawer permanent absolute v-model="drawer.visible" :location="isMobile ? 'bottom' : 'left'" :height="isMobile ? '80%' : '100%'">
            <v-toolbar>
                
                <v-toolbar-title> {{ building.name }} </v-toolbar-title>
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
                <v-app-bar-nav-icon  @click="drawer.toggle"></v-app-bar-nav-icon>
            </template>
            
            <v-app-bar-title class="flex text-center">
                <v-btn @click='prevBuilding' icon="mdi-arrow-left"/>
                {{ building.name }}
                <v-btn @click='nextBuilding' icon="mdi-arrow-right"/>
            </v-app-bar-title>
           
            <v-btn @click="$router.push('/')" icon="mdi-home"/>
        </v-app-bar>
</template>