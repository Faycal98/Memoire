<template>
  <header>
    <div id="navbar">
      <Navbar></Navbar>
    </div>
  </header>
  <div class="spacer"></div>

  <body style="display: flex; align-items: center; justify-content: center">
    <div class="login-page">
      <div class="form">
        <form class="login-form" method="post">
          <h2 class="mb-2" style="color: #0e2941;"><i class="fas fa-lock" style="color:#0e2941;" ></i> Connexion</h2>
          <p class="text-danger">{{ errorMsg }}</p>
          <input
            type="text"
            v-model="userMailOrPhone"
            placeholder="Email ou Numéro de téléphone"
            required
          />
          <div class="input-wrapper position-relative">
            <input
              ref="InputPass"
              type="password"
              v-model="password"
              placeholder="Mot de passe"
              required
            />
            <span
              v-if="showInput == true"
              @click="changeInput"
              class="position-absolute eye-icon"
            >
              <i class="fa-solid fa-eye"></i>
            </span>
            <span
              v-else
              @click="changeInput"
              class="position-absolute eye-icon"
            >
              <i class="fa-solid fa-eye-slash position-absolute eye-icon" s ></i>
            </span>
          </div>

          <button type="submit" @click="signIn" name="send2">
            Se connecter
          </button>
          <p class="message">
            Pas de compte ?
            <router-link to="/register">Créer un compte</router-link>
          </p>
        </form>
      </div>
    </div>

    <div class="text" v-if="isLoading">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </body>
</template>

<script>
import Navbar from "../components/AuthNav.vue";
import axios from "axios";
export default {
  name: "HouseNavBar",
  data() {
    return {
      disabled: false,
      userMailOrPhone: "",
      password: "",
      errorMsg: "",
      isLoading:false,
      showInput: false,
      isOpen: false,
      login: true,
    };
  },
  components: {
    Navbar,
  },

  methods: {
    warnClicked() {
      this.disabled = !this.disabled;
    },

    signIn(e) {
      e.preventDefault();
      axios
        .post("http://localhost:8000/api/auth/signin", {
          userData: this.userMailOrPhone,
          password: this.password,
        })
        .then((data) => {
          this.isLoading = true
          this.userMailOrPhone = "";
          this.password = "";
          const userData = data.data;
          this.$store.dispatch("login", userData);
          if (userData.role === "Locataire") {
            this.$router.push("/");
          } else if (userData.role === "Admin") {
            this.$router.push("/dashboard");
          } else {
            this.$router.push("/owner");
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.errorMsg = err.response.data.message;
        });
    },
    change(value) {
      this.showInput = value;
    },
    changeInput(value) {
      if (this.$refs.InputPass.type === "text") {
        this.change(false);
        this.$refs.InputPass.type = "password";
      } else if (this.$refs.InputPass.type === "password") {
        this.change(true);
        this.$refs.InputPass.type = "text";
      }
    },
  },
};

/******Form */
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");

/*** Form ***/

@import url(https://fonts.googleapis.com/css?family=Poppins:300);

body {
  height: 100vh;
  overflow: hidden;
  font-family: "Poppins";
  background: #0e2941;
}
.login-page {
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
}

.text {
  position: fixed;
  width: 100%;
  background-color: #abaaaa;
  background: rgba(255,255,255,0.8);
  height: 100vh;
  z-index: 3;
  display: flex;
    justify-content: center;
    align-items: center;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 400px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Poppins", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  border-radius: 7px;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #234666;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  border-radius: 7px;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #0e2941;
}
.form .message {
  margin: 15px 0 0;
  color: #857e7e;
  font-size: 13px;
}
.form .message a {
  color: #234666 !important;
  text-decoration: none;
}
.form .message a:hover {
  border-bottom: 1px solid #234666;
}

.eye-icon {
  top: 25%;
  right: 4%;
  cursor: pointer;
}
</style>
