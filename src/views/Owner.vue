<template>
  <header>
    <Navbar></Navbar>
    <div class="wrapper">
      <div class="image-container OwnerLandingPage_headingImage"></div>
      <div class="infos mx-auto position-relative">
        <h1 class="Rotated RotatedGreen Small mb-20 d-flex">
          <span>Mettre son logement en location</span>
        </h1>

        <h2 class="ft-3xl text-white fw-bold color-b mt-20@s">
          On a le locataire idéal, les garanties et des services à la carte
        </h2>
        <p class="text-white description">
          ChezVous est une <strong>plateforme de réservation</strong> de
          logements en ligne gratuite. On vous outille pour louer votre logement
          rapidement, en toute sérénité et à moindre coût. C’est du sur-mesure :
          on vous accompagne à chaque étape de la location selon vos besoins.
        </p>
        <router-link to="/annonce">
          <GreenBtn :content="msg">
            <i class="fa-regular fa-circle-check me-2"></i>
          </GreenBtn>
        </router-link>
      </div>
    </div>
  </header>

  <div class="Wrapper mt-4">
    <div class="servcesContainer pv-60">
      <div class="ServicesBlock">
        <div class="ServicesBlock-Item">
          <div class="ServicesBlock-Item__Logo-block">
            <img
              src="https://www.studapart.com/themes/custom/iw_bootstrap4/assets/img/owner_lp/target.svg?frz-v=3403"
              alt="target icon"
            />
          </div>
          <p class="text-center">
            <span class="ft-m ft-bold">Des dossiers complets</span><br />
            <span class="ft-s">qui correspondent à vos critères</span>
          </p>
        </div>
        <div class="ServicesBlock-Item">
          <div class="ServicesBlock-Item__Logo-block">
            <img
              src="https://www.studapart.com/themes/custom/iw_bootstrap4/assets/img/owner_lp/security.svg?frz-v=3403"
              alt="security icon"
            />
          </div>
          <p class="text-center">
            <span class="ft-m ft-bold">Des garanties gratuites</span><br />
            <span class="ft-s">contre les impayés et dégradations</span>
          </p>
        </div>
        <div class="ServicesBlock-Item">
          <div class="ServicesBlock-Item__Logo-block">
            <img
              src="https://www.studapart.com/themes/custom/iw_bootstrap4/assets/img/owner_lp/add.svg?frz-v=3403"
              alt="add icon"
            />
          </div>
          <p class="text-center">
            <span class="ft-m ft-bold">Des services à la carte</span><br />
            <span class="ft-s">pour faciliter votre gestion locative</span>
          </p>
        </div>
        <div class="ServicesBlock-Item">
          <div class="ServicesBlock-Item__Logo-block">
            <img
              src="https://www.studapart.com/themes/custom/iw_bootstrap4/assets/img/owner_lp/contact.svg?frz-v=3403"
              alt="contact icon"
            />
          </div>
          <p class="text-center">
            <span class="ft-m ft-bold">Un conseiller dédié</span><br />
            <span class="ft-s">disponible à votre demande 6J/7</span>
          </p>
        </div>
      </div>
    </div>

    <h2 class="ft-2xl ft-bold ft-bold@s text-center m-auto color-b">
      Un service complet et gratuit pour mettre en location votre logement en
      toute autonomie
    </h2>

    <p class="text-center mt-10">
      De la recherche de locataire, à la reservation, on a tout ce qu’il vous
      faut ! Déposez votre annonce et bénéficiez d’une expérience sur-mesure
      depuis notre plateforme sécurisée
    </p>
  </div>

  <div class="OwnerLandingPage_SliderBlock content_wrapper d-flex">
    <div class="OwnerLandingPage_headingImage2 position-relative">
      <img src="../assets/red.svg" alt="" class="position-absolute" />
    </div>
    <div class="slider-wrapper">
      <h2 class="p-relative ft-2xl text-start ft-bold max-width-xs m-auto color-b mt-60">
        Comment louer votre logement ?
      </h2>

      <p
        class="mt-1 ft-bold ft-l Paragraph_highlight Paragraph_highlight--green"
      >
        3 étapes et c’est loué <i>!</i>
      </p>
      <div class="slider-container">
        <StepSlider></StepSlider>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/OwnerNavbar.vue";
