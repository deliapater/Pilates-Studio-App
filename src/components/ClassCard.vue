<template>
    <div class="p-4 border rounded shadow hover:shadow-lg">
      <h2 class="text-xl font-bold">{{ className }}</h2>
      <p>{{ instructor }}</p>
      <p>{{ time }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['className', 'instructor', 'time'])
  </script>
  