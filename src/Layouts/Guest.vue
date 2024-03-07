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
            :content="'Je commence les recherches'"
            :link="'/'"
          ></ButtonGreen>
        </div>
      </div>
    </div>
    <router-view /> 
  </template>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");
  body {
    margin: 0;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    padding: 30px;
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
  <script>
  import ButtonGreen from "@/components/GreenBtn.vue";
  import Navbar from "@/components/Navbar.vue";
  export default {
    name:"GuestVue",
    components: {
      Navbar,
      ButtonGreen,
    },
  };
  </script>
  