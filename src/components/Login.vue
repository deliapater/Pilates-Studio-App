<template>
    <div class="login-page max-w-md mx-auto p-4">
        <h2 class="text-2xl font-bold text-center mb-4 text-green-600">Login</h2>

        <input 
        v-model="username"
        type="text"
        placeholder="Enter your username"
        class="w-full p-2 mb-4 border rounded"
        />

        <button
        @click="login"
        class="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700"
        >Login</button>

        <p class="mt-4 text-center text-red-600">{{ message }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const message = ref('')

const login = () => {
    if (!username.value) {
        message.value = '⚠️ Please enter a username'
        return
    }
    localStorage.setItem('currentUser', username.value)
    router.push('/booking')
}
</script>