<template>
  <div class="containe">
    <div class="row">
    <div class="col-3">sidebar</div>
    <div class="col-9">
      <div class="">
        <div class="row gap-4 md:col-span-6">
          <div class="widget-area col proclinic-box-shadow color-red">
            <div class="widget-left">
              <span class="ti-user">
                <font-awesome-icon :icon="['far', 'user']" />
              </span>
            </div>
            <div class="widget-right">
              <h4 class="wiget-title">Patients</h4>
              <span class="numeric color-red">348</span>
              <p class="inc-dec mb-0">
                <span class="ti-angle-up"></span> +20% Increased
              </p>
            </div>
          </div>

          <div class="widget-area col proclinic-box-shadow color-green">
            <div class="widget-left">
              <span class="ti-bar-chart">
                <font-awesome-icon :icon="['fas', 'chart-simple']" />
              </span>
            </div>
            <div class="widget-right">
              <h4 class="wiget-title">Admissions</h4>
              <span class="numeric color-green">1585</span>
              <p class="inc-dec mb-0">
                <span class="ti-angle-down"></span> -15% Decreased
              </p>
            </div>
          </div>

          <div class="widget-area col proclinic-box-shadow color-yellow">
            <div class="widget-left">
              <span class="ti-money">
                <font-awesome-icon :icon="['fas', 'user-doctor']" />
              </span>
            </div>
            <div class="widget-right">
              <h4 class="wiget-title">Docteurs</h4>
              <span class="numeric color-yellow">73</span>
              <p class="inc-dec mb-0">
                <span class="ti-angle-up"></span> +10% Increased
              </p>
            </div>
          </div>
        </div>

        <div class="row gap-4">
          <div class="urgence-container col-5 widget-area-2">
            <h3 class="widget-title">Admission par année</h3>
            <ChartBar :type="bar" :data="barData"></ChartBar>
          </div>

          <div class="urgence-container col-6 widget-area-2">
            <h3 class="widget-title">Admission par année</h3>
            <PatientChart :type="bar3" :data="barData3"></PatientChart>
          </div>
        </div>
        <div class="table-container mt-9">
          <div class="widget-area-2 proclinic-box-shadow table-container">
            <h3 class="widget-title">Admissions</h3>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nom du patient</th>
                  <th>Docteur</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Heure</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rajesh</td>
                  <td>Manoj Kumar</td>
                  <td>Dental</td>
                  <td>12-10-2018</td>
                  <td>12:10PM</td>
                  <td>
                    <span class="badge badge-success">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>Riya</td>
                  <td>Daniel</td>
                  <td>Ortho</td>
                  <td>12-10-2018</td>
                  <td>1:10PM</td>
                  <td>
                    <span class="badge badge-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Siri</td>
                  <td>Daniel</td>
                  <td>Ortho</td>
                  <td>12-10-2018</td>
                  <td>1:30PM</td>
                  <td>
                    <span class="badge badge-danger">Cancelled</span>
                  </td>
                </tr>
                <tr>
                  <td>Rajesh</td>
                  <td>Manoj Kumar</td>
                  <td>Dental</td>
                  <td>12-10-2018</td>
                  <td>12:10PM</td>
                  <td>
                    <span class="badge badge-success">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>Riya</td>
                  <td>Daniel</td>
                  <td>Ortho</td>
                  <td>12-10-2018</td>
                  <td>1:10PM</td>
                  <td>
                    <span class="badge badge-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Siri</td>
                  <td>Daniel</td>
                  <td>Ortho</td>
                  <td>12-10-2018</td>
                  <td>1:30PM</td>
                  <td>
                    <span class="badge badge-danger">Cancelled</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="">
          <UserTable></UserTable>
        </div>
      </div>
    </div>
  </div>
  </div>
 
</template>
<script>
import UserTable from "../components/UserTable.vue";
import PatientChart from "@/components/PatientChart.vue";
import ChartBar from "@/components/UrgenceChart.vue";

export default {
  data() {
    return {
      barName: "Bar Chart",
      bar: "line",
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
    ChartBar,
    PatientChart,
    UserTable
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
  border-image: initial;
}
.table-bordered {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 226, 230);
  border-image: initial;
}

table.table tbody td,
table.table thead th {
  font-size: 14px;
}

.table th {
  text-align: left;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.table td,
.table th {
  padding: 0.75rem;
}

.table-bordered td,
.table-bordered th {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 226, 230);
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
  font-size: 13px;
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
  border-radius: 0;
  display: flex;
  align-items: center;
  border: 0;
  -webkit-box-shadow: 0 0 0 1px #dce3ec, 0 8px 16px 0 #dce3ec;
  box-shadow: 0 0 0 1px #dce3ec, 0 8px 16px 0 #dce3ec;
  background: #fff;
  margin-top: 20px;
}

.menu-link.activeMenu > ul {
  height: 120px;
}
</style>
