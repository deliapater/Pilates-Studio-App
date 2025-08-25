<template>
    <nav class="flex justify-between items-center p-4 bg-gray-100 rounded mb-4">
        <div class="flex space-x-4 items-center">
            <router-link to="/" class="px-4 py-2 rounded hover:bg-green-100"
                active-class="bg-green-200 font-bold">Home</router-link>
            <router-link to="/schedule" class="px-4 py-2 rounded hover:bg-green-100"
                active-class="bg-green-200 font-bold">Schedule</router-link>
            <router-link to="/bookings"
                class="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">Bookings</router-link>
        </div>
        <div v-if="currentUser" class="flex items-center space-x-2">
            <Logout />
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Logout from './Logout.vue';
import { ref, onMounted } from 'vue'

const currentUser = ref('')

onMounted(() => {
    currentUser.value = localStorage.getItem('currentUser') || ''
})
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