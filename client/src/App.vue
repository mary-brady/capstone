<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><strong>Y O F T</strong></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/">Home</router-link>
      </li>&nbsp; &nbsp; 
      <li class="nav-item">
        <router-link to="/login">Login</router-link>
      </li>&nbsp; &nbsp;
      <li class="nav-item">
        <router-link to="/profile">Profile</router-link>
      </li>&nbsp; &nbsp;
      <li class="nav-item">
        <router-link to="/goal">Goals</router-link>
        </li>
    </ul>
    <br>
    <button class="btn btn-outline-warning" @click="logout">Logout</button>
  </div>
</nav>
    <router-view />
    </div>
      </div>
</template>
<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "App",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  font-family: "Oldenburg", cursive;
  font-size: larger;
}
</style>