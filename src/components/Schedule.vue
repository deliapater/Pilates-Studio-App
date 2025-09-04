<template>
  <div class="schedule-page">
    <h2>Class Schedule</h2>
    <div v-if="classesStore.loading">Loading classes...</div>
    <div v-else>
      <div v-for="cls in classesStore.classes" :key="cls.id">
        <ClassCard
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
</template>

<script setup>
import ClassCard from "./ClassCard.vue";
import { useClassesStore } from "../stores/classesStore";
import { onMounted } from "vue";

const classesStore = useClassesStore();

onMounted(async () => {
  await classesStore.fetchClasses();
});
</script>

<style scoped>
.schedule-page {
  background-color: #f8f8f8;
  min-height: 100vh;
  padding-top: 2rem;
}
</style>
