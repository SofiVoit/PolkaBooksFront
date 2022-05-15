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

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
  const cookies = document.cookie.split(/;/);
  const obj = {};
  for (var i = 0, len = cookies.length; i < len; i++) {
    const cookie = cookies[i].split(/=/);
    if (cookie.length) {
      obj[cookie[0].trim()] = cookie[1];
    }
  }

  return obj[name];
}

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

window.getCookie = getCookie;
window.setCookie = setCookie;
window.deleteCookie = deleteCookie;

router.beforeEach((to, from, next) => {
  const needAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });
  if (needAuth) {
    if (getCookie('authToken')) {
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
