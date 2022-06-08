<template>
  <nav
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
    id="sidenav-main"
  >
    <div class="container-fluid">
      <!--Toggler-->
      <navbar-toggle-button @click="showSidebar">
        <span class="navbar-toggler-icon"></span>
      </navbar-toggle-button>
      <router-link class="navbar-brand" to="/">
        <span class="navbar-brand-img" style="color: #A0BCC8; font-size: 1.5em;">PolkaBooks</span>
      </router-link>

      <slot name="mobile-right">
        <ul class="nav align-items-center d-md-none">
          <base-dropdown v-if="isUser" class="nav-item" position="right">
            <template v-slot:title>
              <a class="nav-link" href="#" role="button">
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img
                      alt="Image placeholder"
                      :src="photoUrl"
                      onerror="this.onerror=null;this.src='https://placeimg.com/320/320/animals'"/>
                  </span>
                </div>
              </a>
            </template>

            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span @click="logout">Выход</span>
            </router-link>
          </base-dropdown>
        </ul>
      </slot>
      <slot></slot>
      <div
        v-show="$sidebar.showSidebar"
        class="navbar-collapse collapse show"
        id="sidenav-collapse-main"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                PolkaBooks
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <navbar-toggle-button
                @click="closeSidebar"
              ></navbar-toggle-button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links"> </slot>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "@/components/NavbarToggleButton";
import { getAuth } from "firebase/auth";

const CACHE_OWNERS = {
  'urfu_ru': 'img/theme/rtf.png',
  '@Sofia_voitsik': 'img/theme/sonya2.jpg',
  '@v_prokopchenko': 'img/theme/slava.jpg'
}

export default {
  name: "sidebar",
  components: {
    NavbarToggleButton,
  },
  props: {
    logo: {
      type: String,
      default: "img/brand/green.png",
      description: "Sidebar app logo",
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        "Whether sidebar should autoclose on mobile when clicking an item",
    },
  },
  data() {
    return {
      photoUrl: '',
      isUser: false
    };
  },
  mounted() {
    const auth = getAuth();
    this.isUser = Boolean(window.getCookie('authToken'));
    auth.onAuthStateChanged(() => {
      this.isUser = Boolean(window.getCookie('authToken'));
      if (auth.currentUser) {
        this.displayName = auth.currentUser.displayName;
        if (auth.currentUser.photoURL) {
          this.photoUrl = CACHE_OWNERS[auth.currentUser.photoURL] ?? `https://telegram.im/img/${auth.currentUser.photoURL.trim()}`;
        }
      }
    })
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  methods: {
    closeSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true);
    },
    logout() {
      const auth = getAuth();
      window.deleteCookie('authToken');
      auth.signOut();
      this.$router.push('/login');
    }
  },
  beforeUnmount() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
};
</script>
