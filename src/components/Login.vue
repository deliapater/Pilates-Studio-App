<template>
    <div class="login-container">
        <input v-model="username" placeholder="Enter your name" />
        <button @click="login">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const router = useRouter()
const userStore = useUserStore()
const username = ref('')
const error = ref('')

const login = () => {
    error.value = ''
    const trimmedName = username.value.trim()
    if (!trimmedName) {
        error.value = '⚠️ Please enter a username'
        return
    }
    if (trimmedName.length < 3) {
        error.value = '⚠️ Username must be at least 3 characters'
        return
    }
    userStore.login(trimmedName)
    router.push('/bookings')
}
</script>
<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 300px;
  margin: 2rem auto;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #36976c;
}

.error {
  color: red;
  font-size: 0.9rem;
}
</style>
