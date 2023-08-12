export const buildings = {
    'BusinessSchool': {
        name: 'Riverside Building',
        levels: 6,
        entranceLevel: 3,
    },
    'IshbelGordon': {
        name: 'Ishbel Gordon',
        levels: 7,
        entranceLevel: 1,
    },
    'RGUSport': {
        name: 'RGU Sport',
        levels: 5,
        entranceLevel: 3,
    },
    'SirIanWood': {
        name: 'Sir Ian Wood',
        levels: 6,
        entranceLevel: 3,
    },
    'Library': {
        name: 'RGU Library',
        levels: 9,
        entranceLevel: 5 //although there are 4 floors in the library, the level is still considered level 6 as its part of the siwb
        //encountered a problem where since the Library levels do not start at 1, the level toggle will glitch if trying to go to levels below 5
    },
    'Gatehouse': {
        name: 'Gatehouse Graphics and Printing Facility',
        levels: 1,
        entranceLevel: 1,
    },
    'GarthdeeHouseAnnexe': {
        name: 'Garthdee House & Garthdee House Annexe',
        levels: 4,
        entranceLevel: 1,
    },
    'GraysArt': {
        name: 'Grays School of Art',
        levels: 6,
        entranceLevel: 2,
    },
    'CentralServices': {
        name: 'Central Services Building',
        levels: 4,
        entranceLevel: 1
    },
    'EnergyTransition': {
        name: 'Energy Transition Institute',
        levels: 2,
        entranceLevel: 1
    }
};