import StepSlider from "../components/StepSlider.vue";
import GreenBtn from "../components/GreenBtn.vue";
export default {
  data() {
    return {
      msg: "Deposer mon annonce",
    };
  },
  components: {
    Navbar,
    GreenBtn,
    StepSlider,
  },
  created() {
    console.log("created");
  },
};
</script>
<style scoped>
header {
  background-image: url("../assets/black.jpg");
  background-size: cover;
  min-height: 200px;

  background-repeat: no-repeat;
  background-color: #abaaaa;
  background-blend-mode: multiply;
}

.wrapper {
  padding-top: 80px;
  height: 620px;
  display: flex;
  align-items: center;
}
.ft-3xl {
  font-size: 34px;
  text-align: left;
  line-height: 1.3;
}
.OwnerLandingPage_headingImage {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;

  position: relative;
  max-width: 600px;
  flex-grow: 1;
}

.infos {
  top: 25px;
  max-width: 600px;
}

.Rotated.Small {
  /*   transform: rotate(-2deg); */
  padding: 8px;
  width: fit-content;
  border-radius: 4px;
  font-family: "Metrophobic", sans-serif;
}
.mb-20 {
  margin-bottom: 20px;
}

.Rotated.RotatedGreen,
.Rotated.RotatedInversed {
  background: #3cd7a3;
}

.Rotated.Small span {
  font-size: 24px;
  color: #fff;
  font-style: normal;
  font-weight: 700;
}

p.description {
  font-size: 18px;
  text-align: left;
}

.Wrapper {
  width: 80%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.ServicesBlock {
  display: flex;
  padding: 30px 40px;
  gap: 40px;
  border-radius: 16px;
  background: #36417d;
}

.ServicesBlock > .ServicesBlock-Item {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.ServicesBlock > .ServicesBlock-Item > .ServicesBlock-Item__Logo-block {
  border-radius: 50%;
  background-color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ft-bold {
  font-weight: 700;
}

.ft-m {
  font-size: 16px;
  line-height: 1.6;
  color: white;
  font-family: "Metrophobic", sans-serif;
}

.pv-60 {
  padding-bottom: 60px;
}
.ft-m {
  font-size: 14px;
  line-height: 1.6;
  font-family: "Metrophobic", sans-serif;
}

.OwnerLandingPage_SliderBlock {
  height: 573px;
  margin-top: 100px;
}
.OwnerLandingPage_contentImageWrapper {
  height: 616px;
  display: flex;
  align-items: center;
  gap: 100px;
}

.OwnerLandingPage_contentImageWrapper.Wrapper--2
  .OwnerLandingPage_headingImage {
  max-width: 640px;
}
.OwnerLandingPage_headingImage2 {
  height: 100%;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  border-radius: 50%;
  border: 20px solid #3cd7a3;
  position: relative;
  background: url("../assets/bussinessman.jpg");
  width: 600px;
}

.OwnerLandingPage_headingImage2 img {
  z-index: -2;
  left: 8%;
  top: -90%;
}

.content_wrapper {
  /* align-items: center; */
  gap: 100px;
}

.slider-container {
  width: 600px;
  padding: 24px;

  border-radius: 16px;
  background-color: #fff;

  box-shadow: 0 16px 48px 0 rgba(195, 205, 235, 0.23),
    0 4px 12px 0 rgba(195, 205, 235, 0.12),
    0 1px 4px 0 rgba(195, 205, 235, 0.08);
}
.ft-bold {
  font-weight: 700;
}
.Paragraph_highlight {
  padding: 2px 5px;
  border-radius: 4px;
  width: fit-content;
}
.Paragraph_highlight.Paragraph_highlight--green {
  color: #fff;
  background-color: #3c9;
}
</style>
