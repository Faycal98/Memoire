<template>
      <div id="navbar">
        <nav class="navbar navbar-expand-lg">
        <router-link to="/">
          <h1 class="ms-5 header-title text-white"><img src="../assets/log01.jpg" alt="" style="height: 9vh; margin-bottom: -2px;" ></h1>
        </router-link>
        <div
          class="header-right justify-content-between align-items-center "
          id="navbarSupportedContent"
        >
          <ul class="u-block">
            <li class="link d-block">
              <router-link to="/">
                <p class="drop-text">Retour à l'accueil</p>
              </router-link>
              
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
</template>
<script></script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header {
  position: relative;
  z-index: 500;
}


.navbar {
  position: fixed;

}

.navbar {
  background-color: #fff;
}


.link {
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
}

.drop-text {
  color: #36417d;
  font-size: 15px;
  border: 1px solid #36417d;
  border-radius: 5px;
  padding: 6px 18px;
  transition: 0.5s;
  font-weight: bold;
}
.drop-text:hover {
  background-color: rgb(221, 88, 55);
  border: 1px solid rgb(221, 88, 55);
  color: #fff;
  font-weight: bold;
}

nav {
  font-family: "Metrophobic", sans-serif;
  font-weight: 600;
  font-style: normal;
  position: fixed;
  margin-right: auto;
  justify-content: space-between;
  margin-left: auto;
  z-index: 10;
  width: 100%;
  padding: 0 40px;
  height: 60px;
  color: black;
  background-color: transparent;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
 
  }

  ul {
    margin-left: 3em;
    display: flex;
    justify-content: space-between;
    li {
      cursor: pointer;
      /*font-weight: 300;*/
      list-style-type: none;
      color: white;

    }
  }
  

</style>