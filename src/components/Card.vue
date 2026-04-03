<template>
<div class="card">
    <div class="card-header">
        <slot name="header"></slot>
    </div>
    <div class="card-body">
        <slot name="body"></slot>
    </div>
    <div class="card-footer">
        <slot name="footer"></slot>
    </div>
</div>
</template>

<style scoped>
.card {
    max-width: 500px;
    background: white;
    border-radius: 16px;
    padding: 20px;
    transition: transform 0.2s;
}
.card:hover {
    transform: translateY(-5px);
}
.card-header, .card-body, .card-footer {
    margin-bottom: 10px;
}
.card-footer {
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 10px;
}
</style>
