<template>
  <div class="sliderCard AccomodationBlock">
    <div class="carrousel-container">
      <Carrousel @clickEvent="goDetails" :tabImg="imgArray"></Carrousel>
    </div>
    <router-link :to="{ name: 'houseDetails' }">
      <div class="card-description mt-3">
        <div class="AccomodationBlock_contentContainer">
          <div class="d-flex">
            <div class="AccomodationBlock_contentLeft">
              <div class="text-start">
                <p class="pt-2 mb-0" style="color: rgb(221, 88, 55) !important; font-weight: bold;">
                  <!---->
                  Appartement/Chambre
                </p>
                <p class="AccomodationBlock_title mb-2 fw-bold ellipsis-2">
                  Localisation
                </p>
              </div>
            </div>
            <div class="AccomodationBlock_contentRight">
              <div>
                <p class="line-1">à partir de</p>
                <p class="ft-l mb-0 ft-m@s">
                  15.000 fcfa <span class="ft-2xs">cc</span>
                </p>
                <p class="line-1">/ Jour</p>
                <p class="line-1">/ mois</p>
              </div>
            </div>
          </div>

          <div class="AccomodationBlock_location text-start mb-3">
            Meublé/ Sans meuble
          </div>
          <div class="ellipsis-2 text-start color-ft-weak" style="">
            Ouverture Janvier 2023 La résidence Ecla Paris Villejuif a été
          </div>
        </div>

        <div
          data-text="Le logement n’est pas encore disponible ! Inscrivez-vous à la liste d’attente et soyez le premier à être informé dès que des nouvelles dates se débloquent dans ce logement ou dans ses alentours."
          data-margin-top="30"
          class="AccomodationBlock_ctas"
        >
          <p class="AccomodationBlock_availability">
            <span class="AccomodationBlock_notif is-active"></span>
            <b class="fw-bolder me-5" style="color: #36417d;">Disponible immédiatement</b>
          </p>
          <!---->
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import Carrousel from "./CardSlider.vue";
export default {
  name: "CardVue",
  data() {
    return {
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
          src: "living-room-2155376.jpg",
          name: "Calavi",
        },
      ],
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
  },
  methods: {
    goDetails(){
      this.$router.push("/")
    }
  },
};
</script>
<style scoped>
.sliderCard {
  width: 310px;
}

.sliderCard .carousel__pagination-button::after {
  display: block;
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--vc-pgn-background-color);
}

.line-1 {
  color: black;
  font-family: "Metrophobic", sans-serif;
  font-size: 13px;
  font-weight: bold;
  text-align: end;
  margin-bottom: 0px;
}
.ft-2xs {
  color: #0726f5;
  font-family: "Metrophobic", sans-serif;
  font-size: 13px;
  text-align: end;
  margin-bottom: 0px;
}

.AccomodationBlock_notif.is-active {
  background-color: green;
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
  font-weight: bold;
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
