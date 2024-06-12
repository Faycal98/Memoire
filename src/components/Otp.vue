<template>
  <div class="otp mt-4">
    <v-alert
      v-if="this.wrongPassword"
      class="mb-3 alert-text"
      density="compact"
      text="Le code entré est erroné.Veuillez vérifier et réessayer"
      title="Code erroné"
      type="warning"
    ></v-alert>
    <form action="" @keyup.enter="signUp">
      <p>{{ userInfo }}</p>
      <v-card
        class="py-8 px-6 text-center mx-auto ma-4"
        elevation="12"
        max-width="400"
        width="100%"
      >
        <h3 class="text-h6 mb-4">Verification du compte</h3>

        <div class="text-body-2">
          Nous avons envoyé un code de vérification à {{ userInfo.email }}
          <br />

          Veuillez vérifier votre e-mail et coller le code ci-dessous.
        </div>

        <v-sheet color="surface">
          <v-otp-input v-model="otp" type="text" variant="solo"></v-otp-input>
        </v-sheet>

        <v-btn
          @click="signUp"
          class="my-4"
          color="purple"
          height="40"
          text="vérifier"
          variant="flat"
          width="70%"
        ></v-btn>

        <div class="text-caption">
          Didn't receive the code?
          <a href="#" @click.prevent="otp = ''">Resend</a>
        </div>
      </v-card>
    </form>
    <div class="text" v-if="isLoading">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    otp: "",
    wrongPassword: false,
    userInfo: {},
    isLoading: false,
  }),
  mounted() {
    this.userInfo = this.$store.state.userRegisterInfo;
  },
  methods: {
    signUp() {
      // e.preventDefault();
      let userInfo = this.userInfo;
      this.isLoading = true;
      if (this.userInfo.otp === this.otp) {
        axios
          .post("http://localhost:8000/api/auth/signupOpt", userInfo)
          .then(({ data }) => {
            console.log(data.otp);
            userInfo.otp = data.otp;

            const email = this.userInfo.email;
            const password = this.userInfo.password;

            axios
              .post("http://localhost:8000/api/auth/signin", {
                userData: email,
                password: password,
              })
              .then((data) => {
                const userData = data.data;
                this.$store.dispatch("login", userData);
                console.log(userData.role);
                if (userData.role === "Locataire") {
                  this.$router.push("/");
                } else {
                  this.$router.push("/owner");
                }
              })

              .catch((err) => {
                this.errorMsg = err.response.data.message;
              });
          })
          .catch((err) => {
            this.errorMsg = err.response.data.message;
            console.log(err);
          });
      } else {
        this.isLoading = false;
        this.wrongPassword = true;
      }
    },
  },
};
</script>
<style scoped>
.alert-text {
  max-height: 100px;
}
.otp {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.text {
  position: fixed;
  width: 100%;
  background-color: #abaaaa;
  background: rgba(255, 255, 255, 0.8);
  height: 130vh;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
