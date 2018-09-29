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
        <div>
            <div class="card-text"> <small class="text-muted">
              <p><strong>Created By</strong>: {{post.author}} | {{post.created}}<span v-if="post.authorId == user._id" class="clickable" @click="deleteFeedPost(post)"> | <i class="far fa-trash-alt"></i></span></p>
              <p><span @click="commentVisible(post._id)" class="clickable">See Comments</span> |
                 <span @click="commentEditVisible(post._id)" class="clickable">Make A Comment?</span>
                 </p></small></div>
        </div>
    </div>
    <div v-if="commentEdit == post._id ">
              <form @submit.prevent="makeComment(post._id)">
                <input class="form-control" type="text" placeholder="This Is SOOOOOO Great" v-model="description"/>
                <button type="submit" class="btn">Sumbit</button>
              </form>
            </div>
      <Comment v-if="commentsVisible == post._id" :postId="post._id" />
</div>
    </div>
    </div>
    
</template>

<script>
import Comment from "@/components/Comment.vue";
export default {
  name: "feed",
  props: ["userId"],
  data() {
    return {
      description: "",
      commentEdit: "",
      commentsVisible: ""
    };
  },
  computed: {
    feed() {
      return this.$store.state.feed;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    makeComment(postId) {
      this.$store.dispatch("addComment", {
        postId: postId,
        comment: {
          postId: postId,
          description: this.description,
          author: this.user.username
        }
      });
      this.description = "";
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
    deleteFeedPost(post) {
      this.$store.dispatch("deleteFeedPost", post);
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
