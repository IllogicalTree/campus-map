<template>
   <input v-model="search.query" input-type="text" autocomplete="on" list="query" placeholder="What are you looking for?"/>
   <datalist id="query">
    <option  v-for="result in results" :key="result">
        {{ result.item.roomId }}
    </option>
</datalist>
  
</template>

<script setup>
import { ref, watchEffect} from 'vue'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import { useBuildingStore } from '@/stores/building';
import { useSearchStore } from '@/stores/search';
import { rooms } from '../data';

const router = useRouter();
const building = useBuildingStore();
const search = useSearchStore();
const results = ref('');
const options = {
    keys: ['roomId'],
    threshold: 0.5,
    caseSensitive: false,
    minMatchCharLength: 2,
}

const fuse = new Fuse(rooms, options)

watchEffect(() => results.value = fuse.search(search.query).slice(0, 10));

watchEffect(() => {
    const room = rooms.find(room => room.roomId?.toLowerCase() === search.query?.toLowerCase());
    if (room) {
        search.query = room.roomId;
        building.setRoom(room.roomId);
        router.push({ name: 'Floor' });
    }
});
</script>
