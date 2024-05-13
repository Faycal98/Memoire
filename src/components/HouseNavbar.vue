<template>
  <header>
    <div id="navbar">
      <nav class="navbar navbar-expand-lg">
        <router-link to="/">
          <h1 class="ms-5 header-title">ChezVous</h1>
        </router-link>
        <div
          class="header-right justify-content-between align-items-center collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul>
            <li class="link d-block">
              <p class="drop-text dropdown-toggle">Je suis démarcheur</p>

              <div class="list">
                <ul>
                  <li>
                    <router-link to="/annonce" class="dropdown-item">
                      Déposer une annonce
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/howitwork" class="dropdown-item">
                      Comment ça marche
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/login" class="dropdown-item">
                      Me connecter</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="link d-block">
              <p class="drop-text dropdown-toggle">Je suis propriétaire</p>
              <div class="list">
                <ul>
                  <li>
                    <router-link to="/annonce" class="dropdown-item">
                      Déposer une annonce
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/howitwork" class="dropdown-item">
                      Comment ça marche
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/login" class="dropdown-item">
                      Me connecter</router-link
                    >
                  </li>
                </ul>
              </div>
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
                  <li>
                    <router-link to="/login" class="dropdown-item text-black">
                      <i class="fa-solid fa-arrow-right me-2 arrow"></i>
                      Connexion
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/register" class="dropdown-item last">
                      <i class="fa-solid fa-arrow-right me-2 arrow arrow"></i
                      >Inscription
                    </router-link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"
                      ><i class="fa-regular fa-circle-question me-2"></i> Aide
                      et accompagnement</a
                    >
                  </li>
                  <li>
                    <router-link to="/howitwork" class="dropdown-item last">
                      <i class="fa-solid fa-arrow-right me-2 arrow"></i>Comment
                      ça marche ?
                    </router-link>
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
    <div class="SearchPage_bread mb-40">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon icon="mdi-forward"></v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <h1 class="ft-2xl text-center my-3">
      <b style="font-size: 30px"
        >Trouver un logement partout au Bénin et soyez chez vous !</b
      >
    </h1>
    <div class="text-center info-text">
      <p style="font-size: 18px">
        ChezVous est une plateforme de logement en ligne qui rend la location
        plus simple et humaine, quelle qu’en soit la durée.
      </p>
    </div>
    <div :class="[{ onScroll: !view.topOfPage }, 'searchBar_multiple']">
      <div class="Header_placeAutocomplete Header_placeAutocomplete--search">
        <div class="LocationPlaceholder_search">
          <i class="fa-solid fa-magnifying-glass strong-blue"></i>
          <input
            type="text"
            class="LocationPlaceholder_input"
            v-model="city"
            placeholder="Où souhaitez-vous habiter ? Ville..."
            @keyup.enter="submit"
          />
        </div>
      </div>
      <div class="ButtonFilter_Budget SearchOptions_filter position-relative">
        <div class="ButtonRectangle">
          <button class="no-border-btn" @click="openPopup">
            Votre budget <i class="ms-3 fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div v-if="isOpen" class="ButtonFilter_popin position-absolute">
          <div class="close-btn position-absolute" @click="openPopup">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div class="pt-5 pb-4 px-3 pop-container flex-column">
            <div class="row budget gx-5">
              <div class="col">
                <div class="InputNumber" type="number">
                  <div
                    class="InputNumber_panel Form_widget js-validator is-value is-init"
                  >
                    <label class="Form_label">Budget min.</label>
                    <input
                      type="number"
                      min="4000"
                      v-model="minBudget"
                      max="20000000"
                      id="numberId"
                      placeholder=""
                      name=""
                      step="any"
                      class="Input"
                    />
                    <!---->
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>
              <div class="col">
                <div class="InputNumber" type="number">
                  <div
                    class="InputNumber_panel Form_widget js-validator is-value is-init"
                  >
                    <label class="Form_label">Budget max.</label>
                    <input
                      type="number"
                      min="4000"
                      v-model="maxBudget"
                      max="20000000"
                      id="numberId"
                      placeholder=""
                      name=""
                      step="any"
                      class="Input"
                    />
                    <!---->
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>
            </div>
            <div
              class="ButtonFilter_actions w-100 d-flex align-items-center justify-content-between"
            >
              <div>Effacer</div>
              <OrangeBtn
                class="searchpage"
                :content="'Appliquer'"
                @click="getBudget"
              ></OrangeBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import OrangeBtn from "../components/OrangeBtn.vue";

export default {
  name: "HouseNavBar",
  emits: ["getBudget", "submit"],
  data() {
    return {
      view: {
        topOfPage: true,
      },
      red: "red",
      minBudget: 4000,
      maxBudget: 20000000,
      disabled: false,
      isOpen: false,
      city: "",
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
      items: [
        {
          title: "Accueil",
          disabled: false,
          href: "/",
        },
        {
          title: "Logements",
          disabled: false,
          href: "logements",
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

  methods: {
    warnClicked() {
      this.disabled = !this.disabled;
    },
    openPopup() {
      this.isOpen = !this.isOpen;
    },
    submit() {
      this.$emit("submit", this.city);
    },
    getBudget() {
      this.isOpen = !this.isOpen;
      this.$emit("getBudget", [this.minBudget, this.maxBudget]);
    },
    handleScroll() {
      if (window.pageYOffset > 100) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
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
.ButtonFilter_actions {
  align-items: center;
  background-color: #f8f8ff;
  border-top: 1px solid #ededff;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
}

.InputNumber_panel input {
  border: none !important;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  flex-grow: 1;
  min-height: 45px;
  min-width: 60px;
  border-radius: 4px;
  color: var(--color-ft);
  display: flex;
  font: var(--ft-m);
  background-color: #f8f8ff;
  height: auto;
  outline: 0;
  padding: 10px 30px 10px 12px;
  position: relative;
  transition: background-color 0.15s, border-color 0.15s;
  width: 100%;
}
.InputNumber_panel {
  align-items: center;
  background-color: #f8f8ff;
  border: 1px solid #ededff;
  /* border-radius: 4px; */
  display: flex;
}

.Form_widget {
  position: relative;
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
  font-weight: 300;
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
  padding-bottom: 20px;
  background-color: #36417d;
}
h1.header-title {
  font-size: 27px;
  margin-bottom: 10px;
}
.navbar {
  position: fixed;
  border-bottom: 0.5px solid hsla(0, 0%, 100%, 0.3);

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
  background-color: #36417d;
}

.sub-list {
  margin-left: 0 !important;
}

header {
  background-color: #36417d;
  min-height: 300px;
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
      font-weight: 300;
      color: white;
      list-style-type: none;
    }
  }
}
</style>