const SirIanWoodFloor1 = [
    {
        roomId: "N105",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N106",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N107",
        building: buildings.SirIanWood,
        level: 1,
    },
    {
        roomId: "N108",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N109",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N114",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS101c",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS101b",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS101",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS107",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS106",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS105",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS115",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS120",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS121",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS122",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS123",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS126",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS125",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS119",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS118",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS117",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS116",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS114",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS113",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS118-2",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "NS117-2",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N129",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N128",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N127",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N125",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N124",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N123",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N122",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N121",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "N126",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Lift_1",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Lift_2",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Lift_3",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Lift_4",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Lift_5",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Bathroom_1",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Bathroom_2",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Bathroom_3",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Bathroom_4",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Accessible_toilet_1",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Accessible_toilet_2",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "Accesible_toilet_3",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_1",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_2",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_3",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_4",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_5",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_6",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stair_7",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_8",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_9",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_10",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_11",
        building: buildings.SirIanWood,
        level: 1
    },
    {
        roomId: "stairs_12",
        building: buildings.SirIanWood,
        level: 1
    }
];
const SirIanWoodFloor2 = [
    {
        roomId: "N203",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N204",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N200a",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N204a",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N209a",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N209",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N212",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N213",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N216",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N215a",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N217",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N228",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N228-2",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N249",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N429g",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N249a",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N250",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N252",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N253",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N281",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N280",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N249f",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N249c",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N218",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N225",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N227",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N219",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N220",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N221",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N224",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N229",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N230",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N226",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N231",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N239",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N237",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N243",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS201",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS202",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS205",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS208a",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "MS208b",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS208c",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS222",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS221",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS220",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS219",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS218",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS217",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS216",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS215",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS214",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS203",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "NS204",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N241",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N247",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "N242",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_1",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_2",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_3",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_4",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_5",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_6",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_7",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_8",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_9",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Bathroom_10",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Accessible_toilet_1",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Accessible_toilet_2",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Accessible_toilet_3",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Layer_73",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Lift_1",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Liftt_2",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Lift_3",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Lift_4",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Lift_5",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "Lift_6",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_1",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_2",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_3",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_4",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_5",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_6",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_7",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_8",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_9",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_10",
        building: buildings.SirIanWood,
        level: 2
    },
    {
        roomId: "stairs_11",
        building: buildings.SirIanWood,
        level: 2
    }
];
const SirIanWoodFloor3 = [
    {
        roomId: "Reception",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N309",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N310",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "Main_Atrium",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N311",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N318",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N317",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N318a",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N319",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N320",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N325",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N328",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N328a",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N328b",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N327",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N331",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N334",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N336",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N329",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N332",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N339",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N340",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N341",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N346",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N345",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N344",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "N342",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS301a",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS304",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS303",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS305",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS311",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS311a",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS309",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS310",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS320",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS321",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS322",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS323",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS324",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS326",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS325",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "NS318",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "bathroom_3",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "bathroom_1",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "bathroom_2",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "Layer_39",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "Accessible_toilet_1",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "Accessible_toilet_2",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "Accessible_toilet_3",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "Accessible_toilet_4",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "lift_1",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "lift_2",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "lift_3",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "lift_4",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "lft_5",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "lift_6",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "lift_7",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "stairs_1",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "stairs_2",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "stairs_3",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "stairs_4",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "stairs_5",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "stairs_6",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "stairs_7",
        building: buildings.SirIanWood,
        level: 3
    },
    {
        roomId: "stairs_8",
        building: buildings.SirIanWood,
        level: 3
    }
];
const SirIanWoodFloor4 = [
    {
        roomId: "N405",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N403",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N402",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N407",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N410",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N412",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N414",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N415",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N419",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N424",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N426b",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N426a",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N426",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N426a-2",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "SOC_Office",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N427",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N432a",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N429",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N433",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N432j",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N432b",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N432c",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N432d",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N432e",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N453",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N430",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N431",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N432",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N436",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N435",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N436a",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N425",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N418",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N413",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N452",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N451",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N411",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N404",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447b",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447a",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447c",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447d",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447e",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447i",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447j",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447k",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447l",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447g",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447h",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447o",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N447p",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N455",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N454",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N445",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N441",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N443",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N442",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N438",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N439",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "N440",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "NS419",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "NS402",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "NS411",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "NS410",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "NS412",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "NS413",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "NS415",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "NS418",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "NS401",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "stairs_2",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "stairs_1",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "stairs_3",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "stairs_4",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "stairs_5",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "stairs_6",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "stairs_7",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "stairs_8",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "stairs_9",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Lift_1",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Lift_2",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Lift_3",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Lift_4",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Lift_5",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Lift_6",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Lift_7",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "bathroom_1",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "bathroom_2",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "bathroom_3",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "bathroom_4",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "bathroom_5",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "bathroom_6",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "bathroom_7",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "bathroom_8",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "bathroom_9",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Accessible_toilet_1",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Accessible_toilet_2",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Accessible_toilet_3",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Accessible_toilet_4",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Accessible_toilet_5",
        building: buildings.SirIanWood,
        level: 4
    },
    {
        roomId: "Accessible_toilet_6",
        building: buildings.SirIanWood,
        level: 4
    }
];
const SirIanWoodFloor5 = [
    {
        roomId: "Library_5",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N533",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N533a",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N530",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N528",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N529",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N526",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N525",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N523",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N527",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N502",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N502a",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N501",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N501a",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N504",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N505",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N506",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N508",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N509",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N509a",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N516b",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N516c",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N516d",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N516e",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N516",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N516f",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N519",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N512",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N513",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N514",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N515a",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N515",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N515b",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N517a",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N518",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N526a",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N531",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N532",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N536",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N537",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N539",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N540a",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N540b",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N540",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N540c",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N542",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N544",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N546",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N543",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N545",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548t",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548s",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548c",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548b",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548a",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548d",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548e",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548f",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548g",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548k",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548l",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548h",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548i",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548j",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N458p",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548q",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548r",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "NS515",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "N548",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "NS501",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "NS502",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "bathroom_1",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "bathroom_2",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "bathroom_3",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "bathroom_4",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "bathroom_5",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "bathroom_6",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "bathroom_7",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "bathroom_8",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "stairs_1",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "stairs_2",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "stairs_3",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "stairs_4",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "stairs_5",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "stairs_6",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "stairs_7",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "stairs_8",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "stairs_9",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Accessible_toilet_1",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Accessible_toilet_2",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Acessible_toilet_3",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Accessible_toilet_4",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Accessible_toilet_5",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Accessible_toilet_6",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Lift_1",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Lift_2",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Lift_3",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Lift_4",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Lift_5",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Lift_6",
        building: buildings.SirIanWood,
        level: 5
    },
    {
        roomId: "Lift_7",
        building: buildings.SirIanWood,
        level: 5
    }
];
const SirIanWoodFloor6 = [
    {
        roomId: "N601",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N607a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N611",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N612",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N612a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N616",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N619",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N625",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N626",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N627",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N628",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N630",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N630b",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N630a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N633b",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N633a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N633",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N633f",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N633g",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N633e",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N633d",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N633c",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N634a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N634",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N634c",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N634b",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N640a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N640",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N640c",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N640b",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N635",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N632a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N642",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N632",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N631",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N629",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N631a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N618",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N615",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N613a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N613b",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N613",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N613d",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N613c",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N617",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N611a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N617a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N608",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N605",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N602a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N602",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "N601a",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "stairs_1",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "stairs_2",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "stairs_3",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "stairs_4",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Bathroom_1",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Bathroom_2",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Bathroom_3",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Bathroom_4",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Bathroom_5",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Bathroom_6",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Accesible_toilet_1",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Accessible_toilet_2",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Accessible_toilet_3",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Accessible_toilet_4",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Accessible_toilet_5",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Lift_1",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Lift_2",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Lift_3",
        building: buildings.SirIanWood,
        level: 6
    },
    {
        roomId: "Library_6",
        building: buildings.SirIanWood,
        level: 6
    }
];
const SirIanWood = [...SirIanWoodFloor1, ...SirIanWoodFloor2, ...SirIanWoodFloor3, ...SirIanWoodFloor4, ...SirIanWoodFloor5, ...SirIanWoodFloor6];

