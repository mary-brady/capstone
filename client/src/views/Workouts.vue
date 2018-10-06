<template>
    <div id="workouts" class="container-fluid">
      <h1>Your Workouts</h1>
      <button @click="showModal">Create New Workout</button>
            <modal v-show="isModalVisible" :userId="user._id" @close="closeModal"></modal>
      <div class="card border-primary mb-3" style="max-width: 12rem" v-for="workout in workouts" :key="workout._id">
        <div class="card-header font-size">
          {{workout.title}}
        </div>
        <p class="card-subtitle mb-2 mt-1 text-muted desc">
          <i>{{workout.description}}</i>
        </p>
        <hr />
        <h6 class="card-subtitle text-muted font-size">Strength</h6>
        <hr />
        <ul v-for="strength in workout.strength" :key="strength._id">
          <li>{{strength.title}} | {{strength.reps}}x{{strength.sets}}</li>
        </ul>
        <hr />
        <h6 class="card-subtitle text-muted font-size">Cardio</h6>
        <hr />
        <ul v-for="cardio in workout.cardio" v-if="workout.cardio.length > 0" :key="cardio._id" class="font-size">
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
ul {
  text-align: left;
}
.desc {
  font-size: small;
}
.font-size {
  font-family: "Oldenburg", cursive;
}
hr {
  margin-top: 1px;
  margin-bottom: 3px;
}
</style>

