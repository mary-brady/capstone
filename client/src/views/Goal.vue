<template>
  <div class="container-fluid mt-4">
    <h1>{{user.name}}'s Goals</h1>
    <div class="row">
      <div class="dropdown offset-sm-4 col-sm-4 mb-5 mt-3">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Goal Type
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#" @click="weight = !weight">Weight Loss/Gain</a>
          <a class="dropdown-item" href="#" @click="endurance = !endurance">Endurance</a>
          <a class="dropdown-item" href="#" @click="strength = !strength">Strength</a>
        </div>
      </div>
      <!-- 
            <div class="dropdown col-sm-4 mb-5">
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Progress Charts
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" @click="weightChart = !weightChart">Weight Chart</a>
                    <a class="dropdown-item" href="#" @click="enduranceChart = !enduranceChart">Endurance Chart</a>
                    <a class="dropdown-item" href="#" @click="strengthChart = !strengthChart">Strength Chart</a>
                </div>
            </div> -->
    </div>
    <div class="row">
      <div class="col-sm-3 offset-lg-2 text-justify text-left">

        <h1>Weight Goals</h1>
        <div v-for="wGoal in weightGoals" :wGoalData="wGoal">
          <div v-if="!wGoal.completed">
            <i class="fas fa-check-circle green" @click="editWeightGoal(wGoal)"></i>
            {{wGoal.title}} - {{wGoal.description}}
            <i class="fas fa-times red" @click="deleteWeightGoal(wGoal._id)" title="Delete"></i>
          </div>
          <div v-else>
            <strike> {{wGoal.title}} - {{wGoal.description}} </strike>
            <i class="fas fa-times red" @click="deleteWeightGoal(wGoal._id)" title="Delete"></i>
            +10xp (no/yes?)
          </div>
        </div>
        <div v-if="weight">
          <form @submit.prevent="addWeightGoal" class="col d-flex justify-content-center">
            <div class="form-group">
              <input type="text" placeholder="Weight Goal Title" v-model="weightGoal.title" class="form-control mb-1 mt-1">
              <input type="text" placeholder="Weight Goal Description" v-model="weightGoal.description" class="form-control mb-1 mt-1">
              <button type="submit" class="btn btn-success mb-1 mt-1">Add Goal</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-sm-3 text-justify text-left">
        <h1>Endurance Goals</h1>
        <div v-for="eGoal in enduranceGoals">
          <div v-if="!eGoal.completed">
            <i class="fas fa-check-circle green" @click="editEnduranceGoal(eGoal)"></i>
            {{eGoal.title}} - {{eGoal.description}}
            <i class="fas fa-times red" @click="deleteEnduranceGoal(eGoal._id)" title="Delete"></i>
          </div>
          <div v-else>
            <strike> {{eGoal.title}} - {{eGoal.description}} </strike>
            <i class="fas fa-times red" @click="deleteWnduranceGoal(eGoal._id)" title="Delete"></i>
            +10xp (no/yes?)
          </div>
        </div>
        <div v-if="endurance">
          <form @submit.prevent="addEnduranceGoal" class="col d-flex justify-content-center">
            <div class="form-group">
              <input type="text" placeholder="Endurance Goal Title" v-model="enduranceGoal.title" class="form-control mb-1 mt-1">
              <input type="text" placeholder="Endurance Goal Description" v-model="enduranceGoal.description" class="form-control mb-1 mt-1">
              <button type="submit" class="btn btn-success mb-1 mt-1">Add Goal</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-sm-3 text-justify">

        <h1>Strength Goals</h1>
        <div v-for="sGoal in strengthGoals">
          <div v-if="!sGoal.completed">
            <i class="fas fa-check-circle green" @click="editStrengthGoal(sGoal)"></i>
            {{sGoal.title}} - {{sGoal.description}}
            <i class="fas fa-times red" @click="deleteStrengthGoal(sGoal._id)" title="Delete"></i>
          </div>
          <div v-else>
            <strike> {{sGoal.title}} - {{sGoal.description}} </strike>
            <i class="fas fa-times red" @click="deleteStrengthGoal(sGoal._id)" title="Delete"></i> +10xp (no/yes?)
          </div>
        </div>
        <div v-if="strength">
          <form @submit.prevent="addStrengthGoal" class="col d-flex justify-content-center">
            <div class="form-group">
              <input type="text" placeholder="Strength Goal Title" v-model="strengthGoal.title" class="form-control mb-1 mt-1">
              <input type="text" placeholder="Strength Goal Description" v-model="strengthGoal.description" class="form-control mb-1 mt-1">
              <button type="submit" class="btn btn-success mb-1 mt-1">Add Goal</button>
            </div>
          </form>
        </div>
      </div>
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

    <GoalDetail />
  </div>
</template>

<script>
  import GoalDetail from "../components/GoalDetail";
  export default {
    name: "goal",
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
      };
    },
    mounted() {
      this.$store.dispatch("getWeightGoals");
      this.$store.dispatch("getEnduranceGoals");
      this.$store.dispatch("getStrengthGoals");
    },
    created() {
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "home" });
      }
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
        return this.$store.state.strengthGoals;
      }
    },
    methods: {
      addWeightGoal() {
        this.weightGoal.authorId = this.user._id;
        this.weightGoal.created = Date.now();
        this.weightGoal.completed = false;
        this.$store.dispatch("addWeightGoal", this.weightGoal);
      },
      addEnduranceGoal() {
        this.enduranceGoal.authorId = this.user._id;
        this.enduranceGoal.created = Date.now();
        this.enduranceGoal.completed = false;
        this.$store.dispatch("addEnduranceGoal", this.enduranceGoal);
      },
      addStrengthGoal() {
        this.strengthGoal.authorId = this.user._id;
        this.strengthGoal.created = Date.now();
        this.strengthGoal.completed = false;
        this.$store.dispatch("addStrengthGoal", this.strengthGoal);
      },
      deleteWeightGoal(id) {
        this.$store.dispatch("deleteWeightGoal", id);
      },
      deleteEnduranceGoal(id) {
        this.$store.dispatch("deleteEnduranceGoal", id);
      },
      deleteStrengthGoal(id) {
        this.$store.dispatch("deleteStrengthGoal", id);
      },
      editWeightGoal(wGoal) {
        this.weightGoal._id = wGoal._id
        this.weightGoal.completed = true;
        this.$store.dispatch('editWeightGoal', this.weightGoal)
      },
      editEnduranceGoal(eGoal) {
        this.enduranceGoal._id = eGoal._id
        this.enduranceGoal.completed = true;
        this.$store.dispatch('editEnduranceGoal', this.enduranceGoal)
      },
      editStrengthGoal(sGoal) {
        this.strengthGoal._id = sGoal._id
        this.strengthGoal.completed = true;
        this.$store.dispatch('editStrengthGoal', this.strengthGoal)
      }
    },
    components: {
      GoalDetail
    }
  };
</script>

<style scoped>
  h1 {
    font-weight: 700;
  }

  .red {
    /* font-size: 500px; */
    color: #8b0000;
  }

  .red:hover {
    color: red;
  }

  .green {
    /* font-size: 500px; */
    color: green;
  }

  .green:hover {
    color: yellowgreen;
  }
</style>