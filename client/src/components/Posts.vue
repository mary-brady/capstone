<template>
<div class="posts">
        <div class="row justify-content-center">
            <div class="col-12">
                <h1 class="font-size">Your Posts</h1>
            </div>
            <div v-for="post in posts" :key="post._id" class="col-xs-12 col-md-6 mb-2 mt-2">
                <div class="card border-info">
            <div class="card-header bg-light-blue">
            <h3 class="font-size">{{post.title}}</h3>
            </div>
            <div class="card-body ">
                <p>{{post.description}}</p>
            </div>
            <div>
             <p class="card-text"> <small class="text-muted"><strong>Created</strong>: {{post.created}}</small></p>
            </div>
                </div>
            
                </div>
        </div>
</div>
</template>
<script>
export default {
  name: "posts",
  props: ["userId"],
  computed: {
    posts() {
      return this.$store.state.posts;
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

