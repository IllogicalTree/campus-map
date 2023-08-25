import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDrawerStore = defineStore('drawer', () => {
    const visible = ref();
    const isMobile = ref();

    const open = () => visible.value = true;
    const close = () => visible.value = false;
    const toggle = () => visible.value = !visible.value;
    const mobile = () => isMobile.value = true;
    const desktop = () => isMobile.value = false;

    return {
        visible, open, close, toggle, 
        isMobile, mobile, desktop
    }
    
});