
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
                <p class="drop-text">Retour a l'accueuil</p>
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
                    <li class="houser">
                      <a class="dropdown-item" href="#" style=" background-color: #36417d; color:white !important;"><i class="fa-solid fa-house me-2 pt-2"></i>Je suis propriétaire</a>
                    </li>
                    <li>
                      <a class="dropdown-item text-black" href="#"><i class="fa-solid fa-arrow-right me-2 arrow"></i>Connexion</a>
                    </li>
                    <li>
                      <a class="dropdown-item last" href="#"><i class="fa-solid fa-arrow-right me-2 arrow arrow"></i>Inscription</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" style=" background-color: #36417d; color:white !important;"><i class="fa-solid fa-house me-2 pt-2"></i>Je suis démarcheur</a>
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
    <div class="containt">
        <div class="form signup">
            <h4>Inscription propriétaire</h4>
            <div class="inputBox">
                <input type="text" required="required">
                <i class="fa-solid fa-envelope" style="position: absolute ;
                                                    top: 16px;
                                                    left: 14px;
                                                    width: 21px;
                                                    padding: 2px 0;
                                                    padding-right: 5px;
                                                    color: #36417d;
                                                    border-right: 1px solid #36417d;"></i>
                <span>Adresse e-mail</span>
            </div>
            <div class="radio">
                <div class="radio-2">
                    <input  type="radio" name="m" style="margin-right: 5px;"><label><strong>Homme</strong></label>
                </div>
                <div class="radio-2">
                    <input  type="radio" name="f" style="margin-right: 5px;"><label><strong>Femme</strong></label>
                </div>
                  
            </div>
            <div class="inputBox">
                <input type="text" required="required">
                <i class="fa-solid fa-user" style="position: absolute ;
                                                    top: 16px;
                                                    left: 14px;
                                                    width: 21px;
                                                    padding: 2px 0;
                                                    padding-right: 5px;
                                                    color: #36417d;
                                                    border-right: 1px solid #36417d;"></i>
                <span>Prénom</span>
            </div>
            <div class="inputBox">
                <input type="text" required="required">
                <i class="fa-solid fa-user" style="position: absolute ;
                                                    top: 16px;
                                                    left: 14px;
                                                    width: 21px;
                                                    padding: 2px 0;
                                                    padding-right: 5px;
                                                    color: #36417d;
                                                    border-right: 1px solid #36417d;"></i>
                <span>Nom</span>
            </div>
            <div class="inputBox">
                <input type="number" required="required">
                <i class="fa-solid fa-phone" style="position: absolute ;
                                                    top: 16px;
                                                    left: 14px;
                                                    width: 21px;
                                                    padding: 2px 0;
                                                    padding-right: 5px;
                                                    color: #36417d;
                                                    border-right: 1px solid #36417d;"></i>
                <span>Numéro de téléphone</span>
            </div>
            <div class="inputBox">
                <input type="password" required="required">
                <i class="fa-solid fa-lock" style="position: absolute ;
                                                    top: 16px;
                                                    left: 14px;
                                                    width: 21px;
                                                    padding: 2px 0;
                                                    padding-right: 5px;
                                                    color: #36417d;
                                                    border-right: 1px solid #36417d;"></i>
                <span>Mot de passe</span>
            </div>
            <div class="inputBox">
                <input type="password" required="required">
                <i class="fa-solid fa-lock" style="position: absolute ;
                                                    top: 16px;
                                                    left: 14px;
                                                    width: 21px;
                                                    padding: 2px 0;
                                                    padding-right: 5px;
                                                    color: #36417d;
                                                    border-right: 1px solid #36417d;"></i>
                <span>Confirmer le mot passe</span>
            </div>
            <div class="field image">
              Veuillez ajouter votre piece
                    <input type="file">
            </div>
            <div class="check">           
                <div class="check-3">                   
                    <label style="font-size: 0.8rem; font-weight: bold; color: #36417d !important;"><input type="checkbox" style="margin-right: 5px;">
                        En m'inscrivant, j'accepte que BenApart recueille <br> et traite mes données personnelles.</label>                       
                </div>
                <div class="check-3">
                    <label style="font-size: 0.8rem; font-weight: bold; color: #36417d !important;"><input type="checkbox" style="margin-right: 5px;">
                        J’accepte sans réserve 
                        <a href="#" style="text-decoration: underline !important;" class="conditions">
                            les Conditions Générales <br> d’Utilisation</a> des services BenApart.
                    </label>
                </div>                     
            </div>
            <div class="inputBox">
                <input type="submit" value="Je m'inscris">
            </div>
            <div class="or">Ou continuer Avec</div>
            <div class="icons">
                    <a id="fab" href="#"><i id="fb" class="fa-brands fa-facebook"></i></a>
                    <a id="golg" href="#"><i id="glg" class="fa-brands fa-google"></i></a>
                    <a id="watpp" href="#"><i id="watp" class="fa-brands fa-whatsapp"></i></a>
            </div>
            <p>Vous avez déja un compte ? 
              <a href="#" class="login" style = "color: #36417d !important;">
                Je me connecte
              </a>
            </p>
        </div>
        </div>
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
    font-weight: bold;
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
        /*font-weight: 300;*/
        list-style-type: none;
        color: white;
        border-right: 1px solid #ffffff36;
      }
    }
