import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CampusOverview',
      component: () => import('../views/CampusOverview.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sir-ian-wood',
      name: 'SirIanWood',
      component: () => import('../views/SirIanWood.vue')
    },
    {
      path: '/business-school',
      name: 'BusinessSchool',
      component: () => import('../views/BusinessSchool.vue')
    },
    {
      path: '/rgu-sport',
      name: 'RGUSport',
      component: () => import('../views/RGUSport.vue')
    },
    {
      path: '/ishbel-gordon',
      name: 'IshbelGordon',
      component: () => import('../views/IshbelGordon.vue')
    }
  ]
})

export default router
