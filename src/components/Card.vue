<template>
  <div class="sliderCard AccomodationBlock">
    <div class="carrousel-container">
      <Carrousel :tabImg="imgArray"></Carrousel>
    </div>
    <router-link :to="{ name: 'home' }">
      <div class="card-description mt-3">
        <div class="AccomodationBlock_contentContainer">
          <div class="d-flex">
            <div class="AccomodationBlock_contentLeft">
              <div class="text-start">
                <p class="pt-2 mb-0">
                  <!---->
                  Logement en résidence
                </p>
                <p class="AccomodationBlock_title mb-2 fw-bold ellipsis-2">
                  UXCO Le 124
                </p>
              </div>
            </div>
            <div class="AccomodationBlock_contentRight">
              <div>
                <p class="line-1">à partir de</p>
                <p class="ft-l mb-0 ft-m@s">
                  <b>421€</b> <span class="ft-2xs">cc</span>
                </p>
                <p class="line-1">/ mois</p>
              </div>
            </div>
          </div>

          <div class="AccomodationBlock_location text-start mb-3">
            Meublé - Salle de sport
          </div>
          <div class="ellipsis-2 text-start color-ft-weak">
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
            <b class="fw-bolder me-5">Disponible immédiatement</b>
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
          src: "cotonou-room.jpg",
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
  methods: {},
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
  color: #6a73ad;
  font-family: "Metrophobic", sans-serif;
  font-size: 13px;
  text-align: end;
  margin-bottom: 0px;
}
.ft-2xs {
  color: #6a73ad;
  font-family: "Metrophobic", sans-serif;
  font-size: 13px;
  text-align: end;
  margin-bottom: 0px;
}

.AccomodationBlock_notif.is-active {
  background-color: #3c9;
}

.AccomodationBlock_notif {
  display: inline-block;
  height: 10px;
  margin-right: 3px;
  width: 10px;
  border-radius: 50%;
}
.color-ft-weak {
  color: #6a73ad;
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
