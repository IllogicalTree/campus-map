import { ref } from 'vue'
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

export const useBuildingStore = defineStore('building', () => {
    const name = ref('SirIanWood');
    const level = ref(1);

    const setBuilding = newBuilding => {
        if (Object.keys(buildings).includes(newBuilding)) {
            name.value = newBuilding;
            level.value = 1;
        }
    }
    const setLevel = newLevel => {
        if (newLevel >= 1 && newLevel <= buildings[name.value].levels) {
            level.value = newLevel;
        }
    }
    const incrementLevel = () => setLevel(level.value + 1);
    const decrementLevel = () => setLevel(level.value - 1);
        
    return { name, level, setBuilding, setLevel, incrementLevel, decrementLevel }
})