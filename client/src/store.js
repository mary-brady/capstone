import Vue from 'vue';
import Vuex from 'vuex';
import Axios from "axios";
import router from "./router"

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000,
  withCredentials: true
})

let healthTip = Axios.create({
  baseURL: "https://healthfinder.gov/FreeContent/Developer/Search.xml?api_key=demo_api_key&CategoryID=17",
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    user: {},
    weight: [],
    endurance: [],
    strength: [],
    weightGoals: [],
    enduranceGoals: [],
    strengthGoals: [],
    posts: [],
    feed: [],
    tips: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setWeight(state, weight) {
      Vue.set(state, "weight", weight)
      // state.weight = weight;
    },
    setEndurance(state, endurance) {
      Vue.set(state, "endurance", endurance)
      //state.endurance = endurance;
    },
    setStrength(state, strength) {
      state.strength = strength;
    },
    setWeightGoals(state, data) {
      state.weightGoals = data
    },
    setEnduranceGoals(state, data) {
      state.enduranceGoals = data
    },
    setStrengthGoals(state, data) {
      state.strengthGoals = data
    },
    setPosts(state, posts) {
      state.posts = posts
      state.posts.forEach(posts => {
        posts.created = new Date(posts.created).toDateString()
      })
    },
    setFeed(state, feed) {
      state.feed = feed
      state.feed.forEach(feed => {
        feed.created = new Date(feed.created).toDateString()
      })
    },
    setTips(state, data) {
      state.tips = data.match( /[^\.!\?]+[\.!\?]+/g )
    }
  },
  actions: {
    //AUTH
    register({ commit, dispatch }, newUser) {
      auth.post("register", newUser).then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
        dispatch('getPosts', res.data._id)
      });
    },
    authenticate({ commit, dispatch }) {
      auth.get("authenticate").then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
        dispatch('getPosts', res.data._id)
      });
    },
    login({ commit, dispatch }, creds) {
      auth.post("login", creds).then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
        dispatch('getPosts', res.data._id)
      });
    },
    logout({ commit }) {
      auth.delete("logout").then(() => {
        commit("clearUser");
        router.push({ name: "login" });
      });
    },
    ///////Weight, Endurance, and Strength for Charts

    getEndurance({ commit }) {
      api.get('endurance')
        .then(stats => {
          commit('setEndurance', stats.data)
        })
    },
    addEndurance({ commit, dispatch }, enduranceData) {
      api.post('endurance', enduranceData)
        .then(stats => {
          dispatch('getEndurance')
        })
    },
    getWeight({ commit }) {
      api.get('weight')
        .then(stats => {
          commit('setWeight', stats.data)
        })
    },
    addWeight({ commit, dispatch }, weightData) {
      api.post('weight', weightData)
        .then(stats => {
          dispatch('getWeight')
        })
    },
    getStrength({ commit }) {
      api.get('strength')
        .then(stats => {
          commit('setStrength', stats.data)
        })
    },
    addStrength({ commit, dispatch }, strengthData) {
      api.post('strength', strengthData)
        .then(stats => {
          dispatch('getStrength')
        })
    },
    ///////Weight and Endurance for Goals

    getWeightGoals({ commit }) {
      api.get('weight-goal')
        .then(goal => {
          commit('setWeightGoals', goal.data)
        })
    },
    addWeightGoal({ commit, dispatch }, weightGoal) {
      api.post('weight-goal', weightGoal)
        .then(goal => {
          dispatch('getWeightGoals', goal.data)
        })
    },
    deleteWeightGoal({ commit, dispatch }, _id) {
      api.delete('weight-goal/' + _id)
        .then(res => {
          dispatch('getWeightGoals')
        })
    },
    getStrengthGoals({ commit }) {
      api.get('strength-goal')
        .then(goal => {
          commit('setStrengthGoals', goal.data)
        })
    },
    addStrengthGoal({ commit, dispatch }, strengthGoal) {
      api.post('strength-goal', strengthGoal)
        .then(goal => {
          dispatch('getStrengthGoals', goal.data)
        })
    },
    deleteStrengthGoal({ commit, dispatch }, _id) {
      api.delete('strength-goal/' + _id)
        .then(res => {
          dispatch('getStrengthGoals')
        })
    },
    getEnduranceGoals({ commit }) {
      api.get('endurance-goal')
        .then(goal => {
          commit('setEnduranceGoals', goal.data)
        })
    },
    addEnduranceGoal({ commit, dispatch }, enduranceGoal) {
      api.post('endurance-goal', enduranceGoal)
        .then(goal => {
          dispatch('getEnduranceGoals', goal.data)
        })
    },
    deleteEnduranceGoal({ commit, dispatch }, _id) {
      api.delete('endurance-goal/' + _id)
        .then(res => {
          dispatch('getEnduranceGoals')
        })
    },

    //USER PROFILE EDITS
    getUser({ commit }, userId) {
      auth.get('/' + userId)
        .then(res => {
          commit('setUser', res.data)
        })
    },
    updateName({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { name: profileUpdate.name })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },

    updateEmail({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { email: profileUpdate.email })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },

    updateAge({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { age: profileUpdate.age })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },

    updateGym({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { gym: profileUpdate.gym })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },

    updateDescription({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { description: profileUpdate.description })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },

    updateUserType({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { userType: profileUpdate.userType })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },
    //FEED STUFF
    getFeed({ commit }) {
      api.get('feed/')
        .then(res => {
          commit('setFeed', res.data)
        })
    },

    //posts
    getPosts({ commit }, userId) {
      api.get('posts/' + userId)
        .then(res => {
          commit('setPosts', res.data)
        })
    },
    addPost({ dispatch }, postData) {
      api.post('posts/', postData.postData)
        .then(res => {
          dispatch('getPosts', postData.userId)
        })
    }
  },
  getters: {
    enduranceChartData(state) {
      let data = state.endurance
      let chartData = {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Time',
            data: [],
            backgroundColor: "rgba(153,255,51,0.4)"
          }
          ]
        }
      }
      data.forEach(eData => {
        let myLabel = eData.created.split('T').join("-").substr(5, 5)
        chartData.data.labels.push(myLabel)
        chartData.data.datasets[0].data.push(eData.time)
      })
      return chartData
    },
    weightChartData(state) {
      let data = state.weight
      let chartData = {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Weight',
            data: [],
            backgroundColor: "rgba(153,255,51,0.4)"
          }
          ]
        }
      }
      data.forEach(eData => {
        let myLabel = eData.created.split('T').join("-").substr(5, 5)
        chartData.data.labels.push(myLabel)
        chartData.data.datasets[0].data.push(eData.weight)
      })
      return chartData
    }
  }
})
