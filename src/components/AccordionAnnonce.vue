<template>
  <div class="d-flex row annonce-wrapper my-annonce my-5">
    <div class="col-4 col-12@s mb-20@s px-3">
      <div class="Accordion js-accordion Accordion--enabled@xs">
        <div class="Accordion_head js-accordion-toggle text-start">
          <div class="Accordion_title fw-bolder">
            <h2 class="ft-l">
              <b>100% des annonces sécurisées et sans faille</b>
            </h2>
          </div>
          <span
            class="Icon Accordion_toggle"
            style="--width: 20px; width: 20px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 9">
              <path
                fill-rule="evenodd"
                d="M7 9.071l1.414-1.414L14.071 2 12.657.586 7 6.243 1.343.586-.07 2 7 9.071z"
              ></path>
            </svg>
          </span>
        </div>
        <div class="Accordion_content mt-4 text-start">
          On évalue l'authenticité des annonces et des profils de nos
          utilisateurs. On encourage même nos loueurs à vous rendre heureux grâce à nos services, un profil complet et des logements de
          qualité.
        </div>
      </div>
    </div>
    <div class="col-4 col-12@s mb-20@s px-3">
      <div class="Accordion js-accordion Accordion--enabled@xs">
        <div class="Accordion_head js-accordion-toggle text-start">
          <div class="Accordion_title fw-bolder">
            <h2 class="ft-l">
              <b>Toutes vos démarches simplifiées</b>
            </h2>
          </div>
          <span
            class="Icon Accordion_toggle"
            style="--width: 20px; width: 20px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 9">
              <path
                fill-rule="evenodd"
                d="M7 9.071l1.414-1.414L14.071 2 12.657.586 7 6.243 1.343.586-.07 2 7 9.071z"
              ></path>
            </svg>
          </span>
        </div>
        <div class="Accordion_content mt-4 text-start">
          Au placard la paperasse! Les documents requis sont réduits au strict
          minimum et accessibles à tout moment. Nous vous permettons d'effectuer des recherches strictes et précises.
        </div>
      </div>
    </div>
    <div class="col-4 col-12@s mb-20@s px-3">
      <div class="Accordion js-accordion Accordion--enabled@xs">
        <div class="Accordion_head js-accordion-toggle text-start">
          <div class="Accordion_title fw-bolder">
            <h2 class="ft-l">
              <b>Accompagnés pendant tout votre processus de recherche </b>
            </h2>
          </div>
          <span
            class="Icon Accordion_toggle"
            style="--width: 20px; width: 20px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 9">
              <path
                fill-rule="evenodd"
                d="M7 9.071l1.414-1.414L14.071 2 12.657.586 7 6.243 1.343.586-.07 2 7 9.071z"
              ></path>
            </svg>
          </span>
        </div>
        <div class="Accordion_content mt-4 text-start">
          On prend en compte vos envies et vos contraintes pour vous trouver le
          logement idéal. On vous reloge en cas d’imprévus et vous propose des
          services dignes du nom. Sérénité
          garantie !
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AccordionVue",
};
</script>
<style >

.Accordion_title {
  color: #36417d;
  font-weight: 700;
}

.Accordion--enabled\@xs .Accordion_toggle {
  display: none;
}

</style>