const IshbelGordonFloor1 = [
    {
        roomId: "level 1 stairs 3",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "level 1 lift 2",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "level 1 lift 1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H101",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H102",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H103",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H104",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "level 1 stairs 1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H105",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H106",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H107",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H105/1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H106/1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H108",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H109",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H110",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H111",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H112",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H113",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H113/1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H114",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H114/1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H115",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H115/1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H116",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H117",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H117/1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H117/2",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H118",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H118/1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "level 1 lift 3",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H119",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H120",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H120/1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H120/2",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H120/3",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H121",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H122",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "level 1 stairs 4",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H123",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H123/1",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H124",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "H125",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "level 1 stairs 2",
        building: buildings.IshbelGordon,
        level: 1
    },
    {
        roomId: "level 1 stairs 0",
        building: buildings.IshbelGordon,
        level: 1
    }
];
const IshbelGordonFloor2 = [
    {
        roomId: "level 2 stairs 3",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "level 2 lift 2",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "level 2 lift 1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H202",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H203",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H204",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H204/1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H205",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H205/1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H206",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H206/1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H207",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H208",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H210",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H211",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H212",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H214",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H216",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H217",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H218",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H219",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H219/1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H220",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H221",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H222",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H223",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H224",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H224/1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H224/2",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H225",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H225/1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H226",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H227",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H227/1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H229",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H229/1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H229/2",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H229/3",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H229/4",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H229/5",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "level 2 stairs 4",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "level 2 lift 3",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H230",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H230/1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H231",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H232",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H233",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "level 2 stairs 1",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H201",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "level 2 stairs 2",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "H234",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "level 2 stairs 0 A",
        building: buildings.IshbelGordon,
        level: 2
    },
    {
        roomId: "level 2 stairs 0 B",
        building: buildings.IshbelGordon,
        level: 2
    }
];
const IshbelGordonFloor3 = [
    {
        roomId: "H301",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H302",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H303",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H304",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H306",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H307",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H308",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H308/1",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H309",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H310",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H311",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H312",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H313",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H313/1",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H313/2",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H315",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H315/1 bathroom",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H314/1 bathroom ",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H314",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H317",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H318",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H319",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H320",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H320/a",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H320b",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H320/c",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H321/1",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "level 3 stairs 2",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H332",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H331",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H321",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H321a",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H329",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "level 3 stairs 1",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H322",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H323",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H330",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H232/1",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H324",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H324/1 bathroom",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H325",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H325/1 bathroom",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H326",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H327",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H328",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H333",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H333a",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H333b",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H333c",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H333d",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H333e",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H333g",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H334",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H335",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H336",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "level 3 stairs 0 A",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "level 3 stairs 0 B",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "level 3 lift 1",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "level 3 lift 2",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "level 3 stairs 3",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "level 3 stairs 4",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "level 3 lift 3",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H337",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H338",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H339",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H340",
        building: buildings.IshbelGordon,
        level: 3
    },
    {
        roomId: "H341",
        building: buildings.IshbelGordon,
        level: 3
    }
];
const IshbelGordonFloor4 = [
    {
        roomId: "H401",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H401/1",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H402",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H403",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H404",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H405",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H406",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H407",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H408",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H409",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H410",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H412",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H413",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H412/1",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H417",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H418",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H419",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H419/1",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H419/2",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H419/3",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H419/4",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H419/5",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "Reception area",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 lift 1",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 lift 2",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 stairs 3",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 stairs 4",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 lift 3",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 stairs 1",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H416 bathroom",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414/1",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414/2",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414/4",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414/5",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414/6",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414/7",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414/8",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414/9",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "H414/10",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 stairs 2",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 stairs 0 A",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 stairs 0 B",
        building: buildings.IshbelGordon,
        level: 4
    },
    {
        roomId: "level 4 stairs 0 C",
        building: buildings.IshbelGordon,
        level: 4
    }
];
const IshbelGordonFloor5 = [
    {
        roomId: "H501",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H501/1 bathroom",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H502",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H503",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H504",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H506",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H507",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H508",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H509 DATA RISER",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H510/1",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H510/2",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H510",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H510/3",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H510/4",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H511",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H511/1 MALE BATHROOM",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H512",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H512/1 FEMALE BATHROOM",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H513 STAFF COMMON ROOM",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H514",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H514/1",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H514/2",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H514/3",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/1",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/2",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/3",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/4",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/5",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/6",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/7",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/8",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/9",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H515/10",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H516",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H517",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H518",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H517/1",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H519",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H520",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H522",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H523",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "H524",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 lift 1",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 lift 2",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 stairs 3",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 stairs 4",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 lift 3",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 ELECTRICAL RISER",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 stairs 2",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 stairs 1",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 DATA RISER",
        building: buildings.IshbelGordon,
        level: 5
    },
    {
        roomId: "level 5 r.w.drop",
        building: buildings.IshbelGordon,
        level: 5
    }
];
const IshbelGordonFloor6 = [
    {
        roomId: "H601",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H601/1 BATHROOM",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H602",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H603",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H604",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H605",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H606",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H607",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H608",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H609",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H610",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H611",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H611/1 MALE BATHROOM",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H612",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H612/1 FEMALE BATHROOM",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H613",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614/1",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614/2",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614/3",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614/4",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614/5",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614/6",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614/7",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614/8",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H615",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H616",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H617",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H617/1",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H618",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H619",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H620",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H620/1",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H621",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H622",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H623",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H624",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H625",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H626",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H627",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H628",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H629",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "level 6 stairs 1",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "level 6 lift 1",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "level 6 lift 2",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "level 6 stairs 3",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "level 6 stairs 4",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "level 6 lift 3",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "level 6 stairs 2",
        building: buildings.IshbelGordon,
        level: 6
    },
    {
        roomId: "H614/9",
        building: buildings.IshbelGordon,
        level: 6
    }
];
const IshBelGordonFloor7 = [
    {
        roomId: "AHU 15 RET",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "AHU 15 SUP",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "AHU 12B SUP",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "AHU 12B RET",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "AUH 13B RET",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "AUH 13B SUP",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "level 7 stairs 1",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "H702",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "level 7 DRY RISER 1 ",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "level 7 hot water storage",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "H701 boiler room",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "level 7 electrical riser 1",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "H704",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "level 7 air chillers",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "AHU 14B SUP",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "AHU 14B RET",
        building: buildings.IshbelGordon,
        level: 7
    },
    {
        roomId: "level 7 stairs 3",
        building: buildings.IshbelGordon,
        level: 7
    }
];
const IshbelGordon = [...IshbelGordonFloor1, ...IshbelGordonFloor2, ...IshbelGordonFloor3, ...IshbelGordonFloor4, ...IshbelGordonFloor5, ...IshbelGordonFloor6, ...IshBelGordonFloor7];

