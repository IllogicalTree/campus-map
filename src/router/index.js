import { createRouter, createWebHistory } from 'vue-router';
export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CampusOverview',
      component: () => import('../views/CampusOverview.vue')
    },
    {
      path: '/all-floors',
      name: 'AllFloors',
      component: () => import('../views/AllFloors.vue')
    },
    {
      path: '/floor',
      name: 'Floor',
      component: () => import('../views/SelectedFloor.vue')
    }
  ]
});
