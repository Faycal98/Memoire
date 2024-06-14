<template>
  <div class="content">
    <!-- container -->

    <div class="" v-if="users.length > 0">
      <v-divider></v-divider>

      <v-card flat class="table">
        <v-card-title class="d-flex align-center pe-2">
          <v-text-field
            v-model="search"
            density="compact"
            label="Recherche..."
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-divider></v-divider>
        <v-data-table v-model:search="search" :items="users" :headers="headers">
          <template v-slot:header.stock>
            <div clas>Stock</div>
          </template>
          <template v-slot:item.id="{ item }">
            <div :class="{ validateProfile: item.isVerified == 'Yes' }">
              {{ item.id }}
            </div>
          </template>

          <template v-slot:item.userName="{ item }">
          
            <div :class="{ validateProfile: item.isVerified == 'Yes' }">
          
            
              {{ item.userName }}
            </div>
          </template>

          <template v-slot:item.userFirstName="{ item }">
            <div :class="{ validateProfile: item.isVerified == 'Yes' }">
              {{ item.userFirstName }}
            </div>
          </template>

          <template v-slot:item.truePhoto="{ item }">
            <div
              :class="[
                item.isVerified == 'Yes' ? 'validateProfile' : '',
                'd-flex align-items-center',
              ]"
            >
              <img src="../assets/image.svg" height="40px" alt="icon" />
              <p class="mx-2 mb-0">{{ item.truePhoto }}</p>

              <v-dialog transition="dialog-top-transition" width="600">
                <template v-slot:activator="{ props: activatorProps }">
                  <span v-bind="activatorProps">
                    <i class="fa-solid fa-eye eyes"></i>
                  </span>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-card-text class="text-h2 pa-12">
                      <img
                        :src="`http://localhost:8000/userFiles/${item.truePhoto}`"
                        alt=""
                        width="100%"
                      />
                    </v-card-text>

                    <v-card-actions class="justify-end">
                      <v-btn
                        text="Fermer"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
          </template>

          <template v-slot:item.identity_card="{ item }">
            <div
            :class="[
                item.isVerified == 'Yes' ? 'validateProfile' : '',
                'd-flex align-items-center',
              ]"
            >
              <img src="../assets/pdf.svg" height="40px" alt="icon" />
              <p class="mx-2 mb-0">{{ item.identity_card }}</p>

              <v-dialog transition="dialog-top-transition" width="1000">
                <template v-slot:activator="{ props: activatorProps }">
                  <span v-bind="activatorProps">
                    <i class="fa-solid fa-eye eyes"></i>
                  </span>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-card-text class="text-h2 pa-12">
                      <object
                        class="pdf"
                        type="application/pdf"
                        :data="`http://localhost:8000/userFiles/${item.identity_card}`"
                        width="800"
                        height="500"
                      ></object>
                    </v-card-text>

                    <v-card-actions class="justify-end">
                      <v-btn
                        text="Fermer"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
          </template>

          <template v-slot:item.actions="{ item }">
            <span  @click="validateFiles(item)"      :class="[
                item.isVerified == 'Yes' ? 'validateProfile' : '',
                'validate',
              ]">
              <i class="fa-solid fa-circle-check text-h5 text-success"></i>
            </span>

            <span class="validate" @click="deleteFiles(item)">
              <v-icon class="mx-2" color="red" size="x-large">
                mdi-close-circle
              </v-icon>
            </span>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary"> Actualiser </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
    <div class="empty" v-else>
      <div class="">
        <h2>Aucun fichier</h2>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      users: [],
      headers: [
       /* {
          key: "id",
          sortable: false,
          title: "Id",
        },*/
        
        { key: "userName", title: "Noms" },
        { key: "userFirstName", title: "Prénoms" },
       /* { key: "role", title: "Rôles" },*/
        { key: "truePhoto", title: "Photos d'identité" },
        { key: "identity_card", title: "Pièces biométriques" },

        { title: "Actions", key: "actions", sortable: false },
      ],
    };
  },
  mounted() {
    console.log(2342);
    this.loadData();
  },

  methods: {
    seePhoto(item) {
      console.log(item);
    },
    loadData() {
      const userData = JSON.parse(localStorage.getItem("userData"));
      console.log(userData);
      axios
        .get("http://localhost:8000/api/usersPersonalInfo", {
          headers: {
            "x-access-token": userData.accessToken,
          },
        })
        .then(({ data }) => {
          console.log(2342);
          console.log(data);
          this.users = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteFiles(item) {
      console.log(13421);
      const userData = JSON.parse(localStorage.getItem("userData"));
      console.log(userData.accessToken);
      axios
        .put(
          `http://localhost:8000/api/deleteFiles/${item.id}`,
          {},
          {
            headers: {
              "x-access-token": userData.accessToken,
            },
          }
        )
        .then((data) => {
          this.loadData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validateFiles(item) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      console.log(userData.accessToken);
      axios
        .put(
          `http://localhost:8000/api/validateFiles/${item.id}`,
          {},
          {
            headers: {
              "x-access-token": userData.accessToken,
            },
          }
        )
        .then((data) => {
          this.loadData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
body {
  margin-top: 20px;
  background: #dcdcdc;
}

tr td:has(.validateProfile) {
  background-color: rgb(235, 254, 235);
}
.empty {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.validate {
  cursor: pointer;
}
.card-box {
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 30px;
  background-color: #fff;
}

.pdf {
  width: 100%;
  aspect-ratio: 4 / 3;
}

.file-man-box {
  padding: 20px;
  border: 1px solid #e3eaef;
  border-radius: 5px;
  position: relative;
  margin-bottom: 20px;
}

.file-man-box .file-close {
  color: #f1556c;
  position: absolute;
  line-height: 24px;
  font-size: 24px;
  right: 10px;
  top: 10px;
  visibility: hidden;
}

.file-man-box .file-img-box {
  line-height: 120px;
  text-align: center;
}

.eyes {
  cursor: pointer;
}

.file-man-box .file-img-box img {
  height: 64px;
}

.file-man-box .file-download {
  font-size: 32px;
  color: #98a6ad;
  position: absolute;
  right: 10px;
}

.file-man-box .file-download:hover {
  color: #313a46;
}

.file-man-box .file-man-title {
  padding-right: 25px;
}

.file-man-box:hover {
  -webkit-box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06),
    0 1px 0 0 rgba(0, 0, 0, 0.02);
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
}

.file-man-box:hover .file-close {
  visibility: visible;
}
.text-overflow {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: 100%;
  overflow: hidden;
}
h5 {
  font-size: 15px;
}
</style>
