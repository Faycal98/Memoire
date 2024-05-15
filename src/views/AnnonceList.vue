<template>
  <div>
    <h1 class="mt-4">Mes annonces</h1>
    <div class="wrapper d-flex align-items-center flex-column">
      <div class="mb-5" v-for="accomodation in accomodationTab">
        <AnnonceCard
          :imgArray="accomodation.images"
          :accomodation-detail="accomodation"
          @delete-announce="deleteAnnounce"
        ></AnnonceCard>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
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
<style scoped></style>
