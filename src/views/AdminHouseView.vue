<template>
  <HouseNav @getBudget="sendBudget" @submit="submitCity"></HouseNav>
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
            + de 10 logements sont disponibles
          </div>
          <div class="me-4 select-container">
            <select v-model="selected">
              <option disabled value="">Trier par:</option>
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
                      class="form-check-input"
                      type="checkbox"
                      v-model="appartements"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                      >Appartements
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
                      class="form-check-input"
                      type="checkbox"
                      v-model="proprietaires"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                      >Proprietaires
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
                  <!---
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="buy"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                    >
                      A vendre
                    </label>
                  </div>-->
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="sell"
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label ms-3 mt-1"
                      for="flexCheckDefault"
                      >A vendre
                    </label>
                  </div>
                  <div
                    class="AccordionFilter_Details mt-3 d-flex align-items-center"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="rent"
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
                  <OrangeBtn
                    @click="getFilterData"
                    class="text-end mt-2 mb-2 px-0 filtre-btn"
                    :content="'Appliquer'"
                  ></OrangeBtn>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col col-lg-9 col-sm-12 ps-3">
          <div class="alert-container">
            <v-alert
              v-if="!getType"
              closable
              density="compact"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
              title="Alert title"
              type="warning"
            ></v-alert>
          </div>

          <div class="row" v-if="accomodationTab.length > 0">
            <div
              class="col-lg-4 col-sm-8 mb-4"
              v-if="!isLoading"
              v-for="accomodation in accomodationTab"
              :key="accomodation"
            >
              <div class="SearchPage_Block_Result">
                <Card
                  :imgArray="accomodation.images"
                  :appartId="accomodation.id"
                  :accomodationDetail="accomodation"
                ></Card>
              </div>
            </div>

            <div
              class="col-lg-4 col-sm-8 mb-4"
              v-else
              v-for="num in 20"
              :key="num"
            >
              <div class="SearchPage_Block_Result">
                <v-skeleton-loader
                  class="mx-auto"
                  elevation="12"
                  max-width="300"
                  type="table-heading, list-item-two-line, image, table-tfoot"
                ></v-skeleton-loader>
              </div>
            </div>
          </div>
          <div class="row" v-else>
            <h1>Aucun resultat correspondant</h1>
          </div>

          <div class="row mb-5">
            <div class="col">
              <div class="text-center">
                <v-pagination
                  v-model="page"
                  @input="handlePageChange"
                  :length="4"
                  next-icon="mdi-menu-right"
                  prev-icon="mdi-menu-left"
                ></v-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <v-fab
    v-show="scY > 300"
    @click="toTop"
    class="me-4 floating-btn"
    icon="mdi-chevron-up"
    location="bottom end"
    absolute
    offset
  ></v-fab>
</template>

<script>
import axios from "axios";

import HouseNav from "../components/AdminHouseNavbar.vue";
import Card from "../components/Card.vue";
import OrangeBtn from "../components/OrangeBtn.vue";

