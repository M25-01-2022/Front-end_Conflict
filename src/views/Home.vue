<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';

</script>

<template>
    <HeaderComponent/>
    <div class="container">
        <div class="card">
            <h1 class="title">Proyecto API + Frontend</h1>
            <p class="subtitle">
                Integración entre backend en Java y frontend en Vue
            </p>
            <div class="section">
                <h2>🧩 ¿Qué es este proyecto?</h2>
                <p>
                    Esta web consiste en una API desarrollada en Java desde IntelliJ,
                    la cual será consumida por un Front-end construido con Vue en Visual Studio Code.
                </p>
            </div>

            <div class="section">
                <h2>⚙️ Tecnologías utilizadas</h2>
                <ul>
                    <li>Backend: Java (IntelliJ)</li>
                    <li>Frontend: Vue.js (Visual Studio Code)</li>
                    <li>Comunicación: API REST</li>
                </ul>
            </div>

            <div class="section warning">
                <h2>🚨 Importante</h2>
                <p>
                    Para poder visualizar correctamente el Front-end, es necesario
                    iniciar primero la API desde IntelliJ.
                </p>
            </div>
            <div class="footer">
                <p>Desarrollado para pruebas de integración Full-Stack</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1e1e2f;
    color: white;
    padding-top: 2rem;
    padding-bottom: 3rem;
}

.card {
    max-width: 700px;
    padding: 40px;
    border-radius: 20px;
    background: #2a2a40;
    box-shadow: 0 10px 40px #1e1e2f;
}

.title {
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-align: center;
}

.subtitle {
    text-align: center;
    opacity: 0.8;
    margin-bottom: 30px;
}

.section {
    margin-bottom: 25px;
}

h2 {
    color: #00d4ff;
}

.section ul {
    opacity: 0.9;
    line-height: 1.6;
}

.warning {
    background: rgba(248, 67, 67, 0.219);
    padding: 15px;
    border-radius: 10px;
}

.footer {
    margin-top: 30px;
    text-align: center;
    font-size: 15px;
}
</style>
