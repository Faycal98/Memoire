import { createApp } from "vue";

import App from "./App.vue";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import colors from "vuetify/util/colors";
import "@mdi/font/css/materialdesignicons.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { VFab } from 'vuetify/labs/VFab'
library.add(fas, far, fab);
dom.watch();
import store from "./store";
const vuetify = createVuetify({
 components: {
    VFab,
    ...components
  },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});



createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(vuetify)
  .use(VueSweetalert2)
  .use(router)
  .mount("#app");
