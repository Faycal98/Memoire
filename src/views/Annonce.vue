
<template>
    <header>
      <div id="navbar">
        <nav class="navbar navbar-expand-lg">
          <router-link to="/">
            <h1 class="ms-5 header-title">BenApart</h1>
          </router-link>
          <div class="header-right justify-content-between align-items-center collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="u-block">
              <li class="link d-block">
                <p class="drop-text"></p>
              </li> 
            </ul>
            <div class="Header_buttons ms-3 position relative">
              <button
                type="button"
                @click="warnClicked"
                class="btn btn-outline-light account-btn p-2"
              >
                Menu
                <i class="fa-solid fa-bars"></i>
              </button>
              <Transition>
                <div v-if="disabled" class="sub-menu position-absolute">
                  <ul class="sub-list d-block">
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="fa-solid fa-house me-2 pt-2"></i>Je suis démarcheur</a>
                    </li>
                    <li>
                      <a class="dropdown-item text-black" href="#"><i class="fa-solid fa-arrow-right me-2 arrow"></i>Connexion</a>
                    </li>
                    <li>
                      <a class="dropdown-item last" href="#"><i class="fa-solid fa-arrow-right me-2 arrow arrow"></i>Inscription</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"><i class="fa-regular fa-circle-question me-2"></i>Aide</a>
                    </li>
                    <li>
                      <a class="dropdown-item last" href="#"><i class="fa-solid fa-arrow-right me-2 arrow"></i>Nous contacter</a>
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="spacer"></div>
    
  <div id="body">
    <h1 style="
                      margin: 0px 0px 5px;
                      text-align: center;
                      font-size: 2.em;
                      color: #36417d;"> 
                      Faite votre annonce en toute sécurité avec BenApart !
    </h1>
    
    <section id="annonce">
        <form action="" method="">
            <div class="left-right">
                <div class="left">
                    <label>Type de logement </label>
                    <select name="" id="type_logement" required="require">
                      <option>Appartement</option>
                      <option>Chambre</option>
                      <option>Maison</option>
                    </select>

                    <label>Nombre de piece </label>
                    <input type="number" name="nb_piece"  min="1" max="10" placeholder="ex:nombre de chambres">

                    <label>Type de location </label>
                    <select name="type_location" id="" >
                      <option>Vide</option>
                      <option>Meublée</option>
                    </select>

                    <label>Ville </label>
                    <select name="" id="" >
                      <option>Cotonou</option>
                      <option>Abomey-Calavi</option>
                      <option>Porto-novo</option>
                      <option>Malanville</option>
                      <option>Ouidah</option>
                      <option>Lokossa</option>
                      <option>Kétou</option>
                    </select>

                    <label>Quartier </label>
                    <select name="" id="" >
                      <optgroup label="Cotonou">
                    <option>Quartier</option>
                    <option>Quartier</option>   
                      </optgroup>
                      <optgroup label="Abomey-Calavi">
                          <option>Quartier</option>
                          <option>Quartier</option>
                          <option>Quartier</option>
                      </optgroup>
                      <optgroup label="Porto-novo">
                          <option>Quartier</option>
                          <option>Quartier</option>
                          <option>Quartier</option>
                      </optgroup>
                      <optgroup label="Malanville">
                          <option>Quartier</option>
                          <option>Quartier</option>
                          <option>Quartier</option>
                      </optgroup>
                      <optgroup label="Ouidah">
                          <option>Quartier</option>
                          <option>Quartier</option>
                          <option>Quartier</option>
                      </optgroup>
                    </select>

                    <label>Prix </label>
                    <input type="number" name=""  min="4000" max="20000000" placeholder="ex:5000">

                    

                    <label>Information supplémentaire</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Vous pouvez ajouter des informations, trois lignes au maximum..."></textarea>
                </div>
                <div class="right">

                  <label>Status </label>
                    <select name="" id="" >
                      <option>Disponible immediatement</option>
                      <option>Disponible sur réservation</option>
                    </select>

                    <label>Durée de paiement </label>
                    <select name="" id="" >
                      <option>Par mois</option>
                      <option>Par jour</option>
                    </select>

                    <label>Proposé par </label>
                    <select name="" id="" >
                      <option>Propriétaire</option>
                      <option>Démarcheur</option>
                      <option>Agence Immobilière</option>
                    </select>


                    <label>Pris en charge par </label>
                    <select name="" id="" >
                      <option>Propriétaire</option>
                      <option>Agence Immobilière</option>
                    </select>

                    

                    

                    <label>Image 1 </label>
                    <input type="file"  style="width: 300px;
                                      padding: -2px 1px;
                                       
                                      margin-left: 150px;
                                      background-color: rgb(221, 88, 55);                                     
                                      color: #fff;
                                      cursor: pointer;

                   ">
                   <label>Image 2</label>
                    <input type="file"  style="width: 300px;
                                      padding: -2px 1px;
                                       
                                      margin-left: 150px;
                                      background-color: rgb(221, 88, 55);                                     
                                      color: #fff;
                                      cursor: pointer;

                   ">
                   <label>Image 3</label>
                    <input type="file"  style="width: 300px;
                                      padding: -2px 1px;
                                      
                                      margin-left: 150px;
                                      background-color: rgb(221, 88, 55);                                     
                                      color: #fff;
                                      cursor: pointer;

                   ">
                   <label>Vidéo</label>
                    <input type="file"  style="width: 300px;
                                      padding: -2px 1px;
                                       
                                      margin-left: 150px;
                                      background-color: rgb(221, 88, 55);                                     
                                      color: #fff;
                                      cursor: pointer;
                   "> 
                </div>
            </div>
            <input id="button" type="submit" value="Valider" style="width: fit-content;
                                                        padding: 8px 40px;
                                                        background-color: rgb(221, 88, 55);
                                                        border: 1px solid rgb(221, 88, 55);
                                                        color: #fff;
                                                        cursor: pointer;
                                                        transition: 0.5s;

            ">
            
        </form>
    </section>

  </div>     

