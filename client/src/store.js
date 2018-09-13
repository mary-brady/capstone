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
    endurance: []
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
    }



  }
})
