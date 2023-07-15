import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { rooms, buildings, facilities } from '../data';

import { useRouter } from 'vue-router'
const router = useRouter();

export const useBuildingStore = defineStore('building', () => {
    const nameId = ref('SirIanWood');
    const name = computed(() => buildings[nameId.value].name);
    const level = ref(1);
    const roomId = ref();

    const room = computed(() => {
        facilities.forEach(facility => {
            if (roomId.value?.toLowerCase().includes(facility.toLowerCase())) {
                roomId.value = facility+'s';
                return;
            };
        });
        return roomId.value;
    });

    const setBuilding = newBuilding => {
        if (Object.keys(buildings).includes(newBuilding)) {
            nameId.value = newBuilding;
            level.value = 1;
        };
    };

    const setLevel = newLevel => {
        if (newLevel >= 1 && newLevel <= buildings[nameId.value].levels) {
            level.value = newLevel;
        };
    };

    const setRoom = newRoomId => {
        const room = rooms.find(room => room.roomId === newRoomId)
        if (rooms.find(room => room.roomId === newRoomId)) {
            nameId.value = room.building.id;
            roomId.value = room.id;
            level.value = room.level;
        };
    }
    
    const incrementLevel = () => setLevel(level.value + 1);
    const decrementLevel = () => setLevel(level.value - 1);
    const setRoomId = newRoomId => roomId.value = newRoomId;
        
    return { nameId, name, level, roomId, room, setBuilding, setLevel, incrementLevel, decrementLevel, setRoomId, setRoom };
});