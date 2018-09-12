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
        <h3>Daily Quest</h3>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    toForm() {

    }
  }
}
</script>
