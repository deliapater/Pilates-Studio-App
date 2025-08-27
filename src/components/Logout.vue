<template>
    <button @click="logout">Logout</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import { useSpinnerStore } from '../stores/spinnerStore'

const router = useRouter()
const userStore = useUserStore()
const spinner = useSpinnerStore()

const logout = () => {
    userStore.logout()
    spinner.hideSpinner()
    router.push('/')
}
</script>