const RGUSportFloor1 = [
    {
        roomId: "SST01",
        building: buildings.RGUSport,
        level: 1
    },
    {
        roomId: "S108",
        building: buildings.RGUSport,
        level: 1
    },
    {
        roomId: "S107",
        building: buildings.RGUSport,
        level: 1
    },
    {
        roomId: "S108b",
        building: buildings.RGUSport,
        level: 1
    },
    {
        roomId: "S108c",
        building: buildings.RGUSport,
        level: 1
    },
    {
        roomId: "S108a",
        building: buildings.RGUSport,
        level: 1
    }
];
const RGUSportFloor2 = [
    {
        roomId: "sports hall 3",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "sports hall 2",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "sports hall 1",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "hall store 1",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "electrical store (switchroom)",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S102",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S103",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "SST03",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S103a disabled toilet",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S103b female toilet",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S103c",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S103d male toilet",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "SLS01",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S103e electrical cupboard(comms)",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S104 hall store 2",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S104a",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S105",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S105a",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "SST02",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S106",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "SST01",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S108",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S108a PAC",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S108B Acid",
        building: buildings.RGUSport,
        level: 2
    },
    {
        roomId: "S108c HTH",
        building: buildings.RGUSport,
        level: 2
    }
];
const RGUSportFloor3 = [
    {
        roomId: "S216",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S215",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S214",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S214f",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S214e",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S214d",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S214c",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S214b",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S214a",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S212a",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S212",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S212B",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S213",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S211a pool cupboard",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S207 male changing room",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S208 family changing room",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S208a",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S208b disabled shower disabled toilet",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S208c family disabled toilet",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S208d family disabled shower",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S207b male disabled toilet",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S207a male toilet",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S210",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S210a",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S210b female toilets",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S210c female disabled toilet",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S211b",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "SST02 UP",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "SST02 DOWN",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S206 first aid room",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S206a",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S205 climbing cupboard",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S205a",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S205b",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S203b",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S203c electrical cupboard",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S203d store",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S204",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S209 climbing zone (wall)",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "SST03 down",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "SST03 up",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S201",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S202 cleaners cupboard",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S203 studio 3",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S203a studio 3a",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "SST04",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "S211 swimming pool",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "SLS02",
        building: buildings.RGUSport,
        level: 3
    },
    {
        roomId: "SST05",
        building: buildings.RGUSport,
        level: 3
    }
];
const RGUSportFloor4 = [
    {
        roomId: "S313 main gym",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S314 sports president",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S315 head of sport",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S302 main office",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S303a",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S303 colleague room",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S304 physio room",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S305 S&C room Strength and Conditioning)",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S305a S&C store",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S306 toilet",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S307 toilet",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S308 disabled toilet",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S309 male toilet",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S310 female toilet",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S311",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S311a electrical cupboard",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S311c",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S311b",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S312 kitchen",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "S300",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "SST03",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "SST04",
        building: buildings.RGUSport,
        level: 4
    },
    {
        roomId: "SST02",
        building: buildings.RGUSport,
        level: 4
    }
];
const RGUSportFloor5 = [
    {
        roomId: "S404 disabled toilet",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S403 disabled toilet",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "SST02",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S402 G2",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S408 G2 store",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S408a",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S407 cleaner cupboad",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S409 G2 plant room",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S406",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S405",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "SST04",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S401 studio1",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S401b studio1 store",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "S401a studio1 store",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "SST03",
        building: buildings.RGUSport,
        level: 5
    },
    {
        roomId: "COMMS PLANT ROOM",
        building: buildings.RGUSport,
        level: 5
    }
];
const RGUSport = [...RGUSportFloor1, ...RGUSportFloor2, ...RGUSportFloor3, ...RGUSportFloor4, ...RGUSportFloor5];

