import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useGuiStore = defineStore('gui', () => {

    const test = () => {
        
        console.log("works")
    };

    return {test};
});