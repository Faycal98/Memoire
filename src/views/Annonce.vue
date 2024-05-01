<template>
  <header>
    <div id="navbar">
      <nav class="navbar navbar-expand-lg">
        <router-link to="/">
          <h1 class="ms-5 header-title">BenApart</h1>
        </router-link>
        <div
            class="header-right justify-content-between align-items-center collapse navbar-collapse"
            id="navbarSupportedContent"
        >
          <ul class="u-block">
            <li class="link d-block">
              <p class="drop-text"></p>
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
              <div v-if="disabled_nav" class="sub-menu position-absolute">
                <ul class="sub-list d-block">
                  <li>
                    <a class="dropdown-item" href="#"
                    ><i class="fa-solid fa-house me-2 pt-2"></i>Je suis
                      démarcheur</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item text-black" href="#"
                    ><i class="fa-solid fa-arrow-right me-2 arrow"></i
                    >Connexion</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item last" href="#"
                    ><i class="fa-solid fa-arrow-right me-2 arrow arrow"></i
                    >Inscription</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"
                    ><i class="fa-regular fa-circle-question me-2"></i>Aide</a
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
            </Transition>
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
      Faite votre annonce en toute sécurité avec BenApart !
    </h1>

    <section id="annonce">
      <form action="" method="">
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
                      <p class="my-2 mt-4">Selectionner le type de logement</p>
                      <v-btn-toggle
                          v-model="typeLogement"
                          color="#10B981"
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
                            value="Chambres à louer"
                        >
                          Chambre à louer
                        </v-btn>
                      </v-btn-toggle>
                      <div class="mt-4">
                        <p>Quel est le but de cette annonce?</p>

                        <v-radio-group v-model="butAnnonce" class="text-black">
                          <v-radio
                              v-if="typeLogement == 'Maison'"
                              label="Vente"
                              color="rgb(16, 185, 129)"
                              value="vente"
                          ></v-radio>
                          <v-radio
                              label="Location"
                              color="rgb(16, 185, 129)"
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
                                color="rgb(16, 185, 129)"
                                value="jour"
                            ></v-radio>
                            <v-radio
                                label="Mensuel"
                                color="rgb(16, 185, 129)"
                                value="mois"
                            ></v-radio>
                          </v-radio-group>
                        </div>
                      </transition>

                      <div class="">
                        <v-row>
                          <v-col class="py-2 text-start" cols="12" sm="6">
                            <p>Montant à payer</p>
                            <v-text-field
                                v-model="amount"
                                :rules="[rules.required]"
                                type="number"
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
                  >Veuillez fourir des donnees correctes.<b
                  >Il sera difficile de les modifier plus tard</b
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
                        <p class="mb-2">Département(Optionnel)</p>
                        <v-text-field
                            clearable
                            label=""
                            v-model="department"
                            placeholder="Littoral"
                            variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col class="py-2 text-start" md="5" sm="5">
                        <p class="mb-2">Ville</p>
                        <v-text-field
                            placeholder="Cotonou"
                            v-model="city"
                            variant="outlined"
                        ></v-text-field>
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
                            type="number"
                            v-model="piecesNumber"
                            variant="outlined"
                        >
                        </v-text-field>
                      </div>
                    </v-col>

                    <v-col class="py-2 text-start" cols="12" md="4" sm="4">
                      <div class="info-container">
                        <p>Nombre chambres</p>
                        <v-text-field
                            type="number"
                            v-model="roomNumber"
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
                            v-model="showerNumber"
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
                            v-model="kitchenNumber"
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
                              color="rgb(16, 185, 129)"
                              :value="true"
                          ></v-radio>
                          <v-radio
                              label="Non"
                              color="rgb(16, 185, 129)"
                              :value="false"
                          ></v-radio>
                        </v-radio-group>
                      </div>

                      <div class="w-30">
                        <p>Sol avec des carreaux</p>
                        <v-radio-group v-model="hasTiles" class="text-black">
                          <v-radio
                              label="Oui"
                              color="rgb(16, 185, 129)"
                              :value="true"
                          ></v-radio>
                          <v-radio
                              label="Non"
                              color="rgb(16, 185, 129)"
                              :value="false"
                          ></v-radio>
                        </v-radio-group>
                      </div>
                    </div>

                    <p>Type de compteur</p>
                    <v-radio-group v-model="counterType" class="text-black">
                      <v-radio
                          label="Compteur a cartes"
                          color="rgb(16, 185, 129)"
                          value="Compteur a cartes"
                      ></v-radio>
                      <v-radio
                          label="Compteur traditionnel"
                          color="rgb(16, 185, 129)"
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
                          color="rgb(16, 185, 129)"
                          value="Soneb"
                      ></v-radio>
                      <v-radio
                          label="Forage"
                          color="rgb(16, 185, 129)"
                          value="Forage"
                      ></v-radio>
                      <v-radio
                          label="Soneb + forage"
                          color="rgb(16, 185, 129)"
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
                      <p class="mb-2">Cuisne & Entretien</p>
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
                      <p class="mb-2">Exterieur</p>
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
                        Vous devez choisir au moins quatres images
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
                  @click="submitInfo"
                  v-if="this.e1 == 4"
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
                    console.log(this.e1);
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
      </form>
    </section>
  </div>
