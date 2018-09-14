<template>
<div>
    <div class="row">
    <div class="col-6">
    <div v-for="post in feed" :key="post._id" class="card">
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
  name: "feed",
  computed: {
    feed() {
      return this.$store.state.feed;
    }
  }
};
</script>
