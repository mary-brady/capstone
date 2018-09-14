<template>
<div class="posts">
        <div class="row justify-content-center">
            <div v-for="post in posts" :key="post._id" class="col-6">
                <div class="card border-info">
            <div class="card-header">
            <h3>{{post.title}}</h3>
            </div>
            <div class="card-body">
                <p>{{post.description}}</p>
            </div>
            <div class="card-footer">
             <p class="card-text"> <small class="text-muted"><strong>Created</strong>: {{post.created}}</small></p>
            </div>
                </div>
            
                </div>
        </div>
</div>
</template>
<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>
