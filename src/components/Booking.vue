<template>
    <div class="booking-page max-w-xl mx-auto p-4">
        <h2 class="text-2xl font-bold text-center mb-4 text-green-600">Book a Class</h2>

        <div class="space-y-4">
            <div v-if="loading">Loading classes...</div>
            <div v-else v-for="cls in classes" :key="cls.id">
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

<script setup>
import ClassCard from './ClassCard.vue';
import { ref, onMounted } from 'vue'
import { classes } from '../data/classes'
import { useRouter } from 'vue-router'

const router = useRouter()
const message = ref('')
const userBookings = ref({})
const currentUser = ref('')

onMounted(() => {
    const user = localStorage.getItem('currentUser')
    if (!user) {
        router.push('/login')
    } else {
        currentUser.value = user
        userBookings.value[user] = userBookings.value[user] || []
    }
})

const bookClass = (id) => {
    const cls = classes.value.find(c => c.id === id)
    const bookings = userBookings.value[currentUser.value] || []

    if (bookings.includes(id)) {
        message.value = `⚠️ You already booked "${cls.className}""`
        return
    }
    if (cls.spots > 0) {
        cls.spots--
        bookings.push(id)
        userBookings.value[currentUser.value] = bookings
        message.value = `✅ Your spot for "${cls.className}" at ${cls.time} is booked!`
    } else {
        message.value = '❌ Sorry, this class is full.'
    }
}
</script>