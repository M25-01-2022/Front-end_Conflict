<script setup>
import Card from './Card.vue';

const props = defineProps({
    conflict: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['deleteConflict']);

const handleDelete = () => {
    emit('deleteConflict', props.conflict.id);
};

const getStatusClass = (status) => {
    switch (status) {
        case 'ACTIVE': return 'status-active';
        case 'FROZEN': return 'status-frozen';
        case 'ENDED':  return 'status-ended';
        default: return '';
    }
};
</script>

<template>
<Card>
    <template #header>
        <div class="conflict-card-header">
            <div class="avatar">
                <h3>{{ conflict.name.charAt(0).toUpperCase() }}</h3>
                <h3>{{ conflict.name.charAt(1).toUpperCase() }}</h3>
            </div>
            <div class="header-info">
                <h3>{{ conflict.name }}</h3>
                <span class="status-tag" :class="getStatusClass(conflict.status)">
                    {{ conflict.status }}
                </span>
            </div>
        </div>
    </template>

    <template #body>
        <p class="description">{{ conflict.description }}</p>
        <p class="countries">
            <strong>Paises involucrados:</strong> {{ conflict.countries.join(', ') }}
        </p>
    </template>

    <template #footer>
        <router-link :to="{ name: 'conflicts-detail', params: { id: conflict.id } }">
            <button class="btn-detail">Ver detalles</button>
        </router-link>
        <button @click="handleDelete" class="btn-delete">Eliminar</button>
    </template>
</Card>
</template>

<style scoped>
.conflict-card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.avatar {
    width: 50px;
    height: 50px;
    background-color: #4f46e5;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;
}
.header-info h3 {
    margin: 0;
    color: black;
}
.status-tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
}
.status-active { color: #10b981; }
.status-frozen { color: #f59e0b; }
.status-ended  { color: #ef4444; }

.description {
    margin-bottom: 0.5rem;
    color: #374151;
}
.countries {
    font-size: 0.85rem;
    color: #6b7280;
}

.btn-detail {
    background-color: #4f46e5;
    color: white;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
.btn-detail:hover { background-color: #6366f1; }

.btn-delete {
    background-color: #ef4444;
    color: white;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
.btn-delete:hover { background-color: #dc2626; }
</style>
