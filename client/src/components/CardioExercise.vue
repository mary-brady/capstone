<template>
<div class="container-fluid">
<div class="card border-primary mb-3" style="max-width: 20rem;" v-for="exercise in cardioEx" :key="exercise._id">
  <div class="card-header">{{exercise.name}}</div>
  <div class="card-body">
    <p class="card-text">{{exercise.description}}</p>
  </div>
</div>
</div>
    
</template>
<script>
export default {
  name: "CardioExercise",
  mounted() {
    this.$store.dispatch("getCardioEx");
  },
  computed: {
    cardioEx() {
      return this.$store.state.cardioExercises;
    }
  }
};
</script>
<style scoped>
</style>
