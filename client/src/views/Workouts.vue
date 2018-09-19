<template>
    <div id="workouts" class="container-fluid">
      <h1>WELCOME TO WORKOUT TOWN</h1>
      <div class="card border-primary mb-3" style="max-width: 20rem" v-for="workout in workouts" :key="workout._id">
        <div class="card-header">
          Workouts?
        </div>
        <h4 class="card-title">{{workout.title}}</h4>
        <p class="card-text">
          {{workout.description}}
        </p>
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
  },
  data() {
    return {
      newWorkout: {
        title: "",
        description: "",
        authorId: this.user._id
      }
    };
  },
  mounted() {
    this.$store.dispatch("getWorkouts");
  },
  computed: {
    workouts() {
      return this.$store.state.workouts;
    },
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
<style scoped>
</style>

