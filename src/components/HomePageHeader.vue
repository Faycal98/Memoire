<template>
  <div class="header">
    <Navbar></Navbar>
    <div class="HeadingSingle_wrapper Wrapper">
      <div class="HeadingSingle_container">
        <h1 class="HeadingSingle_title">
          On connaît des milliers de logements qui cherchent quelqu'un comme
          vous.
        </h1>
        <ButtonGreen
          @click="goToSearch"
          :content="'Je commence les recherches'"
          :link="'/'"
        ></ButtonGreen>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonGreen from "@/components/GreenBtn.vue";
import Navbar from "@/components/Navbar.vue"
export default {
    name:"HomePageHeader",
    components: {
    ButtonGreen,
    Navbar
  }
  ,methods: {
    goToSearch(){
          this.$router.push("/logements");
        }
  },
}
</script>
