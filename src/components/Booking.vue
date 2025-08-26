<template>
    <div class="booking-page">
      <h2>Book a Class</h2>
  
      <div>
        <div v-if="loading">Loading classes...</div>
        <div v-else v-for="cls in classesStore.classes" :key="cls.id">
          <ClassCard
            :className="cls.className"
            :instructor="cls.instructor"
            :time="cls.time"
            :spots="cls.spots"
            :showSpots="true"
          />
          <button
            @click="bookClass(cls.id)"
            :disabled="cls.spots <= 0"
          >
            {{ cls.spots > 0 ? 'Book Now' : 'Full' }}
          </button>
        </div>
      </div>
      <Toast />
    </div>
  </template>
  
  <script setup>
  import ClassCard from './ClassCard.vue'
  import Toast from './Toast.vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../stores/userStore'
  import { useClassesStore } from '../stores/classesStore'
  import { useToastStore } from '../stores/toastStore'
  
  const router = useRouter()
  const userStore = useUserStore()
  const classesStore = useClassesStore()
  const toastStore = useToastStore()
  
  if (!userStore.currentUser) {
    router.push('/login')
  }
  
  const bookClass = (id) => {
    const result = userStore.bookClass(id, classesStore.classes)
    toastStore.show(result.message, result.success ? 'success' : 'error')
  }
  </script>
  