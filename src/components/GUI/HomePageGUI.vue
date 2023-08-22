<template>
        
        <div id="centered-div">
            
                <div id="GUIHeader">
                    <SearchBar/>
                </div>

            <RouterLink to="/">Overview</RouterLink>

        

        <!-- 
        <h4 class="inner-heading"> Favourites </h4>        
        <div class = "favourites"> ♥ ♥ ♥ </div>
        -->
           
        <h4 class ="inner-heading"> Points of Interest in {{ building.name }} </h4>

        <ul class= "recommended-places"> <li> Toilets </li> <li> Gender Neutral Toilets </li> <li> Accessible Toilets </li> <li> etc </li></ul>
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
    console.log("click");
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

#collapse-menu{
background-color: rgb(111, 68, 121);
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
    width:20vw;
    padding:.5rem;

    background-color: rgb(201, 150, 197);

    /* border styles */
    border-radius: 30px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

#GUIHeader{
    border-top-right-radius: 30px;
    background-color: rgb(222, 181, 219);
    padding:.5rem;
    margin: -.5rem;
}

.building-nav {
    background-color: violet;
    justify-content: center;
    margin-right: 0px;

    border-top-right-radius: 30px;
}

.searchbar {
    justify-content: center;
    margin-top: 5px;
}

.inner-heading {
    margin-left: 10%; margin-bottom: 5px; margin-top: 5px;
}

.favourites {
    justify-content: center;
    background-color: blueviolet;
    padding: 5%;
    margin-left: 45px; margin-right: 45px;
    border-radius: 30px;
}

.recommended-places {
}

</style>