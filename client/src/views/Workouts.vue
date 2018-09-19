<template>
    <div id="workouts" class="container-fluid">
      <h1>WELCOME TO WORKOUT TOWN</h1>
      <button @click="showModal">Create New Workout</button>
            <modal v-show="isModalVisible" :userId="user._id" @close="closeModal"></modal>
      <div class="card border-primary mb-3" style="max-width: 20rem" v-for="workout in workouts" :key="workout._id">
        <div class="card-header">
          {{workout.title}}
        </div>
        <p class="card-text">
          {{workout.description}}
        </p>
        <ul>
          <li v-if="(workout.strength.length > 0)">{{workout.strength}}</li>
          <li v-if="(workout.cardio.length > 0)">{{workout.cardio}}</li>
        </ul>
      </div>
      <button class="btn btn-primary">Strength Exercises</button>
      <button class="btn btn-secondary">Cardio Exercises</button>
    </div>
</template>
<script>
import CardioExercise from "@/components/CardioExercise.vue";
import StrengthExercise from "@/components/StrengthExercise.vue";
import modal from "@/components/CreateWorkout.vue";

export default {
  name: "workouts",
  components: {
    StrengthExercise,
    CardioExercise,
    modal
  },
  data() {
    return {
      isModalVisible: false
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
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>
<style scoped>
</style>