export default {
  name: "HouseVue",
  data() {
    return {
      view: {
        topOfPage: true,
      },
      red: "red",

      rent: true,
      buy: true,
      budget: [4000, 20000000000],
      page: 1,
      scTimer: 0,
      appartements: true,
      scY: 0,
      disabled: false,
      isOpen: false,
      proprietaires: true,
      chambres: true,
      maisons: true,
      agencesImmo: true,
      sell: true,
      demarcheurs: true,
      isLoading: false,
      selected: "",
      appartements: true,
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
          name: "Ouidah",
        },
      ],
      accomodationTab: [],
    };
  },
  components: {
    Card,
    HouseNav,
    OrangeBtn,
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/findAllAccomodation")
      .then(({ data }) => {
        console.log(data);
        this.accomodationTab = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    warnClicked() {
      this.disabled = !this.disabled;
    },
    handlePageChange(value) {
      this.currentPage = value;
    },
    sendBudget(value) {
      this.budget = value;
      this.getFilterData();
    },
    openPopup() {
      this.isOpen = !this.isOpen;
    },
    submitCity(city) {
      console.log(city);

      let filter = {
        type: {
          Chambre: this.chambres,
          Appartement: this.appartements,
          Maison: this.maisons,
        },
        proposedBy: {
          Démarcheur: this.demarcheurs,
          AgenceImmo: this.agencesImmo,
          Propriétaire: this.proprietaires,
        },

        purpose: {
          location: this.rent,
          vente: this.sell,
        },
      };

      let type = [];
      let proposedBy = [];
      let purpose = [];

      let query = {};
      Object.keys(filter.proposedBy).forEach((key) => {
        if (filter.proposedBy[key]) {
          proposedBy.push({ proposedBy: key });
        }
      });
      Object.keys(filter.type).forEach((key) => {
        if (filter.type[key]) {
          type.push({ type: key });
        }
      });

      Object.keys(filter.purpose).forEach((key) => {
        if (filter.purpose[key]) {
          purpose.push({ purpose: key });
        }
      });
      let budget = this.budget.join();
      type = type.map((el) => el.type);
      proposedBy = proposedBy.map((el) => el.proposedBy);
      purpose = purpose.map((el) => el.purpose);
     

      axios
        .get(
          `http://localhost:8000/api/findSpecificAccomodation?city=${city}&type=${type}&proposedBy=${proposedBy}&purpose=${purpose}&budget=${budget}`
        )
        .then(({ data }) => {
          console.log(data);
          this.accomodationTab = data;
        });
    },
    handleScroll() {
      if (window.pageYOffset > 100) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }

      this.handleScrollTop();
    },

    handleScrollTop: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    getFilterData() {
      let filter = {
        type: {
          Chambre: this.chambres,
          Appartement: this.appartements,
          Maison: this.maisons,
        },
        proposedBy: {
          Démarcheur: this.demarcheurs,
          AgenceImmo: this.agencesImmo,
          Propriétaire: this.proprietaires,
        },

        purpose: {
          location: this.rent,
          vente: this.sell,
        },
      };

      let type = [];
      let proposedBy = [];
      let purpose = [];

      let query = {};
      Object.keys(filter.proposedBy).forEach((key) => {
        if (filter.proposedBy[key]) {
          proposedBy.push({ proposedBy: key });
        }
      });
      Object.keys(filter.type).forEach((key) => {
        if (filter.type[key]) {
          type.push({ type: key });
        }
      });

      Object.keys(filter.purpose).forEach((key) => {
        if (filter.purpose[key]) {
          purpose.push({ purpose: key });
        }
      });
      let budget = this.budget.join();
      type = type.map((el) => el.type);
      proposedBy = proposedBy.map((el) => el.proposedBy);
      purpose = purpose.map((el) => el.purpose);
      console.log(proposedBy);
      console.log(type);
      console.log(purpose);

      this.$router.push({
        name: "logements",
        query: {
          type: type.join(),
          proposedBy: proposedBy.join(),
          purpose: purpose.join(),
          budget: budget,
        },
      });
      axios
        .get(
          `http://localhost:8000/api/findSpecificAccomodation?type=${type}&proposedBy=${proposedBy}&purpose=${purpose}&budget=${budget}`
        )
        .then(({ data }) => {
          console.log(data);
          this.accomodationTab = data;
        });
    },
  },
  computed: {
    getType() {
      return this.appartements || this.maisons || this.chambres;
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
.alert-container .v-alert {
  width: 642px;
  height: 150px;
  margin-bottom: 20px;
  text-align: left;
}
.ml-10 {
  margin-left: 10px;
}
.bg-r {
  background-color: #ee5354;
} /*
.form-input:checked {/*
  background-color: red;
  accent-color: red;
  border-color: none;
}*/

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
  position: relative;
  top: 15px;

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
}

.AccordionFilter_Title {
  padding: 16px 0;
  position: relative;
}
.FilterSection_headerTitle {
  font-size: 20px;
  font-weight: bolder;

  color: #3d3c3c;
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
}

.select-container {
  border-radius: 5px;
  padding: 6px 8px;
  border: 1px solid #3d3c3c;
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

  color: white;
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
</style>
