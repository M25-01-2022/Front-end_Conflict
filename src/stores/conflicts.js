import { defineStore } from "pinia";
import { ref } from "vue";


export const useConflictsStore = defineStore("conflicts", () => {
    const API_URL = "http://localhost:8080/api/v1/conflicts"

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
            const response = await fetch(`${API_URL}/${id}`);
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
        try {
            const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newConflict)
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error al agregar conflicto:", errorText);
            return;
        }
        const data = await response.json();
        console.log("Conflicto agregado:", data);

        conflicts.value.push(data);
        } catch (e) {
                console.error("Error al conectar con API:", e);
        }
    }

    const deleteConflict = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {method: 'DELETE'});
            if (response.ok) {
                conflicts.value = conflicts.value.filter(c => c.id !== id);
            }
        } catch (e) {
            console.error("Error al eliminar conflicto:", e);
        }
    }

    return {
        conflicts,
        loading,
        error,
        getConflicts,
        getConflictById,
        addConflict,
        deleteConflict
    }
},{
    persist: true
});