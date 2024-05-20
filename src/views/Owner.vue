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
          On a le locataire idéal, les garanties et les services idéals pour vous satisfaire.
        </h2>
        <p class="text-white description">
          <router-link to="/"><strong style="color:#aeb6eb; font-size: 20px">ChezVous</strong></router-link> est une <strong>plateforme de recherche</strong> de
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
    <h2 class="ft-2xl ft-bold ft-bold@s text-center m-auto color-b" style="color: rgb(221, 88, 55) !important;">
      Un service complet et fiable pour mettre en location votre logement en
      toute autonomie
    </h2>
    
    <div class="servcesContainer pv-60">
        
      <div class="ServicesBlock">
        
        <div class="ServicesBlock-Item">
          
          <div class="ServicesBlock-Item__Logo-block" >
            <div class="Step_head not-last d-flex align-items-center">
              <span class="Icon" style="--width: 35px; width: 35px; margin-left:41px ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M19.353 30.376v-1.414a1.353 1.353 0 10-2.706 0v1.414c-5.786-.629-10.394-5.237-11.023-11.023h1.414a1.353 1.353 0 100-2.706H5.624c.629-5.787 5.237-10.395 11.023-11.023v1.414a1.353 1.353 0 102.706 0V5.624c5.786.628 10.394 5.236 11.023 11.023h-1.414a1.353 1.353 0 100 2.706h1.414c-.629 5.786-5.237 10.394-11.023 11.023m15.294-13.73h-1.552c-.646-7.29-6.45-13.095-13.742-13.74V1.352a1.353 1.353 0 10-2.706 0v1.552C9.356 3.551 3.55 9.355 2.905 16.647H1.353a1.353 1.353 0 100 2.706h1.552c.646 7.29 6.45 13.096 13.742 13.741v1.553a1.353 1.353 0 102.706 0v-1.553c7.291-.645 13.096-6.45 13.742-13.74h1.552a1.353 1.353 0 100-2.707"
                      fill="#343F7F"
                    ></path>
                    <path
                      d="M18 24.04l-.84-.84C14.04 20.44 12 18.58 12 16.3c0-1.86 1.44-3.3 3.3-3.3 1.02 0 2.04.48 2.7 1.26A3.604 3.604 0 0120.7 13c1.86 0 3.3 1.44 3.3 3.3 0 2.28-2.04 4.14-5.16 6.9l-.84.84z"
                      fill="rgb(221, 88, 55)"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <p class="text-center">
            <span class="ft-m ft-bold">Des dossiers complets</span><br />
            <span class="ft-s">qui correspondent à vos critères</span>
          </p>
        </div>
        <div class="ServicesBlock-Item">
          <div class="ServicesBlock-Item__Logo-block" >
            <div class="Step_head not-last d-flex align-items-center">
              <span class="Icon" style="--width: 28px; width: 28px;margin-left:41px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 31 38"
                >
                  <defs><path id="a" d="M0 .095h30.213v37.282H0z"></path></defs>
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(0 .528)">
                      <mask id="b" fill="#fff">
                        <use xlink:href="#a"></use>
                      </mask>
                      <path
                        d="M4.053 3.21a.95.95 0 00-.938.937v29.178c0 .508.43.937.938.937H26.16a.95.95 0 00.939-.937V4.147a.95.95 0 00-.939-.937H4.053zM26.16 37.377H4.053A4.057 4.057 0 010 33.325V4.147A4.057 4.057 0 014.053.095H26.16a4.057 4.057 0 014.053 4.052v29.178a4.057 4.057 0 01-4.053 4.052z"
                        fill="#343F7F"
                        mask="url(#b)"
                      ></path>
                    </g>
                    <path
                      fill="#FF4355"
                      d="M11.4 8.569l-1.246-1.246-1.869 1.869-.623-.623-1.246 1.246.623.622 1.246 1.246 1.246-1.246z"
                    ></path>
                    <path
                      fill="#50528E"
                      d="M17.86 8.842h-4.082v1.762h10.206V8.842zm0 6.853h-4.082v1.762h10.206v-1.762zm0 6.852h-4.082v1.762h10.206v-1.762zm0 6.853h-4.082v1.761h10.206V29.4z"
                    ></path>
                    <path
                      fill="#FF4355"
                      d="M11.4 15.421l-1.246-1.246-1.869 1.869-.623-.623-1.246 1.246.623.623 1.246 1.246 1.246-1.246zm0 6.853l-1.246-1.246-1.869 1.868-.623-.622-1.246 1.245.623.623 1.246 1.246 1.246-1.246zm0 6.852l-1.246-1.246-1.869 1.869-.623-.623-1.246 1.246.623.623 1.246 1.246 1.246-1.246z"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <p class="text-center">
            <span class="ft-m ft-bold">Des garanties</span><br />
            <span class="ft-s">pour toutes vos annonces</span>
          </p>
        </div>
        <div class="ServicesBlock-Item">
          <div class="ServicesBlock-Item__Logo-block" >
            <div class="Step_head not-last d-flex align-items-center">
              <span class="Icon" style="--width: 35px; width: 35px; margin-left:41px ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M19.353 30.376v-1.414a1.353 1.353 0 10-2.706 0v1.414c-5.786-.629-10.394-5.237-11.023-11.023h1.414a1.353 1.353 0 100-2.706H5.624c.629-5.787 5.237-10.395 11.023-11.023v1.414a1.353 1.353 0 102.706 0V5.624c5.786.628 10.394 5.236 11.023 11.023h-1.414a1.353 1.353 0 100 2.706h1.414c-.629 5.786-5.237 10.394-11.023 11.023m15.294-13.73h-1.552c-.646-7.29-6.45-13.095-13.742-13.74V1.352a1.353 1.353 0 10-2.706 0v1.552C9.356 3.551 3.55 9.355 2.905 16.647H1.353a1.353 1.353 0 100 2.706h1.552c.646 7.29 6.45 13.096 13.742 13.741v1.553a1.353 1.353 0 102.706 0v-1.553c7.291-.645 13.096-6.45 13.742-13.74h1.552a1.353 1.353 0 100-2.707"
                      fill="#343F7F"
                    ></path>
                    <path
                      d="M18 24.04l-.84-.84C14.04 20.44 12 18.58 12 16.3c0-1.86 1.44-3.3 3.3-3.3 1.02 0 2.04.48 2.7 1.26A3.604 3.604 0 0120.7 13c1.86 0 3.3 1.44 3.3 3.3 0 2.28-2.04 4.14-5.16 6.9l-.84.84z"
                      fill="rgb(221, 88, 55)"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <p class="text-center">
            <span class="ft-m ft-bold">Des services conçus </span><br />
            <span class="ft-s">pour faciliter votre gestion locative</span>
          </p>
        </div>
        <div class="ServicesBlock-Item">
          <div class="ServicesBlock-Item__Logo-block" >
            <div class="Step_head not-last d-flex align-items-center">
              <span class="Icon" style="--width: 32px; width: 32px;  margin-left:41px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 36">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24.325 8.377l8.863 8.773.008-.011c.644.607 1.358 1.308 1.649 2.182a3.739 3.739 0 01-.952 3.953 3.748 3.748 0 01-2.532 1.114 3.542 3.542 0 01-1.168 2.478 3.917 3.917 0 01-2.395 1.087 3.504 3.504 0 01-1.174 2.481 3.952 3.952 0 01-3.258 1.048c.502-.618.853-1.234.669-2.62a1.26 1.26 0 00.735-.34c.242-.22.376-.521.378-.836 0-.216-.07-.432-.193-.614a1.773 1.773 0 01-.233-.191 1.353 1.353 0 01-.216-.28l-4.814-4.677a1.323 1.323 0 01-.442-1.076 1.32 1.32 0 01.449-.918c.266-.234.613-.347.965-.331.355.022.681.181.917.448l5.062 4.93c.056.055.1.108.141.161.49.3 1.13.235 1.55-.165l.045-.045a1.11 1.11 0 00-.045-1.566l-5.099-4.967c-.47-.532-.48-1.262-.055-1.771.228-.274.549-.442.904-.474.352-.03.7.076.975.304l4.857 4.718c.119.057.228.131.325.221.502.481 1.28.482 1.774.007l.04-.037a1.115 1.115 0 00-.02-1.577l-9.605-9.567 1.895-1.842zM3.267 4.08a11.754 11.754 0 0115.398-.847c-.833.604-1.595 1.389-1.998 1.83a9.136 9.136 0 00-11.535.926 8.304 8.304 0 00-2.464 5.989 9.204 9.204 0 002.046 5.775c-.498.511-1.278 1.425-1.519 2.34A11.813 11.813 0 010 11.985 10.966 10.966 0 013.267 4.08z"
                      fill="#343F7F"
                    ></path>
                    <path
                      d="M21.116 30.018l-.425.401.025.037-1.82 1.82a1.29 1.29 0 01-1.783.005c-.235-.23-.37-.55-.372-.912a1.08 1.08 0 01.303-.817l2.16-2.16c.256-.231.579-.347.903-.347.341 0 .684.128.95.384.22.204.348.482.358.783.012.3-.095.586-.299.806zm-5.936-1.376a1.289 1.289 0 01-1.781-.002 1.116 1.116 0 01-.342-.79 1.142 1.142 0 01.349-.834l2.173-2.174a1.295 1.295 0 011.787-.002c.215.209.337.49.342.79.004.3-.108.585-.35.834l-2.178 2.178zm-5.42-3.54a1.119 1.119 0 01-.342-.789c-.005-.3.108-.585.35-.833l2.175-2.176a1.281 1.281 0 011.784 0c.216.209.337.49.342.79.005.3-.107.585-.349.834L11.547 25.1a1.29 1.29 0 01-1.788.001zm-3.64-3.535a1.119 1.119 0 01-.341-.79c-.005-.3.108-.585.35-.834l2.173-2.174a1.29 1.29 0 011.786-.002c.216.21.337.49.343.79.004.301-.108.586-.35.834l-2.174 2.174a1.29 1.29 0 01-1.787.002zm.322-5.675a3.96 3.96 0 015.498-.01 3.475 3.475 0 011.16 2.45 3.914 3.914 0 012.478 1.087 3.473 3.473 0 011.16 2.45 3.916 3.916 0 012.479 1.086 3.515 3.515 0 011.178 2.495 4.043 4.043 0 012.523 1.097 3.813 3.813 0 011.116 2.167c.184 1.385-.167 2.002-.67 2.619a1.022 1.022 0 00-.08.119 3.863 3.863 0 01-.42.499l-2.182 2.181a3.956 3.956 0 01-2.68 1.052 3.944 3.944 0 01-3.91-3.469 3.903 3.903 0 01-2.548-1.097 3.473 3.473 0 01-1.159-2.47 3.904 3.904 0 01-2.487-1.095 3.476 3.476 0 01-1.159-2.471 3.893 3.893 0 01-2.486-1.095 3.717 3.717 0 01-1.059-3.542c.24-.915 1.02-1.828 1.518-2.34l.008.01zM19.261 2.744a11.812 11.812 0 0114.916 1.154 11.198 11.198 0 013.419 8.051 11.082 11.082 0 01-2.752 7.29c-.29-.874-1.004-1.575-1.647-2.182a8.486 8.486 0 00-.871-11.244 9.16 9.16 0 00-12.69.108l-5.043 4.912c-.283.233-.429.524-.442.835-.007.278.11.558.32.757a1.274 1.274 0 001.78.004l5.262-5.093c.08-.07.143-.115.206-.153a1.35 1.35 0 01.177-.107l.1-.05.113-.011c.041-.004.083-.006.125-.006.14-.03.285-.03.424 0l.1.005.12.011.108.055c.066.036.132.076.192.123.053.032.103.067.151.106l.996.986-3.252 3.162-2.965 2.883a3.944 3.944 0 01-5.477.003 3.688 3.688 0 01.161-5.5L16.693 5l-.026-.018c.403-.442 1.165-1.227 1.998-1.832a.664.664 0 01.022.017c.134-.106.271-.208.41-.308a1.94 1.94 0 00.164-.116z"
                      fill="#FF4355"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <p class="text-center">
            <span class="ft-m ft-bold">Un conseiller dédié</span><br />
            <span class="ft-s">disponible à votre demande 6J/7</span>
          </p>
        </div>
      </div>
    </div>
    <h2 class="ft-2xl ft-bold ft-bold@s text-center m-auto color-b">
      Pour votre recherche de locataires, on a tout ce qu’il vous
          faut ! Déposez votre annonce et bénéficiez d’une expérience sur-mesure
          depuis notre plateforme sécurisée.
    </h2>
    

    
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
              La plateforme   ChezVous  est-elle une agence de location immobilière
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
              Non, la plateforme <strong style="color:#36417d ;">ChezVous</strong> n’est pas une agence immobilière de
              location ou de gestion locative en ligne. C’est une plateforme de
              recherche de logements en ligne. <strong style="color:#36417d ;">ChezVous</strong> vous permet ainsi de
              trouver un locataire fiable sans passer par une agence !
              Contrairement à une agence immobilière traditionnelle (ou un
              gestionnaire immobilier en ligne), <strong style="color:#36417d ;">ChezVous</strong> ne vous remplace pas
              dans la gestion de votre bien : vous gérez vous-même votre
              location, mais pas tout seul. Afin de gérer au mieux la location
              de votre bien immobilier, nos conseillers dédiés vous épaulent
              tout le long de la location à votre demande. De la rédaction de
              l'annonce grâce à notre système, en passant par les mises en avant des qualités
              de votre bien locatif jusqu'au choix du locataire et la signature
              du bail, nous vous fournissons tous les conseils nécessaires pour
              optimiser votre expérience locative.
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
              ChezVous ?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              Notre plateforme est disponible pour les propriétaires bailleurs,
              mais pas uniquement ! La plateforme <strong style="color:#36417d ;">ChezVous</strong> est disponible pour d'autres
              types de loueurs tels que les démarcheurs, les structures, les
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
               ChezVous  ?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <strong style="color:#36417d ;">ChezVous</strong> est une plateforme de recherche disponible pour toutes personnes
              volant mettre son bien immobilier en location. Le business model pour ne
              pas dire la politique économique de <strong style="color:#36417d ;">ChezVous</strong> repose sur l'achat des packs
              annonces. Cela permet à la plateforme de financer la sécurisation, les mises
              à jour et autres permettant à ces différents utilisateurs d'être en sécurité.
                Nos services complémentaires sur-mesure et à votre demande pour faciliter 
              votre gestion locative peuvent en revanche avoir un coût pour le propriétaire.
              
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
      msg: "Déposer mon annonce",
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
  background: rgb(221, 88, 55);
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
  background: #36417d ;
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
  border: 20px solid rgb(221, 88, 55);
  position: relative;
  background: url("../assets/bussinessman1.jpg");
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
  background-color: rgb(238, 79, 39);
}

.mb-40 {
  margin-bottom: 40px;
}

.question-wrapper {
  background-color: rgba(233, 185, 173, 0.404);
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
  background-color: rgba(167, 83, 62, 0.185);  
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
