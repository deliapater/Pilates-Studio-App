<template>
    <div class="login-page">
        <h2>Login</h2>

        <input v-model="username" type="text" placeholder="Enter your username" />

        <button @click="login">Login</button>
        <p>{{ message }}</p>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const message = ref("");

const login = () => {
    if (!username.value) {
        message.value = "⚠️ Please enter a username";
        return;
    }
    localStorage.setItem("currentUser", username.value);
    router.push("/bookings");
};
</script>
