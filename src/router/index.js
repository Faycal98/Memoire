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
    path: '/houseDetails',
    name: 'houseDetails',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../views/HouseDetails.vue')
  },
  {
    path: '/howitwork',
    name: 'howitwork',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../views/Commentcamarche.vue')
  },
  {
    path: '/chat',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../components/AdvancedChat.vue')
  },{
    path: '/login',
    name: 'login',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../views/connexion_p.vue')
  },
  {
    path: '/logins',
    name: 'logins',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../views/connexion_d.vue')
  },
  {
    path: '/connect',
    name: 'connect',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../views/inscription_p.vue')
  },
  {
    path: '/connects',
    name: 'connects',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../views/inscription_d.vue')
  },
  {
    path: '/annonce',
    name: 'annonce',
    meta: {
      guestGuard: true,
    },
    component:  () => import('../views/Annonce.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
