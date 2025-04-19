<script setup>
</script>

<template>
  <div class="app-container">
    <header>
      <h1>Pilates Studio</h1>
      <p>Build balance, strength, resilience.</p>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/schedule">Schedule</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <small>&copy; 2025 Pilates Studio</small>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  font-family: 'Helvetica Neue', sans-serif;
  text-align: center;
  padding: 2rem;
  background-color: #f8f8f8;
  min-height: 100vh;
}

header {
  margin-bottom: 2rem;
}

h1 {
  color: #42b883;
  font-size: 2.5rem;
}

footer {
  margin-top: 3rem;
  color: #888;
}
</style>