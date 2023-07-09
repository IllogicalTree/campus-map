import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const buildings = {
    'BusinessSchool': {
        name: 'Business School',
        levels: 6,
    },
    'IshbelGordon': {
        name: 'Ishbel Gordon',
        levels: 7,
    },
    'RGUSport': {
        name: 'RGU Sport',
        levels: 5,
    },
    'SirIanWood': {
        name: 'Sir Ian Wood',
        levels: 6,
    },
}

const facilities = ['Toilet', 'Lift', 'Stair', 'Bathroom']

export const useBuildingStore = defineStore('building', () => {
    const nameId = ref('SirIanWood');
    const name = computed(() => buildings[nameId.value].name);
    const level = ref(1);
    const roomId = ref('');
    const room = computed(() => {
        let roomName = roomId.value;
        facilities.forEach(facility => {
            if (roomId.value.toLowerCase().includes(facility.toLowerCase())) {
                roomName = facility+'s'
                return
            }
        })
        return roomName;
    })

    const setBuilding = newBuilding => {
        if (Object.keys(buildings).includes(newBuilding)) {
            nameId.value = newBuilding;
            level.value = 1;
        }
    }
    const setLevel = newLevel => {
        if (newLevel >= 1 && newLevel <= buildings[nameId.value].levels) {
            level.value = newLevel;
        }
    }
    const incrementLevel = () => setLevel(level.value + 1);
    const decrementLevel = () => setLevel(level.value - 1);
    const setRoomId = newRoomId => roomId.value = newRoomId;
        
    return { nameId, name, level, roomId, room, setBuilding, setLevel, incrementLevel, decrementLevel, setRoomId }
})