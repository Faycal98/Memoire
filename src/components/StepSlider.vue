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
          text: "100% des annonces sont vérifiées et validées automaticament. En cas d'une dénonciation par un client, notre équipe d’experts vous bloque afin de s'assurer qu'il s'agit bien d'une fausse alert mais dans le cas contraire vous serez supprimer tout simplement.",
        },

        {
          title: "<strong>Je reçois des demandes</strong>",
          text: "Chez ChezVous, on vise la compatibilité : vous recevez des demandes de profils de locataires qui correspondent à vos critères et tout moment partout au Bénin. Notre messagerie sécurisée vous permet d'avoir une première prise avec votre locataire.",
        },
        {
          title: "<strong>Je finalise la location de mon bien immobilier<strong>",
          text: "Une fois le locataire idéal trouvé, hop ! Proposez-lui de réserver votre logement en ligne depuis votre messagerie. Vous êtes ainsi protégé en cas de pépin. À la demande, réalisez vos états des lieux avec votre afin e finaliser la location ou la vente de votre bien immobilier.",
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
    color: #36417d;
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
