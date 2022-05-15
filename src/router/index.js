import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import Icons from "../views/Icons.vue";
import Maps from "../views/Maps.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "Поиск книги",
        components: { default: Dashboard },
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/icons",
        name: "icons",
        components: { default: Icons },
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/maps",
        name: "maps",
        components: { default: Maps },
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/profile",
        name: "Мой профиль",
        components: { default: Profile },
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/tables",
        name: "Библиотека РТФ",
        components: { default: Tables },
        meta: {
          requiresAuth: true
        }
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "Вход",
        components: { default: Login },
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/register",
        name: "Регистрация",
        components: { default: Register },
        meta: {
          requiresAuth: false
        }
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});


router.beforeEach((to, from, next) => {
  const needAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });
  if (needAuth) {
    if (window.getCookie('authToken')) {
      next();
    } else {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
