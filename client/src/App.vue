<template>
  <div id="app">
    <canvas id="planet-chart"></canvas>
    <router-view />
  </div>
</template>

<script>
  import Chart from 'chart.js';
  import planetChartData from './chart-data.js';
  export default {
    name: "app",
    data() {
      return {
        planetChartData: planetChartData,
      }
    },
    mounted() {
      this.createChart('planet-chart', this.planetChartData);
    },
    methods: {
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>