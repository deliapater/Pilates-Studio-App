<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/schedule">Schedule</router-link>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
nav {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: background-color 0.3s, color 0.3s;
}

nav a:hover {
    background-color: #e6f7f1;
    color: #42b883;
}

.router-link-active {
    background-color: #42b883;
    color: white !important;
}
</style>