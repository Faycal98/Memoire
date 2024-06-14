<template>
  <header>
    <div id="navbar">
      <nav class="navbar navbar-expand-lg">
        <router-link to="/">
          <h1 class="ms-5 header-title">
            <img src="../assets/log01.jpg" alt="" style="height: 8vh;background-color:white;border-radius:4px;  margin-bottom: -1px;" >
          </h1>
        </router-link>
        <div
          class="header-right justify-content-end align-items-center d-flex"
          id="navbarSupportedContent"
        >
          <ul class="u-block">
            <li>
              <router-link
                  :to="{
                    name: 'annonceList',
                    params: { id: parseInt(this.userId) },
                  }"
                  class="dropdown-item text-white"
                >
                Mes annonces
              </router-link>
            </li>
          </ul>

          <ul class="u-block">
            <li v-if="userInitials">
              <router-link to="/packs" class="dropdown-item text-white">
                Acheter un pack d'annonces
              </router-link>
            </li>
          </ul>
          <div class="Header_buttons ms-3">
            <div :class="[{ hidden: hide }, 'sub-menu position-absolute']">
              <ul class="sub-list d-block">
                <li>
                  <router-link
                    :to="{
                      name: 'profil',
                      params: { id: parseInt(this.userId) },
                    }"
                  >
                    <a class="dropdown-item" href="#"
                      ><i class="fa-solid fa-user me-2 pt-2"></i>Voir mon
                      profil</a
                    >
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'annonceList', params: { id: parseInt(this.userId) } }">
                    <a class="dropdown-item text-black" href="#"
                      ><i class="fa-solid fa-arrow-right me-2 arrow"></i>Mes
                      annonces</a
                    >
                  </router-link>
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
            <v-avatar
            color="brown"
            @click="hide = !hide"
            v-if="userInitials"
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
  <div class="spacer"></div>

  <div id="body">
    <h1
      style="
        margin: 0px 0px 5px;
        text-align: center;
        font-size: 2em;
        color: #36417d;
      "
    >
      Faite votre annonce en toute sécurité avec ChezVous !
    </h1>

    <section id="annonce">
      <Form action="" method="">
        <div class="stepper-wrapper text-start">
          <v-stepper
            v-model="e1"
            class="position-relative"
            :next-text="nextName"
            :prev-text="'Précédent'"
            show-actions
          >
            <template v-slot:default="{ prev, next }">
              <v-stepper-header>
                <v-stepper-item
                  title="Détails"
                  flat
                  value="1"
                  :rules="[() => step1verification]"
                  :complete="e1 > 1"
                ></v-stepper-item>

                <v-divider></v-divider>

                <v-stepper-item
                  title="Localisation"
                  value="2"
                  :rules="[() => step2Verification]"
                  :complete="e1 > 2"
                ></v-stepper-item>

                <v-divider></v-divider>

                <v-stepper-item
                  title="Caracteristiques"
                  value="3"
                  :rules="[() => step3Verification]"
                  :complete="e1 > 3"
                ></v-stepper-item>

                <v-divider></v-divider>

                <v-stepper-item
                  title="Equipements"
                  value="4"
                  :complete="e1 > 3"
                ></v-stepper-item>

                <v-divider></v-divider>

                <v-stepper-item
                  title="Gallerie"
                  value="5"
                  :complete="e1 > 4"
                ></v-stepper-item>
              </v-stepper-header>

              <v-stepper-window>
                <v-stepper-window-item value="1">
                  <v-row>
                    <v-col class="py-2 text-start" cols="12" sm="12">
                      <h2 class="text-h4 text-start title">Détails</h2>
                      <p class="my-2 mt-4">Veuillez sélectionner le type de logement</p>
                      <v-btn-toggle
                        v-model="typeLogement"
                        color="#36417d"
                        background-color="primary"
                        mandatory
                        rounded="0"
                        group
                      >
                        <v-btn
                          class="text-none text-subtitle-1"
                          size="small"
                          variant="flat"
                          value="Appartement"
                          >Appartement
                        </v-btn>

                        <v-btn
                          class="text-none text-subtitle-1"
                          size="small"
                          variant="flat"
                          value="Maison"
                        >
                          Maison
                        </v-btn>

                        <v-btn
                          class="text-none text-subtitle-1"
                          size="small"
                          variant="flat"
                          value="Chambre"
                        >
                          Chambre
                        </v-btn>
                      </v-btn-toggle>
                      <div class="mt-4">
                        <p>Quel est le but de votre annonce?</p>

                        <v-radio-group v-model="butAnnonce" class="text-black">
                          <v-radio
                            v-if="typeLogement == 'Maison'"
                            label="Vente"
                            color="#36417d"
                            value="vente"
                          ></v-radio>
                          <v-radio
                            label="Location"
                            color="#36417d"
                            value="location"
                          ></v-radio>
                        </v-radio-group>
                      </div>
                      <transition>
                        <div
                          class="bill_period"
                          v-if="butAnnonce == 'location'"
                        >
                          <p>Période de paiement du loyer</p>

                          <v-radio-group
                            v-model="bill_period"
                            class="text-black"
                          >
                            <v-radio
                              v-if="typeLogement == 'Appartement'"
                              label="Journalier"
                              v-model="bill_period"
                              color="#36417d"
                              value="jour"
                            ></v-radio>
                            <v-radio
                              label="Mensuel"
                              color="#36417d"
                              v-model="bill_period"
                              value="mois"
                            ></v-radio>
                          </v-radio-group>
                        </div>
                      </transition>

                      <div class="">
                        <v-row class="justify-space-between">
                          <v-col class="py-2 text-start" cols="5" sm="5">
                            <p>Montant à payer</p>
                            <v-text-field
                              v-model="amount"
                              :rules="[rules.required]"
                              type="number"
                              min="0"
                              max="50000000"
                              prefix="Fcfa"
                              variant="outlined"
                            >
                            </v-text-field>
                          </v-col>
                          <v-col
                            v-if="
                              typeLogement !== 'Appartement' &&
                              butAnnonce !== 'vente'
                            "
                            class="py-2 text-start"
                            cols="5"
                            sm="5"
                          >
                            <p>Avance sur loyer</p>
                            <v-text-field
                              v-model="rentAdvance"
                              :rules="[rules.required]"
                              type="number"
                              min="0"
                              max="50000000"
                              prefix="Fcfa"
                              variant="outlined"
                            >
                            </v-text-field>
                          </v-col>
                          <v-col
                            v-if="
                              typeLogement !== 'Appartement' &&
                              butAnnonce !== 'vente'
                            "
                            class="py-2 text-start"
                            cols="5"
                            sm="5"
                          >
                            <p>Caution électricité</p>
                            <v-text-field
                              v-model="cautionElec"
                              :rules="[rules.required]"
                              type="number"
                              min="0"
                              max="50000000"
                              prefix="Fcfa"
                              variant="outlined"
                            >
                            </v-text-field>
                          </v-col>
                          <v-col
                            v-if="
                              typeLogement !== 'Appartement' &&
                              butAnnonce !== 'vente'
                            "
                            class="py-2 text-start"
                            cols="5"
                            sm="5"
                          >
                            <p>Caution eau</p>
                            <v-text-field
                              v-model="cautionEau"
                              :rules="[rules.required]"
                              type="number"
                              min="0"
                              max="50000000"
                              prefix="Fcfa"
                              variant="outlined"
                            >
                            </v-text-field>
                          </v-col>
                        </v-row>
                      </div>

                      <div class="stepper-bottom">
                        <v-row>
                          <v-col class="py-2 text-start" cols="12" sm="12">
                            <p>Brève description du logement</p>
                            <v-textarea
                              v-model="description"
                              :rules="textAreaRules"
                              auto-grow
                              counter
                            ></v-textarea>
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                  </v-row>
                </v-stepper-window-item>
                <v-stepper-window-item value="2">
                  <h2 class="text-h4 text-start title mb-2">
                    Emplacement du logement
                  </h2>
                  <span class="text-start"
                    >Veuillez fournir des donnees correctes.<b style="color:rgb(221, 88, 55);"
                      > Il vous sera difficile de les modifier plus tard</b
                    ></span
                  >
                  <div class="stepper-bottom">
                    <v-row justify="space-between" no-gutters>
                      <v-col cols="12" md="12" sm="6" class="text-start mt-3">
                        <p class="mb-2">Pays</p>
                        <v-text-field
                          model-value="Benin"
                          variant="outlined"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col class="py-2 text-start" md="5" sm="5">
                        <p class="mb-2">Département</p>
                        <v-select
                          density="compact"
                          class="city-select"
                          variant="outlined"
                          item-title="name"
                          v-model="department"
                          :items="[
                            { id: 1, name: 'Alibori' },
                            { id: 2, name: 'Atacora' },
                            { id: 3, name: 'Atlantique' },
                            { id: 4, name: 'Borgou' },
                            { id: 5, name: 'Collines' },
                            { id: 6, name: 'Couffo' },
                            { id: 7, name: 'Donga' },
                            { id: 8, name: 'Littoral' },
                            { id: 9, name: 'Mono' },
                            { id: 10, name: 'Ouémé' },
                            { id: 11, name: 'Plateau' },
                            { id: 12, name: 'Zou' },
                          ]"
                        ></v-select>
                      </v-col>

                      <v-col class="py-2 text-start" md="5" sm="5">
                        <p class="mb-2">Ville/Arrondissement</p>
                        <v-select
                          density="compact"
                          class="city-select"
                          variant="outlined"
                          item-title="name"
                          v-model="city"
                          :items="cityTab"
                        ></v-select>
                      </v-col>

                      <v-col class="py-2 text-start" md="5" sm="5">
                        <p class="mb-2">Quartier</p>
                        <v-text-field
                          placeholder="ex: Gbegamey"
                          v-model="neighborhood"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                </v-stepper-window-item>

                <v-stepper-window-item value="3">
                  <v-row>
                    <v-col class="py-2 text-start" cols="12" sm="12">
                      <h2 class="text-h4 text-start title mb-2">Les Pièces</h2>
                    </v-col>

                    <v-col class="py-2 text-start w-25" cols="12" md="4" sm="4">
                      <div class="info-container w-25"></div>
                      <div class="mr-2 info-container">
                        <p>Nombre de pièces</p>
                        <v-text-field
                          readonly
                          type="number"
                          min="0"
                          v-model.number="piecesNumber"
                          variant="outlined"
                        >
                        </v-text-field>
                      </div>
                    </v-col>

                    <v-col class="py-2 text-start" cols="12" md="4" sm="4">
                      <div class="info-container">
                        <p>Nombre de chambres</p>
                        <v-text-field
                          type="number"
                          min="0"
                          v-model.number="roomNumber"
                          variant="outlined"
                        >
                        </v-text-field>
                      </div>
                    </v-col>

                    <v-col class="py-2 text-start" cols="12" md="4" sm="12">
                      <div class="info-container">
                        <p>Nombre de douches</p>
                        <v-text-field
                          type="number"
                          min="0"
                          v-model.number="showerNumber"
                          variant="outlined"
                        >
                        </v-text-field>
                      </div>
                    </v-col>

                    <v-col class="py-2 text-start" cols="12" md="4" sm="12">
                      <div class="info-container">
                        <p>Nombre de Cuisines</p>
                        <v-text-field
                          type="number"
                          min="0"
                          v-model.number="kitchenNumber"
                          variant="outlined"
                        >
                        </v-text-field>
                      </div>
                    </v-col>
                  </v-row>

                  <div class="stepper-bottom">
                    <h2 class="text-h4 text-start title my-2">
                      Autres informations
                    </h2>
                    <div class="d-flex justify-content-between">
                      <div class="w-50">
                        <p>Sanitaire</p>
                        <v-radio-group v-model="isSanitary" class="text-black">
                          <v-radio
                            label="Oui"
                            color="#36417d"
                            :value="true"
                          ></v-radio>
                          <v-radio
                            label="Non"
                            color="#36417d"
                            :value="false"
                          ></v-radio>
                        </v-radio-group>
                      </div>

                      <div class="w-30">
                        <p>Sol carrelé</p>
                        <v-radio-group v-model="hasTiles" class="text-black">
                          <v-radio
                            label="Oui"
                            color="#36417d"
                            :value="true"
                          ></v-radio>
                          <v-radio
                            label="Non"
                            color="#36417d"
                            :value="false"
                          ></v-radio>
                        </v-radio-group>
                      </div>
                    </div>

                    <p>Type de compteur</p>
                    <v-radio-group v-model="counterType" class="text-black">
                      <v-radio
                        label="Compteur à carte"
                        color="#36417d"
                        value="Compteur a carte"
                      ></v-radio>
                      <v-radio
                        label="Compteur traditionnel"
                        color="#36417d"
                        value="Compteur traditionnel"
                      ></v-radio>
                    </v-radio-group>

                    <p>Approvisionnement en eau</p>
                    <v-radio-group
                      v-model="waterDistribution"
                      class="text-black"
                    >
                      <v-radio
                        label="Soneb"
                        color="#36417d"
                        value="Soneb"
                      ></v-radio>
                      <v-radio
                        label="Forage"
                        color="#36417d"
                        value="Forage"
                      ></v-radio>
                      <v-radio
                        label="Soneb + forage"
                        color="#36417d"
                        value="Soneb + forage"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                </v-stepper-window-item>

                <v-stepper-window-item value="4">
                  <v-row>
                    <v-col class="py-2 text-start" cols="12" sm="12">
                      <h2 class="text-h4 text-start title">
                        Equipements et Installations
                      </h2>
                    </v-col>
                    <v-col cols="12" md="6" sm="6" class="text-start">
                      <p class="mb-2">Générale</p>
                      <div
                        class="equipement-wrapper d-flex mb-2 align-items-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="wifi"
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Wi-Fi
                        </label>
                      </div>
                      <div
                        class="equipement-wrapper d-flex mb-2 align-items-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="hasAc"
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Climatiseur
                        </label>
                      </div>
                      <div
                        class="equipement-wrapper d-flex mb-2 align-items-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="hasMonitoring"
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Surveillance video
                        </label>
                      </div>
                      <div
                        class="equipement-wrapper mb-2 d-flex align-items-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="furniture"
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Meubles
                        </label>
                      </div>
                      <div
                        class="equipement-wrapper d-flex mb-2 align-items-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                          v-model="hasBrewer"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Brasseur
                        </label>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6" sm="6" class="text-start">
                      <p class="mb-2">Cuisine & Entretien</p>
                      <div
                        class="equipement-wrapper mb-2 d-flex align-items-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="washMachine"
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Machine à laver
                        </label>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6" sm="6" class="text-start mt-4">
                      <p class="mb-2">Divertissement</p>
                      <div
                        class="equipement-wrapper mb-2 d-flex align-items-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="Tv"
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Télévision
                        </label>
                      </div>

                      <div class="equipement-wrapper d-flex align-items-center">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="hasPool"
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Piscine
                        </label>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6" sm="6" class="text-start mt-4">
                      <p class="mb-2">Extérieur</p>
                      <div
                        class="equipement-wrapper mb-2 d-flex align-items-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="balcony"
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Balcon
                        </label>
                      </div>
                      <div
                        class="equipement-wrapper mb-2 d-flex align-items-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="garden"
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label ms-3 mt-1"
                          for="flexCheckDefault"
                          >Jardin
                        </label>
                      </div>
                    </v-col>
                  </v-row>
                </v-stepper-window-item>

                <v-stepper-window-item value="5">
                  <v-row>
                    <v-col class="py-2 text-start" cols="12" sm="12">
                      <h2 class="text-h4 text-start title">Gallerie</h2>
                    </v-col>
                    <v-col cols="12" md="12" sm="12" class="text-start">
                      <p class="text-center mt-2">
                        Veuillez choisir 4 à 5 images
                      </p>
                      <FileUpload
                        @update-album="updateAlbum"
                        @getfiles="getfiles"
                      ></FileUpload>
                    </v-col>
                  </v-row>
                </v-stepper-window-item>
              </v-stepper-window>

              <button
                v-if="this.e1 == 4"
                @click="submitInfo"
                :disabled="!checkData"
                class="position-absolute hidden-btn v-btn v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-tonal"
              >
                Soumettre
              </button>
              <v-stepper-actions
                :disabled="disabled"
                @click:next="
                  () => {
                    this.e1++;
                  }
                "
                @click:prev="
                  () => {
                    this.e1--;
                  }
                "
              >
              </v-stepper-actions>
            </template>
          </v-stepper>
        </div>
      </Form>
    </section>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import dayjs from "dayjs";
