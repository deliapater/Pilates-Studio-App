<template>
  <div class="schedule-page">
    <h2>Class Schedule</h2>
    <div v-if="classesStore.loading">Loading classes...</div>
    <div v-else>
      <div v-for="day in daysOfWeek" key="day" class="day-book">
        <h3>{{ day }}</h3>
        <div v-if="classesByDay(day).lenght === 0">
          No classes scheduled
        </div>
      <div v-else>
        <ClassCard
          v-for="cls in classesByDay(day)"
          :key="cls.id"
          :className="cls.className"
          :instructor="cls.instructor"
          :time="cls.time"
          :spots="cls.spots"
          :showSpots="true"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import ClassCard from "./ClassCard.vue";
import { useClassesStore } from "../stores/classesStore";
import { onMounted, computed } from "vue";

const classesStore = useClassesStore();
const daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

onMounted(async () => {
  await classesStore.fetchClasses();
});

const classesByDay = (day) => {
  return classesStore.classes.filter(cls => cls.day === day);
}
</script>

<style scoped>
.schedule-page {
  background-color: #f8f8f8;
  min-height: 100vh;
  padding-top: 2rem;
}
.day-block {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.05);
}

.day-block h3 {
  margin-bottom: 1rem;
  color: #42b883;
}
</style>
