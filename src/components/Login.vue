<template>
  <div class="login-container">
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import { useToastStore } from "../stores/toastStore";
import axios from 'axios';

const router = useRouter()
const userStore = useUserStore()
const email = ref('');
const password = ref('')
const error = ref('')
const toastStore = useToastStore();

const login = async () => {
  if (!email.value || !password.value) {
    toastStore.showToast('⚠️ Please fill in all fields', 'error');
    return;
  }

  try {
    const res = await axios.post(
      'http://127.0.0.1:8000/api/login',
      { email: email.value, password: password.value },
      { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
    );

    userStore.currentUser = res.data.user
    userStore.token = res.data.token

    localStorage.setItem('currentUser', res.data.user)
    localStorage.setItem('token', res.data.token)

    toastStore.showToast('✅ Login successful', 'success');
    router.push('/bookings');

  } catch (err) {
    if (err.response?.status === 401) {
      toastStore.showToast('❌ Unauthorized: Invalid credentials', 'error');
    } else {
      toastStore.showToast('⚠️ Something went wrong. Please try again.', 'error');
    }
  }
};
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
