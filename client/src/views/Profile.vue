<template>
    <div class="profile container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="font-size">Hello, Mighty <strong>{{user.username}}</strong>!</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-xs-12">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-6" >
                  <img src="../assets/glamour4.png" class="img-fluid" alt="" />
                </div>
                <div class="col-6"> 
              <div class="row">
                <div class="col-6 mb-1 mt-1" v-if="user.xp >= 100">
                  <img src="../assets/glamour3.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 mb-1 mt-1" v-else>
                  <img src="../assets/glamour3.png" class="img-fluid fade" alt="">
                </div>
                <div class="col-6 mb-1 mt-1"  v-if="user.xp >= 500">
                  <img src="../assets/knight1.png" class="img-fluid" alt="">
                </div><div class="col-6 mb-1 mt-1"  v-else>
                  <img src="../assets/knight1.png" class="img-fluid fade" alt="">
                </div>
                <div class="col-6 mb-1 mt-1"  v-if="user.xp >= 1000">
                  <img src="../assets/knight2.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 mb-1 mt-1"  v-else>
                  <img src="../assets/knight2.png" class="img-fluid fade" alt="">
                </div>
                <div class="col-6 mb-1 mt-1"  v-if="user.xp >= 1500">
                  <img src="../assets/knight3.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 mb-1 mt-1"  v-else>
                  <img src="../assets/knight3.png" class="img-fluid fade" alt="">
                </div>
                <div class="col-6 mb-1 mt-1"  v-if="user.xp >= 2000">
                  <img src="../assets/glamour5.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 mb-1 mt-1"  v-else>
                  <img src="../assets/glamour5.png" class="img-fluid fade" alt="">
                </div>
                <div class="col-6 mb-1 mt-1" v-if="user.xp == 10000">
                  <img src="../assets/glamour7.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 mb-1 mt-1" v-else>
                  <img src="../assets/glamour7.png" class="img-fluid fade" alt="">
                </div>
              </div>
                </div>
              </div>
            </div>
        <div class="col-12 mb-4 mt-4">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-3">
                  <p><strong>Level: {{level}}</strong></p>
                </div>
                <div class="col-9">
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info" id="progress" role="progressbar" :style="{width: barWidth+'%'}"
                        :aria-valuenow="barWidth" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-center align-items-center">
              <div class="row">
                <div class="col-12">
                  <p><strong>About Ye</strong>: {{user.description}}</p>
                </div>
                <div class="col-12">
                  <p><strong>Ye Gym</strong>: {{user.gym}}</p>
                </div>
                <div class="col-12">
                  <p><strong>Ye Title</strong>: {{user.userType}}</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <Weather />
            </div>
          </div>
        </div>
        </div>
        </div>
        <div class="col-md-8 col-xs-12">
        <div class="row mt-1 mb-1">
            <div class="col-3"><router-link :to="{name: 'goal'}"><button class="btn btn-info">My Goals</button></router-link></div>
            <div class="col-3"><router-link :to="{name: 'workouts'}"><button class="btn btn-info">Workouts</button></router-link></div>
            <div class="col-3"><button class="btn btn-warning" @click="showModal">Make Post</button>
              <modal v-show="isModalVisible" :userId="user._id" :username="user.username" @close="closeModal"></modal>
            </div>
            <div class="col-3"> <button class="btn btn-success" @click="switchComponents('ProfileEdit')" :disabled="currentComp === 'ProfileEdit'">EditProfile</button></div>
            <div class="col-12 mb-2 mt-2">
              <component id="profile" :is="currentComp" :userId="user._id" :username="user.username"></component>
            </div> 
          </div>
        </div>
      </div>
      
     
       

    </div>
</template>
<script>
import ProfileEdit from "@/components/ProfileEdit.vue";
import GoalDetail from "@/components/GoalDetail.vue";
import Posts from "@/components/Posts.vue";
import modal from "@/components/MakePost.vue";
import Weather from "@/components/Weather.vue";

import { bus } from "../index.js";

export default {
  name: "profile",
  data() {
    return {
      currentComp: Posts,
      isModalVisible: false
    };
  },
  computed: {
    xp() {
      return this.$store.state.user.xp;
    },
    user() {
      return this.$store.state.user;
    },
    posts() {
      return this.$store.state.posts;
    },
    weightGoals() {
      return this.$store.state.weightGoals;
    },
    enduranceGoals() {
      return this.$store.state.enduranceGoals;
    },
    strengthGoals() {
      return this.$store.state.strengthGoals;
    },
    barWidth() {
      let width = this.xp;
      return width % 100;
    },
    level() {
      let level = 0;
      switch (Math.floor(this.xp / 100)) {
        case 0:
          level = 0;
          break;
        case 1:
          level = 1;
          break;
        case 2:
          level = 2;
          break;
        case 3:
          level = 3;
          break;
        case 4:
          level = 4;
          break;
        case 5:
          level = 5;
          break;
        case 6:
          level = 6;
          break;
        case 7:
          level = 7;
          break;
        case 8:
          level = 8;
          break;
        case 9:
          level = 9;
          break;
        case 10:
          level = 10;
          break;
        case 11:
          level = 11;
          break;
        case 12:
          level = 12;
          break;
        case 13:
          level = 13;
          break;
        case 14:
          level = 14;
          break;
        case 15:
          level = 15;
          break;
        case 16:
          level = 16;
          break;
        case 17:
          level = 17;
          break;
        case 18:
          level = 18;
          break;
        case 19:
          level = 19;
          break;
        case 20:
          level = 20;
          break;
      }
      return level;
    }
  },
  created() {
    bus.$on("switchComp", comp => {
      this.currentComp = comp;
    });

    if (!this.$store.state.user._id) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    switchComponents(comp) {
      bus.$emit("switchComp", comp);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  components: {
    ProfileEdit,
    GoalDetail,
    Posts,
    modal,
    Weather
  }
};
</script>
<style scoped>
.font-size {
  font-family: "Oldenburg", cursive;
}
.img-fluid {
  max-width: 70%;
}
.fade {
  opacity: 0.5;
}
/* .size {
  height: 50%;
} */
</style>