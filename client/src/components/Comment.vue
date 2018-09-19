<template>
    <div class="row comment ">
        <div class="col-12 mb-2 mt-2 d-flex justify-content-center" v-for="comment in comments" :key="comment._id">
            <div class="card border-warning ma-w"> 
                <div class="card-body"><p>{{comment.description}}</p></div>
                <div class="card-text yellow">
                    <small class="text-muted">
                        <p class="mb-1 mt-1">{{comment.author}}  |  {{numUp}} <i class="fas fa-crown" @click="editUp(comment._id)"></i>  |  {{numDown}} <i class="fas fa-skull" @click="editDown(comment._id)"></i></p>
                    </small>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
  name: "Comment",
  mounted() {
    return this.$store.dispatch("getComments", this.postId);
  },
  computed: {
    numUp() {
      return this.$store.state.comments[this.postId][0].numUp;
    },
    numDown() {
      return this.$store.state.comments[this.postId][0].numDown;
    },
    comments() {
      return this.$store.state.comments[this.postId];
    }
  },
  methods: {
    editUp(commentId) {
      let num = this.numUp;
      num++;
      this.$store.dispatch("editUp", {
        postId: this.postId,
        commentId: commentId,
        num: num
      });
    },
    editDown(commentId) {
      let num = this.numDown;
      num++;
      this.$store.dispatch("editDown", {
        postId: this.postId,
        commentId: commentId,
        num: num
      });
    }
  },
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
