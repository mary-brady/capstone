<template>
    <div class="profile container-fluid">
        <div class="row mt-1 mb-1 d-flex justify-content-center">
            <div class="col-5">
        <img src="../assets/image41.png" class="img-fluid" alt="health tracker logo">
      </div>
        </div>
        <div class="row mt-1 mb-1">
            <div class="col-12 ">
                <h1 class="font-size">Hello, Mighty <strong>{{user.username}}</strong>!</h1>
            </div>
        </div>
        <div class="row mt-1 mb-1">
            <div class="col-6">
                <img src="../assets/knight3.png" class="img-fluid" alt="" />
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                     <div class="col-4 mb-1 mt-1">
                        <img src="//placehold.it/50x50" class="img-fluid" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="row mt-1 mb-1">
            <div class="col-12">
                <h2 class="font-size">About You</h2>
                <p>{{user.description}}</p>
            </div>
        </div>
        <div class="row mt-1 mb-1">
            <div class="col-4">
                <p><strong>Level: {{level}}</strong></p>
            </div>
            <div class="col-8">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info" id="progress" role="progressbar" :style="{width: barWidth+'%'}"
                        :aria-valuenow="barWidth" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-1 mb-1">
             <div class="col-4"><router-link :to="{name: 'goal'}"><button class="btn btn-info">My Goals</button></router-link></div>
            <div class="col-4"><button class="btn btn-warning" @click="showModal">Make Post</button>
            <modal v-show="isModalVisible" :userId="user._id" :username="user.username" @close="closeModal"></modal>
            </div>
            <div class="col-4"> <button class="btn btn-info" @click="switchComponents('ProfileEdit')" :disabled="currentComp === 'ProfileEdit'">Edit
                    Profile</button></div>
        </div>
        <div class="row mt-1 mb-1"></div>
    <div>
        <component id="profile" :is="currentComp" :userId="user._id"></component>
    </div>    

    </div>
</template>
<script>
import ProfileEdit from "@/components/ProfileEdit.vue";
import GoalDetail from "@/components/GoalDetail.vue";
import Posts from "@/components/Posts.vue";
import modal from "@/components/MakePost.vue";
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
    modal
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
</style>