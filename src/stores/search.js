import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
    const query = ref();
   
    const setQuery = newQuery => {
        query.value = newQuery;
    }
        
    return { query, setQuery }
})