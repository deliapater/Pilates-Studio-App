<template>
    <div class="register-container">
        <h2>Register</h2>
        <input type="text" v-model="name" placeholder="Full Name" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <input type="password" v-model="passwordConfirmation" placeholder="Confirm Password" />
        <button @click="register">Register</button>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'
import { useToastStore } from '../stores/toastStore'

const router = useRouter()
const toastStore = useToastStore()

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const error = ref('')

const register = async () => {
    if (!name.value || !email.value || !passwordConfirmation.value) {
        toastStore.showToast('⚠️ Please fill in all fields', 'error')
        return
    }
    if (password.value !== passwordConfirmation.value) {
        toastStore.showToast('⚠️ Passwords do not match', 'error')
        return
    }

    try {
        const res = await axios.post(
            'http://127.0.0.1:8000/api/register',
            {
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: passwordConfirmation.value
            },
            { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
        )
        toastStore.showToast('✅ Registration successful! You can now login.', 'success')
        router.push('/login')
    } catch {
        if (error.response?.data?.errors) {
            const messages = Object.values(error.data.errors).flat().join(' ')
            toastStore.showToast(`⚠️ ${messages}`, 'error')
        } else {
            toastStore.showToast('⚠️ Something went wrong. Please try again.', 'error')
        }
    }
}

</script>


<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
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