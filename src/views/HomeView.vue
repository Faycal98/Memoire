<template>
  <HomePageHeader></HomePageHeader>
  <div class="wrapper-city py-5">
    <h3 class="ft-2xl ft-bold strong-blue">
      Louez à votre convenance partout au Benin.
    </h3>

    <div class="d-flex flex-row justify-content-center">
      <div class="p-2 mb-2 img-container">
        <a href="#" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Cotonou</span>
          </h4>
        </a>
      </div>

      <div class="p-2 mb-2 img-container">
        <a href="#" class="Homepage_city calavi">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Calavi</span></h4>
        </a>
      </div>

      <div class="p-2 mb-2 img-container">
        <a href="#" class="Homepage_city porto">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Porto-Novo</span>
          </h4>
        </a>
      </div>

      <div class="p-2 mb-2 img-container">
        <a href="#" class="Homepage_city ouidah">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Ouidah</span></h4>
        </a>
      </div>

      <div class="p-2 mb-2 img-container">
        <a href="#" class="Homepage_city malanville">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Malaville</span>
          </h4>
        </a>
      </div>

      <div class="p-2 mb-2 img-container">
        <a href="#" class="Homepage_city parakou">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Parakou</span>
          </h4>
        </a>
      </div>

      <div class="p-2 mb-2 img-container">
        <a href="#" class="Homepage_city ketou">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Kétou</span></h4>
        </a>
      </div>

      <div class="p-2 mb-2 img-container">
        <a href="#" class="Homepage_city come">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Comé</span></h4>
        </a>
      </div>
    </div>
    <router-link to="/logements">
      <ButtonGreen
        class="text-center"
        :content="' Voir d\'autres villes '"
      ></ButtonGreen>
    </router-link>
  </div>
  <HomepageStep></HomepageStep>
  <div class="Homepage_ads bg-bg-light">
    <div class="Wrapper Wrapper--m pv-60 pt-60@xs pb-40@xs">
      <h2 class="max-width-s m-auto text-center">
        <b class="ft-2xl ft-bold color-ft-strong"
          >Quelques de nos meilleurs appartements et locations</b
        >
      </h2>
    </div>
  </div>

  <div class="col-8 col-12@m m-auto homepage-carrousel-container">
    <Carrousel :tabImg="carrouselTab"></Carrousel>
  </div>
  <AccordionAnnonce></AccordionAnnonce>
  <Footer></Footer>
</template>
<script>
import axios from "axios";
import ButtonGreen from "@/components/ButtonGreen.vue";
import Carrousel from "../components/Carrousel.vue";
import HomepageStep from "../components/HomepageStep.vue";
import HomePageHeader from "../components/HomePageHeader.vue";
import AccordionAnnonce from "../components/AccordionAnnonce.vue";

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
  mounted() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      axios
        .get("http://localhost:8000/api/user", {
          headers: {
            "x-access-token": userData.accessToken,
          },
        })
        .then((data) => {
          console.log(data);
          this.$store.dispatch("login", JSON.stringify(userData));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
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
          name: "Ouidah",
        },
      ],
      userInfo: null,
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

.homepage-carrousel-container {
  min-height: 370px;
}
.Homepage_city:hover::after {
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
  width: max-content;
  background: #36417d;
  padding: 8px 12px;
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
  background-color: rgb(221, 88, 55);
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
  background: url("../assets/cotonou.jpg");
}

.calavi {
  background: url("../assets/calavii.jpeg");
}

.porto {
  background: url("../assets/porto-novo.jpg");
}
.ouidah {
  background: url("../assets/ouiidah.jpg");
}
.malanville {
  background: url("../assets/malanville.webp");
}
.parakou {
  background: url("../assets/parakouu.webp");
}
.ketou {
  background: url("../assets/ketou.jpeg");
}
.come {
  background: url("../assets/comé.jpeg");
}
.ft-bold {
  font-weight: 700;
  color: #36417d;
}
.justify-content-center {
  justify-content: center !important;
  flex-wrap: wrap;
}
.wrapper-city {
  width: 70%;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
}
.header {
  background: url("../assets/homes.jpg");
  background-size: cover;
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
