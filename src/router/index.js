import { createRouter, createWebHistory } from 'vue-router';
export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //root routes you to the landing page
      name: 'CampusOverview',
      component: () => import('../views/CampusOverview.vue') //templates in the page when routed
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
