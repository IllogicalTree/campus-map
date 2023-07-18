import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

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
    Gatehouse: {
        name: 'Gatehouse',
        levels: 1,
    },
    GarthdeeHouseAnnexe: {
        name: 'Garthdee House & Garthdee House Annexe',
        levels: 4,
    },
    GraysArt: {
        name: 'Grays School of Art',
        levels: 6,
    },
};

const facilities = ['Toilet', 'Lift', 'Stair', 'Bathroom', 'Entrance'];

export const useBuildingStore = defineStore('building', () => {
    const nameId = ref('SirIanWood'); //autos to this
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

    const setBuilding = newBuilding => { //newBuilding passed in from CampusOverview
        if (Object.keys(buildings).includes(newBuilding)) { //if its in the predetermined list of buildings
            nameId.value = newBuilding; //load the new building
            level.value = 1; //automatically goes to the right level
        };
    };

    const setLevel = newLevel => {
        if (newLevel >= 1 && newLevel <= buildings[nameId.value].levels) {
            level.value = newLevel;
        };
    };
    
    const incrementLevel = () => setLevel(level.value + 1);
    const decrementLevel = () => setLevel(level.value - 1);
    const setRoomId = newRoomId => roomId.value = newRoomId;
        
    return { nameId, name, level, roomId, room, setBuilding, setLevel, incrementLevel, decrementLevel, setRoomId };
});