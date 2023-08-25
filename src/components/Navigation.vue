<script setup>
    import {ref} from 'vue'
    import SearchBar from '@/components/SearchBar.vue'
    const sidebarVisible = ref();
    const toggleSidebar = () => sidebarVisible.value = !sidebarVisible.value;
    const roomDetails = {
        'name': 'detail1',
        'something': 'detail2'
    }
    const nextBuilding = () => console.log("next building")
    const prevBuilding = () => console.log('prev building')

    import { useScreenOrientation } from '@vueuse/core'
    const { orientation } = useScreenOrientation()

    console.log(orientation.value)

    

</script>


<template>
     <v-navigation-drawer v-model="sidebarVisible" permanent :location="orientation.includes('portrait') ? 'bottom' : 'left'" >
            <v-toolbar>
                <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click="toggleSidebar"
                ></v-btn>
                <v-toolbar-title>Home</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-item>
                    <SearchBar/>
                    <v-card>
                        <v-card-title>Room 344</v-card-title>
                        <v-card-content>
                            <v-list v-for="(key, detail) in roomDetails" :key="key">
                                <v-list-item>{{ key }} - {{ detail }}</v-list-item>
                            </v-list>
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
                Sir Ian Wood
                <v-btn @click='prevBuilding' icon="mdi-arrow-right"/>
            </v-app-bar-title>
           
            <v-btn @click="$router.push('/')" icon="mdi-home"/>
        </v-app-bar>
</template>