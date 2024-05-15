<template>
  <div class="">
    <WhiteNav></WhiteNav>
    <div class="gallery-description wrapper mt-4">
      <Gallery :imgArray="galleryImg"></Gallery>
    </div>
    <div class="property-description mt-5 row">
      <div class="col-lg-8">
        <div class="description">
          <div class="Block p-20 mt-20 mb-10">
            <div class="mb-1">
              <h2 class="Title Title--s mb-10 color-ft-strong">
                Détails du bien
              </h2>
              <div class="row property-container mb-2 mb-0@s">
                <div class="col-12 col-12@s mb-10@s mb-2">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-bed"></i></div>
                    <div>
                      <p class="f<!-- t-medium --> location">
                        {{ announceDetail.roomNumber }}
                        Chambre(s)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-12@s mb-2">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-kitchen-set"></i></div>
                    <div>
                      <p class="ellipsis-1">
                        {{ announceDetail.kitchenNumber }}
                        Cuisine(s)
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-4 col-12@s mb-4">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-shower"></i></div>
                    <div>
                      <p class="ellipsis-1">
                        {{ announceDetail.showerNumber }} douche(s)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

      
            </div>
            <div class="mb-1">
              <h2 class="Title Title--s mb-10 color-ft-strong">
                Caractéristiques du logement
              </h2>
              <div class="row property-container mb-2 mb-0@s">
                <div class="col-4 col-12@s mb-10@s">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-location-dot"></i></div>
                    <div>
                      <p class="f<!-- t-medium --> location">
                        {{ announceDetail.city }} ,
                        {{ announceDetail.neighborhood }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-4 col-12@s mb-4"
                  v-if="announceDetail.hasBrewer"
                >
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-fan"></i></div>
                    <div>
                      <p class="ellipsis-1">
                        Brasseur
                        <!--   Interphone, Gestionnaire sur site, Distributeur, TV -->
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-4 col-12@s mb-4" v-if="announceDetail.hasWifi">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-wifi"></i></div>
                    <div>
                      <p class="ellipsis-1">Internet</p>
                    </div>
                  </div>
                </div>

                <div
                  class="col-4 col-12@s mb-4"
                  v-if="announceDetail.hasMonitoring"
                >
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-video"></i></div>
                    <div>
                      <p class="ellipsis-1">Video surveilllance</p>
                    </div>
                  </div>
                </div>
                <!--    <div class="col-4 col-12@s mb-4">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-chair"></i></div>
                    <div>
                      <p class="ellipsis-1">Meuble</p>
                    </div>
                  </div>
                </div> -->

                <div
                  class="col-4 col-12@s mb-4"
                  v-if="announceDetail.hasWashingMachine"
                >
                  <div class="icon-highlight">
                    <div>
                      <img
                        src="../assets/washing.svg"
                        alt=""
                        width="29px"
                        height="29px"
                      />
                    </div>
                    <div>
                      <p class="ellipsis-1">Machine à lavé</p>
                    </div>
                  </div>
                </div>

                <div
                  class="col-4 col-12@s mb-4"
                  v-if="announceDetail.hasBalcony"
                >
                  <div class="icon-highlight">
                    <div>
                      <img
                        src="../assets/balcony.svg"
                        alt=""
                        width="29px"
                        height="29px"
                      />
                    </div>
                    <div>
                      <p class="ellipsis-1">Balcon</p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-4 col-12@s mb-4"
                  v-if="announceDetail.isSanitary"
                >
                  <div class="icon-highlight">
                    <div>
                      <img
                        src="../assets/sanitary.svg"
                        alt=""
                        width="29px"
                        height="29px"
                      />
                    </div>
                    <div>
                      <p class="ellipsis-1">Sanitaire</p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-12@s mb-4" v-if="announceDetail.hasTv">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-tv"></i></div>
                    <div>
                      <p class="ellipsis-1">Télévision</p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-12@s mb-4" v-if="announceDetail.hasPool">
                  <div class="icon-highlight">
                    <div><i class="fa-solid fa-person-swimming"></i></div>
                    <div>
                      <p class="ellipsis-1">Piscine</p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-4 col-12@s mb-4"
                  v-if="announceDetail.hasGarden"
                >
                  <div class="icon-highlight">
                    <div>
                      <img
                        src="../assets/garden.svg"
                        alt=""
                        width="29px"
                        height="29px"
                      />
                    </div>
                    <div>
                      <p class="ellipsis-1">Jardin</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mb-0 mb-0@s"></div>
            </div>
            <div class="PropertyPage_description js-truncate">
              <h2 class="Title Title--s mb-10 color-ft-strong">
                Description du logement
              </h2>
              <div
                ref="description"
                class="PropertyPage_descriptionContent js-truncate-content text-start"
              >
                {{ announceDetail.description }}
              </div>
              <button
                @click="seeMore"
                v-if="hidden && descriptionLength > 200"
                class="ButtonLink mt-2 d-none@hidden js-truncate-show"
              >
                Voir plus
              </button>
              <button
                @click="seeLess"
                v-else-if="!hidden && descriptionLength > 200"
                class="ButtonLink mt-2 is-hidden d-none@hidden js-truncate-hide"
              >
                Voir moins
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 text-start property-wrapper">
        <div class="PropertyPage_sideBlock PropertyPage_sideBlock--intro p-20">
          <div class="row wrapper_price">
            <div class="col-lg-10">
              <div class="PropertyPage_sidePrice d-block@s">
                <p class="ft-2xs ft-medium color-ft-weak">à partir de</p>
                <p class="ft-3xl line-1">
                  <b>{{ price }} Fcfa</b
                  ><span v-if="announcePurpose !== 'vente'" class="ft-xs ml-2"
                    >/ {{ billPeriod }}</span
                  >
                </p>
                <div class="ft-xs">Charges comprises</div>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="status">{{ announcePurpose }}</h3>
            </div>
          </div>

          <div class="">
            <p class="ft-2xs ft-medium color-ft-weak my-3">
              Informations supplémentaires
            </p>
            <div class="caution-detail d-flex align-items-baseline mb-3">
              <div class="icon d-flex align-items-baseline">
                <i class="fa-solid fa-faucet-drip me-1"></i>
                <p class="mb-0 ellipsis-1">Caution d'eau</p>
              </div>

              <p class="ft-3xl line-1">
                <b>{{ waterDeposit || 0 }} Fcfa</b>
              </p>
            </div>
            <div class="caution-detail d-flex align-items-baseline mb-3">
              <div class="icon d-flex align-items-baseline">
                <i class="fa-solid fa-bolt me-1"></i>
                <p class="mb-0 ellipsis-1">Caution électricité</p>
              </div>

              <p class="ft-3xl line-1">
                <b>{{ electricityDeposit || 0 }} Fcfa</b>
              </p>
            </div>
            <div class="caution-detail d-flex align-items-baseline mb-3">
              <div class="icon d-flex align-items-baseline">
                <i class="fa-solid fa-wallet me-1"></i>
                <p class="mb-0 ellipsis-1">Avance sur loyer</p>
              </div>

              <p class="ft-3xl line-1">
                <b>{{ rentAdvance || 0 }} Fcfa</b>
              </p>
            </div>
          </div>
        </div>

        <div class="PropertyPage_sideBlock mt-20 mt-10@s">
          <div class="p-20">
            <div class="d-flex fx-grow fx-align-center">
              <div
                class="UserPicture UserPicture--stroke-r PropertyPage_profilePicture fx-no-shrink"
                style="
                  background-image: url('https://www.studapart.com/back/build/images/placeholder/owner.png?553a106922c14602a135b6c17ebffbeb&amp;frz-v=3263');
                  --score: 0;
                "
              >
                <span class="Icon UserPicture_certification" style="">
                  <svg
                    data-name="Composant 1 – 4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 9.015 12.029"
                  >
                    <path
                      data-name="Tracé 3"
                      d="M.01 12.014V4.806v-.172A4.57 4.57 0 014.51 0a4.57 4.57 0 014.5 4.634v7.38l-4.5-2.023-4.5 2.024z"
                      fill="#ffe269"
                    ></path>
                    <path
                      data-name="Tracé 4"
                      d="M9.009 12.014l-4.5-2.02L0 12.029v-1.917l3.209-1.467 1.352-.618 4.448-2.203z"
                      fill="#ffc915"
                    ></path>
                    <path
                      data-name="Tracé 5"
                      d="M0 12.014l4.5-2.02 4.509 2.035v-1.917l-4.56-2.085-4.45-2.2z"
                      fill="#ffbc07"
                      opacity=".408"
                    ></path>
                  </svg>
                </span>
                <span class="Icon UserPicture_ambassador" style="">
                  <svg
                    data-name="Groupe 118"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10.069 16.92"
                  >
                    <path
                      data-name="Tracé 27"
                      d="M10.069 5.072A5.035 5.035 0 115.034 0a5.053 5.053 0 015.035 5.072z"
                      fill="#3c9"
                    ></path>
                    <path
                      data-name="Tracé 28"
                      d="M10.069 5.072A5.035 5.035 0 115.034 0a5.053 5.053 0 015.035 5.072z"
                      fill="#3c9"
                    ></path>
                    <path
                      data-name="Tracé 29"
                      d="M5.034 9.206c2.78 0 5.034-1.883 5.034-4.206v11.261c0 .256-.347.4-.594.252l-4.44-2.731-3.254 2c-.738.455-1.78.013-1.78-.755V5c0 2.323 2.254 4.206 5.034 4.206z"
                      fill="rgba(51,204,153,0.68)"
                    ></path>
                    <path
                      data-name="Tracé 30"
                      d="M0 5c0 2.334 2.337 4.227 5.221 4.227v4.6L.6 16.853a.382.382 0 01-.6-.248z"
                      fill="#3c9"
                    ></path>
                    <circle
                      data-name="Ellipse 27"
                      cx="4"
                      cy="4"
                      r="4"
                      transform="translate(1 1)"
                      fill="#333f7f"
                    ></circle>
                  </svg>
                </span>
                <div class="UserPicture_edit">
                  <i class="fal fa-camera-alt"></i>
                </div>
                <div
                  class="UserPicture_badge bg-g ft-3xs js-tooltip"
                  data-id="verified"
                  data-text="Identité vérifiée"
                >
                  <i class="fa-solid fa-check"></i>
                </div>
                <i class="UserPicture_guaranted fal fa-shield"></i>
                <i class="UserPicture_verified fal fa-check-circle"></i>
              </div>
              <div class="fx-grow pl-10 pr-5">
                <p class="PropertyPage_userName">
                  <b>{{ announceOwner }}</b>
                </p>
                <p class="ft-xs color-ft-weak">
                  <span class="ft-medium ft-sm"
                    >Taux de réponse : <b>100%</b>
                  </span>
                </p>
              </div>
            </div>

            <div class="mt-2 ft-s">
              <p class="mt-3">
                <span class="bullet bg-b mr-5"></span> Identité vérifiée
              </p>
              <p class="mt-2">
                <span class="bullet bg-b mr-5"></span> S'est engagé à respecter
                la <b>Charte BenApart</b>
              </p>
              <p class="mt-2">
                <span class="bullet bg-b mr-5"></span> Contacts
              </p>
              <p class="mt-2 ms-2">
                <i class="fa-solid fa-phone"></i> 97864356
              </p>
              <p class="mt-2 ms-2">
                <i class="fa-brands fa-whatsapp me-1"></i>94765215
              </p>
            </div>
          </div>

          <div
            class="d-flex fx-justify-between fx-align-center b-top bg-bg-xweak p-4 mt-3"
          >
            <div></div>
            <!--    <router-link
              v-if="$store.state.user.id !== ownerId"
              to="/chat"
            > -->
            <button
              class="ButtonRectangle PropertyPage_contact js-popin-generic-open ButtonRectangle--bordered ButtonRectangle--s"
              data-id="contact-popup"
              data-test="contactModal"
            >
              <span class="ButtonRectangle_content">
                <span class="ButtonRectangle_text">
                  Envoyer un message à la résidence
                </span>
              </span>

              <div class="ButtonRectangle_loader">
                <i class="fal fa-spinner-third"></i>
              </div></button
            ><!-- 
            </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WhiteNav from "../components/WhiteNav.vue";
import Gallery from "../components/Gallery.vue";
import axios from "axios";
export default {
  name: "HouseDetail",
  data() {
    return {
      hidden: true,
      descriptionLength: 0,
      chat: false,
      galleryImg: [],
      announceOwner: "",
      announcePurpose: "",
      announceDetail: {},
      price: "",
      ownerId: "",
      billPeriod: "",
      waterDeposit: "",
      electricityDeposit: "",
      rentAdvance: "",
    };
  },
  props: {},
  mounted() {
    const idHouse = this.$route.params.id;
    axios
      .get(`http://localhost:8000/api/findOneAccomodation/${idHouse}`)
      .then(({ data }) => {
        console.log(data);
        this.announceDetail = data;
        this.galleryImg = data.images;
        this.announceOwner = data.announcements[0].user.userFirstName;
        this.announcePurpose = data.announcePurpose;
        this.ownerId = data.announcements[0].user.id;
        this.price = data.price;
        this.billPeriod = data.billPeriod;
        this.waterDeposit = data.waterDeposit;
        this.electricityDeposit = data.electricityDeposit;
        this.rentAdvance = data.rentAdvance;
      });
    let desc = this.$refs.description;

    let description = this.$refs.description.innerHTML;
    if (description.length > 200) {
      this.descriptionLength = description.length;
      let result = description.slice(0, 150);
      let end = description.slice(150);
      let span1 = document.createElement("span");
      span1.classList.add("dots");
      span1.innerHTML = "....";
      let span2 = document.createElement("span");
      span2.classList.add("hidden");
      span2.classList.add("description-text");
      span2.innerHTML = end;
      desc.innerHTML = result;
      desc.append(span1);
      desc.append(span2);
    }
  },
  components: {
    Gallery,
    WhiteNav,
  },
  methods: {
    seeMore() {
      let hiddenSpan = document.querySelector(".description-text");
      let dots = document.querySelector(".dots");
      hiddenSpan.classList.remove("hidden");
      dots.classList.add("hidden");
      this.hidden = false;
    },
    seeLess() {
      let hiddenSpan = document.querySelector(".description-text");
      let dots = document.querySelector(".dots");
      dots.classList.remove("hidden");
      console.log(hiddenSpan);
      hiddenSpan.classList.add("hidden");
      this.hidden = true;
    },
    openChat() {
      this.chat = true;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");
.p-20 {
  padding: 20px;
}
.UserPicture {
  background-position: 50%;
  background-size: cover;
  border-radius: 50%;
  height: 50px;
  position: relative;
  width: 50px;
}

.property-wrapper {
  margin-top: -18%;
  z-index: 60;
}

.line-1 {
  min-width: 230px;
}
.ButtonRectangle--bordered {
  background-color: transparent;
  text-align: center;
  border-radius: 10px;
  font-family: "Metrophobic", sans-serif;
  color: #36417d;
  border: 1px solid #36417d;
}
.ButtonRectangle--s {
  font-weight: 600;
  min-height: 40px;
  min-width: 120px;
  padding: 10px 20px;
}
.ButtonRectangle--bordered:hover {
  background-color: #36417d;
  color: #fff;
}

.bg-b {
  background-color: #36417d;
}

.bullet {
  display: inline-block;
  height: 5px;
  vertical-align: middle;
  width: 5px;
  border-radius: 50%;
}

.UserPicture_ambassador,
.UserPicture_certification {
  width: 12px;
  bottom: 0;
  display: none !important;
  position: absolute;
  right: 0;
  width: 12px;
  z-index: 2;
}
.UserPicture_badge {
  align-items: center;

  border-radius: 50%;
  bottom: 0;
  color: #fff;
  display: none;
  display: flex;
  font-size: 7px;
  height: 16px;
  justify-content: center;
  line-height: 1;
  position: absolute;
  right: 0;
  width: 16px;
  z-index: 2;
}

.ft-sm {
  font-family: "Metrophobic", sans-serif;
  font-size: 15px;
}
.bg-g {
  background-color: #3c9;
}
.fx-no-shrink {
  flex-shrink: 0;
}
.ButtonLink {
  padding: 5px 10px;
  border-radius: 10px;
  display: inline;
  border: 1px solid#6a73ad;
  background: transparent;
  color: #6a73ad;
}
.PropertyPage_sideBlock--intro {
  box-shadow: 0 3px 6px 0 rgba(69, 97, 251, 0.12);
}

/* .property-container{} */

.status {
  background-color: rgb(221, 88, 55);
  padding: 5px 10px;
  position: absolute;
  font-family: "Metrophobic", sans-serif;
  font-size: 21px;
  color: white;
  top: -10px;
  right: -10px;
}
.PropertyPage_sideBlock {
  background-color: #fff;
  border: 1px solid #ededff;
  border-radius: 12px;
  overflow: hidden;
}
p {
  margin-bottom: 0;
}
.property-description {
  padding: 0 40px;
}
.caution-detail .ft-3xl {
  font-size: 20px;
}

.caution-detail .name {
  font-weight: 300;
  font-family: "Metrophobic", sans-serif;
}

.caution-detail {
  justify-content: space-between;
}
p.location {
  margin-bottom: 0;
  text-align: left;
}
p.ellipsis-1 {
  margin-bottom: 0;
  text-align: left;
}
.Title.mb-10 {
  font-weight: 400;

  margin-bottom: 20px !important;
  text-align: left;
  color: #36417d;
  font-size: 20px;
  font-family: "Metrophobic", sans-serif;
}

.wrapper_price {
  border-bottom: 1px solid #ededff;
  position: relative;
}

.PropertyPage_sidePrice {
  color: var(--color-ft);
  padding-bottom: 20px;
}
.mb-20 {
  margin-bottom: 20px;
}
.color-ft-weak {
  color: #6a73ad;
}

.caution-description .ft-3xl {
  font-size: 20px;
}

.ft-3xl {
  font-size: 30px;
  font-family: "Metrophobic", sans-serif;
}

.ft-xs {
  font-size: 17px;
  font-family: "Metrophobic", sans-serif;
}
.PropertyPage_sidePrice p {
  margin: 0;
}
.ft-2xs {
  font-size: 15px;
  font-family: "Metrophobic", sans-serif;
}
.ft-medium {
  font-weight: 600;
}

.icon-highlight {
  align-items: center;
  color: #353535;
  display: flex;
  min-height: 50px;
  font-size: 17px;
  font-family: "Metrophobic", sans-serif;
}
.icon-highlight > div:first-child {
  align-items: center;
  background-color: #f8f8ff;
  display: flex;
  flex-shrink: 0;
  font-size: 20px;
  height: 50px;
  justify-content: center;
  margin-right: 15px;
  width: 50px;
  border-radius: 8px;
}

.ft-medium {
  font-weight: 600;
}
.icon-highlight > div:last-child {
  flex-grow: 1;
  line-height: 1.45;
}
.mb-10 {
  margin-bottom: 10px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mt-20 {
  margin-top: 20px;
}

.p-20 {
  padding: 20px;
}

.mb-10 {
  margin-bottom: 10px;
}

.Block,
.Deposit_section,
.Elegibility,
.FileUpload,
.OwnerRequest {
  background-color: #fff;
  position: relative;
  border: 1px solid #ededff;
  border-radius: 12px;
  font-family: "Metrophobic", sans-serif;
}
</style>
