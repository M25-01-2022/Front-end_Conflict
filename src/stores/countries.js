import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCountriesStore = defineStore('countries', () => {
    const API_URL = 'fullstack-tasca-conflict-production.up.railway.app';
    const countries = ref([]);
    const loading = ref(false);

    const loadCountries = async () => {
        loading.value = true;
        try {
            const response = await fetch(`${API_URL}/api/v1/countries`);
            const data = await response.json();
            countries.value = data;
        } catch (e){
            console.error("Error cargando países:", e);
        } finally {
            loading.value = false;
        }
    };
    return { countries, loading, loadCountries};
});