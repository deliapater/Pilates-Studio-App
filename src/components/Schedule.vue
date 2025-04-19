<template>
    <div class="schedule">
        <h1>Class Schedule</h1>
        <div class="class-list">
            <ClassCard 
            v-for="classItem in classes"
            :key="classItem.id"
            :className="classItem.className"
            :instructor="classItem.instructor"
            :time="classItem.time"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ClassCard from './ClassCard.vue'

const classes = ref([
    { id: 1, className: 'Pilates Basics', instructor: 'Jane Doe', time: '10:00 AM'},
    { id: 2, className: 'Advanced Basics', instructor: 'John Smith', time: '12:00 PM'}
]);
</script>

<style scoped>
.schedule {
    padding: 2rem;
}
.class-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>