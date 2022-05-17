<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Регистрация</small>
          </div>
          <form role="form">
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
              focused
            >
            </base-input>

            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Пароль"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            >
            </base-input>

            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Имя"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.name"
            >
            </base-input>

            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="имя пользователя телеграм"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.tgTag"
            >
            </base-input>

            <div class="text-center">
              <base-button type="primary" class="my-4" @click="register">
                Создать аккаунт
              </base-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile, setPersistence, browserSessionPersistence } from "firebase/auth";

export default {
  name: "register",
  data() {
    return {
      model: {
        email: "",
        password: "",
        name: '',
        tgTag: ''
      },
    };
  },
  methods: {
    register() {
      const auth = getAuth();
      setPersistence(auth, browserSessionPersistence);
      createUserWithEmailAndPassword(auth, this.$data.model.email, this.$data.model.password).then(async (userCredential) => {
          window.setCookie('authToken', userCredential.user.accessToken);
          await updateProfile(auth.currentUser, {
            displayName: this.$data.model.name,
            photoURL: this.$data.model.tgTag
          });
          console.log('USER REGISTERED', userCredential.user);
          this.$router.push('/dashboard');
      })
      .catch((error) => {
          console.log('USER REGISTER ERROR', error);
      });
    },
  },
};
</script>
<style></style>
