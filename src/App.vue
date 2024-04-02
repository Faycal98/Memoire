<template>
  <main>
    <Guest v-if="$route.meta.guestGuard"></Guest>
    <Default v-else-if="$store.state.isAuth"></Default>
    <Auth v-else></Auth>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");
body {
  margin: 0;
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

.v-text-field .v-input__details {
 /*  display: none; */
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
  background: rgb(16, 185, 129) !important;
}
html {
  overflow: scroll;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}

.equipement-wrapper .form-check-input:checked {
  background-color: rgb(16, 185, 129);
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

.page-item {
  color: white;
}

.page-link {
  background-color: #36417d !important;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Guest from "./Layouts/Guest.vue";
import Default from "./Layouts/Default.vue"
import Auth from "./Layouts/Auth.vue"
export default {
  components: {
    name: "App",
    Guest,
    Default,
    Auth
  },
};
</script>
