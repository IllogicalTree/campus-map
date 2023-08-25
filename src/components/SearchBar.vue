<template>
    <v-autocomplete
        label="What are you looking for?"
        v-model="query"
        input-type="text"
        list="query"
        :items="rooms"
        item-title="roomId"
        auto-select-first
    ></v-autocomplete>
</template>

<script setup>
import { ref, watchEffect, watch} from 'vue'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import { useBuildingStore } from '@/stores/building';
import { useSearchStore } from '@/stores/search';
import { rooms } from '../data';

const router = useRouter();
const building = useBuildingStore();
const search = useSearchStore();
const results = ref('');
const query = ref('');
const options = {
    keys: ['roomId', 'data.Function'],
    threshold: 0.5,
    caseSensitive: false,
    minMatchCharLength: 0,
}

watchEffect(() => {
    if (!query?.value) {
        return
    }
    results.value = new Fuse(rooms, options).search(query?.value).slice(0, 5)
    if (results.value?.length == 0) {
        results.value = rooms.map(room => room.roomId)
    }
});

watch(query, () => {
    const room = rooms.find(room => room.roomId?.toLowerCase() === query.value?.toLowerCase());
    if (room) {
        search.query = room.roomId;
        building.setRoom(room.roomId);
        router.push({ name: 'Floor' });
    }
});

</script>

<style>
.v-input__details {
    display: none !important;
}
::-webkit-scrollbar {display:none;}
</style>