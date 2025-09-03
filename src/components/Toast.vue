<template>
  <transition name="fade">
    <div v-if="toastStore.visible" :class="['toast', toastStore.type]">
      {{ toastStore.message }}
    </div>
  </transition>
</template>

<script setup>
import { useToastStore } from "../stores/toastStore";
import axios from "axios";

const toastStore = useToastStore();

async function login(email, password) {
  try {
    const res = await axios.post("http://127.0.0.1:8000/api/login", {
      email,
      password,
    });
    return res.data
  } catch (err) {
    if (err.response?.status === 401) {
      toastStore.showToast("❌ Unauthorized: Invalid credentials", "error");
    } else {
      toastStore.showToast("⚠️ Something went wrong. Please try again.", "error");
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.toast.success {
  background-color: #42b883;
}

.toast.error {
  background-color: #e74c3c;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
