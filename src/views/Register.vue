<template>
  <header>
    <div id="navbar">
      <Navbar></Navbar>
    </div>
  </header>
  <div class="spacer"></div>

  <div
    class="wrapper form-container"
    style="display: flex; align-items: center; justify-content: center"
  >
    <div class="login-page">
      <div class="form">
        <Form
          class="register-form"
          @submit="signUp"
          :validation-schema="schema"
        >
          <h2 class="mb-2"><i class="fas fa-lock me-2"></i>S'enregistrer</h2>
          <p class="text-danger">{{ errorMsg }}</p>

          <div class="form-group">
            <Field
              name="username"
              type="text"
              v-model="userName"
              placeholder="Nom *"
              class="form-control"
            />
            <ErrorMessage name="username" class="error-feedback text-danger" />
          </div>

          <div class="form-group">
            <Field
              name="userFirstName"
              type="text"
              v-model="userFirstName"
              placeholder="Prénom *"
              class="form-control"
            />
            <ErrorMessage
              name="userFirstName"
              class="error-feedback text-danger"
            />
          </div>

          <div class="form-group">
            <Field
              name="email"
              type="email"
              v-model="email"
              placeholder="Email *"
              class="form-control"
            />
            <ErrorMessage name="email" class="error-feedback text-danger" />
          </div>

          <div class="form-group">
            <Field
              name="phone"
              type="text"
              v-model="phone"
              placeholder="Téléphone *"
              class="form-control"
            />
            <ErrorMessage name="phone" class="error-feedback text-danger" />
          </div>

          <div class="form-group">
            <Field
              name="password"
              type="text"
              v-model="password"
              placeholder="Mot de passe *"
              class="form-control"
            />
            <ErrorMessage name="password" class="error-feedback text-danger" />
          </div>

          <div class="radio-inputs wrapper">
            <label class="radio">
              <input
                type="radio"
                name="radio"
                v-model="picked"
                value="Locataire"
                id="option-1"
                checked
              />
              <span class="name">Locataire</span>
            </label>
            <label class="radio">
              <input
                type="radio"
                name="radio"
                v-model="picked"
                value="Démarcheur"
                id="option-1"
                checked
              />
              <span class="name">Démarcheur</span>
            </label>

            <label class="radio">
              <input
                type="radio"
                name="radio"
                v-model="picked"
                value="Propriétaire"
                id="option-2"
              />
              <span class="name">Propriétaire</span>
            </label>
          </div>
          <button>Je m'inscris</button>
          <p class="message">
            Déja un compte ?
            <router-link to="/login"> Se connecter </router-link>
          </p>
        </Form>
      </div>
    </div>

    <div class="text" v-if="isLoading">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/AuthNav.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
export default {
  name: "Register",
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Le nom est obligatoire!")
        .min(3, "Doit contenir au moins 3 caractères!")
        .max(20, "Maximum 20 caracterès!"),

      phone: yup
        .string()
        .required(" le numéro de téléphone est obligatoire!")
        .min(6, "Doit contenir au moins 6 caractères!")
        .max(20, "Maximum 20 caracterès!"),

      userFirstName: yup
        .string()
        .required("Le prénom est obligatoire!")
        .min(3, "Doit contenir au moins 3 caractères!")
        .max(20, "Maximum 20 caracterès!"),

      email: yup
        .string()
        .required("L'email est obligatoire!")
        .email("Email non valide!")
        .max(50, "Maximum 50 caractères!"),

      password: yup
        .string()
        .required("Mot de passe obligatoire!")
        .min(6, "Doit contenir au moins 6 caractères!")
        .max(40, "Maximum 40 caractères!"),
    });

    return {
      view: {
        topOfPage: true,
      },
      disabled: false,
      isLoading: false,
      picked: "Propriétaire",
      userName: "",
      userFirstName: "",
      email: "",
      password: "",
      age: "",
      phone: "",
      errorMsg: "",
      isOpen: false,
      login: true,
      schema,
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    Navbar,
  },

  methods: {
    signUp() {
      // e.preventDefault();
      this.isLoading = true;
      let userInfo = {
        userName: this.userName,
        userFirstName: this.userFirstName,
        email: this.email,
        password: this.password,
        phone: this.phone,
        role: this.picked,
      };
      axios
        .post("http://localhost:8000/api/auth/signup", userInfo)
        .then(({ data }) => {
        
          console.log(data.otp);

          userInfo.otp = data.otp;
          this.$store.dispatch("userInfo", userInfo);
          this.$router.push("/otp");

          /*  const email = this.email;
          const password = this.password;

          axios
            .post("http://localhost:8000/api/auth/signin", {
              userData: email,
              password: password,
            })
            .then((data) => {
             

              const userData = data.data;
              this.$store.dispatch("login", userData);
              console.log(userData.role)
              if (userData.role === "Locataire") {
               this.$router.push("/");
              } else {
                this.$router.push("/owner");
              }
            })
            

            .catch((err) => {
              this.errorMsg = err.response.data.message;
            }); */
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
  },
};

/******Form */
</script>

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
.form-control:focus {
  box-shadow: none;
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

.message a {
  color: #36417d;
}

/*** Form ***/

@import url(https://fonts.googleapis.com/css?family=Poppins:300);

.wrapper.form-container {
  min-height: 130vh;
  overflow: hidden;
  font-family: "Poppins";
  background: #0e2941;
  margin-bottom: 0px;
}
.login-page {
  width: 420px;
  padding: 1% 0 0;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 400px;
  margin: 0 auto 100px;
  padding: 25px 40px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form-group {
  margin: 0 0 15px;
}
.form input {
  font-family: "Poppins", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  border-radius: 7px;

  padding: 11px;
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

.wrapper {
  display: inline-flex;
  background: #f2f2f2;
  height: 55px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 8px;
}
.wrapper .option {
  background: #fff;
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 10px;
  border: 2px solid lightgrey;
  transition: all 0.3s ease;
}
.wrapper .option .dot {
  height: 20px;
  width: 20px;
  background: #d9d9d9;
  border-radius: 50%;
  position: relative;
}
.wrapper .option .dot::before {
  position: absolute;
  content: "";
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background: #234664;
  border-radius: 50%;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.3s ease;
}
input[type="radio"] {
  display: none;
}
#option-1:checked:checked ~ .option-1,
#option-2:checked:checked ~ .option-2 {
  border-color: #234664;
  background: #234664;
}
#option-1:checked:checked ~ .option-1 .dot,
#option-2:checked:checked ~ .option-2 .dot {
  background: #fff;
}
#option-1:checked:checked ~ .option-1 .dot::before,
#option-2:checked:checked ~ .option-2 .dot::before {
  opacity: 1;
  transform: scale(1);
}
.wrapper .option span {
  font-size: 14px;
  margin-left: 5px;
  color: #808080;
}
#option-1:checked:checked ~ .option-1 span,
#option-2:checked:checked ~ .option-2 span {
  color: #fff;
}

.radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #eee;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;

  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all 0.15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: #fff;
  font-weight: 600;
}
</style>
