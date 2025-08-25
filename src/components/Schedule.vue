<template>
    <div class="schedule">
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
</style>