<template>
  <header>
    <div id="navbar">
      <nav :class="[{ onScroll: !view.topOfPage }, 'navbar navbar-expand-lg']">
        <router-link to="/">
          <h1 class="ms-5 header-title"><img src="../assets/log01.png" alt="" style="height: 9vh; margin-bottom: -9px;" ></h1>
        </router-link>
        <div
          class="header-right justify-content-between align-items-center collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul>
            <router-link to="/logements">
              <li class="link">Trouver un logement</li>
            </router-link>
            <li class="link d-block" v-if="!userInitials">
              <p class="drop-text dropdown-toggle">Je suis démarcheur</p>
              <div class="list">
                <ul>
                  <li>
                    <router-link
                      :to="{ name: 'annonce', params: { id: parseInt(userId)} }"
                      class="dropdown-item"
                      >Déposer une annonce
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/howitwork" class="dropdown-item"
                      >Comment ça marche</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/login" class="dropdown-item"
                      >Me connecter</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <router-link
              :to="{ name: 'annonce', params: { id: parseInt(userId) } }"
              v-else
              v-if="userRole !== 'Locataire'"
            >
              <li class="link">Déposer une annonce</li>
            </router-link>

            <li class="link d-block" v-if="!userInitials">
              <router-link to="/login">
                <p class="drop-text dropdown-toggle">Je suis propriétaire</p>
              </router-link>
              <div class="list">
                <ul>
                  <li>
                    <router-link
                      :to="{ name: 'annonce', params: { id: parseInt(userId)} }"
                      class="dropdown-item"
                    >
                      Déposer une annonce
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/howitwork" class="dropdown-item">
                      Comment ça marche ?
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/login" class="dropdown-item">
                      Me connecter
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <div class="Header_buttons ms-3">
            <div :class="[{ hidden: hide }, 'sub-menu position-absolute']">
              <ul class="sub-list d-block">
                <li>
                  <router-link   :to="{ name: 'profil', params: { id: parseInt(this.userId) } }">
                    <a class="dropdown-item" href="#"
                      ><i class="fa-solid fa-user me-2 pt-2"></i>Voir mon
                      profil</a
                    >
                  </router-link>
                </li>
                <li
                  class="dropdown-item text-black"
                  v-if="userRole !== 'Locataire'"
                  @click="handleClick"
                >
                  <i class="fa-solid fa-arrow-right me-2 arrow"></i>Mes annonces
                </li>
                <li>
                  <a class="dropdown-item text-black" @click="logout" href="#"
                    ><i class="fa-solid fa-right-from-bracket me-2 arrow"></i
                    >Déconnexion</a
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
            <v-avatar color="brown" @click="hide = !hide" v-if="userInitials">
              <span class="text-h7 avatar">{{ userInitials }}</span>
            </v-avatar>

            <router-link to="/login" v-else>
              <button
                type="button"
                class="btn btn-outline-light account-btn px-1 py-2"
              >
                Mon compte
              </button>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import OrangeBtn from "../components/OrangeBtn.vue";

