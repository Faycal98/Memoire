<template>
  <div>
    <h1 class="mt-4">Mes annonces</h1>
    <div class="wrapper d-flex align-items-center flex-column">
      <div class="mb-5" v-for="accomodation in accomodationTab">
        <AnnonceCard :imgArray="accomodation.images" :accomodation-detail="accomodation"></AnnonceCard>
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
    };
  },
  components: {
    AnnonceCard,
  },
  mounted() {
    let userId = parseInt(this.$route.params.id);
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
};
</script>
<style scoped></style>
