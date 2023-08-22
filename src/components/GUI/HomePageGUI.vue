<template>
        
        <div id="centered-div">
            
                <div id="GUIHeader">
                    <SearchBar/>
                </div>

            <div id="roomInfo" v-if="building.room">
                <span>
                    {{ building.room }} 
                </span>
                <div v-if="building.roomData?.data">
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
        <button @click="showHideMenu()" id="collapse-menu"> >> </button>
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


<style>

#roomInfo{
    margin:1rem;
}

ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
}

#collapse-menu{
    background-color: rgb(51, 121, 186);
    color: white;
    margin:0px;
    height:10vh;
    margin-top:60%;
    border-radius: 15px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

#centered-div {
    display: flex;
    flex-direction: column;
    padding:.5rem;
    color: white;
    -moz-box-shadow: 0 0 30px 5px #999;
    -webkit-box-shadow: 0 0 30px 5px #999;
    width:25vw;

    background-color: #370e48;

    /* border styles */
    border-radius: 30px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

#GUIHeader{
    border-top-right-radius: 30px;
    background-color: #75378f;
    padding:1rem;
    margin: -.5rem;
    margin-bottom:2rem;
    height:20vh;
}

#GUIHeader SearchBar{

}

</style>