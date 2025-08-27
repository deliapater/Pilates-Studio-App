<template>
    <div class="schedule-page">

        <h2>Class Schedule</h2>
        <ClassCard v-for="cls in classesStore.classes" :key="cls.id" :className="cls.className"
            :instructor="cls.instructor" :time="cls.time" :spots="cls.spots" :showSpots="true" />
    </div>
</template>

<script setup>
import ClassCard from './ClassCard.vue'
import { useClassesStore } from '../stores/classesStore'
import LoadingSpinner from './LoadingSpinner.vue';

const classesStore = useClassesStore()

</script>

<style scoped>
.schedule-page {
    background-color: #f8f8f8;
    min-height: 100vh;
    padding-top: 2rem;
}
</style>