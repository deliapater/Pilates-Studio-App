<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Class Schedule</h1>
      <div class="grid gap-4">
        <ClassCard
          v-for="cls in classes"
          :key="cls.id"
          :className="cls.name"
          :instructor="cls.instructor"
          :time="cls.time"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ClassCard from '../components/ClassCard.vue'
  
  const classes = ref([
    { id: 1, name: 'Mat Pilates', instructor: 'Anna', time: 'Mon 9:00 AM' },
    { id: 2, name: 'Reformer Pilates', instructor: 'Ben', time: 'Tue 6:00 PM' },
    { id: 3, name: 'Core Blast', instructor: 'Clara', time: 'Wed 7:30 AM' }
  ])
  </script>  