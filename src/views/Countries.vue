<script setup>
import { ref, onMounted } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';

const countries = ref([]);
const loading = ref(false);
const error = ref(false);

const API_URL = "https://fullstack-tasca-conflict-production-198b.up.railway.app";

const fetchCountries = async () => {
    loading.value = true;
    try {
        const response = await fetch(`${API_URL}/api/v1/countries`);
        const data = await response.json();
        countries.value = data;
        error.value = false;
    } catch (e) {
        console.error("Error cargando países:", e);
        error.value = true;
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
  fetchCountries();
});
</script>

<template>
  <HeaderComponent />
  <section class="counties-page">
    <h2>Lista de Países</h2>

    <p v-if="loading">Cargando países...</p>
    <p v-if="error">Error al cargar los países.</p>

    <ul v-else class="countries-list">
      <li v-for="country in countries" :key="country.id">
        <strong>ID:</strong> {{ country.id }} |
        <strong>Nombre:</strong> {{ country.name }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.countries-page {
    padding: 2rem;
    text-align: center;
}

.countries-list {
  list-style: none;
  padding: 0;
}

.countries-list li {
  background: #f3f4f6;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 8px;
  color: black;
}
</style>