<template>
    <div id="navbar">
    <nav :class="[{ onScroll: !view.topOfPage }, 'navbar navbar-expand-lg']">
      <h1 class="ms-5 header-title"><strong>B</strong>en<span id="letter"><strong>A</strong></span>part</h1>

      <div
        class="header-right justify-content-end align-items-center collapse navbar-collapse" id="navbarSupportedContent">
        <ul>
          <li class="link">Me connecter</li>
          <li class="link links">Je suis locataire</li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="rows">
    <div class="col-2">
      <h1 class="color"><strong>METTRE SON LOGEMENT EN LOCATION !</strong></h1>
    </div>

    <div class="col-2">
      <div id="left">
        <h4 class="color"><strong>Une expérience locative simple et humaine ! BenApart est une
         plateforme de réservation d'appartement, de chambre et de maison a louer en 
         ligne qui rend la location plus simple et humaine.</strong></h4>
         <a href="#" class="annonce"> Déposer mon annonce ⩗</a> 
      </div>
      <h2><strong>Louer avec <span class="sigle">BenApart</span>, c’est protéger gratuitement votre logement et vos loyers!</strong></h2>   
    </div>
 </div>
 <div class="service">
            <div class="containt">
              <h2 class="color"><strong>Profitez d’un service défiant toute concurrence</strong></h2>
               <div class="rower">
                  <div class="coll">
                     <i class="fa-solid fa-house-laptop"></i>
                     <h4><strong>1ere plateforme de location au Bénin !</strong></h4>
                  </div>
                  <div class="coll">
                    <i class="fa-solid fa-house-lock"></i>
                    <h4><strong>Des demandes qualifiées et sécurisées partout au Bénin !</strong></h4>
                  </div>
                  <div class="coll">
                    <circul ></circul>
                    <i class="fa-solid fa-map-location-dot"></i>
                    <h4><strong>Nos services sont disponibles partout au Bénin !</strong></h4>
                  </div>
               </div>
            </div>
        </div>
  <section class="wrapper" style="margin: -13px 0;">
    <div class="container">
      <h1><strong class="sigle">B</strong>en<span class="sigle"><strong>A</strong></span>part</h1>
      <h2 class="color"><strong>Comment ça marche ?</strong></h2>
      <h4 class="etapes"><strong>4 étapes et votre logement est loué !</strong></h4>
    </div>

      <section class="work" id="work">  
        <div class="work-row">
            <div class="work-column">
                <div class="work-box">
                    <div class="work-content">
                        <div class="content">
                            <div class="year"> <h3><strong>Je dépose mon annonce</strong></h3></div>
                                <p class="color"><strong>Validation et publication automatique en un clic si toutes les informations necessaires sont bien renseignées.</strong></p>
                        </div>
                    </div>
                    <div class="work-content">
                        <div class="content">
                            <div class="year"> <h3><strong>Je reçois des demandes</strong></h3></div>                      
                              <p class="color"><strong>Adaptées à vos critères : date d’entrée, accès aux dossiers des locataires en un clic.</strong></p>
                        </div>
                    </div>
                    <div class="work-content">
                        <div class="content">
                            <div class="year"> <h3><strong>Je fais visiter mon logement </strong></h3></div>                     
                            <p class="color"><strong>En physique avec le loueur apres la fixation d'un rendez-vous.</strong></p>   
                        </div>
                    </div>
                    <div class="work-content">
                        <div class="content">
                            <div class="year"> <h3><strong>Je finalise la réservation</strong>  </h3> 
                            </div>
                            <p class="color" ><strong>Le locataire réserve apres avoir éffectuer son choix sur la plateforme.</strong></p>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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

.rows{
  background-image: url(../assets/accueuil.jpg);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
    height: 100vh;
    background-position-x: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.col-2{
  flex-basis:50% ;
  min-width: 300px;
}
.col-2 h1{
  margin-bottom: 55%;
  font-size: 50px;
  line-height: 60px;
  margin-left: 3%;
}
.col-2 h4{
  margin-bottom: 5%;
}

.col-2 a{
  display: inline-block;
  text-decoration: none;
  padding: 10px 30px;
  background: rgb(221, 88, 55);
  color: #fff;
  border-radius: 30px;
  margin: 52px;
  margin-bottom: 97px;
  transition: all  0.3s ease-in-out;
}
.col-2 a:hover{
  background: rgb(196, 79, 50);
}

.wrappe-3 img{
    width: 100%;
}
.sigle{
  color: rgb(196, 79, 50);
}
.color{
  color: #36417d;
}
.etapes{
  color: rgb(196, 79, 50);
}

/*****les etapes------------- */

.work{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    padding-bottom: 1rem;
}
.work .work-row{
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
}
.work-row .work-column{
    flex: 1 1 40rem;
}
.work-column .titles{
    font-size: 2.5rem;
    margin: 0 0 1.5rem 2rem;
}
.work-column .work-box{
    border-left: .2rem solid rgb(221, 88, 55);
}
.work-box .work-content{
    position: relative;
    padding-left: 2rem;
}
.work-box .work-content::before{
    content: '';
    position: absolute;
    top: 0;
    left: -1.1rem;
    width: 2rem;
    height: 2rem;
    background: #36417d;;
    border-radius: 50%;
}
.work-content .content{
    position: relative;
    padding: 1.5rem;
    border: .2rem solid #36417d;
    border-radius: .6rem;
    margin-bottom: 2rem;
    overflow: hidden;
}
.work-content .content::before{
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
.work-content .content:hover::before{
    width: 100%;
}
.work-content .content .year{
    font-size: 1.5rem;
    color: #36417d;
    padding-bottom: .5rem;
    padding: 0;
}
.work-content .content .year i{
    padding-right: .5rem;
}
.work-content .content h3{
    font-size: 2rem;
}

.service{
    margin: 30px 0;
    background-color: rgba(247, 245, 243, 0.493);
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
}
.rower{
  display: flex;
  justify-content: center;
  margin-left: 7%;
  margin-right: 7%;
}
svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa{
  border: 18px solid rgb(221, 88, 55);
    border-radius: 62px;
    font-size: 80px;
    background-color: rgb(221, 88, 55);
    color: white;
}
.container{
  background-color: rgba(247, 245, 243, 0.493);
}
</style>