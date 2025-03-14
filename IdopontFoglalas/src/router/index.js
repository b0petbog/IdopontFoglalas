import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'foglalasok',
      component: () => import('../views/FoglalasokView.vue'),
    },
    {
      path: '/ujFoglalas',
      name: 'ujFoglalas',
      component: () => import('../views/UjFoglalasView.vue'),
    }
  ],
})

export default router
