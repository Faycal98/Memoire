<template>
    <div id="navbar">
    <nav :class="[{ onScroll: !view.topOfPage }, 'navbar navbar-expand-lg']">
      <a data-v-9c6758da href="/">
      <h1 class="ms-5 header-title"><img src="../assets/log01.png" alt="" style="height: 8vh; margin-bottom: -2px; background-color: white; border-radius: 4px;" ></h1>
    </a>
      <div
        class="header-right justify-content-end align-items-center collapse navbar-collapse" id="navbarSupportedContent">
        <ul>
          <router-link to="#">
            <li class="link">Nous contacter</li>
          </router-link>
          <router-link to="#">
            <a data-v-9c6758da href="">
          <li class="link links">Nos astuces</li>
        </a>
          </router-link>
          
        </ul>
      </div>
    </nav>
  </div>
  <div class="head">
    <div class="head-child">
      <div class="head-child1">
        <h1 class="color">METTRE SON LOGEMENT EN LOCATION !</h1>
      </div>
      <div class="head-child2">
        <h3 class="color">Une expérience locative simple et humaine ! <br>ChezVous est une
         plateforme de recherche d'appartementd, de chambres à louer et de maisons en 
         ligne qui rend la location plus simple et humaine.</h3>
      </div>
      <div class="head-child3">
        <router-link
            :to="{ name: 'annonce', params: { id: parseInt(userId) } }"
            style="color: #fff !important;"
          >
         Déposer une annonce 
      </router-link>
      </div>
      <div class="head-child4">
        <h2 style="color: #fff;">Louer avec <router-link to="/"><span class="sigle">ChezVous</span></router-link>, c’est protéger gratuitement votre logement et vos loyers!</h2>
      </div>
       
    </div>
 </div>
 <div class="service">
            <div class="containt" style="padding: 1px;">
              <h2 class="color">Profitez d’un service défiant toutes concurrences !</h2>
               <div class="rower">
                  <div class="coll">
                     <i class="fa-solid fa-house-laptop"></i>
                     <h4>1ère plateforme de location vous permettant d'être chez vous !</h4>
                  </div>
                  <div class="coll">
                    <i class="fa-solid fa-house-lock"></i>
                    <h4>Des demandes qualifiées et sécurisées partout au Bénin !</h4>
                  </div>
                  <div class="coll">
                    <circul ></circul>
                    <i class="fa-solid fa-map-location-dot"></i>
                    <h4>Nos services sont disponibles dans toutes les localités du territoire !</h4>
                  </div>
               </div>
            </div>
        </div>
    <section class="wrapper" style="margin: -13px 0;">
      <div class="contai">
        
        <h1 class="color">Chez ChezVous, comment ça marche ?</h1>
        <h3 class="etapes">4 étapes et votre logement est loué !</h3>
      </div>

      <div class="etape" id="etape">  
        <div class="etape-row">
            <div class="etape-column">
                <div class="etape-box">
                    <div class="etape-content">
                        <div class="content">
                            <div class="year"> <h3>Je dépose mon annonce</h3></div>
                                <h4 class="color">Validation et publication automatique en un clic si toutes les informations necessaires sont bien renseignées.</h4>
                        </div>
                    </div>
                    <div class="etape-content">
                        <div class="content">
                            <div class="year"> <h3>Je reçois des demandes</h3></div>                      
                              <h4 class="color">Adaptées à vos critères : vous pouvez communiquer avce vos directement sur la plateforme.</h4>
                        </div>
                    </div>
                    <div class="etape-content">
                        <div class="content">
                            <div class="year"> <h3>Je fais visiter mon logement </h3></div>                     
                            <h4 class="color">En physique avec le locataire apres la fixation d'un rendez-vous via la communication par messagerie.</h4>   
                        </div>
                    </div>
                    <div class="etape-content">
                        <div class="content">
                            <div class="year"> <h3>Je finalise la location ou le vente</h3> 
                            </div>
                            <h4 class="color" >Le locataire est mis ne contact avec le propriétaire ou le démarcheur après avoir éffectuer son choix  sur la plateforme.</h4>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
    name:"howitWork",
    components:{
        Footer },
    data() {
    return {
      view: {
        topOfPage: true,
      },
      red: "red",
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },

};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");

* {
  padding: 0;
  margin: 0;
}
#letter{
  color: rgb(221, 88, 55);
}
h1 .ms-5.header-title{
  color:#36417d;
}
.link {
  display: flex;
  align-items: center;
  padding: 1px;
  position: relative;
  right: 250px;
}
.links{
  right: 120px;
}
.header-title {
  color: white;
  font-size: 35px;
}
.dropdown-item {
  color: #36417d;
  font-weight: 400;
  border-bottom: 1px solid #f3f3ff;
  transition: background-color 5ms;
  text-align: left;
  padding: 15px 20px;

  cursor: pointer;
}

