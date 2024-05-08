<template>
  <div class="header">
    <Navbar></Navbar>
    <div class="HeadingSingle_wrapper Wrapper">
      <div class="HeadingSingle_container">
        <h1 class="HeadingSingle_title">
          On connaît des milliers de logements qui cherchent quelqu'un comme
          vous.
        </h1>
        <OrangeBtn
          @click="goToSearch"
          :content="'Voir les annonces →'"
          :link="'/'"
        ></OrangeBtn>
      </div>
    </div>
  </div>
</template>
<script>
import OrangeBtn from "@/components/OrangeBtn.vue";
import Navbar from "@/components/Navbar.vue"
export default {
    name:"HomePageHeader",
    components: {
    OrangeBtn,
    Navbar
  }
  ,methods: {
    goToSearch(){
          this.$router.push("/logements");
        }
  },
}
</script>
