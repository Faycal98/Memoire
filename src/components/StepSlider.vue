<template>
  <Carousel :wrap-around="true" class="stepperSlider">
    <Slide v-for="step in steps" :key="step">
      <div class="step-container"></div>
      <div class="carousel__item">
        <h3 v-html="step.title"></h3>
        <p>{{ step.text }}</p>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      steps: [
        {
          title: "<strong>Je dépose mon annonce<strong>",
          text: "100% des annonces sont vérifiées et validées en 12h max. Notre équipe d’experts s’assure que votre logement est conforme à sa description et respecte les règles de location. À la demande, bénéficiez de services en plus pour maximiser le potentiel de votre annonce : boost de visibilité avec le Studaboost, shooting photo professionnel avec LightShop.",
        },

        {
          title: "<strong>Je reçois des demandes</strong>",
          text: "Chez Studapart, on vise la compatibilité : vous recevez des demandes de profils de locataires qui correspondent à vos critères toute l’année (date d’entrée, durée, dossier de location), partout en France. Vous accédez aux dossiers des locataires en un clic. Notre messagerie sécurisée permet ensuite de gérer votre location de A à Z.",
        },
        {
          title: "<strong>Je finalise la réservation en ligne<strong>",
          text: "Une fois le locataire idéal trouvé, hop ! Proposez-lui de réserver votre logement en ligne depuis votre messagerie. Le locataire paye le 1er mois de loyer et les frais de réservation sur la plateforme. Vous êtes ainsi protégé en cas de pépin (annulation, dégradations, impayés). À la demande, réalisez vos états des lieux à distance et à moindre coût avec notre partenaire Check & Visit.",
        },
      ],
    };
  },
});
</script>
<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
text-align: left;
  color: #353535;
  font-size: 20px;
  flex-direction: column;
  border-radius: 8px;
  margin: 10px 8px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 0px;
  flex-direction: column;
}

.carousel__item  h3{
    width: 100%;
    font-size: 20px;
    color: #36417D;
    font-family: "Metrophobic", sans-serif;
    font-weight: 700;
}

.carousel__item {
    margin-top: 10px;
    font-size: 18px;
    font-family: "Metrophobic", sans-serif;
    color: #353535;;
}
.carousel__pagination-button::after {
  display: flex;
  content: "3";
  justify-content: center;
  align-items: center;
  height: 42px;
  border-radius: 50%;
}

.step-container {
  height: 45px;
  width: 100%;
}

.carousel__pagination {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: left;
  justify-content: flex-start;
  padding: 0;
  line-height: 0;
  margin: 10px 0 0;
}
</style>
