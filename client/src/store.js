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

export default new Vuex.Store({
  state: {
    user: {},
    weight: [],
    endurance: [],
    weightGoals: [],
    enduranceGoals: [],
    strengthGoals: [],
    posts: [],
    feed: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setWeight(state, weight) {
      state.weight = weight;
    },
    setEndurance(state, endurance) {
      state.endurance = endurance;
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
    }
  },
  actions: {
    //AUTH
    register({ commit }, newUser) {
      auth.post("register", newUser).then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
      });
    },
    authenticate({ commit }) {
      auth.get("authenticate").then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
      });
    },
    login({ commit }, creds) {
      auth.post("login", creds).then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
      });
    },
    logout({ commit }) {
      auth.delete("logout").then(() => {
        commit("clearUser");
        router.push({ name: "login" });
      });
    },
    ///////Weight and Endurance for Charts

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
    deleteStrengthGoals({ commit, dispatch }, _id) {
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
    deleteEnduranceGoals({ commit, dispatch }, _id) {
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
          console.log('feed res: ', res.data)
        })
    }
  }
})
