<template>
  <div id="">

    <div class="dropdown col-sm-4 mb-5">
      <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        Progress Charts
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" @click="weightChart = !weightChart">Weight Chart</a>
        <a class="dropdown-item" href="#" @click="enduranceChart = !enduranceChart">Endurance Chart</a>
        <a class="dropdown-item" href="#" @click="strengthChart = !strengthChart">Strength Chart</a>
      </div>
    </div>
    <div v-if="enduranceChart">
      <h1> Endurance Chart</h1>
      <canvas id="endurance-chart"></canvas>
      <form @submit.prevent="addEndurance">
        <input type="number" placeholder="Time" v-model="newTime.time" required>
        <button class="btn-success" type="submit">Create New Time</button>
      </form>
    </div>
    <div v-if="weightChart">
      <h1> Weight Chart</h1>
      <canvas id="weight-chart"></canvas>

      <form @submit.prevent="addWeight">
        <input type="number" placeholder="Weight" v-model="newWeight.weight" required>
        <button class="btn-success" type="submit">Create New Weight</button>
      </form>
    </div>
    <div v-if="strengthChart">
      <h1> Strength Chart</h1>
      <canvas id="strength-chart"></canvas>
    </div>
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
        weightChart: false,
        enduranceChart: false,
        strengthChart: false,
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
        strengthChartData: {
          type: 'bar',
          data: {
            labels: ['Sep. 1', 'Sep. 2', 'Sep. 3', 'Sep. 4'],
            datasets: [{
              label: 'Strength',
              data: [50, 55, 50, 70],
              backgroundColor: "rgba(153,255,51,0.4)"
            },
            {
              label: 'Strength2',
              data: [20, 30, 10, 50],
              backgroundColor: "rgba(53,255,51,0.4)"
            },
            {
              label: 'Strength3',
              data: [20, 10, 20, 40],
              backgroundColor: "rgba(83,255,51,0.4)"
            },
            {
              label: 'Strength4',
              data: [10, 30, 25, 60],
              backgroundColor: "rgba(103,255,51,0.4)"
            },
            {
              label: 'Strength5',
              data: [15, 20, 27, 50],
              backgroundColor: "rgba(37,255,51,0.4)"
            }
            ]
          }
        },
        newTime: {
          time: "",
          authorId: "",
          created: ""
        },
        newWeight: {
          weight: "",
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
      this.createChart('strength-chart', this.strengthChartData);
    },
    //temp mount
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
      addWeight() {
        this.newWeight.authorId = this.user._id
        this.newWeight.created = Date.now()
        console.log(this.newWeight)
        this.$store.dispatch("addWeight", this.newWeight);
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