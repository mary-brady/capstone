<template>
 <div class="container-fluid">
<div class="card border-primary mb-3" style="max-width: 20rem;" v-for="exercise in strengthEx" :key="exercise._id">
  <div class="card-header">{{exercise.name}}</div>
  <div class="card-body">
    <p class="card-text">{{exercise.description}}</p>
  </div>
</div>
</div>
</template>
<script>
import { bus } from "../index.js";
export default {
  name: "StrengthExercise",
  mounted() {
    this.$store.dispatch("getStrengthEx");
  },
  computed: {
    strengthEx() {
      return this.$store.state.strengthExercises;
    }
  }
};
</script>
<style scoped>
</style>
