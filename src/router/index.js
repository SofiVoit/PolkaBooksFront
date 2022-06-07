import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import Icons from "../views/Icons.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
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
  {
    path: "/",
    redirect: "/books",
    component: DashboardLayout,
    children: [
      {
        path: "/books",
        name: "Найти книгу",
        components: { default: Dashboard },
        meta: {
          requiresAuth: false
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
        path: "/profile",
        name: "Моя полка",
        components: { default: Profile },
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/rtf",
        name: "Полка РТФ",
        components: { default: Tables },
        meta: {
          requiresAuth: true
        }
      },
    ],
  }
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
