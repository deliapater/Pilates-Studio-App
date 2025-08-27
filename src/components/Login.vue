<template>
    <div>
        <input v-model="username" placeholder="Enter your name" />
        <button @click="login">Login</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const router = useRouter()
const userStore = useUserStore()
const username = ref('')

const login = () => {
    if (username.value.trim()) {
        userStore.login(username.value)
        router.push('/bookings')
    }
}
</script>