const BusinessSchoolFloor1 = [
    {
        roomId: "101",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "102",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "103",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "104",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "105",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "106",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "107",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "108",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "109",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "110",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "111",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "112",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "113",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "114",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "115",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "116",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "117",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "118",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "119",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "120",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "121",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "122",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "123",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "124",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "105a",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "107a",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "108a",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "104a",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "113b",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "113c",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "113a",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "stair A level 1",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "stair B level 1",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "stair C level 1",
        building: buildings.BusinessSchool,
        level: 1
    },
    {
        roomId: "elevator A level 1",
        building: buildings.BusinessSchool,
        level: 1
    }
];
const BusinessSchoolFloor2 = [
    {
        roomId: "201",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "202",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "203",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "201c",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "201d",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "204",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "205",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "205a",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "206",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "207",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "208",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "209",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "210",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "211",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "212",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "213",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "214",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "215",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "216",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "217",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "218",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "219",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "220",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "221",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "222",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "216a",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "223",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "224",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "225",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "225a",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "227",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "226",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "226a",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "226b",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "228",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "228a",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "230",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "229",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "231",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "232",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "232a",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "232b",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "233",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "234",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "234b",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "234a",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "234c",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "234d",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "elevator A level 2",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "stairs A level 2",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "stairs B level 2",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "stairs C level 2",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "stairs D level 2",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "elevator B level 2",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "elevator C level 2",
        building: buildings.BusinessSchool,
        level: 2
    },
    {
        roomId: "stairs E level 2",
        building: buildings.BusinessSchool,
        level: 2
    }
];
const BusinessSchoolFloor3 = [
    {
        roomId: "301",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "302",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "303",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "304",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "305",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "306",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "307",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "308",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "309",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "310",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "311",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "312",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "313",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "314",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "315",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "316",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "317",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "318",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "319",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "320",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "321",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "322",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "323",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "324",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "325",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "326",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "327",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "328",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "329",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "330",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "331",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "332",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "333",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "334",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "335",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "336",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "336b",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "336c",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "336d",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "337",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "338",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "339",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "340",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "340a",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "340b",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "340c",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "340d",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "340e",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "340f",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "elevator A level 3",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "stairs A level 3",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "stairs B level 3",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "stairs C level 3",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "elevator B level 3",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "stairs D level 3",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "stairs E level 3",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "stairs F level 3",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "stairs G level 3",
        building: buildings.BusinessSchool,
        level: 3
    },
    {
        roomId: "elevator C level 3",
        building: buildings.BusinessSchool,
        level: 3
    }
];
const BusinessSchoolFloor4 = [
    {
        roomId: "401a",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401b",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401c",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401d",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401e",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401f",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401g",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401h",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401i",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401j",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401k",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401l",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401m",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "401",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "402",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "403",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "404",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "405",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "405a",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "406",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "407",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "407a",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "408",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "408b",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "411",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "410",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "408a",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "412",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "409",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "413",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "414",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "415",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "416",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "417",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "418",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "419",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "419a",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "419b",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "420",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "421",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "422",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "423",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "424",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "423b",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "425",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "426",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "426a",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "427",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "428",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "429",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "430",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "431",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "431a",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "431b",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "elevator A level 4",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "stairs A level 4",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "stairs B level 4",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "elevator B level 4",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "stairs C level 4",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "stairs D level 4",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "stairs E level 4",
        building: buildings.BusinessSchool,
        level: 4
    },
    {
        roomId: "elevator C floor 4",
        building: buildings.BusinessSchool,
        level: 4
    }
];
const BusinessSchoolFloor5 = [
    {
        roomId: "level 5",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501a",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501b",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501c",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501d",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501e",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501f",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501g",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501h",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501i",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501j",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501k",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501l",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501m",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501n",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "501o",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "502",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "503",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "504",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "505",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "506",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "507",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "507a",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "508",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "508a",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "508b",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "509",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "510",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "511",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "512",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "512a",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "513",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "514",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "515",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "515a",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "516",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "517",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "518",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "519",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "519b",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "520",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "521",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "522",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "523",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "524",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "525",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "513a",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "elevator A level 5",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "stairs A level 5",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "stairs B level 5",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "elevator B level 5",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "stairs C level 5",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "stairs D level 5",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "stairs E level 5",
        building: buildings.BusinessSchool,
        level: 5
    },
    {
        roomId: "elevator C level 5",
        building: buildings.BusinessSchool,
        level: 5
    }
];
const BusinessSchoolFloor6 = [
    {
        roomId: "level 6",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601a",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601b",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601c",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601d",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601e",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601f",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601g",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601h",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601i",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601j",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601k",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601l",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "601m",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "602",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "603",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "604",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "605",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "606",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "607",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "608",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "609",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "610",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "611",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "612",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "613",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "614",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "615",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "615a",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "615b",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "616",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "617",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "618",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "619",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "620",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "621",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "622",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "623",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "624",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "625",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "626",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "stairs A level 6",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "elevator A level 6",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "stairs B level 6",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "stairs C level 6",
        building: buildings.BusinessSchool,
        level: 6
    },
    {
        roomId: "elevator B level 6",
        building: buildings.BusinessSchool,
        level: 6
    }
];

