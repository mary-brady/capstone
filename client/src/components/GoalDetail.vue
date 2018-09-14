<template>
  <div id="">
    <canvas id="endurance-chart"></canvas>
    <form @submit.prevent="addEndurance">
      <input type="number" placeholder="Time" v-model="newTime.time" required>
      <button class="btn-success" type="submit">Create New Time</button>
    </form>
    <canvas id="weight-chart"></canvas>
    <div class='junk'>
      {{endurance}} {{weight}}
    </div>
  </div>
</template>

<script>
  import Chart from 'chart.js';
  import Vue from 'vue'
  export default {
    name: "goalDetail",
    data() {
      return {
        enduranceChartData: {
          type: 'line',
          data: {
            labels: [],
            datasets: [{
              label: 'Time',
              data: [],
              backgroundColor: "rgba(153,255,51,0.4)"
            }
            ]
          }
        },
        weightChartData: {
          type: 'line',
          data: {
            labels: [],
            datasets: [{
              label: 'Weight',
              data: [],
              backgroundColor: "rgba(153,255,51,0.4)"
            }
            ]
          }
        },
        newTime: {
          time: "",
          authorId: "",
          created: ""
        }
      }
    },
    computed: {
      endurance() {
        let eData = this.$store.getters.enduranceChartData
        if (document.getElementById('endurance-chart')) {
          this.createChart('endurance-chart', eData);
        }
        return eData
      },
      weight() {
        let wData = this.$store.getters.weightChartData
        if (document.getElementById('weight-chart')) {
          this.createChart('weight-chart', wData);
        }
        return wData
      },
      user() {
        return this.$store.state.user;
      }
    },
    mounted() {
      this.$store.dispatch('getEndurance')
      this.$store.dispatch('getWeight')
    },
    methods: {
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      },
      addEndurance() {
        this.newTime.authorId = this.user._id
        this.newTime.created = Date.now()
        console.log(this.newTime)
        this.$store.dispatch("addEndurance", this.newTime);
        // this.newTime = { time: "", authorId: "", created: "" };
      },
    }
  }
  ///strength - squat, deadlift, bench, shoulder, press, row
</script>

<style>
  .junk {
    display: none
  }
</style>