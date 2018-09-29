<template>
    <div class="row comment ">
        <div class="col-12 mb-2 mt-2 d-flex justify-content-center" v-for="comment in comments" :key="comment._id">
            <div class="card border-warning ma-w"> 
                <div class="card-body"><p>{{comment.description}}</p></div>
                <div class="card-text yellow">
                    <small class="text-muted">
                        <p class="mb-1 mt-1">{{comment.author}}</p>
                    </small>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
  name: "Comment",
  data() {
    return {
      commentId: ""
    };
  },
  mounted() {
    return this.$store.dispatch("getComments", this.postId);
  },
  computed: {
    comments() {
      return this.$store.state.comments[this.postId];
    }
  },
  methods: {},
  props: ["comment", "postId"]
};
</script>

<style>
.yellow {
  background-color: #ffc107;
}
.ma-w {
  max-width: 100%;
}
</style>