const BusinessSchool = [...BusinessSchoolFloor1, ...BusinessSchoolFloor2, ...BusinessSchoolFloor3, ...BusinessSchoolFloor4, ...BusinessSchoolFloor5, ...BusinessSchoolFloor6];

const CentralServicesLevel1 = [
    {
        roomId: "G107f",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G107e",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G106",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "Bathroom 1",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "Bathroom 2",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "Accessible Toilet 1",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G103",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G101",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "stairs 1",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "stairs 2",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G107",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G107g",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G107a",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G107b",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G107c",
        building: buildings.CentralServices,
        level: 1
    },
    {
        roomId: "G107d",
        building: buildings.CentralServices,
        level: 1
    }
]

const CentralServicesLevel2 = [
    {
        roomId: "stairs 2",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "stairs 1",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "G201",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "G202",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "Bathroom 1",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "Bathroom 2",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "Accessible Toilet 1",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "G204",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "G207a",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "G207b",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "G207c",
        building: buildings.CentralServices,
        level: 2
    },
    {
        roomId: "G207d",
        building: buildings.CentralServices,
        level: 2
    }
];

const CentralServicesLevel3 = [
    {
        roomId: "G301",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "G302",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "G307",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "Bathroom 1",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "Bathroom 2",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "Accessible Toilet 1",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "G304",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "stairs 1",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "G307a",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "G307b",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "G307c",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "G307d",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "stairs 2",
        building: buildings.CentralServices,
        level: 3
    },
    {
        roomId: "G307e",
        building: buildings.CentralServices,
        level: 3
    }
];

const CentralServicesLevel4 = [
    {
        roomId: "stairs 2",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "stairs 1",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "G405",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "G406",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "G407",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "G408",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "G408a",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "G409",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "G410",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "G404",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "Accessible Toilet 1",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "Bathroom 1",
        building: buildings.CentralServices,
        level: 4
    },
    {
        roomId: "G401",
        building: buildings.CentralServices,
        level: 4
    }
];

const CentralServices = [...CentralServicesLevel1, ...CentralServicesLevel2, ...CentralServicesLevel3, ...CentralServicesLevel4];

