<template>
  <div class="login container">
    <div class="row d-flex justify-content-center">
      <div class="col-4">
        <img src="../assets/knight6.png" class="img-fluid" alt="health tracker logo">
      </div>
      <div class="col-12">
        <h1 class="font-size">Ye Olde Fitness Tracker</h1>
      </div>
    </div>
    <div class="row">
      <form v-if="loginForm" @submit.prevent="loginUser" class="col-12 d-flex justify-content-center">
        <div class="form-group">
          <input type="text" v-model="creds.username" placeholder="username" class="form-control mb-1 mt-1">
          <input type="password" v-model="creds.password" placeholder="password" class="form-control mb-1 mt-1">
          <button type="submit" class="btn btn-primary mb-1 mt-1">Login</button>
        </div>
      </form>
      <form v-else @submit.prevent="register" class="col-12 d-flex justify-content-center">
        <div class="form-group">
          <input type="text" v-model="newUser.name" placeholder="name" class="form-control mb-1 mt-1">
          <input type="text" v-model="newUser.username" placeholder="username" class="form-control mb-1 mt-1">
          <input type="email" v-model="newUser.email" placeholder="email" class="form-control mb-1 mt-1">
          <input type="password" v-model="newUser.password" placeholder="password" class="form-control mb-1 mt-1">
          <button type="submit" class="btn btn-primary mb-1 mt-1">Create Account</button>
        </div>
      </form>
      <div @click="loginForm = !loginForm" class="col-12">
        <div v-if="loginForm">
          <p>Don't have an account?</p> 
          <p class="link">Register here</p>
        </div>
        <div v-else>
          <p>Have an account?</p> 
          <p class="link">Login here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        username: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: "",
        username: ""
      }
    };
  },
  created() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "profile" });
    }
  },
  methods: {
    register() {
      debugger;
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>
<style>
.link {
  color: rgb(216, 202, 12);
}
.font-size {
  font-family: "Oldenburg", cursive;
}
</style>
