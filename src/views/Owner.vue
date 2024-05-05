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
      <h2
        class="p-relative ft-2xl text-start ft-bold max-width-xs m-auto color-b mt-60"
      >
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

  <div class="question-wrapper">
    <div class="accordion-container">
      <h3 class="ft-3xl@s ft-2xl fw-bold blue text-center mb-40">
        Questions fréquentes
      </h3>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              La plateforme ChezVous est-elle une agence de location immobilière
              ?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Non, la plateforme Studapart n’est pas une agence immobilière de
              location ou de gestion locative en ligne. C’est une plateforme de
              réservation de logements en ligne. Studapart vous permet ainsi de
              trouver un locataire fiable sans passer par une agence !
              Contrairement à une agence immobilière traditionnelle (ou un
              gestionnaire immobilier en ligne), Studapart ne vous remplace pas
              dans la gestion de votre bien : vous gérez vous-même votre
              location, mais pas tout seul. Afin de gérer au mieux la location
              de votre bien immobilier, nos conseillers dédiés vous épaulent
              tout le long de la location à votre demande. De la rédaction de
              l'annonce grâce à nos conseils sur les termes à utiliser, au prix
              des loyers à fixer, en passant par les mises en avant des qualités
              de votre bien locatif jusqu'au choix du locataire et la signature
              du bail, nous vous fournissons tous les conseils nécessaires pour
              optimiser votre expérience locative. Vous gardez la main sur le
              paiement des loyers (en dehors du 1er loyer payé par le locataire
              sur la plateforme), ou encore sur le choix définitif du locataire.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Faut-il être propriétaire bailleur pour louer un logement avec
              Studapart ?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              Notre plateforme est disponible pour les propriétaires bailleurs,
              mais pas uniquement ! La plateforme est disponible pour d'autres
              types de loueurs tels que les résidences étudiantes, les
              colivings, et les professionnels de l'immobilier (agences
              immobilières, etc.).
            </div>
          </div>
        </div>
        <div class="accordion-item last">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Dois-je payer des frais au moment de la mise en location chez
              Studapart ?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              Studapart est un service sans frais pour le propriétaire. Le
              business model de Studapart repose sur la réservation en ligne et
              permet à la plateforme de financer la sécurisation de la location
              en plus du service en prélevant des frais de réservation payés par
              le locataire, qui varient entre 179 et 400€ selon la tension
              locative dans le secteur géographique. Ces frais permettent de
              financer le travail de 60 passionnés qui s'affairent à : modérer
              les annonces, les profils, relancer les propriétaires et
              locataires pour assurer une forte réactivité et à accompagner
              chacun d'entre vous. Grâce aux frais, on apporte également des
              garanties contre les annulations de dernière minute tant côté
              propriétaire que locataire. Nos services complémentaires
              sur-mesure et à votre demande pour faciliter votre gestion
              locative peuvent en revanche avoir un coût pour le propriétaire.
              Ce service est à la carte et optionnel. Pour en savoir plus,
              consultez la page de l’offre > Pour l’ensemble de nos services,
              nous ne nous rémunérons qu’au succès pour un modèle de
              rémunération plus juste, soit à la condition que le propriétaire
              trouve le locataire idéal, et que le locataire trouve son
              logement.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-container mt-5">
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
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
    Footer,
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

.mb-40 {
  margin-bottom: 40px;
}

.question-wrapper {
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  font-family: "Metrophobic", sans-serif;

  justify-content: center;
  padding: 40px 0;
  align-items: center;
}
.accordion-container {
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.accordion {
  max-width: 760px;
  width: 80%;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05);
}

.accordion-button::after {
  background-color: #effffb;
  border-radius: 50%;
  background-image: url("../assets/téléch.svg");
  width: 1.3rem;
  padding: 5px;
  height: 1.2rem;
  margin-left: auto;
  content: "";
  background-repeat: no-repeat;
  background-size: cover;
}

.accordion-item {
  border: 1px solid #ededff;
  margin-bottom: 10px;

  border-radius: calc(0.375rem - (1px));
  border-top-right-radius: calc(0.375rem - (1px));
  border-bottom-right-radius: calc(0.375rem - (1px));
  border-bottom-left-radius: calc(0.375rem - (1px));
}

.accordion-item.last {
  margin-bottom: 0;
}

.blue{
  color: #36417d;
}

.accordion-button {
  font-size: 18px;
  font-weight: 500;
  color: #36417d;
}

.accordion-body {
  text-align: justify;
}
</style>
