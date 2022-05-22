<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      :src="photoUrl"
                      onerror="this.src='https://placeimg.com/320/320/animals'"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between">
                <base-button v-if="!isEdit" @click="edit" size="sm" type="info" class="mr-4"
                  >Редактировать</base-button
                >
                <base-button v-else @click="save" size="sm" type="success" class="mr-4"
                  >Сохранить</base-button
                >
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="row">
                <div class="col">
                  <div
                    class="card-profile-stats d-flex justify-content-center mt-md-5"
                  >
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h3 v-if="!isEdit">
                  {{ displayName }}
                </h3>
                <div v-else>
                  <base-input
                    formClasses="input-group-alternative mb-3"
                    placeholder="Имя"
                    addon-left-icon="ni ni-circle-08"
                    v-model="displayName"
                  >
                  </base-input>
                </div>
                <div v-if="!isEdit">
                  {{ tgName }}
                </div>
                <div v-else>
                  <base-input
                    formClasses="input-group-alternative mb-3"
                    placeholder="Имя пользователя телеграм"
                    addon-left-icon="ni ni-send"
                    v-model="tgName"
                  >
                  </base-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 mb-5 mb-xl-0">
          <my-books-table title="Мои книжки"></my-books-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import MyBooksTable from "./Tables/MyBooksTable";
import { getAuth, updateProfile } from "firebase/auth";

export default {
  components: {
    MyBooksTable
  },
  name: "user-profile",
  mounted() {
    const auth = getAuth();
    this.$data.auth = auth;
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) {
        this.displayName = auth.currentUser.displayName;
        if (auth.currentUser.photoURL) {
          this.photoUrl = `https://telegram.im/img/${auth.currentUser.photoURL.trim()}`; 
          this.tgName = auth.currentUser.photoURL;
        }
      }
    })
  },
  methods: {
    save: async function() {
      this.isEdit = false;

      await updateProfile(this.$data.auth.currentUser, {
            displayName: this.$data.displayName,
            photoURL: this.$data.tgName
      });
    },
    edit: function() {
      this.isEdit = true;
    }
  },
  data() {
    return {
      auth: null,
      displayName: '',
      photoUrl: '',
      tgName: '',
      isEdit: false
    };
  },
};
</script>
<style></style>