nav {
  font-family: "Metrophobic", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin-right: auto;
  justify-content: space-between;
  margin-left: auto;
  z-index: 10;
  width: 100%;
  padding: 0 40px;
  height: 60px;
  color: black;
  background-color: #36417d;
  display: flex;
  align-items: center;

  &.onScroll {
    background-color:  #36417d;
    ul li {
      color: white;
    }

    .header-title {
      color: white
    }
    
  }

  ul {
    margin-left: 3em;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1px;
    li {
      cursor: pointer;
      font-weight: 300;
      color: red;
      list-style-type: none;
      color: white;
    }
  }
  ul li:hover{
    color: rgb(221, 88, 55);
    border-bottom: 2px solid #fff;
  }
}

.head{
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5) 35%,
   rgba(0, 0, 0, 0.5) 35%),url(../assets/float-1.avif);
    width: 100%;
    height: 88vh;
    padding: 95px;
    background-position-x: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.head-child{
  margin: 0px;
  margin-bottom: 97px;
}
.head-child1{
  margin-top: 30px;
}
.head-child2{
  margin-top: 30px;
}
.head-child3{
  margin-top: 30px;
}

.head-child3 a{
  font-size: 17px;
  display: inline-block;
  text-decoration: none;
  padding: 10px 30px;
  background: rgb(221, 88, 55);
  color: #fff;
  border-radius: 30px;
  margin: 52px;
  border: 10px solid rgb(221, 88, 55);
 /* margin-bottom: 97px;*/
  transition: all  0.3s ease-in-out;
}
.head-child3 a:hover{
  background: rgb(109, 39, 21);
}

.wrappe-3 img{
    width: 100%;
}
.sigle{
  color: rgb(196, 79, 50);
}
.color{
  color: #fff;
  
}
.etapes{
  color: rgb(168, 52, 23);
}



/*****les etapes------------- */
section{
  background-image: linear-gradient(200deg,rgba(219, 90, 58, 0.336),
  rgba(230, 73, 34, 0.767),
                    #7141e249,
                    #26358b59
                    );
                    padding: 10px;
}
.etape{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    padding-bottom: 1rem;
   /* background-color: red;*/
}
.etape .etape-row{
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
}
.etape-row .etape-column{
    flex: 1 1 40rem;
}
.etape-column .titles{
    font-size: 2.5rem;
    margin: 0 0 1.5rem 2rem;
}
.etape-column .etape-box{
    border-left: .2rem solid rgb(221, 88, 55);
}
.etape-box .etape-content{
    position: relative;
    padding-left: 2rem;
}
.etape-box .etape-content::before{
    content: '';
    position: absolute;
    top: 0;
    left: -1.1rem;
    width: 2rem;
    height: 2rem;
    background: #36417d;;
    border-radius: 50%;
}
.etape-content .content{
    position: relative;
    padding: 1.5rem;
    border: .2rem solid #36417d;
    border-radius: .6rem;
    margin-bottom: 2rem;
    overflow: hidden;
}
.etape-content .content::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgb(212, 124, 102);
    z-index: -1;
    transition: all 0.6s ease;
}
.etape-content .content:hover::before{
    width: 100%;
}
.etape-content .content .year{
    font-size: 1.5rem;
    color: #36417d;
    padding-bottom: .5rem;
    padding: 0;
}
.etape-content .content .year i{
    padding-right: .5rem;
}
.etape-content .content h3{
    font-size: 2rem;
}

.service{
  margin: 0px 0px 13px;
  background-image: linear-gradient(200deg,rgba(219, 91, 58, 0.767),
                    #7141e28f,
                    #36417d86,
                    rgba(230, 73, 34, 0.767));
}

.coll{
    flex-basis: 30px;
    min-width: 285px;
}
.coll i fa-solid{
    width: 100%;
    size: 30px;
    font-size: 20px;
}
.containt h2{
    text-align: center;
    font-size:2.2rem ;
    margin: 50px 0;
    margin-top: 20px;
}
.rower{
  display: flex;
  justify-content: center; 
  margin-left: 7%;
  margin-right: 7%;
  margin-top: -40px;
}
h4{
  margin-top: 12px;
}
svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa{
  border: 18px solid rgb(221, 88, 55);
    border-radius: 62px;
    font-size: 80px;
    background-color: rgb(221, 88, 55);
    color: white;
}/*
.container{
  background-color: rgba(247, 245, 243, 0.493);
}*/
</style>