import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import redirect from "./redirect";
import store from "../store";
const routes = [
  {
    path: "/",
    name: "homed",
    meta: {
      guestGuard: true,
    },
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/logements",
    name: "logements",
    meta: {
      guestGuard: true,
    },
    component: () => import("../views/HouseView.vue"),
  },
  {
    path: "/houseDetails",
    name: "houseDetails",
    meta: {
      guestGuard: true,
    },
    component: () => import("../views/HouseDetails.vue"),
  },
  {
    path: "/howitwork",
    name: "howitwork",
    meta: {
      guestGuard: true,
    },
    component: () => import("../views/Commentcamarche.vue"),
  },
  {
    path: "/chat",
    meta: {
      guestGuard: true,
    },
    component: () => import("../components/AdvancedChat.vue"),
  },
  {
    path: "/chat2",
    meta: {
      guestGuard: true,
    },
    component: () => import("../components/Chat2.vue"),
  },
  {
    path: "/login2",
    name: "login",
    meta: {
      guestGuard: true,
    },
    component: () => import("../views/connexion_p.vue"),
  },
  {
    path: "/logins",
    name: "logins",
    meta: {
      guestGuard: true,
    },
    component: () => import("../views/connexion_l.vue"),
  },

  {
    path: "/login",
    name: "login",
    meta: {
      guestGuard: true,
    },
    component: () => import("../views/Login.vue"),
    beforeEnter: redirect,
  },

  {
    path: "/register",
    name: "register",
    meta: {
      guestGuard: true,
    },
    component: () => import("../views/Register.vue"),
  },

  {
    path: "/fileUpload",
    name: "upload",
    meta: { requiresAuth: true },
    component: () => import("../components/FileUpload.vue"),
  },
  {
    path: "/annonce",
    name: "annonce",
    meta: { requiresAuth: true },
    component: () => import("../views/Annonce.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.state.isAuth) {
      console.log("here")
      next();
    
    } else {
      next({name: "login"});
   
    }
  }else{
    next();
    
  }
});

export default router;
