<template>
  <section>
    <div class="sidebar">
      <div style="margin-top: 10px; margin-right: -37px" class="logo">
        <router-link to="/">
          <span style="color: #fff; font-size: 30px; font-weight: bold"
            ><i
              style="margin-left: -35px; color: rgb(221, 88, 55)"
              class="fa-solid fa-home"
            ></i
          ></span>
        </router-link>
      </div>
      <ul class="menu">
        <li class="active">
          <a href="">
            <i class="fa-solid fa-user"></i>
            <span>Profile</span>
          </a>
        </li>

        <li class="logout">
          <a @click="logout" href="">
            <i class="fa-solid fa-sign-out"></i>
            <span>Déconnexion</span>
          </a>
        </li>
      </ul>
    </div>
    <form method="POST" enctype="multipart/form-data">
      <div class="main--content" id="main">
        <div class="header--wrapper">
          <div class="header--title">
            <span style="font-size: 18px">Espace</span>
            <h2 style="font-size: 30px; font-weight: bold">
              {{ userData.role }}
            </h2>
          </div>
          <div class="user--info">
            <v-avatar
              color="brown"
              @click="hide = !hide"
              v-if="!userData.profilePhoto"
            >
              <span class="text-h7 avatar">{{ userInitials }}</span>
            </v-avatar>

            <v-avatar v-else>
              <v-img
                alt="John"
                :src="`http://localhost:8000/profil/${userData.profilePhoto}`"
              ></v-img>
            </v-avatar>
          </div>
        </div>

        <div
          class="card--container d-flex flex-column align-items-center justify-content-center mb-3"
          id="profil"
        >
          <div class="position-relative profil-photo">
            <p class="mb-2">
              {{
                userData.profilePhoto
                  ? "Modifier ma photo de profil"
                  : "Ajouter une photo de profil"
              }}
            </p>
            <div class="ms-4">
              <v-avatar
                color="brown"
                @click="hide = !hide"
                v-if="userInitials && !img"
                class="big-img"
              >
                <span v-if="!userData.profilePhoto" class="text-h7 avatar">{{
                  userInitials
                }}</span>
                <v-img
                  v-else
                  :src="`http://localhost:8000/profil/${userData.profilePhoto}`"
                ></v-img>
              </v-avatar>
              <v-avatar class="big-img" v-else>
                <v-img alt="John" :src="img"></v-img>
              </v-avatar>
              <label
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                "
                class="blue2 pencil"
              >
                <v-icon color="#108a00" icon="mdi-pencil" size="large"></v-icon>

                <input
                  @change="updatePhoto"
                  type="file"
                  class="file preview btn_like"
                  style="display: none"
                  accept="image/jpeg"
                  name="avatar"
              /></label>
            </div>
          </div>

          <green-btn
            v-if="changePhoto"
            :content="'Sauvegarder la photo'"
            @click="savePhoto"
          ></green-btn>
        </div>
        <div class="card--container" id="profil">
          <h3 class="main-title">Mes informations</h3>
          <div class="card--wrapper">
            <div class="payment--card light-red">
              <div class="card--header">
                <div class="amount">
                  <span class="title"> {{ userData.userName }}</span>
                  <span class="amount-value">{{ userData.userFirstName }}</span>
                </div>
                <i class="fa-solid fa-user icon"></i>
              </div>
            </div>

            <div class="payment--card light-purple">
              <div class="card--header">
                <div class="amount">
                  <span class="title"> (+229) </span>
                  <span class="amount-value">{{ userData.phone }}</span>
                </div>
                <i class="fa-solid fa-phone dark-purple icon"></i>
              </div>
            </div>

            <div
              class="payment--card light-blue"
              v-if="userData.role !== 'Locataire'"
            >
              <div class="card--header">
                <div class="amount">
                  <span class="title"> Annonces disponible </span>
                  <span class="amount-value">{{
                    userData.nbreAnnouncement
                  }}</span>
                </div>
                <i class="fa-solid fa-check dark-blue icon"></i>
              </div>
            </div>

            <div class="payment--card light-green">
              <div class="card--header">
                <div class="amount">
                  {{ userData.isVerified }}
                  <span class="title">{{ userData.email }}</span>
                </div>
                <i class="fa-solid fa-envelope dark-green icon"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="card--container mt-3" id="profil">
          <form
            method="POST"
            class="form2"
            enctype="multipart/form-data"
            v-if="userData.isVerified == 'No'"
          >
            Afin de devenir un profil verifié en envoyant une copie pdf de ma
            carte CIP OU biometrique suivi d'une photo d'identité à fond blanc
            <div
              class="d-flex justify-content-between flex-column align-items-center"
            >
              <div class="aegov-btn my-2 d-flex flex-column">
                <div class="">
                  <h3 class="text-decoration-underline" v-if="userPiece">
                    Piece d'identité
                  </h3>
                </div>
                <div class="d-flex">
                  <div
                    class="file-input-summary space-y-4 mt-2"
                    v-if="userPiece"
                  >
                    <div class="file-input-summary-item my-2">
                      <i class="fa-solid fa-file-import me-2"></i>
                      <span>{{ userPiece }}</span>
                    </div>
                  </div>
                  <label
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                    "
                    :class="{
                      'file-preview': !userPiece,
                      'file-modify': userPiece,
                    }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      class="file-summary w-5 h-5 me-1"
                    >
                      <rect width="256" height="256" fill="none" />
                      <line
                        x1="128"
                        y1="152"
                        x2="128"
                        y2="40"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                      <path
                        d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                      <polyline
                        points="88 80 128 40 168 80"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                    </svg>
                    {{
                      !userPiece
                        ? "Envoyer ma pièce d'identité"
                        : "Modifier ma pièce d'identité"
                    }}
                    <input
                      type="file"
                      name="piece_identite"
                      accept="application/pdf"
                      @change="getUserIdentity"
                      class="file preview btn_like"
                      style="display: none"
                  /></label>
                </div>
              </div>

              <div class="aegov-btn my-2 d-flex flex-column">
                <div class="">
                  <h3 v-if="userTruePhoto" class="text-decoration-underline">
                    Photo d'identité
                  </h3>
                </div>
                <div class="d-flex">
                  <div
                    class="file-input-summary-item my-2"
                    v-if="userTruePhoto"
                  >
                    <i class="fa-solid fa-file-import me-2"></i>
                    <span>{{ userTruePhoto }}</span>
                  </div>
                  <label
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                    "
                    :class="{
                      'file-preview': !userTruePhoto,
                      'file-modify': userTruePhoto,
                    }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      class="file-summary w-5 h-5 me-3"
                    >
                      <rect width="256" height="256" fill="none" />
                      <line
                        x1="128"
                        y1="152"
                        x2="128"
                        y2="40"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                      <path
                        d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                      <polyline
                        points="88 80 128 40 168 80"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                    </svg>
                    {{
                      !userTruePhoto ? "Envoyer ma photo" : "Modifier ma photo"
                    }}
                    <input
                      type="file"
                      name="photo_identite"
                      accept="image/jpeg"
                      @change="getUserPhoto"
                      class="file preview btn_like"
                      style="display: none"
                  /></label>
                </div>
                <div
                  class="file-input-summary space-y-4 mt-4"
                  v-if="userTruePhoto"
                ></div>
              </div>

              <div>
                <button
                  @click="UpdateUserInfo"
                  :class="[
                    userTruePhoto && userPiece ? 'validate-btn' : 'isDisabled',
                    'text-uppercase',
                  ]"
                  v-if="userPiece || userTruePhoto"
                  :disabled="userTruePhoto == '' || userPiece == ''"
                >
                  Confirmer mes données
                </button>
              </div>
            </div>
          </form>
          <form
            method="POST"
            class="form2"
            enctype="multipart/form-data"
            v-else-if="userData.isVerified == 'Wrong'"
          >
            <p class="text-danger text-h5 mb-3">
              Données incorrectes.Veuillez ressayer
            </p>
            <div
              class="d-flex justify-content-between flex-column align-items-center"
            >
              <div class="aegov-btn my-2 d-flex flex-column">
                <div class="">
                  <h3 class="text-decoration-underline" v-if="userPiece">
                    Piece d'identité
                  </h3>
                </div>
                <div class="d-flex">
                  <div
                    class="file-input-summary space-y-4 mt-2"
                    v-if="userPiece"
                  >
                    <div class="file-input-summary-item my-2">
                      <i class="fa-solid fa-file-import me-2"></i>
                      <span>{{ userPiece }}</span>
                    </div>
                  </div>
                  <label
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                    "
                    :class="{
                      'file-preview': !userPiece,
                      'file-modify': userPiece,
                    }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      class="file-summary w-5 h-5 me-1"
                    >
                      <rect width="256" height="256" fill="none" />
                      <line
                        x1="128"
                        y1="152"
                        x2="128"
                        y2="40"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                      <path
                        d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                      <polyline
                        points="88 80 128 40 168 80"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                    </svg>
                    {{
                      !userPiece
                        ? "Envoyer ma pièce d'identité"
                        : "Modifier ma pièce d'identité"
                    }}
                    <input
                      type="file"
                      name="piece_identite"
                      accept="application/pdf"
                      @change="getUserIdentity"
                      class="file preview btn_like"
                      style="display: none"
                  /></label>
                </div>
              </div>

              <div class="aegov-btn my-2 d-flex flex-column">
                <div class="">
                  <h3 v-if="userTruePhoto" class="text-decoration-underline">
                    Photo d'identité
                  </h3>
                </div>
                <div class="d-flex">
                  <div
                    class="file-input-summary-item my-2"
                    v-if="userTruePhoto"
                  >
                    <i class="fa-solid fa-file-import me-2"></i>
                    <span>{{ userTruePhoto }}</span>
                  </div>
                  <label
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                    "
                    :class="{
                      'file-preview': !userTruePhoto,
                      'file-modify': userTruePhoto,
                    }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      class="file-summary w-5 h-5 me-3"
                    >
                      <rect width="256" height="256" fill="none" />
                      <line
                        x1="128"
                        y1="152"
                        x2="128"
                        y2="40"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                      <path
                        d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                      <polyline
                        points="88 80 128 40 168 80"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                    </svg>
                    {{
                      !userTruePhoto ? "Envoyer ma photo" : "Modifier ma photo"
                    }}
                    <input
                      type="file"
                      name="photo_identite"
                      accept="image/jpeg"
                      @change="getUserPhoto"
                      class="file preview btn_like"
                      style="display: none"
                  /></label>
                </div>
                <div
                  class="file-input-summary space-y-4 mt-4"
                  v-if="userTruePhoto"
                ></div>
              </div>

              <div>
                <button
                  @click="UpdateUserInfo"
                  :class="[
                    userTruePhoto && userPiece ? 'validate-btn' : 'isDisabled',
                    'text-uppercase',
                  ]"
                  v-if="userPiece || userTruePhoto"
                  :disabled="userTruePhoto == '' || userPiece == ''"
                >
                  Confirmer mes données
                </button>
              </div>
            </div>
          </form>
          <div
            class="message d-flex align-items-center flex-column justify-center"
            v-else-if="userData.isVerified == 'Pending'"
          >
            <div class="spinner-container">
              <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <p class="text-h5 ms-2">
                Votre demande est en cours de traitement.
              </p>
            </div>
            <span class="d-block"
              >Veuillez revenir consulter votre profil de temps en temps</span
            >
          </div>

          <div class="verified" v-else-if="userData.isVerified == 'Yes'">
            <h1>Bravo!</h1>
            Vous informations ont ete verifiés.Vous profil est desormais actif
          </div>
        </div>
      </div>
    </form>
  </section>
