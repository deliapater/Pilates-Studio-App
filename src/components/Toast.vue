<template>
    <transition name="fade">
      <div v-if="visible" :class="['toast', type]">
        {{ message }}
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    message: String,
    type: { type: String, default: 'success' }, // success | error
    duration: { type: Number, default: 3000 } // ms
  })
  
  const visible = ref(false)
  
  watch(() => props.message, (newMsg) => {
    if (newMsg) {
      visible.value = true
      setTimeout(() => visible.value = false, props.duration)
    }
  })
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
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }
  .toast.success { background-color: #42b883; }
  .toast.error { background-color: #e74c3c; }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  