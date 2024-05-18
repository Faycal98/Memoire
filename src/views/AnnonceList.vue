<template >
 <Navbar></Navbar>
  
  <div class="temp">
    <div class="templ"> 
      <h1 class="mt-4" style="padding-top: 98px; font-weight: bold; color:#0d2e31 !important;">Mes annonces</h1>
      <div class="wrapper d-flex align-items-center flex-column parter">
        <div class="mb-5" v-for="accomodation in accomodationTab">
          <AnnonceCard
            :imgArray="accomodation.images"
            :accomodation-detail="accomodation"
            @delete-announce="deleteAnnounce"
          ></AnnonceCard>
        </div>
      </div>
    </div>
  </div>
  <v-fab
    v-show="scY > 300"
    @click="toTop"
    class="me-4 floating-btn"
    icon="mdi-chevron-up"
    location="bottom end"
    absolute
    offset
  ></v-fab>
</template>
<script>
import axios from "axios";
import Navbar from "../components/OwnerNavbar.vue";
import AnnonceCard from "../components/AnnonceCard.vue";

export default {
  data() {
    return {
      accomodationTab: [],
      userId: null,
    };
  },
  components: {
    AnnonceCard,
    Navbar,
  },
  mounted() {
    let userId = parseInt(this.$route.params.id);
    this.userId = userId;
    this.getData(userId);
  },

  methods: {
    getData(userId) {
      axios
        .get(`http://localhost:8000/api/findUserAccomodation/${userId}`)
        .then(({ data }) => {
          console.log(data);
          this.accomodationTab = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteAnnounce(id) {
      this.$swal
        .fire({
          title: "Êtes-vous sûr ?",
          text: "Vous ne pourrez pas revenir en arrière !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Supprimer",
          cancelButtonText: " Annuler",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://localhost:8000/api/deleteAccomodation/${id}`)
              .then((data) => {
                console.log(data);
                this.getData(this.userId);
                this.$swal.fire({
                  title: "Supprimé !",
                  text: "Votre annonce a été supprimée.",
                  icon: "success",
                });
              });
          }
        });
    },
  },
};
</script>
<style scoped>
.temp{
  background-color:rgba(241, 143, 118, 0.801);

}
.templ{
  margin-top: -24px;
}
.parter{
  margin-top: 20px;
}
</style>
