<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
    >
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Найти книгу',
            icon: 'ni ni-books text-primary',
            path: '/books',
          }"
        />
        <sidebar-item
          v-if="!isUser"
          :link="{
            name: 'Войти',
            icon: 'ni ni-key-25 text-red',
            path: '/login',
          }"
        />
        <sidebar-item
          v-if="isUser"
          :link="{
            name: 'Моя полка',
            icon: 'ni ni-single-02 text-yellow',
            path: '/profile',
          }"
        />
        <sidebar-item
          v-if="isUser"
          :link="{
            name: 'Полка РТФ',
            icon: 'ni ni-hat-3 text-red',
            path: '/rtf',
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  mounted() {
    this.isUser = Boolean(window.getCookie('authToken'));
  },
  data() {
    return {
      isUser: false,
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
