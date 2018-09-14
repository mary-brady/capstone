<template>
    <div class="profile container-fluid">
        <div class="row mt-1 mb-1">
            <div class="col-12">
                <div class="navbar"></div>    
            </div>
        </div>
        <div class="row mt-1 mb-1">
            <div class="col-12">
                <h1>Hello, Mighty <strong>{{user.username}}</strong>!</h1>
            </div>
        </div>
        <div class="row mt-1 mb-1">
            <div class="col-6">
                <img src="//placehold.it/150x150" class="img-fluid" alt=""/>            
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col">
                        <p>Put v-for here for badges</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-1 mb-1">
            <div class="col-12">
                <h2 class="text-left">About You</h2>
                <p>{{user.description}}</p>
            </div>
        </div>
        <div class="row mt-1 mb-1">
            <div class="col-4"><p><strong>Level: 10</strong></p></div>
            <div class="col-8">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> 
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-1 mb-1">
            <div class="col-4"><button class="btn btn-primary">My Goals</button></div>
            <div class="col-4"><button class="btn btn-warning" @click="showModal">Make Post</button>
            <modal v-show="isModalVisible" :userId="user._id" @close="closeModal"></modal>
            </div>
            <div class="col-4"> <button  class="btn btn-primary" @click="switchComponents('ProfileEdit')" :disabled="currentComp === 'ProfileEdit'">Edit Profile</button></div>
        </div>
        <div class="row mt-1 mb-1"></div>
    <div>
        <h1>Your Posts</h1>
        <component id="profile" :is="currentComp" :userId="user._id"></component>
    </div>    

    </div>
</template>
<script>
import ProfileEdit from "@/components/ProfileEdit.vue";
import GoalEdit from "@/components/GoalEdit.vue";
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
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    bus.$on("switchComp", comp => {
      this.currentComp = comp;
    });
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
    GoalEdit,
    GoalDetail,
    Posts,
    modal
  }
};
</script>
<style scoped>
</style>
