
import {
    rooms as roomsData, 
    buildings as buildingsData, 
    facilities as facilitiesData
} from '../../data';

let rooms = [];
let buildings = [];
let facilities = [];

console.log(import.meta.env.DEV ? 'Using locally stored data' : 'Fetching data from cloud functions')

if (import.meta.env.DEV) {
    rooms = roomsData;
    buildings = buildingsData;
    facilities = facilitiesData;
} else {
    Promise.all([fetch('data/rooms'), fetch('data/buildings'), fetch('data/facilities')]).then((values) => {
        Promise.all([values[0].json(), values[1].json(), values[2].json()]).then((values) => {
            rooms = values[0];
            buildings = values[1];
            facilities = values[2];
        });
    });
};

export {rooms, buildings, facilities};