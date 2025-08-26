<template>
    <button @click="logout">Logout</button>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../stores/userStore'
  
  const router = useRouter()
  const userStore = useUserStore()
  
  const logout = () => {
    userStore.logout()
    router.push('/')    
  }
  </script>
  