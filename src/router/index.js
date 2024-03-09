import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      guestGuard: true,
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/logements',
    name: 'logements',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../views/HouseView.vue')
  },
  {
    path: '/howitwork',
    name: 'howitwork',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../views/Commentcamarche.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
