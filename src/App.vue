<template>
  <main>
    <Guest></Guest>
  </main>
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

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Guest from "./Layouts/Guest.vue";

export default {
  components: {
    Guest,
  },
};
</script>
