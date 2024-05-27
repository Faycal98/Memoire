<template>
  <div class="otp">
    <p>{{ userInfo }}</p>
    <v-card
      class="py-8 px-6 text-center mx-auto ma-4"
      elevation="12"
      max-width="400"
      width="100%"
    >
      <h3 class="text-h6 mb-4">Verify Your Account</h3>

      <div class="text-body-2">
        Nous avons envoyé un code de vérification à {{ userInfo.email }} <br />

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
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    otp: "",
    userInfo: {},
  }),
  mounted() {
    this.userInfo = this.$store.state.userRegisterInfo;
  },
  methods: {
    signUp() {
      // e.preventDefault();
      let userInfo = this.userInfo;
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
      }
    },
  },
};
</script>
<style scoped>
.otp{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
</style>
