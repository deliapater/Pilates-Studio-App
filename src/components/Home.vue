<template>
    <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of the Pilates Studio App.</p>

        <Login v-if="!currentUser" />
        <p v-else>Hello, {{ currentUser }}! Check out the schedule or book a class.</p>
    </div>
</template>

<script setup>
import Login from './Login.vue'
import { ref, onMounted } from 'vue'

const currentUser = ref('')

onMounted(() => {
    currentUser.value = localStorage.getItem('currentUser') || ''
})
</script>

<style scoped></style>