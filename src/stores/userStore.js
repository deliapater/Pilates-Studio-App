import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: localStorage.getItem('currentUser') || '',
    userBookings: {},
  }),
  actions: {
    login(user) {
      this.currentUser = user
      localStorage.setItem('currentUser', user)
      this.userBookings[user] = this.userBookings[user] || []
    },
    logout() {
      this.currentUser = ''
      localStorage.removeItem('currentUser')
    }
  }
})