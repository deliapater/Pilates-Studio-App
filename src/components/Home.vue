<template>
    <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of the Pilates Studio App.</p>

        <Login v-if="!userStore.currentUser" />
        <p v-else>Hello, {{ userStore.currentUser.name }}! Check out the schedule or book a class.</p>
    </div>
</template>

<script setup>
import Login from './Login.vue'
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
</script>

<style scoped></style>