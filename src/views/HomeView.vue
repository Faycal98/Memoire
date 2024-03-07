<template>
  <div class="wrapper-city py-5">
    <h3 class="ft-2xl ft-bold strong-blue">
      Louez à votre convenance partout en Benin.
    </h3>
    <div class="d-flex flex-row justify-content-center">
      <div class="p-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Cotonou</span>
          </h4>
        </a>
      </div>
      <div class="p-2 img-container mb-2">
        <a href="/" class="Homepage_city calavi">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Calavi</span></h4>
        </a>
      </div>
      <div class="p-2 mb-2 img-container">
        <a href="/" class="Homepage_city porto">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Porto-Novo</span>
          </h4>
        </a>
      </div>
      <div class="p-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Ouidah</span></h4>
        </a>
      </div>
      <div class="p-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Parakou</span>
          </h4>
        </a>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <div class="px-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Cotonou</span>
          </h4>
        </a>
      </div>
      <div class="px-2 img-container mb-2">
        <a href="/" class="Homepage_city calavi">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Calavi</span></h4>
        </a>
      </div>
      <div class="px-2 mb-2 img-container">
        <a href="/" class="Homepage_city porto">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Porto</span></h4>
        </a>
      </div>
      <div class="px-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl"><span>Ouidah</span></h4>
        </a>
      </div>
      <div class="px-2 mb-2 img-container">
        <a href="/" class="Homepage_city ctn">
          <h4 class="Homepage_cityTitle boost boost-xl">
            <span>Parakou</span>
          </h4>
        </a>
      </div>
    </div>
    <ButtonGreen
      class="text-center"
      :content="' Voir d\'autres villes '"
      :link="'/'"
    ></ButtonGreen>
  </div>
  <div class="Homepage_steps bg-bg-xweak pv-60">
    <div class="Wrapper">
      <div class="Homepage_block">
        <h2 class="ft-2xl ft-bold strong-blue text-start">
          Une expérience de location plus efficace et sereine.
        </h2>
        <p class="mt-4 text-start light-black">
          De 1 à 24 mois, réservez votre logement auprès de loueurs de confiance
          et bénéficiez d’un accompagnement personnalisé.
        </p>
        <ButtonGreen
          :content="'Je commence les recherches'"
          :link="'/'"
        ></ButtonGreen>
        <div class="Homepage_floatSteps">
          <img
            loading="lazy"
            src="../assets/float-1.avif"
            width="700"
            height="700"
          />
        </div>
      </div>
      <div class="Homepage_stepBlock bg-bg-light p-30 mt-60 p-20@xs">
        <div class="d-flex flex-row">
          <div class="Step">
            <div class="Step_head not-last d-flex align-items-center">
              <span class="Icon" style="--width: 28px; width: 28px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 31 38"
                >
                  <defs><path id="a" d="M0 .095h30.213v37.282H0z"></path></defs>
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(0 .528)">
                      <mask id="b" fill="#fff">
                        <use xlink:href="#a"></use>
                      </mask>
                      <path
                        d="M4.053 3.21a.95.95 0 00-.938.937v29.178c0 .508.43.937.938.937H26.16a.95.95 0 00.939-.937V4.147a.95.95 0 00-.939-.937H4.053zM26.16 37.377H4.053A4.057 4.057 0 010 33.325V4.147A4.057 4.057 0 014.053.095H26.16a4.057 4.057 0 014.053 4.052v29.178a4.057 4.057 0 01-4.053 4.052z"
                        fill="#343F7F"
                        mask="url(#b)"
                      ></path>
                    </g>
                    <path
                      fill="#FF4355"
                      d="M11.4 8.569l-1.246-1.246-1.869 1.869-.623-.623-1.246 1.246.623.622 1.246 1.246 1.246-1.246z"
                    ></path>
                    <path
                      fill="#50528E"
                      d="M17.86 8.842h-4.082v1.762h10.206V8.842zm0 6.853h-4.082v1.762h10.206v-1.762zm0 6.852h-4.082v1.762h10.206v-1.762zm0 6.853h-4.082v1.761h10.206V29.4z"
                    ></path>
                    <path
                      fill="#FF4355"
                      d="M11.4 15.421l-1.246-1.246-1.869 1.869-.623-.623-1.246 1.246.623.623 1.246 1.246 1.246-1.246zm0 6.853l-1.246-1.246-1.869 1.868-.623-.622-1.246 1.245.623.623 1.246 1.246 1.246-1.246zm0 6.852l-1.246-1.246-1.869 1.869-.623-.623-1.246 1.246.623.623 1.246 1.246 1.246-1.246z"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            <div class="Step_content">
              <p class="Step_title strong-blue text-start">
                1. Détaillez vos conditions
              </p>
              <p class="text-start">
                Détaillez vos critères de location, on sélectionne des offres
                faites pour vous. Ici, c’est du sur-mesure.
              </p>
            </div>
          </div>
          <div class="Step">
            <div class="Step_head not-last d-flex align-items-center">
              <span class="Icon" style="--width: 32px; width: 32px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M19.353 30.376v-1.414a1.353 1.353 0 10-2.706 0v1.414c-5.786-.629-10.394-5.237-11.023-11.023h1.414a1.353 1.353 0 100-2.706H5.624c.629-5.787 5.237-10.395 11.023-11.023v1.414a1.353 1.353 0 102.706 0V5.624c5.786.628 10.394 5.236 11.023 11.023h-1.414a1.353 1.353 0 100 2.706h1.414c-.629 5.786-5.237 10.394-11.023 11.023m15.294-13.73h-1.552c-.646-7.29-6.45-13.095-13.742-13.74V1.352a1.353 1.353 0 10-2.706 0v1.552C9.356 3.551 3.55 9.355 2.905 16.647H1.353a1.353 1.353 0 100 2.706h1.552c.646 7.29 6.45 13.096 13.742 13.741v1.553a1.353 1.353 0 102.706 0v-1.553c7.291-.645 13.096-6.45 13.742-13.74h1.552a1.353 1.353 0 100-2.707"
                      fill="#343F7F"
                    ></path>
                    <path
                      d="M18 24.04l-.84-.84C14.04 20.44 12 18.58 12 16.3c0-1.86 1.44-3.3 3.3-3.3 1.02 0 2.04.48 2.7 1.26A3.604 3.604 0 0120.7 13c1.86 0 3.3 1.44 3.3 3.3 0 2.28-2.04 4.14-5.16 6.9l-.84.84z"
                      fill="#FF4355"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            <div class="Step_content">
              <p class="Step_title strong-blue text-start">
                2. Ciblez votre logements
              </p>
              <p class="text-start">
                Un coup de coeur ? Échangez avec le loueur via la messagerie
                instantanée. Libre à vous de vous rencontrer.
              </p>
            </div>
          </div>
          <div class="Step">
            <div class="Step_head d-flex align-items-center">
              <span class="Icon" style="--width: 32px; width: 32px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 36">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24.325 8.377l8.863 8.773.008-.011c.644.607 1.358 1.308 1.649 2.182a3.739 3.739 0 01-.952 3.953 3.748 3.748 0 01-2.532 1.114 3.542 3.542 0 01-1.168 2.478 3.917 3.917 0 01-2.395 1.087 3.504 3.504 0 01-1.174 2.481 3.952 3.952 0 01-3.258 1.048c.502-.618.853-1.234.669-2.62a1.26 1.26 0 00.735-.34c.242-.22.376-.521.378-.836 0-.216-.07-.432-.193-.614a1.773 1.773 0 01-.233-.191 1.353 1.353 0 01-.216-.28l-4.814-4.677a1.323 1.323 0 01-.442-1.076 1.32 1.32 0 01.449-.918c.266-.234.613-.347.965-.331.355.022.681.181.917.448l5.062 4.93c.056.055.1.108.141.161.49.3 1.13.235 1.55-.165l.045-.045a1.11 1.11 0 00-.045-1.566l-5.099-4.967c-.47-.532-.48-1.262-.055-1.771.228-.274.549-.442.904-.474.352-.03.7.076.975.304l4.857 4.718c.119.057.228.131.325.221.502.481 1.28.482 1.774.007l.04-.037a1.115 1.115 0 00-.02-1.577l-9.605-9.567 1.895-1.842zM3.267 4.08a11.754 11.754 0 0115.398-.847c-.833.604-1.595 1.389-1.998 1.83a9.136 9.136 0 00-11.535.926 8.304 8.304 0 00-2.464 5.989 9.204 9.204 0 002.046 5.775c-.498.511-1.278 1.425-1.519 2.34A11.813 11.813 0 010 11.985 10.966 10.966 0 013.267 4.08z"
                      fill="#343F7F"
                    ></path>
                    <path
                      d="M21.116 30.018l-.425.401.025.037-1.82 1.82a1.29 1.29 0 01-1.783.005c-.235-.23-.37-.55-.372-.912a1.08 1.08 0 01.303-.817l2.16-2.16c.256-.231.579-.347.903-.347.341 0 .684.128.95.384.22.204.348.482.358.783.012.3-.095.586-.299.806zm-5.936-1.376a1.289 1.289 0 01-1.781-.002 1.116 1.116 0 01-.342-.79 1.142 1.142 0 01.349-.834l2.173-2.174a1.295 1.295 0 011.787-.002c.215.209.337.49.342.79.004.3-.108.585-.35.834l-2.178 2.178zm-5.42-3.54a1.119 1.119 0 01-.342-.789c-.005-.3.108-.585.35-.833l2.175-2.176a1.281 1.281 0 011.784 0c.216.209.337.49.342.79.005.3-.107.585-.349.834L11.547 25.1a1.29 1.29 0 01-1.788.001zm-3.64-3.535a1.119 1.119 0 01-.341-.79c-.005-.3.108-.585.35-.834l2.173-2.174a1.29 1.29 0 011.786-.002c.216.21.337.49.343.79.004.301-.108.586-.35.834l-2.174 2.174a1.29 1.29 0 01-1.787.002zm.322-5.675a3.96 3.96 0 015.498-.01 3.475 3.475 0 011.16 2.45 3.914 3.914 0 012.478 1.087 3.473 3.473 0 011.16 2.45 3.916 3.916 0 012.479 1.086 3.515 3.515 0 011.178 2.495 4.043 4.043 0 012.523 1.097 3.813 3.813 0 011.116 2.167c.184 1.385-.167 2.002-.67 2.619a1.022 1.022 0 00-.08.119 3.863 3.863 0 01-.42.499l-2.182 2.181a3.956 3.956 0 01-2.68 1.052 3.944 3.944 0 01-3.91-3.469 3.903 3.903 0 01-2.548-1.097 3.473 3.473 0 01-1.159-2.47 3.904 3.904 0 01-2.487-1.095 3.476 3.476 0 01-1.159-2.471 3.893 3.893 0 01-2.486-1.095 3.717 3.717 0 01-1.059-3.542c.24-.915 1.02-1.828 1.518-2.34l.008.01zM19.261 2.744a11.812 11.812 0 0114.916 1.154 11.198 11.198 0 013.419 8.051 11.082 11.082 0 01-2.752 7.29c-.29-.874-1.004-1.575-1.647-2.182a8.486 8.486 0 00-.871-11.244 9.16 9.16 0 00-12.69.108l-5.043 4.912c-.283.233-.429.524-.442.835-.007.278.11.558.32.757a1.274 1.274 0 001.78.004l5.262-5.093c.08-.07.143-.115.206-.153a1.35 1.35 0 01.177-.107l.1-.05.113-.011c.041-.004.083-.006.125-.006.14-.03.285-.03.424 0l.1.005.12.011.108.055c.066.036.132.076.192.123.053.032.103.067.151.106l.996.986-3.252 3.162-2.965 2.883a3.944 3.944 0 01-5.477.003 3.688 3.688 0 01.161-5.5L16.693 5l-.026-.018c.403-.442 1.165-1.227 1.998-1.832a.664.664 0 01.022.017c.134-.106.271-.208.41-.308a1.94 1.94 0 00.164-.116z"
                      fill="#FF4355"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            <div class="Step_content">
              <p class="Step_title strong-blue text-start">
                3. Réservez en ligne
              </p>
              <p class="text-start">
                Finalisez votre réservation en effectuant le premier paiement
                sur la plateforme, en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="Homepage_ads bg-bg-light">
    <div class="Wrapper Wrapper--m pv-60 pt-60@xs pb-40@xs">
      <h2 class="max-width-s m-auto text-center">
        <b class="ft-2xl ft-bold color-ft-strong">
          Quelques de nos meilleurs appartements et locations
        </b>
      </h2>
    </div>
  </div>

  <div class="col-8 col-12@m m-auto">
    <Carrousel :tabImg="carrouselTab"></Carrousel>
  </div>
  <div class="d-flex row annonce-wrapper my-annonce my-5">
    <div class="col-4 col-12@s mb-20@s px-3">
      <div class="Accordion js-accordion Accordion--enabled@xs">
        <div class="Accordion_head js-accordion-toggle text-start">
          <div class="Accordion_title fw-bolder">
            <h2 class="ft-l">
              <b>100% des annonces vérifiées</b>
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
          utilisateurs. On encourage même nos loueurs à vous rendre heureux avec
          un taux de réponse record, un profil complet et des logements de
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
          minimum et accessibles à tout moment sur la plateforme. Du dossier de
          location à la signature du bail, on simplifie vos démarches en les
          digitalisant.
        </div>
      </div>
    </div>
    <div class="col-4 col-12@s mb-20@s px-3">
      <div class="Accordion js-accordion Accordion--enabled@xs">
        <div class="Accordion_head js-accordion-toggle text-start">
          <div class="Accordion_title fw-bolder">
            <h2 class="ft-l">
              <b>Accompagnés même après la réservation</b>
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
          services post-réservation comme l’assurance habitation. Sérénité
          garantie !
        </div>
      </div>
    </div>
  </div>
  <footer class="Footer">
    <div class="Wrapper"> <div class="Footer_container d-flex flex-wrap"> <div class="Footer_column col-3 col-6@s col-12@xs">
       <span class="Icon  mb-20" style="--width: 180px; width: 180px;"> </span>
        <ul> 
          <li class="Footer_item"> <a class="Footer_link" href="https://studapart.com/fr/proprietaire"> Espace propriétaire </a> 
          </li> <li class="Footer_item">
             <a class="Footer_link" href="https://www.studapart.com/fr/formulaire-de-prise-de-contact-pour-les-professionnels-de-limmobilier"> Espace professionnel de l'immobilier </a> 
            </li> 
            <li class="Footer_item"> 
              <a class="Footer_link" href="/fr/le-mieux-loger"> Le mieux loger </a> 
            </li> 
            <li class="Footer_item">
               <a class="Footer_link" href="/fr/comment-ca-marche"> Comment ça marche ? </a>
               </li> <li class="Footer_item">
                 <a class="Footer_link" href="/fr/nos-astuces"> Nos astuces </a> 
                </li> <li class="Footer_item"> 
                  <a class="Footer_link" href="https://www.studapart.com/fr/login"> Connexion </a>
                 </li>
                  <li class="Footer_item"> 
                    <span id="language-switch-container"> 
                      <link rel="stylesheet" media="all" href="https://www.studapart.com/sites/prod/files/css/css_xuCn8zzdbMleHI_G2CJhZbSszRrSdHUleCX0Xqz6gps.css?frz-v=3246"> <div id="block-languagedropdownswitcher" class="block block-lang-dropdown block-language-dropdown-blocklanguage-interface"> <form class="lang-dropdown-form lang_dropdown_form clearfix language_interface container" id="lang_dropdown_form_lang-dropdown-form" data-drupal-selector="lang-dropdown-form-2" action="/fr" method="post" accept-charset="UTF-8"> <div class="js-form-item Form_element js-form-type-select form-type-select js-form-item-lang-dropdown-select form-item-lang-dropdown-select form-no-label"> <label for="edit-lang-dropdown-select" class="visually-hidden">Select your language</label> <select style="width:85px" class="lang-dropdown-select-element form-select" data-lang-dropdown-id="lang-dropdown-form" data-drupal-selector="edit-lang-dropdown-select" id="edit-lang-dropdown-select" name="lang_dropdown_select"><option value="fr" selected="selected">Français</option><option value="en">Anglais</option></select> </div> <input data-drupal-selector="edit-fr" type="hidden" name="fr" value="/fr/accueil" class="form-control"> <input data-drupal-selector="edit-en" type="hidden" name="en" value="/en/home" class="form-control"> <noscript><div><input data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value="Allez" class="button js-form-submit form-submit form-control" /> </div></noscript><input autocomplete="off" data-drupal-selector="form-3cgjgukr9czaops7viw9h2dbq4ygjxxlev6twe1ov1m" type="hidden" name="form_build_id" value="form-3cGjGukR9czaOPs7Viw9h2DBq4ygJxXlEv6TWE1oV1M" class="form-control"> <input data-drupal-selector="edit-lang-dropdown-form" type="hidden" name="form_id" value="lang_dropdown_form" class="form-control"> </form> </div> </span> </li> </ul> </div> <div class="Footer_column col-3 col-6@s col-12@xs "> <h5 class="Footer_title">Nos partenaires</h5> <ul> <li class="Footer_item"> <a class="Footer_link" href="/fr/logement-nos-ecoles-et-universites-partenaires"> Les écoles et universités </a> </li> <li class="Footer_item"> <div class="Footer_link" data-link="aHR0cHM6Ly93d3cuYWxsaWFuei5mci9hc3N1cmFuY2UtaGFiaXRhdGlvbi9wYXJ0ZW5haXJlcy9zdHVkYXBhcnQv"> Allianz - la garantie Studapart </div> </li> <li class="Footer_item"> <div class="Footer_link" data-link="aHR0cHM6Ly93d3cuYWxsaWFuei5mci9xdWktZXN0LWFsbGlhbnovcGFydGVuYWlyZXMvc3R1ZGFwYXJ0Lmh0bWw="> Allianz - L’Assurance Habitation et la Garantie Studapart </div> </li> <li class="Footer_item"> <a class="Footer_link" href="/fr/cgu"> CGU </a> </li> <li class="Footer_item"> <a class="Footer_link" href="/fr/mentions-legales"> Mentions légales </a> </li> <li class="Footer_item"> <a class="Footer_link" href="http://help.studapart.com"> Aide </a> </li> <li class="Footer_item"> <a class="Footer_link" href="javascript:Didomi.preferences.show()"> Gérer les cookies </a> </li> </ul> </div> <div class="Footer_column col-3 col-6@s col-12@xs "> <h5 class="Footer_title">Trouver un logement</h5> <ul> <li class="Footer_item"> <a class="Footer_link" href="https://www.studapart.com/fr/logement-etudiant-paris"> Logement étudiant à Paris </a> </li> <li class="Footer_item"> 
                        <a class="Footer_link" href="https://www.studapart.com/fr/logement-etudiant-bordeaux"> Logement étudiant à Bordeaux </a>
                       </li> <li class="Footer_item">
                         <a class="Footer_link" href="https://www.studapart.com/fr/logement-etudiant-lille"> Logement étudiant à Lille </a>
                         </li> <li class="Footer_item"> <a class="Footer_link" href="https://www.studapart.com/fr/logement-etudiant-lyon"> Logement étudiant à Lyon </a> </li> <li class="Footer_item"> <a class="Footer_link" href="https://www.studapart.com/fr/logement-etudiant-toulouse"> Location étudiant à Toulouse </a>
                        </li> 
                        <li class="Footer_item"> <a class="Footer_link" href="https://www.studapart.com/fr/logement-etudiant-marseille"> Logement étudiant à Marseille </a> </li> <li class="Footer_item"> <a class="Footer_link" href="https://www.studapart.com/fr/logement-etudiant-nantes"> Logement étudiant Nantes </a> </li> </ul> </div> <div class="Footer_column col-3 col-6@s col-12@xs Footer_column--highlight"> <h5 class="Footer_title">Rejoignez-nous <i>!</i></h5> <ul> <li class="Footer_item"> <a class="Footer_link" href="/fr/lequipe-du-mieux-loger"> L'équipe </a> </li> <li class="Footer_item"> <a class="Footer_link" href="/fr/inside-the-culture"> Inside the culture </a> </li> <li class="Footer_item"> <div class="Footer_link" data-link="aHR0cHM6Ly93d3cud2VsY29tZXRvdGhlanVuZ2xlLmNvbS9mci9jb21wYW5pZXMvc3R1ZGFwYXJ0"> Nous rejoindre </div> </li> <li class="Footer_item"> <div class="Footer_link" data-link="bWFpbHRvOmNvbnRhY3RAc3R1ZGFwYXJ0LmNvbQ=="> Nous contacter </div> </li> </ul> <div class="SocialShare mt-40 SocialShare--light"> <a class="SocialShare_link" href="https://twitter.com/studapart" target="_blank"> 
                          <span class="Icon Icon--height SocialShare_item" style="--height: 20px; height: 20px;"> 
                          </span>   
                             </a> 
                            </div> 
                          </div>
                             </div>
                             </div>
  </footer>
