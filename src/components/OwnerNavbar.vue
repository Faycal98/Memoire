<template>
  <div id="navbar">
    <nav :class="[{ onScroll: !view.topOfPage }, 'navbar navbar-expand-lg']">
      <router-link to="/owner">
        <h1 class="ms-5 header-title">
          <strong style="color: #3cd7a3 ;">C</strong>hez<span id="letter"><strong>V</strong></span
          >ous
        </h1></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="header-right justify-content-end align-items-center collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul>
          <router-link to="/logements">
            <li class="link">Trouver un logement</li>
          </router-link>
       
          <router-link to="/annonce">
            <li class="link">Mes annonces</li>
          </router-link>
        </ul>

        <div class="Header_buttons ms-3">
          <div :class="[{ hidden: hide }, 'sub-menu position-absolute']">
            <ul class="sub-list d-block">
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="fa-solid fa-user me-2 pt-2"></i>Voir mon profil</a
                >
              </li>
              <li>
                <a class="dropdown-item text-black" href="#"
                  ><i class="fa-solid fa-arrow-right me-2 arrow"></i>Mes
                  annonces</a
                >
              </li>
              <li>
                <a class="dropdown-item text-black" @click="logout" href="#"
                  ><i class="fa-solid fa-right-from-bracket me-2 arrow"></i>Se
                  deconnecter</a
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
</template>

<script>
export default {
  name: "NavbarVue",
  data() {
    return {
      view: {
        topOfPage: true,
      },
      red: "red",
      userInitials: "",
      hide: true,
      userData: "",
      showHidden: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const userData = this.$store.state.user;

    if (userData) {
      const userInitials =
        userData.userName.charAt(0).toUpperCase() +
        userData.userFirstName.charAt(0).toUpperCase();
      this.userInitials = userInitials;
      console.log(userInitials);
    }
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
    logout() {
      this.$store.dispatch("logout");
      window.location.reload();
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
#letter {
  color: #3cd7a3;
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

.sub-menu::after {
  content: "";
  position: absolute;
  right: 9%;
  bottom: 100%;
  border-width: 9px;

  border-style: solid;
  border-color: transparent transparent white transparent;
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
.header-title {
  color: white;
  font-size: 35px;
}
.dropdown-item {
  color: #36417d !important;
  font-weight: 400;
  border-bottom: 1px solid #f3f3ff;
  transition: background-color 5ms;
  text-align: left;
  padding: 15px 20px;

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

.avatar {
  cursor: pointer;
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
  height: 68px;
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
      background-color: #3cd7a3;
    }
    .account-btn:hover {
      color: white;
    }
  }

  ul {
    margin-left: 3em;
    display: flex;
    justify-content: space-around;
    li {
      cursor: pointer;
      font-weight: 300;
      color: red;
      list-style-type: none;
      color: white;
    }
  }
}
</style>