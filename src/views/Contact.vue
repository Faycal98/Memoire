<template>
  <div class="py-5 bg-white contact">
    <h2>Contact</h2>
    <div class="container p-5">
      <div class="row mb-5">
        <div class="col-12 col-md-6">
          <p class="h4">
            Utilisez notre formulaire de contact pour toute demande
            d'information ou contactez nous directement en utilisant les
            coordonnées ci-dessous.
          </p>
          <br />
          <p class="h4">
            N'hésitez pas à nous contacter par e-mail ou par téléphone
          </p>
        </div>
        <div class="col-12 col-md-6">
          <form action="https://www.wazindo.com/contact" method="post">
            <input
              type="hidden"
              name="_token"
              value="GARN8X84Vqxi2aDsuGcGvRWViE9KXh2SkrteOGQN"
            />
            <div class="form-group">
              <label for="">Nom</label>
              <input type="text" class="form-control" name="name" required="" />
            </div>
            <div class="form-group">
              <label for="">Téléphone</label>
              <input
                type="text"
                class="form-control"
                name="phone"
                required=""
              />
            </div>
            <div class="form-group">
              <label for="">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                required=""
              />
            </div>
            <div class="form-group">
              <label for="">Message</label>
              <textarea
                class="form-control"
                name="content"
                required=""
              ></textarea>
            </div>
            <div class="text-end">
              <button class="btn btn-primary btn-sm" type="submit">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-4">
          <div class="d-flex">
            <i class="fa fa-map-marker fa-2x me-3 text-primary"></i>
            <div class="text-start">
              <h6>Emplacement de notre bureau</h6>
              <p>1212, Rue 888, Sainte Cécile, Cotonou, Bénin</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex">
            <i class="fa fa-phone fa-2x me-3 text-primary"></i>
            <div class="text-start">
              <h6>Téléphone (fixe)</h6>
              <p>+229.58835758</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex">
            <i class="fa-solid fa-envelope fa-2x me-3 text-primary"></i>
            <div class="text-start">
              <h6>Email</h6>
              <p>Chezvous229@gmail.com</p>
            </div>
          </div>
        </div>
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
    font-weight: 400;
}

.form-group {
    margin-bottom: 1rem;
    text-align: left;
}

h6 {
    font-weight: 800 !important;
}
</style>