</template>
  

<script>
  
  export default {
    name: "HouseNavBar",
    data() {
      return {
        view: {
          topOfPage: true,
        },
        disabled: false,
        isOpen: false,
      };
    },
    components: {
    
    },
    beforeMount() {
      window.addEventListener("scroll", this.handleScroll);
    },
  
    methods: {
      warnClicked() {
        this.disabled = !this.disabled;
      },
    },
  };

  /******Form */


  </script>
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");
  
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
header {
    position: relative;
    z-index: 500;
  }
  
.close-btn {
    right: 2%;
    font-size: 20px;
    color: #36417d;
    z-index: 6000;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .navbar {
    position: fixed;
    border-bottom: 0.5px solid hsla(0, 0%, 100%, 0.3);
   
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  
  
  .sub-menu .arrow {
    opacity: 0;
    transition: ease-in-out 0.1s;
  }
  
  .sub-menu li:hover .arrow {
    opacity: 1;
  }
  .navbar {
    background-color: #36417d;
  }
  
  .sub-list {
    margin-left: 0 !important;
  }
  
  
  .sub-menu {
    overflow: hidden;
    z-index: 56;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    right: 4%;
  }
  
  .sub-menu::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
  
  .link {
    display: flex;
    align-items: center;
    padding: 15px;
    position: relative;
  }
  .list {
    position: absolute;
    display: block;
    color: red;
    transition: ease-in-out 1s;
    background: white;
    margin-top: 10px;
  }
  
  .list,
  .list li {
    display: none;
  }
  .header-title {
    color: white;
    font-size: 35px;
  }
  
  
  .dropdown-item {
    color: #36417d !important;
    font-weight: 400;
    transition: background-color 5ms;
    text-align: left;
    padding: 18px 25px;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #6a73ad;
    text-decoration: none;
  
    color: white !important;
  }
  
  .Header_navList {
    position: absolute;
  
    padding: 0;
    right: 0;
    min-width: 280px;
    pointer-events: none;
    transform: translateY(-20px);
    opacity: 0;
    transition: 250ms;
  }
  .drop-text{
    color: #fff;
    font-size: 15px;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 6px 18px;
    transition: 0.5s;
    font-weight: bold;
  }
  .drop-text:hover{
    background-color: #fff;
    color:#36417d;;
    font-weight: bold; 
}
  
  .link .list ul {
    display: block;
    margin-left: 0px;

  }
  
  nav {
    font-family: "Metrophobic", sans-serif;
    font-weight: 600;
    font-style: normal;
    position: fixed;
    margin-right: auto;
    justify-content: space-between;
    margin-left: auto;
    z-index: 10;
    width: 100%;
    padding: 0 40px;
    height: 60px;
    color: black;
    background-color: transparent;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &.onScroll {
      box-shadow: 0 0 10px #aaa;
      background-color: #fff;
      ul li {
        color: #36417d;
      }
  
      .header-title {
        color: #36417d;
      }
      .account-btn {
        background-color: #3c9;
      }
      .account-btn:hover {
        color: white;
      }
    }
  
    ul {
      margin-left: 3em;
      display: flex;
      justify-content: space-between;
      li {
        cursor: pointer;
        font-weight: 300;
        list-style-type: none;
        color: white;
        border-right: 1px solid #ffffff36;
      }
    }
.u-block{
    margin-left: 67%;
}
  }
.spacer{
    padding: 40px;
    background-color: #f8f7f4;;
}

/*** Form ***/
::-webkit-scrollbar{
    width: 8px;
}
::-webkit-scrollbar-thumb{
    background-color: #ccc;
}
#body{
   /* font-family: 'Tw Cen MT', sans-serif;*/
    background-color: #f8f7f4;
    height: 150vh;
}
section{
    margin-top: 50px;
}
#annonce{
    padding: 0 10%;
    margin-bottom: 50px;
}
#annonce form {
   /* background-color: #ccc;*/
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.left-right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-top: -250px;
}
.left-right .left, .left-right .right{
    display: flex;
    flex-direction: column;
    width: 49%;
   
}
.left-right .left{
  margin-top: 185px;
}
.left-right .right{
  margin-top: 224px;
}
#annonce form label{
    color: #36417d;
    font-size: 20px;
    padding: 10px 0;
    font-weight: 600;
}
#annonce form input{
    padding: 11px;
    outline: 0;
    border: 2px solid rgba(0, 0, 0, 0.1);
}
input:not([ type='checkbox' ], [type='radio']), select{
  border: 2px solid rgba(0, 0, 0, 0.1);
   /* outline: none;
    font-size: 16px;
  /*  height: auto;
    width: 50%;*/
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.1);
}
textarea{
    height: 125px;
    resize: none;
    outline: 0;
    width: 100%;
    padding: 10px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
    
}
#annonce form input:focus , textarea:focus , select:focus{
    border: 2px solid rgb(221, 88, 55);
}


#annonce #button:hover{
    letter-spacing: 1px;
}

  </style>
  