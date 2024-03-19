<template>
  <HouseNav></HouseNav>
  <div class="wrapper">
    <div class="container-fluid px-4 pt-4">
      <div class="row mb-3">
        <div class="col-lg-3 col-sm-8 mb-4"></div>
        <div class="col-lg-9 d-flex justify-content-between">
          <div class="spinner-container" v-if="isLoading">
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <h2>Recherche en cours</h2>
          </div>
          <div class="ps-3 SearchPage_Header_title" v-else>
            <p>+50 logements sont disponibles</p>
          </div>
          <div class="me-4 select-container">
            <select v-model="selected">
              <option disabled value="">Trier par :</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row gx-2">
        <div class="col col-lg-3 col-sm-0">
          <div class="sidebar">
            <div class="FilterSection os">
              <div class="FilterSection_headerBlock">
                <h2 class="FilterSection_headerTitle">Tous les filtres</h2>
              </div>
              <div class="FilterSection-filter-type">
                <div class="AccordionFilter_Title">
                  <div class="AccordionFilter_Title_Text d-flex">
                    Type de logement
                    <div class="ml-10">
                      <span class="bg-r ft-bold icon-color">3</span>
                    </div>
                  </div>
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-input"
                      type="checkbox"
                      v-model="Appartement"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                    >
                      Appartements
                    </label>
                  </div>
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="chambres"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                      >Chambres 
                    </label>
                  </div>
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="maisons"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                    >
                      Maisons
                    </label>
                  </div>
                </div>

                <div class="AccordionFilter_Title">
                  <div class="AccordionFilter_Title_Text d-flex">
                    Proposés par
                    <div class="ml-10">
                      <span class="bg-r ft-bold icon-color">3</span>
                    </div>
                  </div>
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-input"
                      type="checkbox"
                      v-model="proprietaires"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                    >
                      Propriétaires
                    </label>
                  </div>
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="demarcheurs"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                      >Démarcheurs
                    </label>
                  </div>
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="agencesImmo"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                    >
                      Agences Immobilières
                    </label>
                  </div>
                </div>
                <div class="AccordionFilter_Title">
                  <div class="AccordionFilter_Title_Text d-flex">
                    Autres critères
                    <div class="ml-10">
                      <span class="bg-r ft-bold icon-color">2</span>
                    </div>
                  </div>
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-input"
                      type="checkbox"
                      v-model="proprietaires"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                    >
                      A vendre
                    </label>
                  </div>
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="demarcheurs"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                      >A louer
                    </label>
                  </div>
                </div>
                <div class="ButtonFilterAccordion_actions">
                  <ButtonGreen
                    class="text-end mt-2 mb-2 px-0 filtre-btn"
                    :content="'Appliquer'"
                  ></ButtonGreen>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col col-lg-9 col-sm-12 ps-3">
          <div class="row">
            <div class="col-lg-4 col-sm-8 mb-4" v-for="num in 15" :key="num">
              <div class="SearchPage_Block_Result">
                <Card :imgArray="carrouselTab" :appartId="1"></Card>
              </div>
            </div>
          </div>

          <div class="row mb-5">
            <div class="col">
              <paginate
                :page-count="10"
                :margin-pages="10"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
              >
              </paginate>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ff">
  
   
  </div>
</template>

<script>

import HouseNav from "../components/HouseNavbar.vue";
import Card from "../components/Card.vue";
import ButtonGreen from "../components/ButtonGreen.vue";
import Paginate from "vuejs-paginate-next";
export default {
  name: "NavbarVue",
  data() {
    return {
      view: {
        topOfPage: true,
      },
      red: "red",
      minBudget: 1,
      maxBudget: 700000,
      disabled: false,
      isOpen: false,
      chambres: false,
      maisons: true,
      agencesImmo: true,
      proprietaires: false,
      demarcheurs: true,
      isLoading: false,
      selected: "",
      Appartement: false,
      carrouselTab: [
        {
          src: "cotonou-room.jpg",
          name: "Cotonou",
        },
        {
          src: "calavi-room.jpg",
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
    Card,
    HouseNav,
    ButtonGreen,
    paginate: Paginate,
  
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

.ml-10 {
  margin-left: 10px;
}
.bg-r {
  background-color: #ee5354;
}
.form-input:checked {
  background-color: red;
  accent-color: red;
  border-color: none;
}

.SearchPage_Header_title {
  font-size: 20px;
  color: #353535;
  font-family: "Metrophobic", sans-serif;
  font-weight: 700;
}
.ft-bold {
  font-weight: 700;
}
/* sidebar scroll */
.sidebar {
  overflow: scroll;
  margin-top: -15%;
  height: 480px;
}
.AccordionFilter_Title_Text {
  font-weight: 600;
  font-size: 15px;
  font-family: "Metrophobic", sans-serif;
}

.filtre-btn {
  min-width: 0px;
  min-height: 0;
}
.icon-color {
  align-items: center;
  border-radius: 50%;
  color: #fff;
  display: inline-flex;
  flex-shrink: 0;
  font-size: 13px;
  height: 22px;
  justify-content: center;
  line-height: 1;
  width: 22px;
}
/* .FilterSection.os{
  height: 150px;
} */

.FilterSection {
  border: 1px solid #ededff;
  max-width: 300px;

  text-align: left;
  border-radius: 12px;
}
.AccordionFilter_Title:not(:last-child) {
  border-bottom: 1px solid #ededff;
  color: #353535;
}

.FilterSection_filters .AccordionFilter:not(:last-child) {
  border-bottom: 1px solid #ededff;
}

.FilterSection {
  padding: 0 16px;
  position: sticky;
  top: 150px;
}

.AccordionFilter_Title {
  padding: 16px 0;
  position: relative;
}
.FilterSection_headerTitle {
  font-size: 20px;
  font-weight: bolder;
  color:rgb(221, 88, 55);
}

.FilterSection_headerBlock {
  border-bottom: 1px solid #ededff;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
}

header {
  position: relative;
  z-index: 500;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.info-text {
  font-size: 18px;
}

select {
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 18px;
  color: rgb(221, 88, 55);
}

.select-container {
  border-radius: 9px;
  padding: 6px 8px;
  border: 1px solid rgb(221, 88, 55);
}

.budget {
  gap: 10px;
  padding-bottom: 10px;
}
.no-border-btn {
  border: none;
}
.page-item {
  background-color: #36417d;
  color: red;
}

.page-link {
  background-color: red;
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

.spinner-container {
  display: flex;
  align-items: center;
}

.spinner-container h2 {
  font-size: 16px;
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
 /* color: #36417d !important;*/
  font-weight: 400;

  transition: background-color 5ms;
  text-align: left;
  padding: 18px 25px;

  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #6a73ad;
  text-decoration: none;

  color: inherit;
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
      color: red;
      list-style-type: none;
      color: white;
    }
  }
}
.form-check-label{
  color: #36417d;
}
</style>
