import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Schedule from '../components/Schedule.vue';
import Booking from '../components/Booking.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/schedule', name: 'Schedule', component: Schedule },
  { path: '/bookings', name: 'Booking', component: Booking },
  { path: '/login', name: 'Login', component: Login },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})