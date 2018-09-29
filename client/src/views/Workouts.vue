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
        <ul v-for="strength in workout.strength" :key="strength._id">
          <li>{{strength.title}}</li>
        </ul>
        <hr />
        <ul v-for="cardio in workout.cardio" v-if="workout.cardio.length > 0" :key="cardio._id">
          <li>{{cardio.title}}</li>
        </ul>
      </div>
      <button class="btn btn-primary" @click="switchComponents('StrengthExercise')" :disabled="currentComp === 'StrengthExercise'">Strength Exercises</button>
      <button class="btn btn-secondary" @click="switchComponents('CardioExercise')" :disabled="currentComp === 'CardioExercise'">Cardio Exercises</button>
      <component id="StrengthExercise" :is="currentComp"></component>
    </div>
</template>
<script>
import CardioExercise from "@/components/CardioExercise.vue";
import StrengthExercise from "@/components/StrengthExercise.vue";
import modal from "@/components/CreateWorkout.vue";
import { bus } from "../index.js";

export default {
  name: "workouts",
  components: {
    StrengthExercise,
    CardioExercise,
    modal
  },
  data() {
    return {
      isModalVisible: false,
      currentComp: StrengthExercise
    };
  },
  mounted() {
    this.$store.dispatch("getWorkouts");
  },
  created() {
    bus.$on("switchComp", comp => {
      this.currentComp = comp;
    });
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
    },
    switchComponents(comp) {
      bus.$emit("switchComp", comp);
    }
  }
};
</script>
<style scoped>
</style>

