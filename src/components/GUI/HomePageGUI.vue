<template>

    <div id="GUI">
        <button @click="showHideMenu()" id="collapse-menu"> button </button>
        <div id="centered-div">
                <div class="container">
                    <BuildingSelector></BuildingSelector>
                </div>

            <RouterLink to="/">Overview</RouterLink>
            <RouterLink to="/all-floors">[TEMP] All Floors</RouterLink>

        <SearchBar />

        <!-- 
        <h4 class="inner-heading"> Favourites </h4>        
        <div class = "favourites"> ♥ ♥ ♥ </div>
        -->
           
        <h4 class ="inner-heading"> Points of Interest in {{ building.name }} </h4>

        <ul class= "recommended-places"> <li> Toilets </li> <li> Gender Neutral Toilets </li> <li> Accessible Toilets </li> <li> etc </li></ul>
        </div>
    </div>

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
</script>


<style>


#collapse-menu{
background-color: chocolate;
margin:0px;
margin-left: 10px;
}

.switch-building-button {
    height: 20px;
    margin-top: 4%;
    margin-inline: 50px;
    background-color: black;
}

#centered-div {
    display: flex;
    flex-direction: column;


    border-width: 1px;
    border-style: solid;
    background-color: rgb(201, 150, 197);

    border-radius: 30px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.building-nav {
    background-color: violet;
    justify-content: center;
    height: 10%;
    width: 100%;
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
    margin-left: 45px; margin-right: 45px;
    background-color: aqua;
    margin-top: 0px;
}

</style>