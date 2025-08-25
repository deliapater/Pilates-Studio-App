<template>
  <div class="app-container">
    <header class="bg-gray-900 text-white py-6 px-4 rounded-lg mb-6">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Pilates Studio</h1>
      <p class="text-base sm:text-lg md:text-xl mb-4">Build balance, strength, resilience.</p>
      <NavBar />
    </header>

    <main class="px-2 sm:px-4 md:px-6">
      <router-view />
    </main>

    <footer class="mt-6 text-gray-400 text-sm">
      <small>&copy; {{ year }} Pilates Studio</small>
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
const year = new Date().getFullYear()
</script>

<style scoped>
.app-container {
  font-family: 'Helvetica Neue', sans-serif;
  text-align: center;
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 1rem; /* base padding for mobile */
}
</style>
