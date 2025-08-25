<template>
    <div class="schedule-page max-w-xl mx-auto p-4">
        <h2>Class Schedule</h2>
        <ClassCard v-for="cls in classes" :key="cls.id" :className="cls.className" :instructor="cls.instructor"
            :time="cls.time" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ClassCard from './ClassCard.vue'
import { classes as initialClasses } from '../data/classes'

const classes = ref(initialClasses)
</script>

<style scoped>
.schedule-page {
    background-color: #f8f8f8;
    min-height: 100vh;
    padding-top: 2rem;
}
</style>