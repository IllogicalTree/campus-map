<template>

    <div class="">
        <button onclick="showHideMenu()" id="collapse-menu"> button </button>
        <div id="centered-div">
            <div class="building-nav">
                <button class = "switch-building-button"> </button>
                    <h3> Sir Ian Wood Building </h3>
                <button class = "switch-building-button"> </button>
            </div>

        <SearchBar />

        <h4 class="inner-heading"> Favourites </h4>

        <div class = "favourites"> ♥ ♥ ♥ </div>
           
        <h4 class ="inner-heading"> Points of Interest in the Sir Ian Wood Building</h4>

        <ul class= "recommended-places"> <li> Toilets </li> <li> Gender Neutral Toilets </li> <li> Accessible Toilets </li> <li> etc </li></ul>
        </div>
    </div>
    
</template>

<script setup>

import SearchBar from '@/components/SearchBar.vue';

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

body, html {
    height: 100%;
    margin: 0%;
}

div {
    display: flex;
} 

#navigation{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    height: 100%;
    width: 100%;
}

#collapse-menu{
background-color: chocolate;
margin:0px;
margin-left: 10px;
width: 3%;
height: 5%;
}

.switch-building-button {
    height: 20px;
    margin-top: 4%;
    margin-inline: 50px;
}

#centered-div {
    display: flex;
    width: 30%;
    height: 90%; 
    margin-left: 10px;
    flex-direction: column;


    border-color: blue;
    border-width: 1px;
    border-style: solid;
    background-color: red;

    border-radius: 30px;
    border-top-left-radius: 0px;
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