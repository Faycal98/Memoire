<template>
  <div class="container">
    <div class="row">
      <div class="col-12 px-5">
        <div class="">
          <div class="row gap-4 md:col-span-6">
            <div
              class="widget-area col proclinic-box-shadow color-red"
              style="
                background: rgb(251, 233, 233) !important;
                border: 1px solid #e57498;
              "
            >
              <div class="widget-left">
                <span
                  class="ti-user"
                  style="background: rgb(251, 233, 233) !important"
                >
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
              </div>
              <div class="widget-right">
                <h4 class="wiget-title">Locataires</h4>
                <span class="numeric color-red">{{ locataireAmount }}</span>
                <p class="inc-dec mb-0">
               <!--    <span class="ti-angle-up">+20% Increased</span> -->
                </p>
              </div>
            </div>

            <div
              class="widget-area col proclinic-box-shadow color-green"
              style="
                background: rgb(235, 254, 235) !important;
                border: 1px solid #3cb371;
              "
            >
              <div class="widget-left">
                <span
                  class="ti-bar-chart"
                  style="background: rgb(235, 254, 235) !important"
                >
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
              </div>
              <div class="widget-right">
                <h4 class="wiget-title">Propriétaires</h4>
                <span class="numeric color-green">{{
                  proprietaireAmount
                }}</span>
                <p class="inc-dec mb-0">
              <!--     <span class="ti-angle-down">-15% Decreased</span> -->
                </p>
              </div>
            </div>

            <div
              class="widget-area col proclinic-box-shadow color-yellow"
              style="
                background: rgb(254, 247, 235) !important;
                border: 1px solid #ff7d00;
              "
            >
              <div class="widget-left">
                <span
                  class="ti-money"
                  style="background: rgb(254, 247, 235) !important"
                >
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
              </div>
              <div class="widget-right">
                <h4 class="wiget-title">Démarcheurs</h4>
                <span class="numeric color-yellow">{{ demarcheurAmount }}</span>
                <p class="inc-dec mb-0">
               <!--    <span class="ti-angle-up">+10% Increased</span> -->
                </p>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <UserTable></UserTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserTable from "../components/UserTable.vue";
import axios from "axios";

export default {
  data() {
    return {
      barName: "Bar Chart",
      bar: "line",
      demarcheurAmount: "",
      proprietaireAmount: "",
      locataireAmount: "",
      bar3: "bar",
      barData: {
        labels: [2000, 2015, 2016, 2017, 2018, 2020],
        datasets: [
          {
            data: [10, 17.7, 50, 14, 13, 24],

            fill: false,
            borderColor: "#e57498",
            borderWidth: 2,
          },
        ],
      },
      barData3: {
        labels: [2000, 2015, 2016, 2017, 2018, 2020],
        datasets: [
          {
            data: [18, 17.7, 15, 14, 13, 24],
            backgroundColor: "#ff7d00",

            borderWidth: 2,
          },
        ],
      },
      active: false,
      activeDoc: false,
    };
  },
  components: {
    UserTable,
  },
  mounted() {
    const userData = this.$store.state.user;
    let roles = ["Démarcheur", "Locataire", "Propriétaire"];
    axios
      .get(`http://localhost:8000/api/users/number?role=${roles[0]}`, {
        headers: {
          "x-access-token": userData.accessToken,
        },
      })
      .then(({ data }) => {
        this.demarcheurAmount = data.amount;
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:8000/api/users/number?role=${roles[1]}`, {
        headers: {
          "x-access-token": userData.accessToken,
        },
      })
      .then(({ data }) => {
        console.log({ data });
        this.locataireAmount = data.amount;
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:8000/api/users/number?role=${roles[2]}`, {
        headers: {
          "x-access-token": userData.accessToken,
        },
      })
      .then(({ data }) => {
        this.proprietaireAmount = data.amount;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.color-green {
  color: #3cb371;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.color-yellow {
  color: #ff7d00;
}

.dashboard-grid {
  grid-template-columns: 1fr 5fr;
  gap: 20px;
  padding: 0 10px 0 0;
}

.widget-title {
  color: #e57498;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
}

.list-child {
  font-size: 16px;
}
.widget-title {
  font-size: 16px;
  padding-bottom: 0.5rem;
  margin-bottom: 10px;
  border-bottom: 1px solid #eeeeee;
}
.widget-area-2 {
  background: #fff;
  margin-top: 20px;
  padding: 20px;
  padding-bottom: 2px;
  box-shadow: 0 0 0 1px #dce3ec, 0 8px 16px 0 #dce3ec;
  border-radius: 2px;
}

.table-responsive > .table-bordered {
  border-width: 0px;
  border-style: initial;
  border-color: initial;
}
.table-bordered {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}

table.table tbody td,
table.table thead th {
  font-size: 14px;
}

.table th {
  font-weight: bold !important;
  /*text-align: center;*/
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border: 1px solid #fff7f7;
}

.table td,
.table th {
  padding: 0.75rem;
}

.table-bordered td,
.table-bordered th {
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-image: initial;
}

.widget-left [class^="ti-"],
.widget-left [class*=" ti-"] {
  padding: 17px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid;
}

.widget-left {
  width: 35%;
  display: inline-block;
  vertical-align: 22px;
  font-size: 30px;
  text-align: center;
}
.sidebar {
  background: linear-gradient(to left, #e57498, #b24592);
  min-height: 100vh;
  color: white;
}

.widget-right {
  width: 62%;
  display: inline-block;
  padding: 20px 0;
}

.widget-area .numeric {
  font-size: 30px;
  letter-spacing: 1px;
}

h4.wiget-title {
  margin-bottom: 0.5rem;
  font-size: 18px;
  font-weight: bolder;
  letter-spacing: 0.5px;
}
.nav-help {
  padding: 25px;
  background: rgba(0, 0, 0, 0.1);
}
p {
  font-size: 1em;
  line-height: 1.7em;
  color: #666;
  letter-spacing: 0.3px;
}

.inc-dec {
  font-size: 12px;
}

.sidebar .menu-link > ul {
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
}

.sidebar .menu-link {
  padding: 10px 10px 10px 25px;
  font-size: 18px;
  display: block;
  letter-spacing: 1px;
}

.sidebar li {
  line-height: 42px;
  min-height: 30px;
}

.widget-area {
  background: #fff;
  border-radius: 2px;
}

.color-red {
  color: #e57498;
}

.proclinic-box-shadow.table-container {
  display: block;
}

.proclinic-box-shadow {
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 0;

  background: #fff;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
}
.proclinic-box-shadow:hover {
  transform: translateY(-7px);
}

.menu-link.activeMenu > ul {
  height: 120px;
}
</style>
