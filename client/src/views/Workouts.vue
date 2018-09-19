<template>
    <div id="workouts" class="container-fluid">
      <h1>WELCOME TO WORKOUT TOWN</h1>
      <div class="card border-primary mb-3" style="max-width: 20rem">
        <div class="card-header">
          Workouts
        </div>
        <h4 class="card-title">Workout Title Here</h4>
        <p class="card-text">
          Blahblahblah
        </p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Test</li>
          <li class="list-group-item">Testing</li>
          <li class="list-group-item">1 2 3</li>
        </ul>
      </div>
      <button class="btn btn-primary">Strength Exercises</button>
      <button class="btn btn-secondary">Cardio Exercises</button>
    </div>
</template>
<script>
import CardioExercise from "@/components/CardioExercise.vue";
import StrengthExercise from "@/components/StrengthExercise.vue";
export default {
  name: "workouts",
  components: {
    StrengthExercise,
    CardioExercise
  }
};
</script>
<style scoped>
</style>

