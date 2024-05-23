<template>
  <div class="row">
    <div class="col-2 sidebar">
      <div class="title"><i class="fa-solid fa-house"></i> Dashboard</div>
      <ul class="menu">
        <li><i class="fa-solid fa-users"></i> Liste des utilisateurs</li>
        <li>
          <i class="fa-solid fa-list me-2 "></i>Liste des annonces
        </li>
        <li class="logout">
                    <a  @click="logout" href="#"><i class="fa-solid fa-right-from-bracket me-2 arrow"></i
                      >Se déconnecter</a
                    >
                  </li>
      </ul>
    </div>
    <div class="col-10">
      <div class="">
        <nav :class="['navbar navbar-expand-lg']">
          <router-link to="#">
            <h1 class="ms-5 header-title">
              <img src="../assets/log01.png" alt="" style="height: 9vh; margin-bottom: -2px;" >
            </h1></router-link
          >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="header-right justify-content-end align-items-center collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div class="Header_buttons ms-3">
           
              <v-avatar
                color="rgb(221, 88, 55)"
                @click="hide = !hide"
                v-if="userInitials"
              >
                <span class="text-h7 text-white avatar">{{
                  userInitials
                }}</span>
              </v-avatar>

              <router-link to="/login" v-else>
                <button
                  type="button"
                  class="btn btn-outline-light account-btn px-1 py-2"
                >
                  Mon compte
                </button>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hide: true,
      userInitials: "",
    };
  },
  mounted() {
    const userData = this.$store.state.user;
    if (userData) {
      console.log(userData, 123);
      this.userId = userData.id;
      this.userRole = userData.role;
      const userInitials =
        userData.userName.charAt(0).toUpperCase() +
        userData.userFirstName.charAt(0).toUpperCase();
      this.userInitials = userInitials;
      console.log(userInitials);
    }
  },
  methods: {
    logout() {
      console.log("log out");

      this.$store.dispatch("logout");
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.sidebar {
  background-color: #36417d;
  color: white;
}
#letter {
  color: #36417d;
}
.link {
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
}
.sidebar {
  font-family: "Metrophobic", sans-serif;
  padding: 0px;
}
.menu{
  height: 88%;
  margin: 8px 0;
  position:relative;
}/*
.menu li{
  border: 3px solid #e0e0e058;
  border-radius: 5px;
  background-color: #e0e0e058;
  transition: all 0.3s ease;
}/*
.menu li:hover{
    border-radius: 5px;
    border:1px solid #e0e0e058;
    background: #e0e0e058;
    height: 50px;
}*/
    

.sidebar ul {
  list-style-type: none;
  padding: 0px;
}
.sidebar .title {
  font-size: 25px;
  margin-top: 25px;
  padding-bottom: 18px;
  border-bottom: 1px solid #fff;
}
.sidebar li {
  margin: 45px 23px 23px 35px;
  cursor: pointer;
  font-size: 18px;
  font-family: "Metrophobic", sans-serif;
}
.logout{
  margin-top: 160% !important;
 
}

.hidden {
  display: none;
}

.sub-menu {
  right: 2%;
  top: 100%;
  background: white;
}

.sub-menu::after {
  content: "";
  position: absolute;
  right: 9%;
  bottom: 100%;
  border-width: 9px;

  border-style: solid;
  border-color: transparent transparent white transparent;
}

.sub-menu ul {
  margin-left: 0 !important;
}
.list {
  position: absolute;
  display: block;
  color: red;
  transition: ease-in-out 1s;
  background: white;
  margin-top: 10px;
}

.list,
.list li {
  display: none;
}
.header-title {
  color: black;
  font-size: 35px;
}
.dropdown-item {
  color: #36417d !important;
  font-weight: 400;
  border-bottom: 1px solid #f3f3ff;

  text-align: left;
  padding: 15px 20px;

  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #6a73ad;
  text-decoration: none;

  color: white !important;
}
.Header_navList {
  position: absolute;

  padding: 0;
  right: 0;
  min-width: 280px;
  pointer-events: none;
  transform: translateY(-20px);
  opacity: 0;
  transition: 250ms;
}
.link .list ul {
  display: block;
  margin-left: 0px;
}
.link:hover .list,
.link:hover .list li {
  display: block;
}

.avatar {
  cursor: pointer;
}

nav {
  font-family: "Metrophobic", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin-right: auto;
  justify-content: space-between;
  margin-left: auto;
  z-index: 10;
  width: 100%;
  padding: 0 40px;
  height: 68px;
  color: black;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ededff;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  &.onScroll {
    ul li {
      color: #36417d;
    }

    .header-title {
      color: black;
    }
    .account-btn {
      background-color: rgb(221, 88, 55);
    }
    .account-btn:hover {
      color: white;
    }
  }

  ul {
    margin-left: 3em;
    display: flex;
    justify-content: space-around;
    li {
      cursor: pointer;
      font-weight: 300;
      color: red;
      list-style-type: none;
      color: black;
    }
  }
}
</style>
