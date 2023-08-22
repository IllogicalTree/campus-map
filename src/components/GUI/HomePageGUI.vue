<template>
        
        <div id="centered-div">
            
                <div id="GUIHeader">

                </div>

            <div id="GUIMain">
                <div id="roomInfo" v-if="building.room">
                    <span>
                        {{ building.room }} 
                    </span>
                    <div v-if="building.roomData?.data">
                        {{ building.roomData?.data.Room }}
                        This room contains: 
                        <ul>
                            <li v-for="(prop, label) in building.roomData?.data" :key="label">
                                <span v-if="prop">{{ label }} - {{ prop }}</span>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        No additional info for this room
                    </div>
                </div>
                <div id="roomInfo" v-else> Click on a room to see its details, or click on a filter to see what points of interest are found on this floor.</div>
                
                
                </div>
            </div>
        <button @click="showHideMenu()" id="collapse-menu"> <p>expand</p> </button>
</template>

<script setup>

import SearchBar from '@/components/SearchBar.vue';
import LevelSelector from '@/components/LevelSelector.vue';
import BuildingSelector from '@/components/BuildingSelector.vue';
import { useBuildingStore } from '@/stores/building';

const building = useBuildingStore(); 


</script>

<script> 

function showHideMenu() {
    var x = document.getElementById("centered-div");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function growDiv() {
  var growDiv = document.getElementById('grow');
  if (growDiv.clientHeight) {
    growDiv.style.height = 0;
  } else {
    var wrapper = document.querySelector('.measuringWrapper');
    growDiv.style.height = wrapper.clientHeight + "px";
  }
  document.getElementById("more-button").value = document.getElementById("more-button").value == 'Read more' ? 'Read less' : 'Read more';
}
</script>