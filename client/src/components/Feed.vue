<template>
<div>
    <div class="row">
    <div class="col-12 mt-2 mb-2" v-for="post in feed" :key="post._id">
    <div class="card border-info">
        <div class="card-header bg-light-blue">
            <h3 class="font-size">{{post.title}}</h3>
        </div>
        <div class="card-body ">
            <p>{{post.description}}</p>
        </div>
        <div >
            <p class="card-text"> <small class="text-muted"><strong>Created</strong>: {{post.created}}</small></p>
        </div>
    </div>
</div>
    </div>
    </div>
    
</template>

<script>
export default {
  name: "feed",
  computed: {
    feed() {
      return this.$store.state.feed;
    }
  }
};
</script>
<style scoped>
.font-size {
  font-family: "Oldenburg", cursive;
}

.bg-light-blue {
  background-color: #a0dee7;
}
</style>