.u-block{
    margin-left: 67%;
}
  }

/*** Form ***/

#body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f4f4f7;
}
.containt{
    padding: 70px;
    border-radius:6px ;
    border: 1px solid #c5c6c781;
    box-shadow: -5px -5px 15px #c5c6c715,
    5px 5px 15px #c5c6c781;
    margin-top:7%;
} 
.containt .form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
}

.containt.signinForm .form.signup{
    display: none;
}

.containt .form h4{
    color:#36417d;
    font-weight: bold;
    
}
.containt .form .inputBox{
    position: relative;
    width: 450px;
}
.containt .form .inputBox input{
    padding: 12px 10px 12px 48px;
    width: 100%;
    background: #eceeee;
    border: 1px solid rgba(0,0,0,0.1);
    color: #0a0202;
    font-weight: 600;
    border-radius: 6px;
    font-size: 1em;
    transition: 0.5s;
    outline: none;
}
.containt .form .inputBox span{
    position: absolute;
    left: 0;
    padding: 14px 10px 12px 48px;
    pointer-events: none;
    font-size: 0.99em;
    font-weight: bold;
    transition: 0.5s;
    letter-spacing: 0.06em;
    color: rgb(221, 88, 55);
}
.containt .form .inputBox input:valid ~ span,
.containt .form .inputBox input:focus ~ span{
    color: #fff;
    border: 1px solid #36417d;
    background: #36417d;
    transform: translateX(25px) translateY(-7px);
    font-size: 0.6em;
    padding: 0 8px;
    border-radius: 6px;
    letter-spacing: 0.1em;
}
.containt .form .inputBox input:valid,
.containt .form .inputBox input:focus{
    border: 1px solid #36417d;
}

.containt .form .inputBox input[type="submit"]{
    background: rgb(221, 88, 55);
    border: 1px solid rgb(221, 88, 55) !important;
    color: #fff;
    padding: 10px 0;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
}
.containt .form .inputBox input[type="submit"]:hover{
   /* background: #fff;*/
   /* color: #36417d;*/
    padding: 10px 0;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #36417d !important;
    transform: translateY(-1px);
    box-shadow: 0 0 10px rgb(207, 85, 54);
}
.containt .form p{
    color: rgb(221, 88, 55);
    font-size: 0.em;
    font-weight: bold;
}
.containt .form p a{
    font-weight: 500;
    color: #fff;
}
.radio{
    display: flex;
    margin-right: 39%;
    margin-bottom: -18px;
    margin-top: -18px;
}
.radio-2{
    
    margin-left: 16px;
}
#radio{
    margin-right: 5px;
}
.check{
    margin: -10px -10px 0px 0;
}
.conditions{
    transition: all .2s ease;
}
.conditions:hover{
    color: rgb(221, 88, 55) !important;
}
.login{
    transition: all .2s ease;
}
.login:hover{
    text-decoration: underline !important;
}
.form.signup .or{
    
    margin-bottom: 20px;
    position: relative;
}
.form.signup .or::after,
.form.signup .or::before{
  position: absolute;
    width: 117px;
    height: 2px;
    content: '';
    background-image: linear-gradient(to left, #444, transparent);
    top: 50%;
    left: -140px;
}
.form.signup .or::after{
  left: unset;
    right: -140px;
    background-image: linear-gradient(to right, #444, transparent);
}
.icons{
    display: flex;
}
.icons a{
    border: 1px solid #ccc;
    padding: 11px 32px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    text-decoration: none;
   transition: all .4s ease;
}
.icons a:hover{
    transform: translateY(-2px);
    box-shadow: 0 0 10px rgb(207, 85, 54);
}
.icons a i {
    width: 30px;
}
#fb{
  color: blue;
  font-size: 25px;
}
#glg{
    color: rgb(230, 23, 23);
    font-size: 25px;
}
#watp{
    color: green;  
    font-size: 25px;
}

  </style>
  