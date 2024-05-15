<template>
  
  <div class="chart-container">
    <canvas id="chart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
export default {
  name: "ChartJs",
  props: {
    type: String,
    data: Object,
  },
  mounted() {
    const chrt = document.getElementById("chart");
    const chart = new Chart(chrt, {
      type: this.type,
      data: this.data,
      options: {
         legend: {
            display: false
         },
         scales: {
            yAxes: [{
      barPercentage: 0.5,
      gridLines: {
        display: false
      }
    }],
    xAxes: [{
      gridLines: {
        display: false,
        zeroLineColor: "black",
        zeroLineWidth: 2
      },
      ticks: {
        min: 0,
        max: 6500,
        stepSize: 1300
      },
      scaleLabel: {
        display: true,
      
      }
    }]
          }
        }
    });
    chart;
    Chart.defaults.backgroundColor = '#33cb4d';
  },
};
</script>
<style scoped>

</style>
