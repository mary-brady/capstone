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
             <p class="card-text"> <small class="text-muted"><strong>Created</strong>: {{post.created}} | <span class="clickable" @click="deletePost(post)"><i class="far fa-trash-alt"></i></span></small></p>
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
  },
  methods: {
    deletePost(post) {
      if (post.authorId == this.userId) {
      }
      this.$store.dispatch("deletePost", post);
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
.clickable:hover {
  cursor: pointer;
}
</style>

