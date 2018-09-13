<template>
  <div>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Goal Type
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" @click="weight = !weight">Weight Loss/Gain</a>
        <a class="dropdown-item" href="#" @click="endurance = !endurance">Endurance</a>
        <a class="dropdown-item" href="#" @click="strength = !strength">Strength</a>
      </div>
    </div>
    <div v-if="weight">
      <form @submit.prevent="addWeightGoal" class="col-12 d-flex justify-content-center">
        <div class="form-group">
          <input type="text" placeholder="Weight Goal Title" v-model="weightGoal.title" class="form-control mb-1 mt-1">
          <input type="text" placeholder="Weight Goal Description" v-model="weightGoal.description" class="form-control mb-1 mt-1">
          <button type="submit" class="btn btn-success mb-1 mt-1">Add Goal</button>
        </div>
      </form>
    </div>
    <div v-if="endurance">
      <form @submit.prevent="addEnduranceGoal" class="col-12 d-flex justify-content-center">
        <div class="form-group">
          <input type="text" placeholder="Endurance Goal Title" v-model="enduranceGoal.title" class="form-control mb-1 mt-1">
          <input type="text" placeholder="Endurance Goal Description" v-model="enduranceGoal.description" class="form-control mb-1 mt-1">
          <button type="submit" class="btn btn-success mb-1 mt-1">Add Goal</button>
        </div>
      </form>
    </div>
    <div v-if="strength">
      <form @submit.prevent="addStrengthGoal" class="col-12 d-flex justify-content-center">
        <div class="form-group">
          <input type="text" placeholder="Strength Goal Title" v-model="strengthGoal.title" class="form-control mb-1 mt-1">
          <input type="text" placeholder="Strength Goal Description" v-model="strengthGoal.description" class="form-control mb-1 mt-1">
          <button type="submit" class="btn btn-success mb-1 mt-1">Add Goal</button>
        </div>
      </form>
    </div>
    <!-- <h3>Weight Goal:</h3>
    
      <h3>Endurance Goal:</h3>
      <form @submit.prevent="addEnduranceGoal" class="col-12 d-flex justify-content-center mb-5">
          <div class="form-group">
            <input type="text"  placeholder="Goal Description" class="form-control mb-1 mt-1">
            <button type="submit" class="btn btn-success mb-1 mt-1">Add Goal</button>
          </div>
        </form>
        <h3>Strength Goal:</h3>
        <form @submit.prevent="addStrengthGoal" class="col-12 d-flex justify-content-center">
            <div class="form-group">
              <input type="text"  placeholder="Goal Description" class="form-control mb-1 mt-1">
              <button type="submit" class="btn btn-success mb-1 mt-1">Add Goal</button>
            </div>
          </form> -->
  </div>
</template>

<script>
  export default {
    name: 'goal',
    data() {
      return {
        weight: false,
        endurance: false,
        strength: false,
        weightGoal: {
          title: "",
          description: "",
          authorId: "",
          created: "",
          completed: false
        },
        enduranceGoal: {
          title: "",
          description: "",
          authorId: "",
          created: "",
          completed: false
        },
        strengthGoal: {
          title: "",
          description: "",
          authorId: "",
          created: "",
          completed: false
        }
      }
    },
    methods: {
      addWeightGoal() {
        this.$store.dispatch("addWeightGoal")
      },
      addEnduranceGoal() {

      },
      addStrengthGoal() {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
</style>