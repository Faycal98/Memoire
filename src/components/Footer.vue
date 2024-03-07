<template>
  <footer class="Footer">
    <div class="Wrapper">
      <div class="Footer_container d-flex flex-wrap">
        <div class="Footer_column col-3 col-6@s col-12@xs">
          <h4 class="Footer_title">BenApart</h4>
          <span class="Icon mb-20" style="--width: 180px; width: 180px"> </span>
          <ul>
            <li class="Footer_item">
              <a class="Footer_link" href="https://studapart.com/fr/proprietaire">
                Espace propriétaire
              </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="/">
                Espace professionnel de l'immobilier
              </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="/"> Le mieux loger </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="/"> Comment ça marche ? </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="#"> Nos astuces </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="#">
                Connexion
              </a>
            </li>
            <li class="Footer_item">
              <span id="language-switch-container">
                <link
                  rel="stylesheet"
                  media="all"
                  href="#"
                />
              </span>
            </li>
          </ul>
        </div>
        <div class="Footer_column col-3 col-6@s col-12@xs">
          <h5 class="Footer_title">Nos partenaires</h5>
          <ul>
            
            
            <li class="Footer_item">
              <div
                class="Footer_link"
                data-link="aHR0cHM6Ly93d3cuYWxsaWFuei5mci9xdWktZXN0LWFsbGlhbnovcGFydGVuYWlyZXMvc3R1ZGFwYXJ0Lmh0bWw="
              >
                Allianz - L’Assurance Habitation et la Garantie Studapart
              </div>
            </li>
            
            <li class="Footer_item">
              <a class="Footer_link" href="#">
                Mentions légales
              </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="#"> Aide </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="#">Gérer les cookies
              </a>
            </li>
          </ul>
        </div>
        <div class="Footer_column col-3 col-6@s col-12@xs">
          <h5 class="Footer_title">Trouver un logement</h5>
          <ul>
            <li class="Footer_item">
              <a class="Footer_link" href="#">
                Logement dans les environs de Cotonou
              </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="#">
                Logement dans les environs de Calavi
              </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="#">
                Logement dans les environs de Parakou
              </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link"
                href="#">Logement dans les environs de Ouidah
              </a>
            </li>
          </ul>
        </div>
        <div class="Footer_column col-3 col-6@s col-12@xs Footer_column--highlight">
          <h5 class="Footer_title">Rejoignez-nous <i>!</i></h5>

          <ul>
            <li class="Footer_item">
              <a class="Footer_link" href="#">
                L'équipe
              </a>
            </li>
            <li class="Footer_item">
              <a class="Footer_link" href="/fr/inside-the-culture">
                Inside the culture
              </a>
            </li>
            <li class="Footer_item">
              <div class="Footer_link" data-link="aHR0cHM6Ly93d3cud2VsY29tZXRvdGhlanVuZ2xlLmNvbS9mci9jb21wYW5pZXMvc3R1ZGFwYXJ0">
                Nous rejoindre
              </div>
            </li>
            <li class="Footer_item">
              <div class="Footer_link" data-link="bWFpbHRvOmNvbnRhY3RAc3R1ZGFwYXJ0LmNvbQ==">
                Nous contacter
              </div>
            </li>
          </ul>
          <div class="SocialShare mt-40 SocialShare--light">
            <a class="SocialShare_link" href="#" target="_blank">
              <span class="Icon Icon--height SocialShare_item" style="--height: 20px; height: 20px"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.Footer {
  overflow: hidden;
  color: #fff;
  background-color: #36417d;
}
.Footer_column {
  padding: 60px 34px;
  text-align: left;
}

.Footer_link {
  display: block;
  padding: 5px 0;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}
.Footer_link:hover {
  text-decoration: underline;
}



.Footer ul{
    text-align: left;
    padding: 0;
}

.Footer_title {
    font-size: 20px;
    font-weight: 700;
    margin: 10px 5 35px;
}

.Footer_item {
  list-style-type: none;
}
</style>
<script>
export default {
    name: "FooterVue"
};
</script>
