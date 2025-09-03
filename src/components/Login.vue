<template>
  <div class="login-container">
    <input v-model="username" placeholder="Email" />
    <input v-model="password" placeholder="Password" />
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
const password = ref('')
const error = ref('')

const login = async () => {
  if (!username.value.trim() || !password.value.trim()) {
    error.value = "⚠️ Please enter both email and password";
    return;
  }
  try {
    await userStore.login(username.value, password.value);
    router.push('/bookings');
  } catch (err) {
    error.value
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
