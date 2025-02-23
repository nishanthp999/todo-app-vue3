import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/Todos.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: TodoView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
  ],
})

export default router
