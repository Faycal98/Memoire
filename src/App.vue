<template>
  <main>
    <Guest v-if="$route.meta.guestGuard"></Guest>
    <Default v-else-if="$store.state.isAuth"></Default>
    <Admin v-else-if="$route.meta.admin"></Admin>
    <Auth v-else></Auth>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");
body {
  margin: 0;
}
.table {
  border: 1px solid #f3f3ff !important;
}
.my-gallery {
  display: flex;
}

ul {
  margin-bottom: 0px !important;
}
.my-gallery img {
  height: 300px;
  width: 350px;
}

main {
  position: relative;
}

.floating-btn {
  position: fixed !important;
  bottom: 35%;
  right: 0px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.hidden {
  display: none;
}

.info-container .v-input {
  width: 70%;
}

.v-stepper-item.v-stepper-item--error.v-stepper-item--selected
  .v-stepper-item__avatar.v-avatar {
  background: rgb(176, 0, 32) !important;
}
.v-stepper-item.v-stepper-item--complete.v-stepper-item--error .v-avatar {
  background: rgb(176, 0, 32) !important;
}
.v-stepper-item--error {
  color: rgb(var(--v-theme-error));
}
.v-stepper-item {
  padding: 1.5rem !important;
}
.v-stepper-window {
  margin: 1.5rem !important;
}
.v-selection-control .v-label {
  white-space: normal;
  opacity: 1;
  word-break: break-word;
  height: 100%;
}
.form-check-input:focus {
  outline: 0;
  box-shadow: none !important;
}

.form-check-input:checked {
  border-color: transparent !important;
}
.v-stepper-item--selected .v-stepper-item__avatar.v-avatar,
.v-stepper-item--complete .v-stepper-item__avatar.v-avatar {
  background: rgb(221, 88, 55) !important;
}
html {
  overflow: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}

.city-select .v-field__input {
  padding: 16px;
}

.equipement-wrapper .form-check-input:checked {
  background-color: rgb(221, 88, 55);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none !important;
  color: inherit !important;
}

td {
  text-align: center !important;
}

.page-item {
  color: white;
}

.page-link {
  background-color: #36417d !important;
}

nav a.router-link-exact-active {
  color: rgb(221, 88, 55);
}
body {
  counter-reset: section;
}
.stepperSlider .carousel__pagination-button::after {
  display: flex;
  counter-increment: section;
  content: counter(section);
  justify-content: center;
  align-items: center;
  height: 42px;
  transition: 150ms;
  background-color: #fff7f7;
  width: 42px;
  border-radius: 50%;
}

.stepperSlider .carousel__pagination-button--active:after {
  background-color: rgb(221, 88, 55);
  color: #fff;
}

.stepperSlider .carousel__pagination-button--active:hover::after {
  background-color: #36417d !important;
  color: #fff !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 3px 6px 0 #36417d !important;
  background-color: #36417d !important;
  color: #fff !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 3px 6px 0 rgba(69, 97, 251, 0.2) !important;
}

.stepperSlider .carousel__pagination-button:hover::after {
  background-color: #fff;
  color: #36417d;
  transform: translateY(-1px);
  box-shadow: 0 3px 6px 0 rgba(69, 97, 251, 0.2);
}
</style>
<script>
import axios from "axios";
import Guest from "./Layouts/Guest.vue";
import Default from "./Layouts/Default.vue";
import Admin from "./Layouts/Admin.vue";
import Auth from "./Layouts/Auth.vue";
export default {
  components: {
    name: "App",
    Guest,
    Default,
    Admin,
    Auth,
  },
  mounted() {


    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      
      this.$store.dispatch("updateUser", userData);
    }
  },
  updated() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      console.log("see", userData);
      this.$store.dispatch("updateUser", userData);
      console.log("updated");
      axios
        .get("http://localhost:8000/api/user", {
          headers: {
            "x-access-token": userData.accessToken,
          },
        })
        .then(({ data }) => {
          console.log(data);
          userData.isAllowed = data.isAllowed;
          this.$store.dispatch("updateUser", userData);
        });
    }
  },
};
</script>
