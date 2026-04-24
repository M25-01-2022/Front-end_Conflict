<script setup>
import { onMounted } from 'vue';
import ConflictCard from '../components/ConflictCard.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useConflictsStore } from '../stores/conflicts';
import ConflictForm from '../components/ConflictForm.vue';
import { computed } from 'vue';

const conflictStore = useConflictsStore();

const activeConflicts = computed(() =>
    Array.isArray(conflictStore.conflicts) ? 
    conflictStore.conflicts.filter(c => c?.status === 'ACTIVE') : []
);

onMounted(async() => {
    await conflictStore.getConflicts();
    console.log("Dades carregades", conflictStore.conflicts)
})
</script>

<template>
    <HeaderComponent/>
    <h2>Conflicts Page</h2>
    <section id="conflicts-page">
        <h2 v-if="conflictStore.loading">Cargando...</h2>
        <h2 v-else-if="conflictStore.error">Algo ha salido mal, prueba en otro momento</h2>
        <ul v-else class="conflict-list">
            <ConflictForm/>
            <h3>Conflictos activos: {{ activeConflicts.length }}</h3>
            <li 
            v-for="conflict in conflictStore.conflicts" 
            :key="conflict.id">
                <ConflictCard
                :key="conflict.id" 
                :conflict="conflict"
                @deleteConflict="conflictStore.deleteConflict"/>
            </li>
        </ul>
    </section>
</template>

<style scoped>
#conflicts-page {
    padding: 2rem;
}
li {
    padding: 20px;
}
</style>