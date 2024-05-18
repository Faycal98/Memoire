<template>
  <WhiteNav></WhiteNav>
  <main>
    <div class="wrapp pt-3">
      <h1 style="font-weight: bold">Choisissez votre pack annonces !</h1>
      <div class="container">
        <div class="price-section">
          <article class="price-table">
            <div class="price">
              1,500 <span style="font-size: 20px">Fcfa</span>
            </div>
            <span class="title">Basique</span>
            <span class="description">Pack à 5 annonces </span>
            <div class="features">
              <details class="feature">
                <summary>
                  <i aria-hidden="true" class="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </i>
                  <span class="name">Disponibles pendant 25 jours</span>
                </summary>
              </details>
              <details class="feature">
                <summary>
                  <i aria-hidden="true" class="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </i>
                  <span class="name">Analysées et approuvées</span>
                </summary>
              </details>
              <div style="margin-bottom: 125px"></div>
            </div>
            <div class="text-center pa-4">
              <v-dialog v-model="dialog1" max-width="400" persistent>
                <template v-slot:activator="{ props: activatorProps }">
                  <button
                    v-bind="activatorProps"
                    @click="
                      getPack({
                        name: 'Basique',
                        price: 1500,
                        nb: 5,
                        valid: 25,
                      })
                    "
                    id="bottone1"
                  >
                    <strong>Acheter</strong>
                  </button>
                </template>

                <v-card>
                  <v-card-text>
                    <p class="text-center text-h5">Achat du pack {{ name }}</p>
                    <v-row>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">Date de debut :</p>
                        <span class="text-h5">{{ startDate }}</span>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">Date de fin :</p>
                        <span class="text-h5"> {{ endDate }}</span>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">validite :</p>
                        <span class="text-h5">{{ time }} jours</span>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">Prix :</p>
                        <span class="text-h5">{{ price }} F</span>
                      </v-col>
                    </v-row>
                  </v-card-text>

                  <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="dialog1 = false" color="red">
                      Annuler
                    </v-btn>

                    <v-btn @click="dialog1 = false" color="green">
                      Confirmer
                    </v-btn>
                  </template>
                </v-card>
              </v-dialog>
            </div>
          </article>

          <article class="price-table silver">
            <div class="price">
              2,500<span style="font-size: 20px">Fcfa</span>
            </div>
            <span class="title">Argent</span>
            <span class="description"> Pack à 10 annonces </span>
            <div class="features">
              <details class="feature">
                <summary>
                  <i aria-hidden="true" class="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </i>
                  <span class="name">Disponible pendant 60 jours</span>
                </summary>
              </details>
              <details class="feature">
                <summary>
                  <i aria-hidden="true" class="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </i>
                  <span class="name">Analysées et approuvées</span>
                </summary>
              </details>
              <details class="feature">
                <summary>
                  <i aria-hidden="true" class="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </i>
                  <span class="name">Disponible sur les premières pages</span>
                </summary>
              </details>
            </div>
            <div style="margin-bottom: 60px"></div>
            <div class="text-center pa-4">
              <v-dialog v-model="dialog2" max-width="400" persistent>
                <template v-slot:activator="{ props: activatorProps }">
                  <button
                    v-bind="activatorProps"
                    @click="
                      getPack({
                        name: 'Argent',
                        price: 2500,
                        nb: 10,
                        valid: 60,
                      })
                    "
                    id="bottone1"
                  >
                    <strong>Acheter</strong>
                  </button>
                </template>

                <v-card>
                  <v-card-text>
                    <p class="text-center text-h5">Achat du pack {{ name }}</p>
                    <v-row>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">Date de debut :</p>
                        <span class="text-h5">{{ startDate }}</span>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">Date de fin :</p>
                        <span class="text-h5"> {{ endDate }}</span>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">validité :</p>
                        <span class="text-h5">{{ time }} jours</span>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">Prix :</p>
                        <span class="text-h5">{{ price }} F</span>
                      </v-col>
                    </v-row>
                  </v-card-text>

                  <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="dialog2 = false" color="red">
                      Annuler
                    </v-btn>

                    <v-btn @click="dialog2 = false" color="green">
                      Confirmer
                    </v-btn>
                  </template>
                </v-card>
              </v-dialog>
            </div>
          </article>

          <article class="price-table premium">
            <div class="price">
              5,000<span style="font-size: 20px">Fcfa</span>
            </div>
            <span class="title">Premium</span>
            <span class="description"> Pack à 25 annonces </span>
            <div class="features">
              <details class="feature">
                <summary>
                  <i aria-hidden="true" class="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </i>
                  <span class="name">Disponible pendant 130 jours</span>
                </summary>
              </details>
              <details class="feature">
                <summary>
                  <i aria-hidden="true" class="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </i>
                  <span class="name">Disponible sur la première page</span>
                </summary>
              </details>
              <details class="feature">
                <summary>
                  <i aria-hidden="true" class="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </i>
                  <span class="name">A la tête de la liste des annonces</span>
                </summary>
              </details>
              <details class="feature">
                <summary>
                  <i aria-hidden="true" class="checkmark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </i>
                  <span class="name">Ananlysées et approuvées</span>
                </summary>
              </details>
              <div style="margin-bottom: 18px"></div>
            </div>
            <div class="text-center pa-4">
              <v-dialog v-model="dialog3" max-width="400" persistent>
                <template v-slot:activator="{ props: activatorProps }">
                  <button
                    v-bind="activatorProps"
                    @click="
                      getPack({
                        name: 'Premium',
                        id: 3,
                        price: 5000,
                        nb: 25,
                        valid: 130,
                      })
                    "
                    id="bottone1"
                  >
                    <strong>Acheter</strong>
                  </button>
                </template>

                <v-card>
                  <v-card-text>
                    <p class="text-center text-h5">Achat du pack {{ name }}</p>
                    <v-row>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">Date de debut :</p>
                        <span class="text-h5">{{ startDate }}</span>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">Date de fin :</p>
                        <span class="text-h5"> {{ endDate }}</span>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">validite :</p>
                        <span class="text-h5">{{ time }} jours</span>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                        sm="12"
                        class="d-flex justify-content-between"
                      >
                        <p class="text-h5">Prix :</p>
                        <span class="text-h5">{{ price }} F</span>
                      </v-col>
                    </v-row>
                  </v-card-text>

                  <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="dialog3 = false" color="red">
                      Annuler
                    </v-btn>

                    <v-btn
                      @click="
                        buyPack({
                          name: 'Premium',
                          id: 3,
                          price: 5000,
                          nb: 25,
                          valid: 130,
                        })
                      "
                      color="green"
                    >
                      Confirmer
                    </v-btn>
                  </template>
                </v-card>
              </v-dialog>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import dayjs from "dayjs";
