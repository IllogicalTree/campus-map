<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'
import { watch } from 'vue'

import {useSearchStore } from '@/stores/search';
import {useBuildingStore} from '@/stores/building';

const building = useBuildingStore();
const search = useSearchStore();
const router = useRouter()

watch(() => search.query, (query) => {
  const regex = new RegExp("[Nn][Ss]?[0-9]{3}");
  if (regex.test(query)) {
    const matched = regex.exec(query)[0];
    search.setQuery(matched.toUpperCase());
    building.setLevel(matched.charAt(matched.length-3))
    router.push({
      name: 'Demo'
    })
  }
});
</script>

<!-- template html loaded into every page -->
<!-- contains the search bar and the header buttons for viewing all the svgs of each building-->
<template>
  <header>
    <nav> 
      <RouterLink to="/">Overview</RouterLink>
      <RouterLink to="/sir-ian-wood">Sir Ian Wood Building</RouterLink>
      <RouterLink to="/business-school">Business School</RouterLink>
      <RouterLink to="/rgu-sport">RGU Sport</RouterLink>
      <RouterLink to="/ishbel-gordon">Ishbel Gordon</RouterLink>
      <input v-model="search.query" input-type="text"/>
    </nav>
  </header>

  <RouterView /> <!-- adds in the correct view depending on what route the user is on-->
</template>

<style scoped>
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 1rem;
  }
</style>
