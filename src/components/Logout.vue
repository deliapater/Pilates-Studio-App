<template>
    <button @click="logout" class="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">Logout</button>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
    localStorage.removeItem('currentUser')
    router.push('/login')
}
</script>