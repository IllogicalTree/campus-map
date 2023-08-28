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

<script>

/*Admin state toggle code */
export default {
    data () {
      return {
        isAdmin: true,
      }
    },
  }

</script>


<template>
        <v-navigation-drawer class="bg-purple-darken-1" :width="325" permanent absolute v-model="drawer.visible" :location="drawer.isMobile ? 'bottom' : 'left'" :height="drawer.isMobile ? '100%' : '100%'">
            <v-toolbar class="bg-purple-darken-3">
                <v-toolbar-title class="flex text-center"  v-if="isOverview">RGU Campus Map  </v-toolbar-title>
                <v-toolbar-title  v-else > 
                    <SearchBar/>
                </v-toolbar-title>
            </v-toolbar>
            <v-list >
                <v-list-item>
                    <v-card class="bg-purple-darken-1" >
                        <v-card-title>{{ building.room }} </v-card-title>
                        <div id="roomInfo" v-if="building.room">
                            <div v-if="building.roomData?.data">
                                <div v-if="building.roomDataFiltered.Image">
                                    <v-img
                                        max-height="300"
                                        max-width="285"
                                        v-bind:src="building.roomDataFiltered.Image"
                                    ></v-img>
                                </div>
                                <v-card-text v-if="building.roomData?.data"> {{ building.roomDataFiltered['Room Name'] }} </v-card-text>
                                <div v-if="isAdmin">
                                    <ul>
                                        <li v-for="(prop, label) in building.roomDataFiltered" :key="label" >
                                            <span >{{ label }} - {{ prop }}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div v-else>
                                    <ul>
                                        <li>
                                            <span> {{ building.roomDataFiltered['Room Name'] }}</span>
                                        </li>
                                        <li>
                                            <span> Function - {{ building.roomDataFiltered['Function'] }}</span>
                                        </li>
                                        <li>
                                            <span> Colour Code - {{ building.roomDataFiltered['Colour Code'] }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div v-else>
                                No additional info for this location
                            </div>
                        </div>
                        <div id="roomInfo" v-else> Click on a room to see its details, or click on a filter to see what points of interest are found on this floor.</div>
                    </v-card>
                </v-list-item>
                <v-card-title>Places of interest in {{ building.name }}</v-card-title>
                <!-- my goal here is to generate a series of buttons matching a specific list of important places in the data.-->
                <!-- clicking on them will do a search directly to the right room (like a quicksearch) -->
                <!-- but i cant quite figure out how the search works so im leaving it for now -->
                <!-- building.importantPlaces is also undefined and im not entirely sure why... ive commented it out for now -->
                <ul v-for="(place) in building.importantPlaces" :key="place">
                    <li>
                        <v-btn class='my-2 mx-4' prepend-icon='mdi-monitor'>
                        {{ place }}
                        </v-btn>
                    </li>
                </ul>
            </v-list>
        </v-navigation-drawer>
        
        <v-app-bar>
            <template v-slot:prepend>
                <v-app-bar-nav-icon v-if="!isOverview" @click="drawer.toggle"></v-app-bar-nav-icon>
            </template>
            
            <v-app-bar-title v-if="isOverview" class="flex text-center" > <SearchBar/> </v-app-bar-title>
            <v-app-bar-title v-else class="flex text-center" >
                <v-btn @click='prevBuilding' icon="mdi-arrow-left"/>
                        {{ building.name }} <span v-if="building.name == 'RGU Library'"> - Level {{ building.level + 4}} </span>
                <v-btn @click='nextBuilding' icon="mdi-arrow-right"/>
            </v-app-bar-title>
           
            <v-btn v-if="!isOverview" @click="$router.push('/')" icon="mdi-home"/>
        </v-app-bar>

        <v-switch style="position:fixed; position: fixed; bottom: 0; right: 0;"
                        v-model="isAdmin"
                        hide-details
                        inset
                        :label="`Admin: ${isAdmin.toString()}`"
                    ></v-switch>
</template>

<style>
.v-toolbar__content > .v-toolbar-title {
    margin-inline-start: 0 !important;
}
</style>