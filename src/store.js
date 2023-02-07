import { reactive } from 'vue';

export const store = reactive({
    cardsList: [],
    archetypesList: [],
    loading: true,
    selectValue: ''

});