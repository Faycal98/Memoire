<template>
  <v-card flat class="table">
    <v-card-title class="d-flex align-center pe-2">
      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
      <v-spacer></v-spacer>
      <i class="fa-solid fa-filter me-3"></i>
      Filtrer
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table v-model:search="search" :items="users" :headers="headers">
      <template v-slot:header.stock>
        <div clas>Stock</div>
      </template>

      <template v-slot:item.image="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
            :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
            height="64"
            cover
          ></v-img>
        </v-card>
      </template>

      <template v-slot:item.rating="{ item }">
        <v-rating
          :model-value="item.rating"
          color="orange-darken-2"
          density="compact"
          size="small"
          readonly
        ></v-rating>
      </template>

      <template v-slot:item.stock="{ item }">
        <div clas>
          <v-chip
            :color="item.stock ? 'green' : 'red'"
            :text="item.stock ? 'In stock' : 'Out of stock'"
            class="text-uppercase"
            size="small"
            label
          ></v-chip>
        </div>
      </template>
      <template v-slot:item.role="{ value }">
        <v-chip :color="getColor(value)"small> {{value}}</v-chip>
      </template>

      <template v-slot:item.isAllowed="{ item }">
        <div class="">
          <v-chip
            :color="item.isAllowed ? 'green' : 'red'"
            :text="item.isAllowed ? 'Ouvert' : 'Bloqué'"
            class="text-uppercase"
            size="small"
            label
          ></v-chip>
        </div>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon
          class="me-2"
          color="red"
          size="x-large"
          @click="lockAccount(item)"
        >
          mdi-account-lock
        </v-icon>
        <v-icon
          class="me-2"
          color="green"
          size="x-large"
          @click="openAccount(item)"
        >
          mdi-account-lock-open
        </v-icon>
        <v-icon size="x-large"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      items: [
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },

        {
          name: "Galaxy RTX 3080",
          image: "2.png",
          price: 799.99,
          rating: 4,
          stock: false,
        },
        {
          name: "Orion RX 6800 XT",
          image: "3.png",
          price: 649.99,
          rating: 3,
          stock: true,
        },
        {
          name: "Vortex RTX 3090",
          image: "4.png",
          price: 1499.99,
          rating: 4,
          stock: true,
        },
        {
          name: "Cosmos GTX 1660 Super",
          image: "5.png",
          price: 299.99,
          rating: 4,
          stock: false,
        },
      ],
      users: [],
      headers: [
        {
          key: "id",
          sortable: false,
          title: "ID",
        },
        { key: "userName", title: "Nom" },
        { key: "userFirstName", title: "Prenom" },
        { key: "role", title: "Role" },
        { key: "email", title: "Email" },
        { key: "phone", title: "Contact" },
        { key: "isAllowed", title: "Compte" },
        {
          key: "nbreAnnouncement",
          title: "Annonce restantes",
        },
        { title: "Actions", key: "actions", sortable: false },
      ],
    };
  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      this.loadUsers(userData);
    }
  },

  methods: {
    getColor(role) {
      if (role == "Locataire") return "red";
      else if (role == "Démarcheur") return "orange";
      else return "green";
    },
    lockAccount(item) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      console.log(userData.accessToken);
      axios
        .put(
          `http://localhost:8000/api/lockUser/${item.id}`,
          {},
          {
            headers: {
              "x-access-token": userData.accessToken,
            },
          }
        )
        .then((data) => {
          this.loadUsers(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openAccount(item) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      console.log(userData.accessToken);
      axios
        .put(
          `http://localhost:8000/api/unlockUser/${item.id}`,
          {},
          {
            headers: {
              "x-access-token": userData.accessToken,
            },
          }
        )
        .then((data) => {
          this.loadUsers(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    loadUsers(userData) {
      axios
        .get("http://localhost:8000/api/users", {
          headers: {
            "x-access-token": userData.accessToken,
          },
        })
        .then(({ data }) => {
          this.users = data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped></style>