export default {
  name: "HouseNavBar",
  data() {
    return {
      view: {
        topOfPage: true,
      },
      red: "red",
      minBudget: 1,
      userInitials: "",
      userRole: "",
      userId: "",
      hide: true,
      maxBudget: 700000,
      disabled: false,
      isOpen: false,
      carrouselTab: [
        {
          src: "cotonou-room.jpg",
          name: "Cotonou",
        },
        {
          src: "cotonou-room.jpg",
          name: "Calavi",
        },
        {
          src: "cotonou-room.jpg",
          name: "Calavi",
        },
      ],
    };
  },
  components: {
    OrangeBtn,
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      this.userRole = userData.role;
      this.userId = userData.id;
      console.log(this.userRole);
      const userInitials =
        userData.userName.charAt(0).toUpperCase() +
        userData.userFirstName.charAt(0).toUpperCase();
      this.userInitials = userInitials;
      console.log(userInitials);
    }
  },

  methods: {
    warnClicked() {
      this.disabled = !this.disabled;
    },
    openPopup() {
      this.isOpen = !this.isOpen;
    },
    handleScroll() {
      if (window.pageYOffset > 10) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
    logout() {
      this.$store.dispatch("logout");
      window.location.reload();
    },
    handleClick() {
      this.$router.push({ name: "annonceList", params: { id: this.userId } });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");

* {
  padding: 0;
  margin: 0;
}

header {
  position: relative;
  z-index: 500;
}
.link {
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
}

.hidden {
  display: none;
}

.sub-menu {
  right: 2%;
  top: 100%;
  background: white;
}

.sub-menu ul {
  margin-left: 0 !important;
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

.sub-menu::after {
  content: "";
  position: absolute;
  right: 9%;
  bottom: 100%;
  border-width: 9px;

  border-style: solid;
  border-color: transparent transparent white transparent;
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
.info-text {
  font-size: 18px;
}
.budget {
  gap: 10px;
  padding-bottom: 10px;
}
.no-border-btn {
  border: none;
}

.searchpage {
  margin-top: 0px;
}

.is-focused .Form_label,
.is-value .Form_label {
  color: #36417d;
  opacity: 1;
  transform: scale(0.75) translate3d(-8px, -46px, 0);
}
.Form_label {
  color: #6a73ad;
  display: inline-block;
  font-family: "Metrophobic", sans-serif;
  font-size: 18px;
  font-weight: 600;
  left: 10px;
  opacity: 0;
  padding: 0 5px;

  position: absolute;
  top: 23px;
  transform: scale(1) translate3d(0, -50%, 0);
  transform-origin: top left;
  transition: 0.15s;
  white-space: nowrap;
  z-index: 101;
}

.ButtonFilter_popin {
  right: 0;
  cursor: pointer;
}
.ButtonFilter_popin.is-open {
  box-shadow: 0 3px 6px 0 var(--color-shadow);
  opacity: 1;
  pointer-events: all;
  transform: translateY(100%);
  z-index: 201;
}
.ButtonFilter_popin {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  bottom: -5px;
  min-width: 340px;
  /*    opacity: 0; */
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  transform: translateY(calc(100% + 5px));
  transition: 0.15s;
}
.ButtonRectangle {
  background-color: transparent;
  color: #6a73ad;
  font-weight: 400;
  padding-left: 8px;
  padding-right: 16px;
}

.Header_placeAutocomplete--search {
  max-width: 500px;
  min-width: 380px;
}

.LocationPlaceholder_input {
  background-color: transparent;
  border: none;
  color: #36417d;
  flex-grow: 1;
  font: var(--ft-s);
  font-weight: 600;
  height: 30px;
  margin: 0 0 0 10px;
  min-width: 150px;
  outline: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

::placeholder {
  color: #36417d;
  font-weight: 200;
}

.searchBar_multiple {
  display: flex;
  padding-top: 15px;
  padding-bottom: 30px;
  justify-content: center;
  width: 100%;
}

.LocationPlaceholder_search {
  background-color: #fcfcff;
  border: 1px solid#ededff;
  border-radius: 12px 0 0 12px;
  padding: 5px 16px;
  display: flex;
  height: 45px;
  align-items: center;
  position: relative;
}
.SearchFilter {
  border-radius: 0 12px 12px 0;
  min-width: 180px;
}
.SearchFilter {
  background-color: var(--color-bg-2xweak);
  cursor: pointer;
  display: inline-block;
  margin-left: 1.5px;
  max-height: 45px;
}

.SearchOptions_filter .pop-container,
.no-border-btn {
  background-color: #fcfcff;
  border: 1px solid#ededff;
  border-radius: 0px 12px 12px 0;
  padding: 5px 6px 5px 16px;
  display: flex;
  color: #36417d;
  align-items: center;

  position: relative;
}

.no-border-btn {
  height: 45px;
}

.onScroll {
  position: fixed;
  top: 9%;

  background-color: #36417d;
}
h1.header-title {
  font-size: 27px;
  margin-top: 3px;
  margin-bottom: 10px;
}
.navbar {
  position: fixed;

  height: 60px;
  align-items: center;
  top: 0;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.SearchPage_bread {
  margin-top: 6rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  width: 95%;
}
.sub-menu .arrow {
  opacity: 0;
  transition: ease-in-out 0.1s;
}

.sub-menu li:hover .arrow {
  opacity: 1;
}
.navbar {
  background-color: white;
}

.sub-list {
  margin-left: 0 !important;
}

header {
  background-color: white;
  min-height: 60px;
  display: flex;
  color: white;
  flex-direction: column;
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
  transition: ease-in-out 1s;
  background: white;
  margin-top: 10px;
}

.list,
.list li {
  display: none;
}
.header-title {
  color: black;
  font-size: 35px;
}

.btn {
  color: black;
  border: 1px solid #ededff;
  padding: 10px 15px;
  border-radius: 10px;
}

.dropdown-item.last {
  border-bottom: 1px solid #f3f3ff;
}
.dropdown-item {
  color: #36417d !important;
  font-weight: 400;
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

.link .list ul {
  display: block;
  margin-left: 0px;
}
.link:hover .list,
.link:hover .list li {
  display: block;
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
    .navbar {
      box-shadow: 0 3px 6px 0 rgba(69, 97, 251, 0.12);
    }
  }

  ul {
    margin-left: 3em;

    display: flex;
    justify-content: space-between;
    li {
      cursor: pointer;
      font-weight: 600;
      list-style-type: none;
      color:#36417d;
    }
    li:hover{
      color:#6875c0;
    }
  }
}
</style>
