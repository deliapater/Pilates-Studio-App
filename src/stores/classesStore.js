import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { classes as initialClasses } from '../data/classes'

export const useClassesStore = defineStore('classes', () => {
  const classes = reactive(initialClasses)

  const bookClass = (id, userBookings, currentUser) => {
    const cls = classes.find(c => c.id === id)
    const bookings = userBookings[currentUser] || []

    if (bookings.includes(id)) {
      return { message: `⚠️ You already booked "${cls.className}"`, type: 'error' }
    }

    if (cls.spots > 0) {
      cls.spots--
      bookings.push(id)
      userBookings[currentUser] = bookings
      return { message: `✅ Your spot for "${cls.className}" at ${cls.time} is booked!`, type: 'success' }
    } else {
      return { message: '❌ Sorry, this class is full.', type: 'error' }
    }
  }

  return { classes, bookClass }
})
