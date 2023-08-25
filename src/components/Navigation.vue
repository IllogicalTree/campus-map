<script setup>
    import {ref, watch} from 'vue'
    import SearchBar from '@/components/SearchBar.vue'
    import { useBuildingStore } from '@/stores/building';

    const building = useBuildingStore(); 

    const sidebarVisible = ref();
    const toggleSidebar = () => sidebarVisible.value = !sidebarVisible.value;
    const nextBuilding = () => console.log("next building")
    const prevBuilding = () => console.log('prev building')

    import { useScreenOrientation } from '@vueuse/core'
    const { orientation } = useScreenOrientation()

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
     <v-navigation-drawer style="min-height: 50vh;" v-model="sidebarVisible" :location="orientation.includes('portrait') ? 'bottom' : 'left'" >
            <v-toolbar>
                <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click="toggleSidebar"
                ></v-btn>
                <v-toolbar-title> {{ building.name }} </v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-item>
                    <SearchBar/>
                    <v-card>
                        <v-card-title>{{ building.room }}</v-card-title>
                        <v-card-content>
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
                        </v-card-content>
                    </v-card>
                    <v-spacer></v-spacer>
                    <v-card>
                        <v-card-title>Places of interest</v-card-title>
                    </v-card>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        
        <v-app-bar>
            <template v-slot:prepend>
                <v-app-bar-nav-icon  @click="toggleSidebar"></v-app-bar-nav-icon>
            </template>
            
            <v-app-bar-title class="flex text-center">
                <v-btn @click='nextBuilding' icon="mdi-arrow-left"/>
                {{ building.name }}
                <v-btn @click='prevBuilding' icon="mdi-arrow-right"/>
            </v-app-bar-title>
           
            <v-btn @click="$router.push('/')" icon="mdi-home"/>
        </v-app-bar>
</template>