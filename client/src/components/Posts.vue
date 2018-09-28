<template>
<div class="posts">
        <div class="row d-flex justify-content-center">
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
             <div class="card-text">
               <small class="text-muted">
                 <p><span @click="commentVisible(post._id)" class="clickable">See Comments</span> |
                 <span @click="commentEditVisible(post._id)" class="clickable">Make A Comment?</span>
                 </p>
                <p><strong>Created</strong>: {{post.created}} | 
                <span class="clickable" @click="deletePost(post)"><i class="far fa-trash-alt"></i>
                </span></p>
                
                </small>
              </div>
            </div>
            <div v-if="commentEdit == post._id">
              <form @submit.prevent="makeComment(post._id)">
                <input class="form-control" type="text" placeholder="This Is SOOOOOO Great" v-model="description"/>
                <button type="submit" class="btn">Sumbit</button>
              </form>
            </div>
            </div>
              <Comment v-if="commentsVisible == post._id" :postId="post._id" />
            </div>
        </div>
</div>
</template>
<script>
import Comment from "@/components/Comment.vue";
export default {
  name: "posts",
  data() {
    return {
      description: "",
      commentEdit: "",
      commentsVisible: ""
    };
  },
  props: ["userId", "username"],
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
    },
    commentEditVisible(postId) {
      if (postId != this.commentEdit) {
        this.commentEdit = postId;
      } else {
        this.commentEdit = "";
      }
    },
    commentVisible(postId) {
      if (postId != this.commentsVisible) {
        this.commentsVisible = postId;
      } else {
        this.commentsVisible = "";
      }
    },
    makeComment(postId) {
      debugger;
      this.$store.dispatch("addComment", {
        postId: postId,
        comment: {
          postId: postId,
          description: this.description,
          author: this.username
        }
      });
      this.description = "";
    }
  },
  components: {
    Comment
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

