<template>
  <div class="home container">
    <div class="row">
      <div class="col">
        <h1 class="font-size">CAPSTONE</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <img src="">
        <router-link :to="{name: 'login'}">Sign Up/Log in</router-link>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-12">
        <h3>Feed</h3>
      </div>
      <div class="col-6">
        <Feed class="d-flex justify-content-center"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-primary" @click="showModal">Daily Quest</button>
        <modal v-show="isModalVisible" @close="closeModal" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import modal from "@/components/Quest.vue";
import Feed from "@/components/Feed.vue";

export default {
  name: "home",
  components: {
    modal,
    Feed
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  mounted() {
    this.$store.dispatch("getFeed");
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
