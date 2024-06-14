<template>
  <div class="sliderCard AccomodationBlock">
    <div class="carrousel-container">
      <Carrousel @click-event="goToDetails" :tabImg="imgArray"></Carrousel>
    </div>

    <router-link :to="{ name: 'houseDetails', params: { id: appartId } }">
      <div class="card-description mt-1">
        <div class="AccomodationBlock_contentContainer">
          <div class="d-flex">
            <div class="AccomodationBlock_contentLeft">
              <div class="text-start">
                <p class="pt-2 mb-0 AccomodationType">
                  <!---->
                  {{ accomodationDetail.type }}
                </p>
                <p class="AccomodationBlock_title mb-2 fw-bold ellipsis-2 ft">
                  {{ accomodationDetail.city }},
                  {{ accomodationDetail.neighborhood }}
                </p>
              </div>
            </div>
            <div class="AccomodationBlock_contentRight">
              <div>
                <p class="line-1">à partir de</p>
                <p class="ft-l mb-0 ft-m@s">
                  <b class="ft"
                    >{{ accomodationDetail.price }}
                    <span class="ft-2xs unit">FCFA</span></b
                  >
                </p>

                <p
                  v-if="accomodationDetail.announcePurpose !== 'vente'"
                  class="line-1"
                >
                  / {{ accomodationDetail.billPeriod }}
                </p>
              </div>
            </div>
          </div>

          <div class="AccomodationBlock_location text-start mb-3">
            {{ accomodationDetail.hasFurniture ? "Meublé" : "Non meublé" }} -
            {{ accomodationDetail.roomNumber }} chambres
          </div>
          <div
            class="ellipsis-2 wrapper-description-full text-start color-ft-weak"
          >
            {{ accomodationDetail.description }}
          </div>
        </div>

        <div
          data-text="Le logement n’est pas encore disponible ! Inscrivez-vous à la liste d’attente et soyez le premier à être informé dès que des nouvelles dates se débloquent dans ce logement ou dans ses alentours."
          data-margin-top="30"
          class="AccomodationBlock_ctas"
        >
          <p class="AccomodationBlock_availability mb-0">
            <span class="AccomodationBlock_notif is-active"></span>
            <b class="fw-bolder me-5">Disponible immédiatement</b>
          </p>
          <!---->
        </div>
      </div>
    </router-link>
    <div class="position-absolute delete-icon" v-if="$route.meta.admin">
      <v-icon size="x-large" color="red" @click="deleteHouse(appartId)">
        mdi-delete
      </v-icon>
    </div>

    <v-avatar color="brown" v-if="isVerified" class="big-img position-absolute">
      <span v-if="!ownerData.profilePhoto" class="text-h7 avatar">{{
        userInitials
      }}</span>
      <v-img
        v-else
        :src="`http://localhost:8000/profil/${ownerData.profilePhoto}`"
      ></v-img>
    </v-avatar>
    <img
      v-if="isVerified"
      class="validation-badge position-absolute"
      src="../assets/badge.svg"
      alt=""
      width="10px"
    />
  </div>
</template>
<script>
import axios from "axios";
import Carrousel from "./CardSlider.vue";
export default {
  name: "CardVue",
  data() {
    return {
      isVerified: false,
      userData: "",
      OwnerInitials: "",
      ownerData: "",
    };
  },
  components: {
    Carrousel,
  },
  props: {
    imgArray: {
      type: Array,
    },
    appartId: {
      type: Number,
    },
    accomodationDetail: {
      type: Object,
    },
  },
  mounted() {

    let owner = this.accomodationDetail.announcements[0].user;
    this.ownerData = owner;
    const ownerInitials =
      owner.userName.charAt(0).toUpperCase() +
      owner.userFirstName.charAt(0).toUpperCase();
    this.OwnerInitials = ownerInitials;
 
    let verification = this.accomodationDetail.announcements[0].user.isVerified;
    verification === "Yes" ? (this.isVerified = true) : false;
  
  },
  methods: {
    goToDetails() {
  
      this.$router.push({
        name: "houseDetails",
        params: { id: this.appartId },
      });
    },

    deleteHouse(id) {
    
      const userData = JSON.parse(localStorage.getItem("userData"));
      axios
        .delete(`http://localhost:8000/api/deleteAccomodation/${id}`, {
          headers: {
            "x-access-token": userData.accessToken,
          },
        })
        .then((data) => {
        
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.sliderCard {
  width: 310px;
}

.wrapper-description-full {
  max-height: 50px;
  overflow: hidden;
}
.ft-2xs.unit {
  color: #353535;
}
.big-img {
  top: 40%;
  left: 5%;
}

.validation-badge {
  top: 45%;
  left: 15%;
}
.delete-icon {
  opacity: 0;
  right: 4%;
  bottom: 17%;
  transition: ease-in-out 1s;
}
.sliderCard:hover .delete-icon {
  opacity: 1;
}

.carrousel-container {
  height: 218px !important;
  overflow: hidden;
}
.sliderCard .carousel__pagination-button::after {
  display: block;
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--vc-pgn-background-color);
}

.ft {
  font-family: "Metrophobic", sans-serif;
}

.AccomodationType {
  color: #36417d;
  font-size: 19px;
}

.line-1 {
  color: #6a73ad;
  font-family: "Metrophobic", sans-serif;
  font-size: 13px;
  text-align: end;
  margin-bottom: 0px;
}
.ft-2xs {
  color: #36417d;
  font-family: "Metrophobic", sans-serif;
  font-size: 13px;
  text-align: end;
  margin-bottom: 0px;
}

.AccomodationBlock_notif.is-active {
  background-color: rgba(33, 175, 40, 0.959);
}

.AccomodationBlock_notif {
  display: inline-block;
  height: 10px;
  margin-right: 3px;
  width: 10px;
  border-radius: 50%;
}
.color-ft-weak {
  color: #36417d;
  font-size: 16px;
}
.ft-xs {
  font-size: 13px;
}

.AccomodationBlock_ctas {
  align-items: center;
  background-color: #f8f8ff;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  min-height: 45px;
  border-top: 1px solid #f3f3ff;
  padding: 8px 8px 8px 15px;
}

.carrousel-container {
  margin-top: -2px;
}

.AccomodationBlock.AccomodationBlock--withDescription {
  height: 400px;
}
.AccomodationBlock_contentContainer,
.AccomodationBlock_contentLeft {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}
.color-ft {
  color: #353535;
  font-family: "Metrophobic", sans-serif;
  font-size: 17px;
}
.AccomodationBlock_contentContainer {
  padding: 12px 15px;
}

.AccomodationBlock {
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  width: 94%;
  border: 1px solid #ededff;
  border-radius: 12px;
  box-shadow: 0 3px 6px 0 rgba(69, 97, 251, 0.12);
  color: #353535;
  display: flex;
  flex-direction: column;

  overflow: hidden;
  position: relative;
  transition: 0.25s;
}
</style>
<!-- /
<template>

</template>
<script>

</script>
<style scoped>

</style>



*/ -->
