<template>
  <div class="d-flex announce-block">
    <GalleryCarrousel :tabImg="imgArray"></GalleryCarrousel>
    <div class="PropertyBlock_content">
      <div class="property ps-4">
        <div class="d-flex justify-content-between">
         <!--<span class="location"
            >Dans {{ accomodationDetail.city }} à {{
              accomodationDetail.neighborhood
            }}
          </span>---> 
          <span class="type ft"
            >{{ accomodationDetail.type }}
            {{
              accomodationDetail.announcePurpose == "location"
                ? "à louer"
                : "à vendre"
            }}</span
          >
          <span class="text-black price ft fs-6" style="font-weight: bold; font-size: 20px !important">
             {{ accomodationDetail.price }} Fcfa
            <span v-if="accomodationDetail.announcePurpose == 'location'">
              /
              {{ accomodationDetail.billPeriod }}
            </span>
          </span>
        </div>

        <div class="text-start mt-2 mb-3 fs-5">
          <span class="location" style="font-size: 16px;"
            >Dans {{ accomodationDetail.city }} à {{
              accomodationDetail.neighborhood
            }}
          </span>
<!--<span class="type ft"
            >{{ accomodationDetail.type }}
            {{
              accomodationDetail.announcePurpose == "location"
                ? "à louer"
                : "à vendre"
            }}</span
          >-->
          
        </div>

        <div class="mb-1">
          <div
            class="d-flex flex-column flex-wrap details property-container mb-2 mb-0@s"
          >
            <div class="col-6 col-12@s mb-10@s mb-2">
              <div class="icon-highlight">
                <div><i class="fa-solid fa-bed me-2"></i></div>
                <div>
                  <p class="f<!-- t-medium --> location">
                    {{ accomodationDetail.roomNumber }}
                    Chambre(s)
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 col-12@s mb-2">
              <div class="icon-highlight">
                <div><i class="fa-solid fa-kitchen-set me-2"></i></div>
                <div>
                  <p class="ellipsis-1">
                    {{ accomodationDetail.kitchenNumber }}
                    Cuisine(s)
                  </p>
                </div>
              </div>
            </div>

            <div class="col-6 col-12@s mb-2">
              <div class="icon-highlight">
                <div><i class="fa-solid fa-shower me-2"></i></div>
                <div>
                  <p class="ellipsis-1">
                    {{ accomodationDetail.showerNumber }} douche(s)
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-6 col-12@s mb-2"
              v-if="accomodationDetail.hasBrewer"
            >
              <div class="icon-highlight">
                <div><i class="fa-solid fa-fan me-2"></i></div>
                <div>
                  <p class="ellipsis-1">
                    Brasseur
                    <!--   Interphone, Gestionnaire sur site, Distributeur, TV -->
                  </p>
                </div>
              </div>
            </div>

            <div class="col-6 col-12@s mb-2" v-if="accomodationDetail.hasWifi">
              <div class="icon-highlight">
                <div><i class="fa-solid fa-wifi me-2"></i></div>
                <div>
                  <p class="ellipsis-1">Internet</p>
                </div>
              </div>
            </div>

            <div
              class="col-6 col-12@s mb-2"
              v-if="accomodationDetail.hasMonitoring"
            >
              <div class="icon-highlight">
                <div><i class="fa-solid fa-video me-2"></i></div>
                <div>
                  <p class="ellipsis-1">Video surveilllance</p>
                </div>
              </div>
            </div>

            <div
              class="col-6 col-12@s mb-2 ps-1"
              v-if="accomodationDetail.hasWashingMachine"
            >
              <div class="icon-highlight">
                <div>
                  <img
                    src="../assets/washing.svg"
                    alt=""
                    width="24px"
                    height="29px"
                  />
                </div>
                <div>
                  <p class="ellipsis-1 ms-2">Machine à laver</p>
                </div>
              </div>
            </div>

            <div
              class="col-6 col-12@s mb-2"
              v-if="accomodationDetail.hasBalcony"
            >
              <div class="icon-highlight">
                <div>
                  <img
                    src="../assets/balcony.svg"
                    alt=""
                    width="29px"
                    height="29px"
                  />
                </div>
                <div>
                  <p class="ellipsis-1 ms-2">Balcon</p>
                </div>
              </div>
            </div>
            <div
              class="col-6 col-12@s mb-2"
              v-if="accomodationDetail.isSanitary"
            >
              <div class="icon-highlight">
                <div>
                  <img
                    src="../assets/sanitary.svg"
                    alt=""
                    width="29px"
                    height="29px"
                  />
                </div>
                <div>
                  <p class="ellipsis-1 ms-2">Sanitaire</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-12@s mb-2" v-if="accomodationDetail.hasTv">
              <div class="icon-highlight">
                <div><i class="fa-solid fa-tv me-2"></i></div>
                <div>
                  <p class="ellipsis-1">Télévision</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-12@s mb-2" v-if="accomodationDetail.hasPool">
              <div class="icon-highlight">
                <div><i class="fa-solid fa-person-swimming"></i></div>
                <div>
                  <p class="ellipsis-1 me-2">Piscine</p>
                </div>
              </div>
            </div>
            <div
              class="col-16 col-12@s mb-2"
              v-if="accomodationDetail.hasGarden"
            >
              <div class="icon-highlight">
                <div>
                  <img
                    src="../assets/garden.svg"
                    alt=""
                    width="29px"
                    height="29px"
                  />
                </div>
                <div>
                  <p class="ellipsis-1 ms-2">Jardin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end align-items-center red">
          <span @click="deleteAnnounce(accomodationDetail.id)" style="font-weight:bold">
            <i class="fa-solid fa-trash me-2"></i>
            Supprimer
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GalleryCarrousel from "./GalleryCarrousel.vue";
import axios from "axios";
export default {
  data() {
    return {};
  },
  emits:['deleteAnnounce'],
  props: {
    imgArray: {
      type: Array,
    },
    accomodationDetail: {
      type: Object,
    },
  },
  components: {
    GalleryCarrousel,
  },
  methods: {
    deleteAnnounce(id) {
      this.$emit("deleteAnnounce", id);
    },
  },
};
</script>
<style scoped>
.announce-block {
  background-color: #fff;
  border: 1px solid #f3f3ff;
  border-radius: 12px;
  padding: 20px;
  width: fit-content;
  overflow: hidden;
}
/*
.location {
  color: #36417d !important;
}*/

.details {
  max-width: 500px;
  max-height: 150px;
}
.red {
  color: #fff;
  
  cursor: pointer;
  border: 3px solid red;
    margin: 2px 302px 16px;
    padding: 5px;
    border-radius: 8px;
    margin-top: 20px;
    background-color:red;
  transition: .5s ease;
}
.red:hover{
color: red;
background-color:#fff;
}
.type {
  color: #17707a;
  font-weight:bold;
  font-size:23px;
}

.ft {
  font-family: "Metrophobic", sans-serif;
}
.PropertyBlock_content {
  min-width: 740px;
}

.icon-highlight {
  display: flex;
}

.icon-highlight p {
  margin-bottom: 0;
}
</style>
