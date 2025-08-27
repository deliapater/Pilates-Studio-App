<template>
  <div>
    <h2>{{ className }}</h2>
    <p>Instructor: {{ instructor }}</p>
    <p>Time: {{ time }}</p>
    <p v-if="showSpots && spots !== null">Spots Available: {{ spots }}</p>
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
<style scoped>
div {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: left;
}

h2 {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>