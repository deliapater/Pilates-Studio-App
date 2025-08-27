<template>
  <div class="spinner-container">
    <div class="spinner"></div>
    <p v-if="spinner.message" class="spinner-text">{{ spinner.message }}</p>
  </div>
</template>

<script setup>
import { useSpinnerStore } from '../stores/spinnerStore'

const spinner = useSpinnerStore()
</script>

<style scoped>
.spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.spinner {
  width: 3rem;
  height: 3rem;
  border: 4px solid #ddd;
  border-top-color: #42b883;
  /* Vue green */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-text {
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
  font-weight: 500;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>