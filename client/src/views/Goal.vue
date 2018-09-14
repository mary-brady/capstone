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
    <h1>Weight Goals</h1>
    <div v-for="wGoal in weightGoals">
      {{wGoal.title}} - {{wGoal.description}}
      <button @click="deleteWeightGoal">Delete</button>
    </div>
    <h1>Strength Goals</h1>
    <div v-for="sGoal in strengthGoals">
      {{sGoal.title}} - {{sGoal.description}}
      <button>Delete</button>
    </div>
    <h1>Endurance Goals</h1>
    <div v-for="eGoal in enduranceGoals">
      {{eGoal.title}} - {{eGoal.description}}
      <button>Delete</button>
    </div>
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
    mounted() {
      this.$store.dispatch('getWeightGoals')
      this.$store.dispatch('getEnduranceGoals')
      this.$store.dispatch('getStrengthGoals')
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      weightGoals() {
        return this.$store.state.weightGoals;
      },
      enduranceGoals() {
        return this.$store.state.enduranceGoals;
      },
      strengthGoals() {
        return this.$store.state.enduranceGoals;
      }
    },
    methods: {
      addWeightGoal() {
        this.weightGoal.authorId = this.user._id
        this.weightGoal.created = Date.now()
        this.weightGoal.completed = false
        this.$store.dispatch("addWeightGoal", this.weightGoal)
      },
      addEnduranceGoal() {
        this.enduranceGoal.authorId = this.user._id
        this.enduranceGoal.created = Date.now()
        this.enduranceGoal.completed = false
        this.$store.dispatch("addEnduranceGoal", this.enduranceGoal)
      },
      addStrengthGoal() {
        this.strengthGoal.authorId = this.user._id
        this.strengthGoal.created = Date.now()
        this.strengthGoal.completed = false
        this.$store.dispatch("addStrengthGoal", this.strengthGoal)
      },
      deleteWeightGoal() {
        this._id = this.wGoal._id
        console.log(_id)
        this.$store.dispatch("deleteWeightGoal", _id)
      }
    },
    components: {

    }
  }
</script>

<style scoped>
</style>