</template>
<script>
import ButtonGreen from "@/components/GreenBtn.vue";
import Carrousel from "../components/Carrousel.vue";
export default {
  components: {
    Carrousel,
    ButtonGreen,
  },
  data() {
    return {
      carrouselTab: [
        {
          src: "stylish.jpg",
          name: "Cotonou",
        },
        {
          src: "lille.avif",
          name: "Calavi",
        },
        {
          src: "home.avif",
          name: " Ouidah",
        },
      ],
    };
  },
};
</script>

<style>


.Footer {
    overflow: hidden;
    color: #fff;
    background-color:  #36417D;;
}
.Footer_column {
    padding: 60px 40px;
    text-align: left;
}




.Footer_link {
    display: block;
    padding: 5px 0;
    color: #fff;
    cursor: pointer;
}

.Footer_item {
    list-style-type: none;
}








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

.Accordion_title {
  color: #36417d;
  font-weight: 700;
}

.Accordion--enabled\@xs .Accordion_toggle {
  display: none;
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
.Homepage_city::after {
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
/* .boost-l::before, .boost-red::before, .boost::before {
    content: "";
    display: block;
    top: -5px;
    right: -10px;
    height: calc(100% + 10px);
    width: calc(100% + 20px);
    position: absolute;
    background-color:#36417D;
    border-radius: 3px;
    transform: rotate(-1deg);
} */
.Homepage_cityTitle {
  position: absolute;
  top: 50%;
  background: #36417d;
  padding: 5px 10px;
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
  background-color: #3c9;
}
.Homepage_cityTitle::before {
  transition: 250ms;
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
  background: url("../assets/paris.avif");
}

.calavi {
  background: url("../assets/lille.avif");
}

.porto {
  background: url("../assets/bordeaux.avif");
}
.ft-bold {
  font-weight: 700;
}
.wrapper-city {
  width: 70%;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
}
.header {
  background: url("../assets/home.avif");
  min-height: 400px;
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