const GarthdeeHouseAnnexeLevel1 = [
    {
        roomId: "SA18",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "3cr",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "stairs 2",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA23",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA24",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA25",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA26",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA27",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA28-29",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA30",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA31",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA31a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA30a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA30b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA30c",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA32",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA33",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA34",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA35",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA36",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA37",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA38",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA39",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA40",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA41",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA41a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA36a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA38a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA44",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA43",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA43a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA46",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA46a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA47",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA47a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA47b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA47c",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA48",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA49",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA50",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA48a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA21",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "stairs 3",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA1",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA1a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA1b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA3",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA4",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA5",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA6",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA7",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA8",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA9",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA10",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA13",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "stairs 1",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA14",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "SA12",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "stairs 4",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    },
    {
        roomId: "stairs 5",
        building: buildings.GarthdeeHouseAnnexe,
        level: 1
    }
];

const GarthdeeHouseAnnexeLevel2 = [
    {
        roomId: "SB3",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB2",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB2a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB2b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB4a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB4",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB5",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB6b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB6a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB6",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB7",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB8",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB9",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB10",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB11",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB12",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB12a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB13",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB14",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB14a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB15",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB18",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB19",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB20",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB21",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB21a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB22",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB22a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB22b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB23",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB24",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB25",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "stairs 5",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB26",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB27",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB28",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB29",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB30",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB31",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB32",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB33",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB34",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB34a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB35",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "Bathroom 1",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB36",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB37a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB37b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB37",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB38",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB39",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB39a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB39b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB39c",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB39d",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB39e",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB39f",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "Bathroom 1_2",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB40c",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB40d",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB40",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB40a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB40b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB43",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB42",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "SB41",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "stairs 2",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "stairs 3",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "stairs 4",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "stairs 8",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "stairs 9",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "stairs 10",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "stairs 11",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "entrance 1",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "entrance 2",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    },
    {
        roomId: "entrance 3",
        building: buildings.GarthdeeHouseAnnexe,
        level: 2
    }
];

const GarthdeeHouseAnnexeLevel3 = [
    {
        roomId: "SC1",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC2",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC3",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC4",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC5",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC6",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC7",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC7a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC8",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC9",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC10",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC11",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "Bathroom 1",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC12b",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC14",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC15",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC16",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC17",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC18",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "stairs 3",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC20",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC20a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "Bathroom 2",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC22",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC22a",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC24",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC25",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC26",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC27",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC28",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC29",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC30",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC31",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "SC32",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "stairs 1",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "stairs 2",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    },
    {
        roomId: "stairs 4",
        building: buildings.GarthdeeHouseAnnexe,
        level: 3
    }
];

const GarthdeeHouseAnnexeLevel4 = [
    {
        roomId: "stairs 1",
        building: buildings.GarthdeeHouseAnnexe,
        level: 4
    }
];

const GarthdeeHouseAnnexe = [...GarthdeeHouseAnnexeLevel1, ...GarthdeeHouseAnnexeLevel2, ...GarthdeeHouseAnnexeLevel3, ...GarthdeeHouseAnnexeLevel4];

const EnergyTransitionLevel1 = [
    {
        roomId: "EA8",
        building: buildings.EnergyTransition,
        level: 1
    },
    {
        roomId: "EA7",
        building: buildings.EnergyTransition,
        level: 1
    },
    {
        roomId: "EA6",
        building: buildings.EnergyTransition,
        level: 1
    },
    {
        roomId: "EA5",
        building: buildings.EnergyTransition,
        level: 1
    },
    {
        roomId: "EA4",
        building: buildings.EnergyTransition,
        level: 1
    },
    {
        roomId: "EA3",
        building: buildings.EnergyTransition,
        level: 1
    },
    {
        roomId: "EA2",
        building: buildings.EnergyTransition,
        level: 1
    },
    {
        roomId: "EA1",
        building: buildings.EnergyTransition,
        level: 1
    },
    {
        roomId: "EA1c/EA1a",
        building: buildings.EnergyTransition,
        level: 1
    }
];

const EnergyTransitionLevel2 = [
    {
        roomId: "EB2",
        building: buildings.EnergyTransition,
        level: 2
    },
    {
        roomId: "EB3",
        building: buildings.EnergyTransition,
        level: 2
    },
    {
        roomId: "EB4",
        building: buildings.EnergyTransition,
        level: 2
    },
    {
        roomId: "EB5",
        building: buildings.EnergyTransition,
        level: 2
    },
    {
        roomId: "EB6",
        building: buildings.EnergyTransition,
        level: 2
    },
    {
        roomId: "EB7",
        building: buildings.EnergyTransition,
        level: 2
    },
    {
        roomId: "EB8",
        building: buildings.EnergyTransition,
        level: 2
    },
    {
        roomId: "Bathroom 1",
        building: buildings.EnergyTransition,
        level: 2
    },
    {
        roomId: "Bathroom 2",
        building: buildings.EnergyTransition,
        level: 2
    },
    {
        roomId: "EB1",
        building: buildings.EnergyTransition,
        level: 2
    }
];

const EnergyTransition = [...EnergyTransitionLevel1, ...EnergyTransitionLevel2];

const GraysArtLevel1 = [
    {
        roomId: "GP1a",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "GP1",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHST01",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "stairs 2",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP1",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP2",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP3",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP4",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "stairs 3",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP18",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP9",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP10",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP11",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP12",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP13",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP14",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP15",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP16",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP17",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP7",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP8",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP1a",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "GP6",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "GP7",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "GP3",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "GP3a",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "GP4",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "GP4a",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "GP5a",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "GP5",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "stairs 1",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP6",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP5",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP4a",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHP4b",
        building: buildings.GraysArt,
        level: 1
    },
    {
        roomId: "DHST02",
        building: buildings.GraysArt,
        level: 1
    }
];

const GraysArtLevel2 = [
    {
        roomId: "GA1",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA5",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA6a",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA7",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA8",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA9",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA10a",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA11",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA12",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA13",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA13a",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA15",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA16a",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA17",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA18",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA19",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA20",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA23",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA20a",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "Bathroom 2",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA29",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA24",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA25",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA26",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA27",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA28",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA30",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA31",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA32",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA33",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA34",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA34a",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA34b",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA35",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA36",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA39",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA39_2",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA43",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA43a",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA46",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA47",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA47a",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA45",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA44",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA48",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA49",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "Bathroom 4",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA56",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA57",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "Bathroom 3",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA54",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA53",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA53b",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA53c",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA59",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 6",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 11",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 4",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 2",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 8",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 10",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "DHA6",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "DHA5",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "DHA2",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "DHA3",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "DHA4",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "DHA4a",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 9",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "DHA1",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 3",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 5",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 7",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA41",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA3",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA4",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA16",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "stairs 1",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA10",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA15_2",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "Bathroom 1",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA22",
        building: buildings.GraysArt,
        level: 2
    },
    {
        roomId: "GA21",
        building: buildings.GraysArt,
        level: 2
    }
];

const GraysArtLevel3 = [
    {
        roomId: "stairs 1",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GM1a",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GMA1b",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GM1c",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "stairs 2",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "stairs 3",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GA34m",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GA35m",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GA38m",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "stairs 4",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GA50m",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GA51m",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "stairs 5",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GA38m_2",
        building: buildings.GraysArt,
        level: 3
    },
    {
        roomId: "GA43m",
        building: buildings.GraysArt,
        level: 3
    }
];

const GraysArtLevel4 = [
    {
        roomId: "GB1",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB2",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB3",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB4",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB5",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB7",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB8",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB9",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB9a",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB9b",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB10",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB11",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB11a",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB12",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB13",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB14",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB14a",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB15a",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB16",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB17",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB18",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB19",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "Bathroom 1",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "Bathroom 2",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB20",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB21",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "stairs 4",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB22",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "stairs 5",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "stairs 1",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "stairs 3",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "GB15",
        building: buildings.GraysArt,
        level: 4
    },
    {
        roomId: "stairs 2",
        building: buildings.GraysArt,
        level: 4
    }
];

const GraysArtLevel5 = [
    {
        roomId: "GB21m",
        building: buildings.GraysArt,
        level: 5
    },
    {
        roomId: "GM2a",
        building: buildings.GraysArt,
        level: 5
    },
    {
        roomId: "GM2b",
        building: buildings.GraysArt,
        level: 5
    },
    {
        roomId: "GM2c",
        building: buildings.GraysArt,
        level: 5
    },
    {
        roomId: "stairs 2",
        building: buildings.GraysArt,
        level: 5
    },
    {
        roomId: "GB15m",
        building: buildings.GraysArt,
        level: 5
    },
    {
        roomId: "stairs 1",
        building: buildings.GraysArt,
        level: 5
    }
];

const GraysArtLevel6 = [
    {
        roomId: "GC1",
        building: buildings.GraysArt,
        level: 6
    },
    {
        roomId: "GC2",
        building: buildings.GraysArt,
        level: 6
    },
    {
        roomId: "GC3",
        building: buildings.GraysArt,
        level: 6
    },
    {
        roomId: "GC4/GC5",
        building: buildings.GraysArt,
        level: 6
    },
    {
        roomId: "GC6",
        building: buildings.GraysArt,
        level: 6
    },
    {
        roomId: "GC7",
        building: buildings.GraysArt,
        level: 6
    },
    {
        roomId: "GC8",
        building: buildings.GraysArt,
        level: 6
    },
    {
        roomId: "stairs 2",
        building: buildings.GraysArt,
        level: 6
    },
    {
        roomId: "stairs 1",
        building: buildings.GraysArt,
        level: 6
    }
];

const GraysArt = [...GraysArtLevel1, ...GraysArtLevel2, ...GraysArtLevel3, ...GraysArtLevel4, ...GraysArtLevel5, ...GraysArtLevel6];

const GatehouseLevel1 = [
    {
        roomId: "GH108",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH107",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH106",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH105",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GHST01",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "stairs 1",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH114",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "Accessible Toilet 1",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "Bathroom 1",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "Bathroom 2",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH110",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH109",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH102",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH103",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH104",
        building: buildings.Gatehouse,
        level: 1
    },
    {
        roomId: "GH101",
        building: buildings.Gatehouse,
        level: 1
    }
];

const Gatehouse = [...GatehouseLevel1];

export const rooms = [...SirIanWood, ...IshbelGordon, ...RGUSport, ...BusinessSchool, ...CentralServices, ...GarthdeeHouseAnnexe, ...EnergyTransition, ...GraysArt, ...Gatehouse];

export const facilities = ['Toilet', 'Lift', 'Stair', 'Bathroom'];

/*
let a = []; 
document.getElementById("CentralServicesLevel1").childNodes.forEach(b => {
    a.push({
        roomId: b.id,
        building: 'CentralServices',
        level: 1
    }) 
})
a
*/