import { createRouter, createWebHistory } from 'vue-router'

import principalpagina from '@/modules/landing/pages/principalpagina.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principalpagina',
      component: principalpagina
    },
    {
      path: '/contactopagina',
      name: 'contactopagina',
      component: () => import('@/modules/landing/pages/contactopagina.vue')
    },

    {
      path: '/preciospagina',
      name: 'preciospagina',
      component: () => import('@/modules/landing/pages/preciospagina.vue')
    },
    {
      path: '/featurespagina',
      name: 'featurespagina',
      component: () => import('@/modules/landing/pages/featurespagina.vue')
    }
  ]
})

export default router
