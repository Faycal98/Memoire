
<template>
    <header>
      <div id="navbar">
        <nav class="navbar navbar-expand-lg">
          <router-link to="/">
            <h1 class="ms-5 header-title">ChezVous</h1>
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
  
    <div class="vrapper">
        <section class="form login">
            <h2 class="title" style="color:#36417d;font-size: 1.5rem;"><strong>Espace démarcheur</strong></h2>
            <form action="#" method="">
                <div class="field input">
                    <input type="text" name="email" placeholder="E-mail" required>
                </div>
                <div class="field input">
                    <input type="password" id="password" name="password" placeholder="Mot de passe" required>
                    <span id="showPassword">
                      <i class="fa-solid fa-eye" style="position: absolute;
                                                      right: 15px;
                                                      color: #ccc;
                                                      top: 53%;
                                                      transform: translateY(-50%);
                                                      cursor: pointer;
                                                      "></i>
                  <i class="fa-regular fa-eye-slash" style="position: absolute;
                                                      right: 15px;
                                                      color: #ccc;
                                                      top: 53%;
                                                      transform: translateY(-50%);
                                                      cursor: pointer;
                                                      display: none;
                                                      "></i>
                    </span>
                    
                </div>
                    <a href="#" class="oublier" style="margin-left: 57%;
                                                      color: #36417d !important;">
                                                      <strong>Mot de passe oublié ?</strong></a>
              
                <div class="field button">
                    <input type="submit" value="Me connecter" style="font-weight: bold;"> 
                </div>   
                <div class="btn-google">
                  <div class="icon">
                    <i class="fa-brands fa-google"></i> 
                  </div>
                    <a href="#"><strong>Me connecter avec Google</strong> </a> 
                </div> 
                <div class="verify">
                  <p><strong>Vous n'avez pas encore de compte ?</strong></p>
                <p class="inscris" style="color: #36417d !important; font-weight:700;
                    margin-left: 5px;"><a href="/connects">Inscrivez-vous</a></p>
                </div> 
                
            </form>
        </section>
        
    </div>
   
            </div>

  </template>
  
  <script>

  //form script
/*
  let showPassword = document.getElementById('showPassword');
  let inputPassword = document.getElementById('password');
  showPassword.onclick = function(){
    if(inputPassword.type == 'password'){
        inputPassword.type = 'text';
       showPassword.classList.add('show');
    }else{
        inputPassword.type = 'password';
        showPassword.classList.remove('show');
    }
}
  */
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

/*** Form ***/

#body{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f7f7f7;
}
.vrapper{
    
    width: 450px;
    
}
/*Sing Up*/

.form{
    padding: 45px 0px;
}
.form header{
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px solid #e6e6e6;
} 
.form form{
    margin: 20px 0;
}

.form form .name-details{
    display: flex;
}
form .name-details .field:first-child{
    margin-right: 10px;
}
form .name-details .field:last-child{
    margin-left: 10px;
}
.form form .field{
    display: flex;
    position: relative;
    flex-direction: column;
    margin-bottom: 10px;
}
.form form .field label{
    margin-bottom: 2px;
}
.form form .field input{
    outline: none;
}
.form form .input input{
    height: 40px;
    width: 100%;
    font-size: 16px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color:#f7f7f7;
}
.form form .input input:hover{
  border: 1px solid  #36417d;
}
.form form .image input{
    font-size: 17px;
}
.form form .button input{
    margin-top: 13px;
    height: 45px;
    border: none;
    font-size: 18px;
    font-weight: 400;
    background: #36417d;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
.form form .button input:hover{
  background: #fff;
    color: #36417d;
    border:1px solid #36417d; ;
}

.form form .field i.active::before{
    color: #333;
    content: "\f070";
}
.btn-google{
  display: flex;
  margin-top: 15px;
    height: 45px;
    border: 1px solid #36417d;;
    font-size: 18px;
    font-weight: 400;
    background: #fff;
    color: #36417d;
    border-radius: 5px;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 15px;
    cursor: pointer;
}
.btn-google:hover{
    transform: translateY(-1px);
    box-shadow: 0 0 10px rgb(207, 85, 54);
}
.verify{
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inscris:hover{
  text-decoration: underline;
}
span i:nth-child(2){
    display: none;
}
span.show i:nth-child(2){
    display: block;
}
span.show i:nth-child(1){
    display: none;
}
  </style>
  