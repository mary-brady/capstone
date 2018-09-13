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
    <div class="row">
      <div class="col-12">
        <h3>Feed</h3>
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

export default {
  name: "home",
  components: {
    modal
  },
  data() {
    return {
      isModalVisible: false
    };
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