</template>

<script>
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
      amount: undefined,
      description: "",
      e1: 0,
      rawfiles: [],
      Tv: false,
      hasPool: false,
      showerNumber: undefined,
      roomNumber: undefined,
      kitchenNumber: undefined,
      piecesNumber: undefined,
      counterType: "Compteur traditionnel",
      hasAc: false,
      hasBrewer: false,

      galleryImg: [],
      city: "",
      neighborhood: "",
      washMachine: false,
      wifi: false,
      balcony: false,
      garden: false,
      waterDistribution: "Soneb",
      nextName: "Suivant",
      department: "",
      hasTiles: false,
      isSanitary: false,
      steps: 4,
      bill_period: 1,
      rules: {
        required: (value) => !!value || "Requis",
        number: (value) =>
            typeof parseInt(value) == "number" || "Entrer un nombre",
      },
      step: 1,
      items: ["Détails", "Localisation", "Submit"],
      products: [
        {
          name: "Product 1",
          price: 10,
          quantity: 2,
        },
        {
          name: "Product 2",
          price: 15,
          quantity: 10,
        },
      ],
      typeLogement: "Appartement",
    };
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    FileUpload,
  },
  watch: {
    butAnnonce(newVal) {
      if (newVal == "vente") {
        this.bill_period = 1;
      }
    },
  },
  methods: {
    warnClicked() {
      this.disabled_nav = !this.disabled_nav;
    },

    updateAlbum(photos) {
      this.galleryImg = photos;
      // console.log(this.galleryImg)
    },

    getfiles(val) {
      this.rawfiles = val;
    },

    submitInfo(e) {
      e.preventDefault();
      const form = document.querySelector("form");
      const formData = new FormData(form);
      const userData = JSON.parse(localStorage.getItem("userData"));
      let uploadImage = this.galleryImg.map(
          (img) => img.name
      );
      for (let i = 0; i < this.rawfiles.length; i++) {
        formData.append("files", this.rawfiles[i]);
      }

      formData.append("type", this.typeLogement);
      formData.append("city", this.city);
      formData.append("neighborhood", this.neighborhood);
      formData.append("department", this.department);
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
      formData.append("hasPool", this.hasPool);
      formData.append("hasWashingMachine", this.washMachine);
      formData.append("hasGarden", this.garden);
      formData.append("hasBalcony", this.balcony);
      formData.append("roomNumber", this.roomNumber);
      formData.append("pieceNumber", this.piecesNumber);
      formData.append("kitchenNumber", this.kitchenNumber);
      formData.append("hasTv", this.Tv);
      formData.append("images", uploadImage);
      axios
          .post("http://localhost:8000/api/addAccomodation", formData, {
            headers: {
              "x-access-token": userData.accessToken,
              "Content-Type": "multipart/form-data",
            },
          })
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
      } else return this.roomNumber > 0 &&
          this.kitchenNumber > 0 &&
          this.showerNumber > 0 &&
          this.piecesNumber > 0;
    },
    checkData() {
      return !!(this.galleryImg.length > 0 &&
          this.step1verification &&
          this.step2Verification &&
          this.step3Verification);
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

.v-avatar {
  background: #10b981;
}

.v-btn__content {
  text-transform: initial;
}

.v-btn-group .v-btn:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.hidden-btn {
  background-color: #10b981;
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
  border-bottom: 0.5px solid hsla(0, 0%, 100%, 0.3);
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

.drop-text {
  color: #fff;
  font-size: 15px;
  border: 1px solid #fff;
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

&
.onScroll {
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
  list-style-type: none;
  color: white;
  border-right: 1px solid #ffffff36;
}

}
.u-block {
  margin-left: 67%;
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
