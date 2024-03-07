<template>
  <HomePageHeader></HomePageHeader>
  <div class="wrapper-city py-5">
    <h3 class="ft-2xl ft-bold strong-blue">
      Louez à votre convenance partout en Benin.
    </h3>
    <div class="d-flex flex-row justify-content-center">
      <div class="p-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Cotonou</span>
          </h4>
        </a>
      </div>
      <div class="p-2 img-container mb-2">
        <a href="/" class="Homepage_city calavi">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Calavi</span></h4>
        </a>
      </div>
      <div class="p-2 mb-2 img-container">
        <a href="/" class="Homepage_city porto">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Porto-Novo</span>
          </h4>
        </a>
      </div>
      <div class="p-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Ouidah</span></h4>
        </a>
      </div>
      <div class="p-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Parakou</span>
          </h4>
        </a>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <div class="px-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Cotonou</span>
          </h4>
        </a>
      </div>
      <div class="px-2 img-container mb-2">
        <a href="/" class="Homepage_city calavi">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Calavi</span></h4>
        </a>
      </div>
      <div class="px-2 mb-2 img-container">
        <a href="/" class="Homepage_city porto">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Porto</span></h4>
        </a>
      </div>
      <div class="px-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Ouidah</span></h4>
        </a>
      </div>
      <div class="px-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Parakou</span>
          </h4>
        </a>
      </div>
    </div>
    <ButtonGreen
      class="text-center"
      :content="' Voir d\'autres villes '"
      :link="'/'"
    ></ButtonGreen>
  </div>
  <HomepageStep></HomepageStep>
  <div class="Homepage_ads bg-bg-light">
    <div class="Wrapper Wrapper--m pv-60 pt-60@xs pb-40@xs">
      <h2 class="max-width-s m-auto text-center">
        <b class="ft-2xl ft-bold color-ft-strong">
          Quelques de nos meilleurs appartements et locations
        </b>
      </h2>
    </div>
  </div>

  <div class="col-8 col-12@m m-auto">
    <Carrousel :tabImg="carrouselTab"></Carrousel>
  </div>
  <AccordionAnnonce></AccordionAnnonce>
  <Footer></Footer>
</template>
<script>
import ButtonGreen from "@/components/GreenBtn.vue";
import Carrousel from "../components/Carrousel.vue";
import HomepageStep from "../components/HomepageStep.vue";
import HomePageHeader from "../components/HomePageHeader.vue";
import AccordionAnnonce from "../components/AccordionAnnonce.vue"

import Footer from "../components/Footer.vue";
export default {
  components: {
    Carrousel,
    ButtonGreen,
    HomePageHeader,
    AccordionAnnonce,
    Footer,
    HomepageStep,
  },
  data() {
    return {
      carrouselTab: [
        {
          src: "stylish.jpg",
          name: "Cotonou",
        },
        {
          src: "lille.avif",
          name: "Calavi",
        },
        {
          src: "home.avif",
          name: " Ouidah",
        },
      ],
    };
  },
  methods: {
    goToSearch() {
      this.$router.push("/logements");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");

nav {
  padding: 30px;
}
.annonce-wrapper {
  max-width: 1000px;
  margin-right: auto !important;
  margin-left: auto !important;
}
.strong-blue {
  color: #36417d;
}


.Homepage_city {
  display: block;
  position: relative;
  border-radius: 10px;
  height: 102px;
  min-width: 160px;
  overflow: hidden;
  background-size: cover !important;
}

.Step_content {
  padding-right: 20px;
}

.Step_title {
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0;
  max-width: 350px;
}

.pv-60 {
  padding-top: 60px;
  padding-bottom: 60px;
}
.light-black {
  color: #353535;
}
.Homepage_city::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  background-color: #36417d;
  transition: 250ms;
}
.boost-xl {
  font-size: 18px;
  font-weight: 700;
  color: white;
  line-height: 1;
}

.Homepage_block {
  max-width: 600px;
  position: relative;
}

.Homepage_cityTitle {
  position: absolute;
  top: 50%;
  background: #36417d;
  padding: 5px 10px;
  border-radius: 5px;
  left: 50%;
  z-index: 5;
  transform: translate3d(-50%, -50%, 0) scale(0.95);
  transition: 250ms;
}
.Homepage_steps {
  position: relative;
  overflow: hidden;
}

.Homepage_floatSteps {
  position: absolute;
  top: -120px;
  right: -10%;
  transform: translateX(100%);
}
.bg-bg-xweak {
  background-color: #f8f8ff;
}
.Homepage_city:hover .Homepage_cityTitle {
  transform: translate3d(-50%, -50%, 0) rotate(-5deg) scale(1);
}

.Homepage_city:hover .Homepage_cityTitle {
  background-color: #3c9;
}
.Homepage_cityTitle::before {
  transition: 250ms;
}
.Step_head.not-last::after {
  content: "";
  display: block;
  flex-grow: 1;
  margin: 0 20px;
  border-bottom: 2px dashed #ededff;
}

.mt-60 {
  margin-top: 60px;
}

.p-30 {
  padding: 30px;
}

.bg-bg-light {
  background-color: #fff;
}
.Homepage_stepBlock {
  border-radius: 12px;
  position: relative;
  z-index: 5;
}

.ft-2xl {
  font-size: 26px;
}
.ft-l {
  font-size: 20px;
}


a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

.img-container {
  width: 23%;
}
.ctn {
  background: url("../assets/paris.avif");
}

.calavi {
  background: url("../assets/lille.avif");
}

.porto {
  background: url("../assets/bordeaux.avif");
}
.ft-bold {
  font-weight: 700;
}
.wrapper-city {
  width: 70%;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
}
.header {
  background: url("../assets/home.avif");
  min-height: 400px;
}
.Wrapper {
  width: 80%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.HeadingSingle_title {
  font-size: 35px;
  line-height: 1.35;
  font-weight: 700;
  text-align: left;
  color: #fff;
}
.HeadingSingle_wrapper {
  position: relative;
  height: 450px;
  z-index: 1;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.HeadingSingle_container {
  max-width: 700px;
  position: relative;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
