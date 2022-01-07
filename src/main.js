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
import * as firebase from "firebase";
import VueFirebase from 'vue-firebase';
import "element-plus/lib/theme-chalk/index.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const FBCONFIG = {
    apiKey: "AIzaSyBGxNfiYlpOLhgQ5p3Q1Z7vjZzSPWTUSAU",
    authDomain: "bookapp-477c8.firebaseapp.com",
    databaseURL: "https://bookapp-477c8-default-rtdb.firebaseio.com",
    projectId: "bookapp-477c8",
    storageBucket: "bookapp-477c8.appspot.com",
    messagingSenderId: "638170657973",
    appId: "1:638170657973:web:fffde58bad237d8d92bafc",
    measurementId: "G-4LN0QFXEY1"
};

const appInstance = createApp(App);
appInstance.use(VueFirebase, {firebase: firebase, config: FBCONFIG});
appInstance.use(VueSweetalert2);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
