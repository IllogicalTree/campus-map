import { createRouter, createWebHistory } from 'vue-router'
//this js file functions more or less as a web server by routing pages to certain routes

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //root routes you to the landing page
      name: 'CampusOverview',
      component: () => import('../views/CampusOverview.vue') //templates in the page when routed
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
    },
    {
      path: '/demo', //demo for all buildings, despite the name
      name: 'Demo',
      component: () => import('../views/SirIanWoodDemo.vue')
    }
  ]
})

export default router