import axios from "axios";
import FileUpload from "@/components/FileUpload.vue";

export default {
  name: "HouseNavBar",
  data() {
    return {
      view: {
        topOfPage: true,
      },
      disabled_nav: false,
      isOpen: false,
      textAreaRules: [(v) => v.length <= 200 || "Maximum 200 caractères"],
      value: "",
      butAnnonce: 0,
      hasMonitoring: false,
      amount: undefined,
      userInfo: "",

      userName: "",
      userFirstName: "",
      email: "",
      password: "",
      phone: "",
      errorMsg: "",

      userRole: "",
      userInitials: "",
      hide: true,

      description: "",
      e1: 0,
      rawfiles: [],
      cautionEau: "",
      cautionElec: "",
      furniture: false,
      rentAdvance: "",
      Tv: false,
      hasPool: false,
      showerNumber: 0,
      roomNumber: 0,
      kitchenNumber: 0,
      counterType: "Compteur traditionnel",
      hasAc: false,
      hasBrewer: false,

      galleryImg: [],
      city: "",
      neighborhood: "",
      washMachine: false,
      wifi: false,
      userId: "",
      userData:"",
      balcony: false,
      garden: false,
      waterDistribution: "Soneb",
      cityTab: [],
      nextName: "Suivant",
      department: { id: 8, name: "Littoral" },
      hasTiles: false,
      isSanitary: false,
      steps: 4,
      bill_period: "mois",
      rules: {
        required: (value) => !!value || "Requis",
        number: (value) =>
          typeof parseInt(value) == "number" || "Entrer un nombre",
      },
      step: 1,
      items: ["Détails", "Localisation", "Submit"],

      typeLogement: "Appartement",
    };
  },

  beforeMount() {
    const date1 = dayjs("2019-01-25");
    const date2 = dayjs("2018-06-05");
    console.log(date2.diff(date1));
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    console.log("ici departement",this.city);
    const userID = this.$route.params.id;
    this.userId = userID;
    const userData = JSON.parse(localStorage.getItem("userData"));
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          "x-access-token": userData.accessToken,
        },
      })
      .then(({ data }) => {
        this.userData = data;
   
      }); 
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          "x-access-token": userData.accessToken,
        },
      })
      .then(({ data }) => {
        this.userInfo = data;
        if (this.userInfo.nbreAnnouncement == 0) {
          this.$swal
            .fire({
              icon: "error",
              title: "Oups... Vous n'avez pas d'annonces",
              allowOutsideClick: false,
              confirmButtonColor: "#218838",
              showCancelButton: true,
              cancelButtonColor: "#d33",
              confirmButtonText: "Oui",
              cancelButtonText: "Non",
              text: "Acheter un pack d'annonce pour continuer",
            })
            .then((result) => {
              if (result.isConfirmed) {
                this.$router.push("/packs");
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === this.$swal.DismissReason.cancel
              ) {
                this.$router.push("/");
              }
            });
        }
      });

    (this.rawfiles = []), (this.galleryImg = []);

    let id = this.department.id;
    this.getCities(id);

    if (userData) {
      this.userRole = userData.role;

      const userInitials =
        userData.userName.charAt(0).toUpperCase() +
        userData.userFirstName.charAt(0).toUpperCase();
      this.userInitials = userInitials;
    }
  },
  components: {
    FileUpload,
    Form,
    Field,
    ErrorMessage,
  },
  watch: {
    butAnnonce(newVal) {
      if (newVal == "vente") {
        this.bill_period = null;
      }
    },

    department(value) {
      let departments = [
        { id: 1, name: "Alibori" },
        { id: 2, name: "Atacora" },
        { id: 3, name: "Atlantique" },
        { id: 4, name: "Borgou" },
        { id: 5, name: "Collines" },
        { id: 6, name: "Couffo" },
        { id: 7, name: "Donga" },
        { id: 8, name: "Littoral" },
        { id: 9, name: "Mono" },
        { id: 10, name: "Ouémé" },
        { id: 11, name: "Plateau" },
        { id: 12, name: "Zou" },
      ];
      if (value) {
        let id = departments.find((department) => department.name == value);
        id = id.id;
        console.log(id);
        this.getCities(id);
      }
    },
  },
  methods: {
    warnClicked() {
      this.disabled_nav = !this.disabled_nav;
    },

    updateAlbum(photos) {
      this.galleryImg = photos;
    },

    getfiles(val) {
      this.rawfiles = val;
    },

    getCities(id) {
      axios
        .get(`http://localhost:8000/api/cities/${id}`)
        .then(({ data }) => {
          this.cityTab = data;
          this.city = this.cityTab[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },

    submitInfo(e) {
      e.preventDefault();

      const form = document.querySelector("form");
      const formData = new FormData(form);
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (this.galleryImg.length < 4 || this.galleryImg.length > 5) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Choississez 4 à 5 images",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        return;
      }
      for (let i = 0; i < this.rawfiles.length; i++) {
        formData.append("files", this.rawfiles[i]);
      }
      console.log(this.department);

      formData.append("type", this.typeLogement);
      formData.append("city", this.city.name);
      formData.append("neighborhood", this.neighborhood);
      formData.append("department", this.department.name);
      formData.append("description", this.description);
      formData.append("isSanitary", this.isSanitary);
      formData.append("announcePurpose", this.butAnnonce);
      formData.append("billPeriod", this.bill_period);
      formData.append("price", this.amount);
      formData.append("counterType", this.counterType);
      formData.append("waterDistribution", this.waterDistribution);
      formData.append("hasTiles", this.hasTiles);
      formData.append("hasWifi", this.wifi);
      formData.append("hasBrewer", this.hasBrewer);
      formData.append("hasAc", this.hasAc);
      formData.append("showerNumber", this.showerNumber);
      formData.append("hasFurniture", this.furniture);
      formData.append("hasPool", this.hasPool);
      formData.append("hasWashingMachine", this.washMachine);
      formData.append("hasGarden", this.garden);
      formData.append("hasBalcony", this.balcony);
      formData.append("roomNumber", this.roomNumber);
      formData.append("rentAdvance", this.rentAdvance);
      formData.append("electricityDeposit", this.cautionElec);
      formData.append("hasMonitoring", this.hasMonitoring);
      formData.append("waterDeposit", this.cautionEau);
      formData.append("pieceNumber", this.piecesNumber);
      formData.append("kitchenNumber", this.kitchenNumber);
      formData.append("hasTv", this.Tv);
      //formData.append("images", uploadImage);
      axios
        .post("http://localhost:8000/api/addAccomodation", formData, {
          headers: {
            "x-access-token": userData.accessToken,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => {
          (this.typeLogement = ""),
            (this.city = ""),
            (this.neighborhood = ""),
            (this.department = ""),
            (this.description = ""),
            (this.isSanitary = ""),
            (this.butAnnonce = ""),
            (this.bill_period = ""),
            (this.amount = ""),
            (this.waterDistribution = ""),
            (this.hasTiles = ""),
            (this.wifi = ""),
            (this.hasBrewer = ""),
            (this.hasAc = ""),
            (this.showerNumber = ""),
            (this.hasPool = ""),
            (this.washMachine = ""),
            (this.garden = ""),
            (this.balcony = ""),
            (this.roomNumber = ""),
            (this.rentAdvance = ""),
            (this.cautionElec = ""),
            (this.cautionEau = ""),
            (this.piecesNumber = ""),
            (this.kitchenNumber = ""),
            (this.Tv = ""),
            (this.rawfiles = []);

          this.$swal
            .fire({
              title: "Votre annonce a bien été postée",
              allowOutsideClick: false,
              text: " Faire une autre annonce ?",
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#218838",
              cancelButtonColor: "#d33",
              confirmButtonText: "Oui",
              cancelButtonText: "Non",
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
                this.$router.push("/annonce");
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === this.$swal.DismissReason.cancel
              ) {
                this.$router.push("/logements");
              }
            });
        })
        .catch((err) => {
          console.log(err);
        });

      /*
       axios
        .post(
          "http://localhost:8000/api/addAccomodation",
          {
            type: this.typeLogement,
            city: this.city,
            neighborhood: this.neighborhood,
            department: this.department,
            description: this.description,
            isSanitary: this.isSanitary,
            announcePurpose: this.butAnnonce,
            billPeriod: this.bill_period,
            price: this.amount,
            counterType: this.counterType,
            waterDistribution: this.waterDistribution,
            hasTiles: this.hasTiles,
            hasWifi: this.wifi,
            hasBrewer: this.hasBrewer,
            hasAc: this.hasAc,
            showerNumber: this.showerNumber,
            hasPool: this.hasPool,
            hasWashingMachine: this.washMachine,
            hasGarden: this.garden,
            hasBalcony: this.balcony,
            roomNumber: this.roomNumber,
            pieceNumber: this.piecesNumber,
            kitchenNumber: this.kitchenNumber,
            hasTv: this.Tv,
            images: uploadImage

          },
          {
            headers: {
              "x-access-token": userData.accessToken,
            },
          }
        )
        .then((data) => {
          console.log(data);
          this.$swal({
            icon: "success",
            title: "Votre annonce a bien été postée",
            showConfirmButton: false,
            timer: 1500,

          });
        //  this.$router.push("/logements")
        })
        .catch((err) => {
          console.log(err);
        });  */
    },
  },
  computed: {
    disabled() {
      return this.e1 === 0
        ? "prev"
        : this.e1 === this.steps
        ? "next"
        : undefined;
    },
    subtotal() {
      return this.products.reduce(
        (acc, product) => acc + product.quantity * product.price,
        0
      );
    },
    total() {
      return this.subtotal + Number(this.shipping ?? 0);
    },
    step1verification() {
      let bill;
      let description = this.description !== "";
      let payment = this.amount > 0;
      let objective = this.butAnnonce !== 0;
      if (this.butAnnonce === "location") {
        bill = this.bill_period !== 1;
      } else {
        bill = true;
      }

      if (this.e1 < 1) {
        return true;
      } else {
        return bill && payment && objective && description;
      }
    },

    step2Verification() {
      if (this.e1 < 2) {
        return true;
      } else return !!(this.city && this.neighborhood);
    },
    step3Verification() {
      if (this.e1 < 3) {
        return true;
      } else return this.piecesNumber > 0;
    },
    checkData() {
      return !!(
        this.galleryImg.length > 0 &&
        this.step1verification &&
        this.step2Verification &&
        this.step3Verification
      );
    },
    piecesNumber() {
      let pieces = this.roomNumber + this.showerNumber + this.kitchenNumber;
      return pieces;
    },
  },
};

/******Form */
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");

.v-btn {
  width: 25%;
  padding: 10px 20px;
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


.sub-list .dropdown-item {
  color: #36417d !important;}
.dropdown-item {
  color: white !important;
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















span {
  font-weight: 500;
}

.v-btn-group {
  width: 100%;
}

.v-stepper-item--selected .v-stepper-item__avatar.v-avatar,
.v-stepper-item--complete .v-stepper-item__avatar.v-avatar {
  background: yellow;
}

.info-container input {
  width: 70%;
}

.v-field.v-field--appended {
  padding: 16px;
}

.v-avatar {
  background: rgb(221, 88, 55);
}

.v-btn__content {
  text-transform: initial;
}

.v-btn-group .v-btn:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.hidden-btn {
  background-color: rgb(55, 221, 110);
  right: 3%;
  color: white;
  z-index: 123;
}

.hidden-btn:disabled {
  background-color: rgb(176, 0, 32);
}

.v-btn-group .v-btn:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.stepper-bottom {
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 15px;
}

.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #bdbdbd;
}

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
 /* border-bottom: 0.5px solid hsla(0, 0%, 100%, 0.3);*/
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
  font-weight: 400;
  transition: background-color 5ms;
  text-align: left;
  padding: 18px 25px;
  cursor: pointer;
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

.v-label {
  opacity: 1;
}

.text-black .v-label {
  color: black;
  opacity: 1;
}

p {
  font-family: "Metrophobic", sans-serif;
  font-weight: 600;
  font-size: 18px;
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

  & .onScroll {
    box-shadow: 0 0 10px #aaa;
    background-color: #fff;

    ul li {
      color: #36417d;
    }

    .header-title {
      color: #36417d;
    }

    .account-btn {
      background-color: rgb(55, 221, 110);
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
      list-style-type: none;
      color: white;
    }
  }
}
.spacer {
  padding: 40px;
  background-color: #f8f7f4;
}

.stepper-wrapper {
  max-width: 680px;
}

/*** Form ***/
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
}

#body {
  /* font-family: 'Tw Cen MT', sans-serif;*/
  background-color: #f8f7f4;
}

section {
  display: flex;
  justify-content: center;
}

#annonce {
  padding: 0 10%;
}

#annonce form {
  /* background-color: #ccc;*/
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.left-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: -250px;
}

.left-right .left,
.left-right .right {
  display: flex;
  flex-direction: column;
  width: 49%;
}

.left-right .left {
  margin-top: 185px;
}

.left-right .right {
  margin-top: 224px;
}

#annonce form label {
  font-size: 16px;
  letter-spacing: 1.1px;
}

#annonce form input {
  padding: 6px;
  outline: 0;
}

input:not([type="checkbox"], [type="radio"]),
select {
  border: 2px solid rgba(0, 0, 0, 0.1);
  /* outline: none;
    font-size: 16px;
  /*  height: auto;
    width: 50%;*/
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.1);
}

textarea {
  height: 125px;
  resize: none;
  outline: 0;
  width: 100%;
  padding: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
}

#annonce #button:hover {
  letter-spacing: 1px;
}
</style>
