<script setup>
import { ref, onMounted } from 'vue';
import { useConflictsStore } from '../stores/conflicts';
import { useCountriesStore } from '../stores/countries';

const conflictStore = useConflictsStore();
const countriesStore = useCountriesStore();

const newConflict = ref({
    name: '',
    startDate: '',
    status: '',
    description: '',
    countryIds: ['','']
});

onMounted(async () => {
    await countriesStore.loadCountries();
    console.log("Países cargados:", countriesStore.countries);
});

const handleSubmit = async () => {
    if (!newConflict.value.countryIds[0] || !newConflict.value.countryIds[1]) {
        alert('Selecciona ambos países');
        return;
    }
    if (newConflict.value.countryIds[0] === newConflict.value.countryIds[1]) {
        alert('Selecciona dos países diferentes');
        return;
    }
    const payload = {
        name: newConflict.value.name,
        startDate: newConflict.value.startDate,
        status: newConflict.value.status,
        description: newConflict.value.description,
        countryIds: newConflict.value.countryIds.map(id => Number(id))
    };
    await conflictStore.addConflict(payload);
        newConflict.value = {
        name: '',
        startDate: '',
        status: '',
        description: '',
        countryIds: ['','']
    };
};
</script>


<template>
    <form @submit.prevent="handleSubmit()" class="add-form">
        <input v-model="newConflict.name" placeholder="Nombre" required />
        <input v-model="newConflict.startDate" type="date" required />
        <select v-model="newConflict.status" required>
            <option value="" disabled>Selecciona un estado</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="FROZEN">FROZEN</option>
            <option value="ENDED">ENDED</option>
        </select>
        <input v-model="newConflict.description" placeholder="Descripción" required />

        <div class="country-group" v-if="countriesStore.countries.length">
            <div class="country">
                <label>País 1:</label>
                <select v-model="newConflict.countryIds[0]" required>
                    <option value="" disabled>Selecciona un país</option>
                    <option v-for="country in countriesStore.countries" :key="country.id" :value="country.id">
                        {{ country.name }}
                    </option>
                </select>
            </div>

            <div class="country">
                <label>País 2:</label>
                <select v-model="newConflict.countryIds[1]" required>
                    <option value="" disabled>Selecciona un país</option>
                    <option v-for="country in countriesStore.countries" :key="country.id" :value="country.id">
                        {{ country.name }}
                    </option>
                </select>
            </div>
        </div>

        <button type="submit">+</button>
    </form>
</template>


<style scoped>
.add-form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    
    gap: 12px;
    width: 90%;
    margin: 0 auto 2rem;

    padding: 2rem;
    background: cadetblue;
    border-radius: 10px;
}
button {
    background-color: blue;
    padding: 8px 32px;
    border-radius: 4px;
    color: white;
    font-weight: bold;
}
input, select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
}
.country-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.country {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 150px;
}
label{
    font-weight: bold;
    color: white;
}
@media (max-width: 900px) {
    .add-form {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
    }
    .country-group {
        flex-direction: row;
        gap: 10px;
    }
    .country {
        width: 100%;
    }
}
</style>