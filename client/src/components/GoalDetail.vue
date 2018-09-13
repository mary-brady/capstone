<template>
  <div id="">
    <canvas id="endurance-chart"></canvas>
    <form @submit.prevent="addEndurance">
      <input type="number" placeholder="Time" v-model="newTime.time" required>
      <button class="btn-success" type="submit">Create New Time</button>
    </form>

  </div>
</template>

<script>
  import Chart from 'chart.js';
  import enduranceChartData from './GoalEdit.vue';
  export default {
    name: "goalDetail",
    data() {
      return {
        enduranceChartData: enduranceChartData,
        newTime: {
          time: "",
          authorId: "",
          created: ""
        }
      }
    },
    computed: {
      endurance() {
        return this.$store.state.boards;
      },
      user() {
        return this.$store.state.user;
      }
    },
    mounted() {
      this.createChart('endurance-chart', this.enduranceChartData);
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
</script>