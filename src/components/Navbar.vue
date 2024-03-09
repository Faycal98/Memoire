<template>
  <div id="navbar">
    <nav :class="[{ onScroll: !view.topOfPage }, 'navbar navbar-expand-lg']">
     <router-link to="/"> <h1 class="ms-5 header-title"><strong>B</strong>en<span id="letter"><strong>A</strong></span>part</h1></router-link>
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
        <ul>
          <li class="link">Trouver un logement</li>
          <li class="link d-block">
            <p class="drop-text dropdown-toggle">Je suis démarcheur</p>
            
            <div class="list">
              <ul>
                <li>
                  <a class="dropdown-item" href="#">Deposer une annonce</a>
                </li>
                <li><a class="dropdown-item" href="#">Comment ça marche</a></li>
                <li><a class="dropdown-item" href="#">Me connecter</a></li>
              </ul>
            </div>
          </li>
          <li class="link d-block">
            <p class="drop-text dropdown-toggle">Je suis propriétaire</p>
            <div class="list">
              <ul>
                <li>
                  <a class="dropdown-item" href="#">Deposer une annonce</a>
                </li>
                <li><a class="dropdown-item" href="#">Comment ça marche</a></li>
                <li><a class="dropdown-item" href="#">Me connecter</a></li>
              </ul>
            </div>
          </li>
        </ul>

        <div class="Header_buttons ms-3">
          <button type="button" class="btn btn-outline-light account-btn">
            Mon compte
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Metrophobic&display=swap");

* {
  padding: 0;
  margin: 0;
}
#letter{
  color: rgb(221, 88, 55);;
}
.link {
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
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
  color: white;
  font-size: 35px;
}
.dropdown-item {
  color: #36417d!important;
  font-weight: 400;
  border-bottom: 1px solid #f3f3ff;
  transition: background-color 5ms;
  text-align: left;
  padding: 15px 20px;

  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #6a73ad;
  text-decoration: none;

  color: inherit;
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
  &.onScroll {
    box-shadow: 0 0 10px #aaa;
    background-color: #fff;
    ul li {
      color: #36417d;
    }

    .header-title {
      color: #36417d;
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
    justify-content: space-between;
    li {
      cursor: pointer;
      font-weight: 300;
      color: red;
      list-style-type: none;
      color: white;
    }
  }
}
</style>
<script>
export default {
  name: "NavbarVue",
  data() {
    return {
      view: {
        topOfPage: true,
      },
      red: "red",
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
};
</script>
