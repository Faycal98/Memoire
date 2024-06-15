<template>
  <div class="py-5 bg-white contact">
    <div class="logo" style="margin-left: -77%;
    margin-top: -32px;">
      <router-link to="/">
               <h1 class="ms-5 header-title">
             <img
              src="../assets/log01.jpg"
              alt=""
              style="height: 9vh; margin-bottom: -2px"
              /></h1
              ></router-link>
    </div>
    <h3 style=" color: #36417d;"><router-link to="/" style=" color: rgb(221, 88, 55)!important">Accueil ></router-link> Contact</h3>
    
    <div class="container p-5" style="display: flex;">
      <div class="row mb-5" style="margin-left: -73px;
    margin-right: -543px;">
        <div class="col-12 col-md-6">
          <p class="h4" style=" color: #36417d; ">
            Utilisez notre formulaire de contact pour toute demande
            d'information ou contactez nous directement en utilisant les
            coordonnées ci-dessous.
          </p>
          <br />
          <p class="h4" style=" color: #36417d; ">
            N'hésitez pas à nous contacter par e-mail ou par whatsapp.
          </p>
          <p class="h4" style=" color: #36417d; ">Merci pour votre fidélité !</p>
          <div class="contact" style="display: flex;
    flex-direction: row;
    justify-content: space-around; margin-top: 45px;">
              <div class="d-flex">
                <i class="fa fa-phone fa-2x me-3 " style="color:#36417d ;"></i>
                <div class="text-start">
                 <h6 style="color:#36417d ;">Téléphone </h6>
                 <p>+229.58835758</p>
               </div>
             </div>
          
            <div class="d-flex">
              <i class="fa-solid fa-envelope fa-2x me-3 " style="color:#36417d ;"></i>
              <div class="text-start">
                <h6 style="color:#36417d ;">Email</h6>
                <p>chezvous229@gmail.com</p>
              </div>
            </div>
          </div>    
       </div>
       <p class="h4" style=" color: rgb(221, 88, 55);margin-top: 80px;
    margin-left: 75px; "><strong>ChezVous</strong>, votre référence <i>!</i></p>
      </div>
      
        <div class="col-12 col-md-6">
          <form action="#" method="post">
            <input
              type="hidden"
              name="_token"
              value="GARN8X84Vqxi2aDsuGcGvRWViE9KXh2SkrteOGQN"
            />
            <div class="form-group">
              <label for="" style=" color: #36417d; font-weight: bold;">Nom</label>
              <input type="text" class="form-control" name="name" placeholder="Nom"required="" />
            </div>
            <div class="form-group">
              <label for="" style=" color: #36417d; font-weight: bold;">Téléphone</label>
              <input
                type="text"
                class="form-control"
                name="phone"
                placeholder="Numéro de telephone"
                required=""
              />
            </div>
            <div class="form-group">
              <label for="" style=" color: #36417d; font-weight: bold;">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="e-mail"
                required=""
              />
            </div>
            <div class="form-group">
              <label for="" style=" color: #36417d; font-weight: bold;">Message</label>
              <textarea
                class="form-control"
                name="content"
                placeholder="Votre message..."
                required=""
              ></textarea>
            </div>
            
            <div class="text-end">
              <button  type="submit" style="background-color:  rgb(221, 88, 55);
                                            color: #fff;
                                            border: 10px solid  rgb(221, 88, 55);
                                            border-radius: 6px;
                                            width: 165px;
                                             height: 55px;
                                            " >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-4">
          
        </div>
        
      </div>

    </div>
  
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.contact {
  font-family: "Barlow", Helvetica, Arial, sans-serif;
}

.h4{
    font-weight: 600;
}

.form-group  {
    margin-bottom: 1rem;
    text-align: left;
}

h6 {
    font-weight: 800 !important;
}


</style>
