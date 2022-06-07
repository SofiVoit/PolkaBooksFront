<template>
  <base-nav
    class="navbar-top navbar-dark"
    id="navbar-main"
    :show-toggle-button="false"
    expand
  >
    <form
      class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
    >
      <!-- <div class="form-group mb-0">
        <base-input
          placeholder="Search"
          class="input-group-alternative"
          alternative=""
          addon-right-icon="fas fa-search"
        >
        </base-input>
      </div> -->
    </form>
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown">
        <base-dropdown v-if="isUser" class="nav-link pr-0">
          <template v-slot:title>
            <div class="media align-items-center">
              <span v-if="photoUrl" class="avatar avatar-sm rounded-circle">
                <img
                  alt="Image placeholder"
                  :src="photoUrl"
                  onerror="this.onerror=null;this.src='https://placeimg.com/320/320/animals'"
                />
              </span>
              <div class="media-body ml-2 d-none d-lg-block">
                <span class="mb-0 text-sm font-weight-bold">{{ displayName }}</span>
              </div>
            </div>
          </template>
          <router-link to="/profile" class="dropdown-item">
            <i class="ni ni-user-run"></i>
            <span @click="logout">Выход</span>
          </router-link>
        </base-dropdown>
      </li>
    </ul>
  </base-nav>
</template>
<script>
import { getAuth } from "firebase/auth";

export default {
  mounted() {
    const auth = getAuth();
    this.isUser = Boolean(window.getCookie('authToken'));
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) {
        this.isUser = Boolean(window.getCookie('authToken'));
        this.displayName = auth.currentUser.displayName;
        if (auth.currentUser.photoURL) {
          this.photoUrl = `https://telegram.im/img/${auth.currentUser.photoURL.trim()}`; 
        }
      }
    })
  },
  data() {
    return {
      displayName: '',
      activeNotifications: false,
      showMenu: false,
      photoUrl: null,
      searchQuery: "",
      isUser: false
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    logout() {
      const auth = getAuth();
      window.deleteCookie('authToken');
      auth.signOut();
      this.$router.push('/login');
    }
  },
};
</script>
