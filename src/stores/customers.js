import { defineStore } from "pinia";
import { ref } from "vue";


export const useConflictsStore = defineStore("conflicts", () => {
    const API_URL = "http://localhost:8080/customers"

    const conflicts = ref([]);
    const loading = ref(false);
    const error = ref(false);

    const getConflicts = async () => {
        loading.value = true;
        try {
            const response = await fetch(API_URL)
            const data = await response.json();
            conflicts.value = data;
            error.value = false;
        } catch (e) {
            error.value = true;
            console.log("Error carrgant dades", e)
        } finally {
            loading.value = false;
        }
    }

    const getConflictById = async (id) => {
        loading.value = true;
        try {
            const response = await fetch('${API_URL/${id}}');
            const data = await response.json();
            error.value = false;
            return data;
        } catch (e) {
            error.value = true;
        } finally {
            loading.value = false;
        }
    }

    const addConflict = async (newConflict) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newConflict)
        });
        if (response.ok) {
            const data = await response.json();
            conflicts.value.push(data);
        }
    }

    return {
        conflicts,
        loading,
        error,
        getConflicts,
        getConflictById,
        addConflict
    }
},{
    persist: true
});