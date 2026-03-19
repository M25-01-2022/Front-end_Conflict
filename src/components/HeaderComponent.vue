<script setup>
</script>

<template>
    <header class="header">
        <h1 class="title">Conflicts Page</h1>
        <nav>
            <ul class="nav-list">
                <li>
                    <router-link class="link" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="link" to="/countries">Countries</router-link>
                </li>
                <li>
                    <router-link class="link" to="/conflicts">Conflicts</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.header {
    background-color: black;
    color: white;
    padding: 25px;
    text-align: center;
    .title{
        margin: 0;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
    }
    .nav-list{
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        .link{
            color: wheat;
            text-decoration: none;
        }
    }
}
</style>