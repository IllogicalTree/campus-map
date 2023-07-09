<script setup>
import { RouterLink, RouterView } from 'vue-router'

import {useSearchStore } from '@/stores/search';

const search = useSearchStore();
</script>

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

  <RouterView />
</template>

<style scoped>
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 1rem;
  }
</style>
