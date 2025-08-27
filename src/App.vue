<template>
  <div class="app-container">
    <header>
      <h1>
        Pilates Studio
      </h1>
      <p>
        Build balance, strength, resilience.
      </p>
      <NavBar />
    </header>

    <main>
      <div>
        <LoadingSpinner v-if="spinner.isLoading" />
        <div v-else>
          <router-view />
        </div>
      </div>
    </main>

    <footer>
      <small>&copy; {{ year }} Pilates Studio</small>
    </footer>
  </div>
</template>

<script setup>
import LoadingSpinner from "./components/LoadingSpinner.vue";
import { onMounted } from 'vue'
import NavBar from "./components/NavBar.vue";
import { useSpinnerStore } from "./stores/spinnerStore";
import { useUserStore } from "./stores/userStore";

const year = new Date().getFullYear();
const spinner = useSpinnerStore();
const userStore =  useUserStore();

onMounted(() => {
  if (userStore.currentUser) {
    spinner.showSpinner("Loading...");
    setTimeout(() => {
      spinner.hideSpinner()
    }, 2000)
  }
})
</script>

<style scoped>
.app-container {
  font-family: "Helvetica Neue", sans-serif;
  text-align: center;
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 1rem;
}

header {
  background-color: #333;
  color: #fff;
  padding: 2rem 1rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

header p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

footer {
  margin-top: 2rem;
  color: #888;
}

@media (min-width: 600px) {
  header h1 {
    font-size: 2.5rem;
  }

  header p {
    font-size: 1.25rem;
  }

  main {
    padding: 0 2rem;
  }
}

@media (min-width: 900px) {
  header {
    padding: 3rem 2rem;
  }

  header h1 {
    font-size: 3rem;
  }

  header p {
    font-size: 1.5rem;
  }
}
</style>
