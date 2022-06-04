<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small v-if="!errorMessage">Вход</small>
            <small id="errorMessage" style="color: red;" v-else>{{ errorMessage }}</small>
          </div>
          <form role="form">
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
            >
            </base-input>

            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            >
            </base-input>

            <div class="text-center">
              <base-button type="primary" class="my-4" @click="login">
                Войти
              </base-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
const ERROR_CODES = {
  'auth/wrong-password': 'Проверьте правильность ввода логина и пароля',
  'auth/too-many-requests': 'Превышено количество попыток, попробуйте позже'
}

export default {
  name: "login",
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
      errorMessage: ''
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      setPersistence(auth, browserSessionPersistence);
      signInWithEmailAndPassword(auth, this.$data.model.email, this.$data.model.password)
        .then((userCredential) => {
          console.log('USER LOGIN', userCredential.user);
          window.setCookie('authToken', userCredential.user.uid);
          this.$router.push('/books');
        })
        .catch((error) => {
          this.$data.errorMessage = ERROR_CODES[error.code];
        });
    }
  }
};
</script>
<style></style>
