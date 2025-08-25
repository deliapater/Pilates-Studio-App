<template>
  <div class="p-4 border rounded shadow hover:shadow-lg">
    <h2 class="text-xl font-bold text-green-600">{{ className }}</h2>
    <p class="text-gray-700">Instructor: {{ instructor }}</p>
    <p class="text-gray-500">Time: {{ time }}</p>
    <p v-if="showSpots && spots !== null" class="text-sm text-gray-600">Spots Available: {{ spots }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  className: String,
  instructor: String,
  time: String,
  spots: {
    type: Number,
    default: null
  },
  showSpots: {
    type: Boolean,
    default: false
  }
})
</script>