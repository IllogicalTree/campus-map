import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useHighlightStore = defineStore('highlight', () => {
    const highlightedElement = ref();
    const highlightedElements = ref([]);
    return { highlightedElement, highlightedElements };
});