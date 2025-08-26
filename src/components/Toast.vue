<template>
  <transition name="fade">
    <div v-if="toastStore.visible" :class="['toast', toastStore.type]">
      {{ toastStore.message }}
    </div>
  </transition>
</template>

<script setup>
import { useToastStore } from '../stores/toastStore'

const toastStore = useToastStore()
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