</template>
<script>
import GreenBtn from "@/components/GreenBtn.vue";
import axios from "axios";
export default {
  data() {
    return {
      userData: {},
      userAccomodation: [],
      userInitials: "",
      img: "",
      userPiece: "",
      userTruePhoto: "",
      changePhoto: false,
    };
  },
  components: {
    GreenBtn,
  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    const userInitials =
      userData.userName.charAt(0).toUpperCase() +
      userData.userFirstName.charAt(0).toUpperCase();
    this.userInitials = userInitials;
    this.loadData();
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      window.location.reload();
    },

    updatePhoto(e) {
      const data = URL.createObjectURL(e.target.files[0]);
      this.img = data;
      this.changePhoto = true;
    },

    loadData() {
      const userData = JSON.parse(localStorage.getItem("userData"));
      axios
        .get("http://localhost:8000/api/user", {
          headers: {
            "x-access-token": userData.accessToken,
          },
        })
        .then(({ data }) => {
          this.userData = data;
          console.log("ll", this.userData);
        });
    },

    getUserIdentity(e) {
      const data = e.target.files[0].name;
      this.userPiece = data;
      console.log(data);
    },

    getUserPhoto(e) {
      const data = e.target.files[0].name;
      this.userTruePhoto = data;
    },
    deleteChoice() {
      var fileInput = document.querySelector(".btn_like");

      fileInput.value = "";
      this.userPiece = "";
    },
    savePhoto() {
      const form = document.querySelector("form");
      const userData = JSON.parse(localStorage.getItem("userData"));
      const formData = new FormData(form);
      axios
        .post("http://localhost:8000/api/uploadPhoto", formData, {
          headers: {
            "x-access-token": userData.accessToken,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => {
          console.log(data);
          this.changePhoto = false;
          axios
            .get("http://localhost:8000/api/user", {
              headers: {
                "x-access-token": userData.accessToken,
              },
            })
            .then(({ data }) => {
              this.userData = data;
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    UpdateUserInfo(e) {
      e.preventDefault();
      const form = document.querySelector(".form2");
      const userData = JSON.parse(localStorage.getItem("userData"));
      const formData = new FormData(form);
      axios
        .post("http://localhost:8000/api/uploadPersonalData", formData, {
          headers: {
            "x-access-token": userData.accessToken,
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          console.log(data);
          this.$swal.fire({
            icon: "success",
            title: "Vos données ont bien été envoyées",
            confirmButtonColor: "#218838",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui",
            cancelButtonText: "Non",
            text: "Veuillez revenir consulter votre profil régulièrement",
          });
          this.loadData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
section {
  display: flex;
}

.file-modify {
  color: rgb(16, 138, 0);
  margin-left: 20px;
}

.aegov-form-control.aegov-file-input-control .file-input-label {
  margin: 0;
  display: inline-flex !important;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem !important;
  line-height: 1.5rem !important;

  color: red !important;
  text-decoration-line: none;
}

.aegov-btn svg {
  height: 1.5rem;
  width: 1.5rem;
  flex-shrink: 0;
  fill: currentColor;
}

.aegov-btn {
  display: flex;

  justify-content: center;
  align-items: center;
}
.file-input-summary .file-input-summary-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  text-align: center;
  font-weight: 500;

  color: rgb(95 100 109 / var(--tw-text-opacity));
}
.aegov-form-control.aegov-file-input-control input[type="file"] {
  display: none;
}
.file-preview,
.validate-btn {
  max-width: 300px;
  background-color: rgb(16, 138, 0);
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.isDisabled {
  background-color: grey;
  margin-bottom: 20px;
  width: 265px;
  padding: 20px;
  color: white;
  border-radius: 10px;
}

.validate-btn {
  margin-bottom: 20px;
  width: 265px;
  padding: 20px;
}
.sidebar {
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  width: 110px;
  height: 100vh;
  padding: 0 1.7rem;
  color: #fff;
  overflow: hidden;
  transition: all 0.5s linear;
  background: #36417d;
}

.photo-profil {
  width: fit-content;
}
.sidebar:hover {
  width: 260px;
  transition: 0.5s;
}
.logo {
  height: 80px;
  padding: 16px;
}

.big-img {
  width: 150px;
  font-size: 25px;
  height: 150px;
}
.menu {
  height: 88%;
  position: relative;
  list-style: none;
  padding: 0;
}
.menu li {
  padding: 1rem;
  margin: 8px 0;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
}
.menu li:hover,
.active {
  background: #e0e0e058;
}
.menu a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.menu a span {
  overflow: hidden;
}
.menu a i {
  font-size: 1.2rem;
}

.pencil {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: white;
  top: 57%;
  right: 2%;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #108a00;
}

.logout {
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
}

/*--------main--content---------*/
.main--content {
  position: relative;
  background: #ebe9e9;
  width: 100%;
  font-family: "Metrophobic", sans-serif;
  padding: 1rem;
}
.header--wrapper img {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
}
.header--wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 10px;
  padding: 2px 2rem;
  margin-bottom: 1rem;
}
.header--title {
  color: rgb(221, 88, 55);
}
.user--info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.search--box {
  background: rgba(237, 237, 237);
  border-radius: 15px;
  color: rgb(221, 88, 55);
  display: flex;
  align-items: center;
  gap: 5;
  padding: 4px 12px;
}
.search--box input {
  background: transparent;
  padding: 10px;
}
.search--box i {
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.5s ease-out;
}
.search--box i:hover {
  transform: scale(1.2);
}

/*---------------card--container-----------*/
.card--container {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
}
.card--wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.main-title {
  color: rgb(221, 88, 55);
  padding-bottom: 8px;
  font-size: 15px;
  font-weight: bold;
  margin-right: 88%;
}
.payment--card {
  background: rgba(229, 223, 223);
  border-radius: 10px;
  padding: 1.2rem;
  width: 286px;
  height: 140px;
  display: flex;
  font-family: "Metrophobic", sans-serif;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
}
.payment--card:hover {
  transform: translateY(-5px);
}
.card--header {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 20px;
}
.amount {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.title {
  font-size: 20px;
  font-weight: 600;
}
.amount-value {
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
}
.icon {
  color: #fff;
  padding: 1rem;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  font-size: 1rem;
  background: red;
}
.card-detail {
  font-size: 18px;
  color: #777777;
  letter-spacing: 2px;
  font-family: "Courier New", Courier, monospace;
}

/*---------color css--------*/
.light-red {
  background: rgb(251, 233, 233);
}
.light-purple {
  background: rgb(254, 226, 254);
}
.light-green {
  background: rgb(235, 254, 235);
}

.light {
  background: #fff;
}
.light-blue {
  background: rgb(236, 236, 254);
}
.dark-red {
  background: red;
}
.dark-purple {
  background: purple;
}
.dark-green {
  background: green;
}
.dark-blue {
  background: #36417d;
}

/*-----------------tabular--wrapper-----------*/
.tabular--wrapper {
  background: #fff;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 2rem;
}
.table-container {
  width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background: rgb(221, 88, 55);
  color: #fff;
}
th {
  padding: 15px;
}
tbody {
  background: #fff;
}
td {
  padding: 15px;
  font-size: 14px;
  color: black;
  font-weight: 600;
}
tr:nth-child(even) {
  background: #f2f2f2;
}
tfoot {
  background: #36417d;
  font-weight: bold;
  color: #fff;
}
tfoot td {
  padding: 15px;
  color: #fff;
}
.table-container .btn1 {
  color: green;
  background: none;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
}
.table-container .btn2 {
  color: rgb(235, 16, 16);
  background: none;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 15px;
  margin-right: -12px;
}
</style>
