<template>
  <div class="home container">
    <div class="row d-flex justify-content-center">
      <div class="col-12">
        <h1 class="font-size mt-5">Ye Olde Fitness Tracker</h1>
      </div>
      <div class="col-6">
        <img src="../assets/knight6.png" class="img-fluid" alt="health tracker logo">
      </div>
      <div class="col-12">
        <h2 class="mb-5" v-if="quotes.length">"{{quote.quote}}"</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <img src="">
        <router-link :to="{name: 'login'}"><button class="btn btn-danger btn-lg">Sign Up/Log in</button></router-link>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-4 col-xs-12">
        <div class="row">
          <div class="col-12 mb-2 mt-2">
            <button type="button" class="btn btn-success" @click="showModal">Daily Quest</button>
            <modal v-show="isModalVisible" @close="closeModal" class="row" />
          </div>
          <div class="col-12  mb-2 mt-2 bg-yellow">
            <Weather />
          </div>
          <div class="col-12 d-flex justify-content-center">
            <div class="row">
              <div class="col-12">
                <h3 class="font-size">Health Tip</h3>
              </div>
              <div class="col-12">
                <Tips />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-xs-12">
        <div class="row">
          <div class="col-12">
            <h3 class="font-size">Feed</h3>
          </div>
          <div class="col-12">
            <Feed class="d-flex justify-content-center" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  import modal from "@/components/Quest.vue";
  import Feed from "@/components/Feed.vue";
  import Weather from "@/components/Weather.vue";
  import Tips from "@/components/HealthTip.vue";

  export default {
    name: "home",
    components: {
      Weather,
      modal,
      Feed,
      Tips
    },
    data() {
      return {
        isModalVisible: false
      };
    },
    mounted() {
      this.$store.dispatch("getWeather");
      this.$store.dispatch("getFeed");
      this.$store.dispatch("getQuote");
    },
    computed: {
      quotes() {
        this.setQuote(this.$store.state.quotes)
        return this.$store.state.quotes;
      }
    },
    methods: {
      setQuote(quotes) {
        let i = Math.floor(Math.random() * quotes.length)
        this.quote = quotes[i]
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  };
</script>

<style>
  .font-size {
    font-family: "Oldenburg", cursive;
  }

  .underline {
    border-bottom: 1px solid rgb(0, 0, 0);
    width: fit-content;
  }

  .bg-yellow {
    border: 2px solid #ffc107;
    border-radius: 10px;
  }
</style>