<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useConflictsStore } from '../stores/conflicts';

const route = useRoute();
const router = useRouter();
const conflict = ref(null);

const conflictStore = useConflictsStore();

onMounted(async () => {
    const conflictId = route.params.id;
    conflict.value = conflictStore.conflicts.find(c => c.id === parseInt(conflictId))
});
const getStatusClass = (status) => {
    switch (status) {
        case 'ACTIVE': return 'status-active';
        case 'FROZEN': return 'status-frozen';
        case 'ENDED': return 'status-ended';
        default: return ''
    }
}
</script>

<template>
<HeaderComponent/>
<div class="detail-container" v-if="conflict">
    <button class="btn-back" @click="router.back()">← Volver</button>
    <div class="detail-card">
        <h1>{{ conflict.name }}</h1>
        <span class="status-tag" :class="getStatusClass(conflict.status)">
            {{ conflict.status }}
        </span>

        <div class="info-section">
            <p><strong>ID:</strong> {{ conflict.id }}</p>
            <p><strong>Descripción:</strong> {{ conflict.description }}</p>
            <p><strong>Fecha de Inicio:</strong> {{ conflict.startdate ? new Date(conflict.startdate).toLocaleDateString() : 'No disponible' }}</p>
            <p><strong>Países involucrados:</strong> {{ conflict.countries.join(', ') }}</p>
        </div>
    </div>
</div>
</template>

<style scoped>
.detail-container {
    margin: 2rem auto;
    padding: 1rem;
}

.btn-back {
    background: none;
    border: none;
    color: #4f46e5;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 1rem;
}

.btn-back:hover {
    color: #6366f1;
}

.detail-card {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 2rem;
}

.detail-card h1 {
    font-weight: bold;
    color: black;
}

.status-tag {
    display: inline-block;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 15px;
    text-transform: uppercase;
    margin-bottom: 1rem;
}

.status-active { background-color: #10b981; color: #ffffff; }
.status-frozen { background-color: #f59e0b; color: #ffffff; }
.status-ended  { background-color: #ef4444; color: #ffffff; }

.info-section {
    display: grid;
    gap: 0.8rem;
    color: black;
}
</style>