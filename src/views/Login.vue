<template>
  <header>
    <div id="navbar">
      <nav class="navbar navbar-expand-lg">
        <router-link to="/">
          <h1 class="ms-5 header-title">BenApart</h1>
        </router-link>
        <div
          class="header-right justify-content-between align-items-center collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="u-block">
            <li class="link d-block">
              <p class="drop-text">Retour a l'accueuil</p>
            </li>
          </ul>
          <div class="Header_buttons ms-3 position relative">
            <button
              type="button"
              @click="warnClicked"
              class="btn btn-outline-light account-btn p-2"
            >
              Menu
              <i class="fa-solid fa-bars"></i>
            </button>
            <Transition>
              <div v-if="disabled" class="sub-menu position-absolute">
                <ul class="sub-list d-block">
                  <li class="houser">
                    <a
                      class="dropdown-item"
                      href="#"
                      style="background-color: #36417d; color: white !important"
                      ><i class="fa-solid fa-house me-2 pt-2"></i>Je suis
                      propriétaire</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item text-black" href="#"
                      ><i class="fa-solid fa-arrow-right me-2 arrow"></i
                      >Connexion</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item last" href="#"
                      ><i class="fa-solid fa-arrow-right me-2 arrow arrow"></i
                      >Inscription</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      style="background-color: #36417d; color: white !important"
                      ><i class="fa-solid fa-house me-2 pt-2"></i>Je suis
                      démarcheur</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item text-black" href="#"
                      ><i class="fa-solid fa-arrow-right me-2 arrow"></i
                      >Connexion</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item last" href="#"
                      ><i class="fa-solid fa-arrow-right me-2 arrow arrow"></i
                      >Inscription</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"
                      ><i class="fa-regular fa-circle-question me-2"></i>Aide</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item last" href="#"
                      ><i class="fa-solid fa-arrow-right me-2 arrow"></i>Nous
                      contacter</a
                    >
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div class="spacer"></div>

  <body style="display: flex; align-items: center; justify-content: center">
    <div class="login-page">
      <div class="form">
        <form class="login-form" method="post">
          <h2 class="mb-2"><i class="fas fa-lock"></i> Connexion</h2>
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
              <i class="fa-solid fa-eye-slash position-absolute eye-icon"></i>
            </span>
          </div>

          <button type="submit" @click="signIn" name="send2">
            Se connecter
          </button>
          <p class="message">
            Pas de compte?
            <router-link to="/register">Créer un compte</router-link>
          </p>
        </form>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "HouseNavBar",
  data() {
    return {
      view: {
        topOfPage: true,
      },
      disabled: false,
      userMailOrPhone: "",
      password: "",
      errorMsg: "",
      showInput: false,
      isOpen: false,
      login: true,
    };
  },
  components: {},
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
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
          this.userMailOrPhone = "";
          this.password = "";
          const userData = data.data;
          this.$store.dispatch("login", JSON.stringify(userData));
          this.$router.push("/");
        })
        .catch((err) => {
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
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header {
  position: relative;
  z-index: 500;
}

.close-btn {
  right: 2%;
  font-size: 20px;
  color: #36417d;
  z-index: 6000;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.navbar {
  position: fixed;
  border-bottom: 0.5px solid hsla(0, 0%, 100%, 0.3);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.sub-menu .arrow {
  opacity: 0;
  transition: ease-in-out 0.1s;
}
.sub-menu li:hover .arrow {
  opacity: 1;
}
.navbar {
  background-color: #36417d;
}
.sub-list {
  margin-left: 0 !important;
}
.sub-menu {
  overflow: hidden;
  z-index: 56;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  right: 4%;
}
.sub-menu::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
.link {
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
}
.list {
  position: absolute;
  display: block;
  color: red;
  transition: ease-in-out 1s;
  background: white;
  margin-top: 10px;
}
.list,
.list li {
  display: none;
}
.header-title {
  color: white;
  font-size: 35px;
}

.dropdown-item {
  color: #36417d !important;
  font-weight: bold;
  transition: background-color 5ms;
  text-align: left;
  padding: 18px 25px;
  cursor: pointer;
}
.dropdown-item:hover {
  background-color: #6a73ad;
  text-decoration: none;
  color: white !important;
}

.Header_navList {
  position: absolute;

  padding: 0;
  right: 0;
  min-width: 280px;
  pointer-events: none;
  transform: translateY(-20px);
  opacity: 0;
  transition: 250ms;
}
.drop-text {
  color: #fff;
  font-size: 15px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 6px 18px;
  transition: 0.5s;
  font-weight: bold;
}
.drop-text:hover {
  background-color: #fff;
  color: #36417d;
  font-weight: bold;
}

.link .list ul {
  display: block;
  margin-left: 0px;
}

nav {
  font-family: "Metrophobic", sans-serif;
  font-weight: 600;
  font-style: normal;
  position: fixed;
  margin-right: auto;
  justify-content: space-between;
  margin-left: auto;
  z-index: 10;
  width: 100%;
  padding: 0 40px;
  height: 60px;
  color: black;
  background-color: transparent;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &.onScroll {
    box-shadow: 0 0 10px #aaa;
    background-color: #fff;
    ul li {
      color: #36417d;
    }

    .header-title {
      color: #36417d;
    }
    .account-btn {
      background-color: #3c9;
    }
    .account-btn:hover {
      color: white;
    }
  }

  ul {
    margin-left: 3em;
    display: flex;
    justify-content: space-between;
    li {
      cursor: pointer;
      /*font-weight: 300;*/
      list-style-type: none;
      color: white;
      border-right: 1px solid #ffffff36;
    }
  }
  .u-block {
    margin-left: 67%;
  }
}

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
  color: #b3b3b3;
  font-size: 13px;
}
.form .message a {
  color: #234666 !important;
  text-decoration: none;
}

.eye-icon {
  top: 25%;
  right: 4%;
  cursor: pointer;
}
</style>
