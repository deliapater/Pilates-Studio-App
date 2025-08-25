<script setup>
import ClassCard from './ClassCard.vue';
import { ref } from 'vue'
import { classes as initialClasses } from '../data/classes'

const classes = ref(initialClasses)
const message = ref('')

const bookClass = (id) => {
    const cls = classes.value.find(c => c.id === id)
    if (cls.spots > 0) {
        cls.spots--
        message.value = `✅ Your spot for "${cls.className}" at ${cls.time} is booked!`
    } else {
        message.value = '❌ Sorry, this class is full.'
    }
}
</script>

<template>
    <div class="booking-page max-w-xl mx-auto p-4">
        <h2 class="text-2xl font-bold text-center mb-4 text-green-600">Book a Class</h2>

        <div class="space-y-4">
            <div v-for="cls in classes" :key="cls.id">
                <ClassCard :className="cls.className" :instructor="cls.instructor" :time="cls.time" :spots="cls.spots"
                    :showSpots="true" />
                <button @click="bookClass(cls.id)" :disabled="cls.spots <= 0" class="mt-2 px-4 py-2 rounded text-white">
                    {{ cls.spots > 0 ? 'Book Now' : 'Full' }}
                </button>
            </div>
        </div>
        <p class="my-4 text-center text-red-600">{{ message }}</p>
    </div>
</template>