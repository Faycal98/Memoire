import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import redirect from "./redirect";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      guestGuard: true,
    },
    component: HomeView,
    beforeEnter: (to, from, next) => {
      console.log("home");
      if (store.state.isLogged && store.state.user.role !== "Locataire") {
        next("/owner");
      } else {
        next();
      }
    },
  },
  {
    path: "/gallery",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/GalleryCarrousel.vue"
      ),
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
    path: "/houseDetails/:id",
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
    meta: { requiresAuth: true },
    component: () => import("../components/AdvancedChat.vue"),
  },
  {
    path: "/chat3",
    meta: {
      guestGuard: true,
    },
    component: () => import("../components/Chat3.vue"),
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
    beforeEnter: redirect,
  },

  {
    path: "/packs",
    name: "packs",
    meta: { requiresAuth: true },
    component: () => import("../views/Packs.vue"),
  },
  {
    path: "/owner",
    name: "owner",
    meta: { requiresAuth: true },
    component: () => import("../views/Owner.vue"),
  },
  {
    path: "/user/:id/",
    name: "annonce",
    meta: { requiresAuth: true },
    component: () => import("../views/Annonce.vue"),
  },
  {
    path: "/user/:id/annonces",
    name: "annonceList",
    meta: { requiresAuth: true },
    component: () => import("../views/AnnonceList.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/HospitalDash"),
    meta: {
      admin: true,
    },
  
  },
  {
    path: "/profil",
    name: "profil",
    component: () => import("../views/Profil.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth || to.meta.admin) {
    if (store.state.isLogged) {
      if (!store.state.user.isAllowed) {
        store.dispatch("logout");
        window.location.reload();
      }
      console.log(store.state.user.isAllowed);
      console.log("here");
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