import WhiteNav from "../components/WhiteNav.vue";
import { start } from "@popperjs/core";
import axios from "axios";
export default {
  name: "Pack",
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      userData: "",
      startDate: "",
      userId: "",
      name: undefined,
      endDate: "",
      time: undefined,
      NbrAnnounce: "",
      price: undefined,
    };
  },
  components: {
    WhiteNav,
  },
  mounted() {
    const userData = this.$store.state.user;
    this.userId = userData.id;
    console.log(this.userId);
    this.userData = userData;
  },
  methods: {
    buyPack(data) {
      this.dialog3 = false;
      var now = dayjs(new Date());
      var endDate = now.add(data.valid, "day");
      now = now.format("YYYY-MM-DD");
      endDate = endDate.format("YYYY-MM-DD");
      const subscription_data = {
        dateSubscription: now,
        period_end: endDate,
        nbr: data.nb,
        userId: this.userId,
        packCode: data.id,
      };
      console.log(subscription_data);
      axios
        .post("http://localhost:8000/api/subscribe", subscription_data, {
          headers: {
            "x-access-token": this.userData.accessToken,
          },
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPack(val) {
      var now = dayjs(new Date());
      var endDate = now.add(val.valid, "day");
      let display_start_date = now.format("D/MM/YYYY");
      let display_end_date = endDate.format("D/MM/YYYY");

      this.startDate = display_start_date;
      this.endDate = display_end_date;
      this.name = val.name;
      this.time = val.valid;
      this.price = val.price;
      this.NbrAnnounce = val.nb;
    },
  },
};
</script>
<style scoped>
/*  */
main/*{
  background-color:#bfc0ee;
}*/ {
  background-image: linear-gradient(
    200deg,
    rgba(219, 90, 58, 0.336),
    rgba(230, 73, 34, 0.767),
    #7141e249,
    #26358b59
  );
  padding: 10px;
}
.price-section {
  color: #fff;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
}
/* End basic CSS override */
.price-table.premium {
  background: rgb(255, 0, 0);
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}
.price-table.silver {
  background-color: rgba(123, 71, 138, 0.205);
  background-image: radial-gradient(
      circle at 0% 0%,
      rgba(66, 26, 75, 0.404) 15%,
      rgba(41, 39, 39, 0) 75%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(45, 9, 54, 0.486) 15%,
      rgba(0, 0, 0, 0) 150%
    ),
    linear-gradient(
      135deg,
      rgba(24, 8, 28, 0) 0%,
      rgb(122, 48, 143) 50%,
      rgba(24, 8, 28, 0) 100%
    );
}
.price-table {
  background-color: #152148d7;
  border-radius: 16px;
  width: 27%;
  padding: 25px;
  display: flex;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  flex-direction: column;
  box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  background-image: linear-gradient(
    135deg,
    rgba(74, 222, 128, 0.15),
    rgba(29, 123, 219, 0.1) 20%,
    #152148 40%,
    #152148e1 100%
  );
}

.price-table:hover {
  box-shadow: 0 0 20px rgba(9, 117, 241, 0.8);
  border-color: #0974f1;
  /*transform: translateY(-20px);*/
}

.price-table .price {
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  display: inline-flex;
  align-self: center;
  align-items: center;
  gap: 4px;
  position: relative;
  color: #fff;
}

.price-table .price small {
  font-size: 1.25rem;
  font-weight: 400;
  position: absolute;
  left: -1.5ch;
}

.price-table .title {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Metrophobic", sans-serif;
  line-height: 1.25;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
}

.price-table .description {
  font-size: 1.2rem;
  text-align: center;
  margin-top: 2px;
}

.features {
  margin-top: 22px;
  text-align: left;
  padding-left: 30px;
}

.feature {
  position: relative;
}

.feature + .feature {
  margin-top: 16px;
}

.feature summary {
  display: inline-flex;
  align-items: center;
  list-style: none;
}

.feature summary::-webkit-details-marker {
  display: none;
}

.feature[open] summary:after {
  content: "";
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 50;
}

.feature[open] div {
  -webkit-animation: scale 0.15s ease;
  animation: scale 0.15s ease;
}

.feature .checkmark {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgb(221, 88, 55);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.feature .checkmark svg {
  width: 18px;
  height: 18px;
  color: #fff;
}

.feature .question-icon {
  display: flex;
  align-items: center;
  margin-left: 6px;
  cursor: pointer;
}

@-webkit-keyframes scale {
  0% {
    transform: translatey(-100%) translatex(-50%) scale(0);
  }

  100% {
    transform: translatey(-100%) translatex(-50%) scale(1);
  }
}

@keyframes scale {
  0% {
    transform: translatey(-100%) translatex(-50%) scale(0);
  }

  100% {
    transform: translatey(-100%) translatex(-50%) scale(1);
  }
}
/*-----------Bouton-----------------*/
#bottone1 {
  padding-left: 33px;
  padding-right: 33px;
  padding-bottom: 16px;
  padding-top: 16px;
  border-radius: 9px;
  background: rgba(8, 75, 151, 0.8);
  border: none;
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
}

#bottone1:hover {
  box-shadow: 7px 5px 56px -14px rgb(207, 61, 24);
}

#bottone1:active {
  transform: scale(0.97);
  box-shadow: 7px 5px 56px -10px rgb(221, 70, 32);
}
</style>
