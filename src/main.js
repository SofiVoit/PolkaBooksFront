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
/*!

=========================================================
* Vue Argon Dashboard - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-argon-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vue-argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
import "element-plus/lib/theme-chalk/index.css";

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRlMy2qr-HwDCsxE9q4D75gSVqQDCwFbM",
    authDomain: "fir-auth2-5d975.firebaseapp.com",
    databaseURL: "https://fir-auth2-5d975.firebaseio.com",
    projectId: "fir-auth2-5d975",
    storageBucket: "fir-auth2-5d975.appspot.com",
    messagingSenderId: "883989697225",
    appId: "1:883989697225:web:588528e7ad121633753318"
};

initializeApp(firebaseConfig);

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const appInstance = createApp(App);
appInstance.use(VueSweetalert2);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
