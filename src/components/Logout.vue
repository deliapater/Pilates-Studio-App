<template>
    <button @click="logout">Logout</button>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
    localStorage.removeItem('currentUser')
    router.push('/login')
}
</script>