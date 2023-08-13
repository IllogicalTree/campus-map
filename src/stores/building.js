import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { rooms, buildings, facilities } from '../data';

export const useBuildingStore = defineStore('building', () => {
    const nameId = ref('SirIanWood'); //autos to this
    const name = computed(() => buildings[nameId.value].name)
    const level = ref(buildings[nameId.value]?.entranceLevel ?? 1) //will set the autolevel for siwb specifically
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

    const setBuilding = newBuilding => { //newBuilding passed in from CampusOverview
        if (Object.keys(buildings).includes(newBuilding)) { //if its in the predetermined list of buildings
            nameId.value = newBuilding; //name of building in store is the name passed in from the landing page
            level.value = buildings[newBuilding].entranceLevel; //automatically goes to the right level
        };
    };

    const setLevel = newLevel => {
        if (newLevel >= 1 && newLevel <= buildings[nameId.value].levels) {
            if (nameId.value === 'Library') {
                level.value = Math.min(5, newLevel);
            } else {
                level.value = newLevel;
            }
        };
    };

    const setRoom = newRoomId => {
        const room = rooms.find(room => room.roomId === newRoomId)
        if (rooms.find(room => room.roomId === newRoomId)) {
            nameId.value = Object.keys(buildings).filter(name => buildings[name].name === room.building.name)[0];
            roomId.value = room.roomId;
            level.value = room.level;
        };
    }
    
    const incrementLevel = () => setLevel(level.value + 1);
    const decrementLevel = () => setLevel(level.value - 1);
    const setRoomId = newRoomId => roomId.value = newRoomId;
        
    return { nameId, name, level, roomId, room, setBuilding, setLevel, incrementLevel, decrementLevel, setRoomId, setRoom };
});