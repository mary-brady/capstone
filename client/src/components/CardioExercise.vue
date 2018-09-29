<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6" v-for="exercise in cardioEx" :key="exercise._id">
<div class="card border-primary mb-3 mt-3" style="max-width: 20rem;">
  <div class="card-header d-flex">
    <h4 class="header">{{exercise.title}}</h4>
    <span class="clickable" v-on:click="isHidden = !isHidden"><i class="fas fa-plus"></i></span>
  <div class="form-group" v-if="isHidden">
    <select class="custom-select" v-model="workout">
      <option v-for="workout in workouts" :key="workout._id" :value="workout">{{workout.title}}</option>
    </select>
    <button @click="addToWorkout(exercise)">Add Exercise</button>
  </div>
  </div>
  <div class="card-body">
    <h4>{{exercise.title}}</h4>
    <p class="card-text">{{exercise.description}}</p>
  </div>
</div>
</div>
</div>
</div>
    
</template>
<script>
import { bus } from "../index.js";
export default {
  name: "CardioExercise",
  data() {
    return {
      isHidden: false,
      workout: {}
    };
  },
  // watch: {
  //   workout: function(newWorkout, oldWorkout) {
  //     debugger;
  //     this.addToWorkout(newWorkout);
  //   }
  // },
  mounted() {
    this.$store.dispatch("getCardioEx");
  },
  computed: {
    cardioEx() {
      return this.$store.state.cardioExercises;
    },
    workouts() {
      return this.$store.state.workouts;
    }
  },
  methods: {
    switchComponents(comp) {
      bus.$emit("switchComp", comp);
    },
    addToWorkout(exercise) {
      this.workout.type = "cardio";
      this.workout.exercise = exercise._id;
      this.$store.dispatch("addToWorkout", this.workout);
    }
  }
};
</script>
<style scoped>
.clickable:hover {
  cursor: pointer;
}
.card-header {
  justify-content: space-between;
}
</style>
