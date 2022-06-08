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
              <base-button v-if="!model.load" type="primary" class="my-4" @click="login">
                Войти
              </base-button>
              <div v-else class="lds-ring"><div></div><div></div><div></div><div></div></div>
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
        load: false
      },
      errorMessage: ''
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      setPersistence(auth, browserSessionPersistence);
      this.$data.model.load = true;
      signInWithEmailAndPassword(auth, this.$data.model.email, this.$data.model.password)
        .then((userCredential) => {
          console.log('USER LOGIN', userCredential.user);
          window.setCookie('authToken', userCredential.user.uid);
          this.$data.model.load = false;
          this.$router.push('/books');
        })
        .catch((error) => {
          this.$data.errorMessage = ERROR_CODES[error.code];
          this.$data.model.load = false;
        });
    }
  }
};
</script>
<style>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 84px;
  height: 84px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #172B4D;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #172B4D transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
