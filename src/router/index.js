import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Schedule from '../components/Schedule.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/schedule', name: 'Schedule', component: Schedule },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})